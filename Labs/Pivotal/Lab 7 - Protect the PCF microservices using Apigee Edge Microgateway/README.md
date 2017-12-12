# Apigee Edge Service Broker Microgateway Plan: Secure a CF App

*Duration : 45 mins*

*Persona : API Team*

# Use case

You have an API Created in Pivotal Cloud Founday. You want to proxy it through Apigee Edge

# How can Apigee Edge help?

The [Apigee Edge Service Broker for PCF](http://docs.pivotal.io/partners/apigee/index.html) enables developers to manage APIs for their PCF apps through the Apigee Edge management console.

This lab describes how to push a sample app to Pivotal Cloud Foundry (PCF), create an Apigee Edge service instance, and bind the application to it. After binding the application to the Apigee Edge service instance, requests to the app will be forwarded to an Apigee Edge API proxy for management. Its the same lab as listed in [PCF documentation](http://docs.pivotal.io/partners/apigee/proxying.html)

# Pre-requisites

* You have [installed and configured](http://docs.pivotal.io/partners/apigee/installing.html) the Apigee Edge Service Broker for PCF tile. Or you got a set of credentials from your instructor that has access to a PCF environment with Apigee Edge Service Broker for PCF tile. 

* You have installed [cf CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html).

* You have an Apigee account and have access to an Apigee org

# Instructions

Before you begin, you will need to get the following from your PCF instance or receive them from your instructor.

YOUR-SYSTEM-DOMAIN: This the the domian/hostname where the PCF is deployed. If you are using self signed certs for this endpoint, you will have to use `--skip-ssl-validation` for some of the commands

PCF-USER-NAME: PCF username

PCF-PASSWORD: PCF Password

PCF_ORG: The instance of your PCF deployment. If you are familiar with PCF, you may just refer to this as ORG. Since Apigee also as a concept of ORG, we will call this PCF_ORG for this lab

PCF_SPACE: An org can contain multiple spaces. This is the space you will pick for this lab

PCF_API: PCF API Endpoint

PCF_DOMAIN: PCF Domain for your apps. 

1. Setup Environment Variables
   ```
   export PCF_API={CF-API}
   export PCF_ORG={PCF ORG}
   export PCF_SPACE={PCF SPACE}
   export PCF_DOMAIN={PCF DOMAIN}
   export APIGEE_ORG={org-name}
   export APIGEE_ENV={env-name}
   export EDGE_MICRO_ENDPOINT={endpoint-of-edge-microgateway}
   ```

2. Deploy a sample App to PCF

	Login to the PCF Environment if not already logged in
	
    ```
    cf api $PCF_API  --skip-ssl-validation

    cf login
    ```
    Enter the **PCF-USER-NAME** and **PCF-PASSWORD**
    Select the **PCF_ORG** and **PCF_SPACE**

    You can also select the org and space through the following command
    ```
    cf target -o $PCF_ORG -s $PCF_SPACE
    ```

    We will use the sample hello world node.js app from this [git repo](https://github.com/apigee/pivotal-cf-apigee)

    ```
    git clone https://github.com/apigee/pivotal-cf-apigee.git

    cd pivotal-cf-apigee/sample-api
    ```
    
    Open manifest.yml file and change the following paramaters
    **name**: {your_initials}_helloapi_mg
    **host**: {your_initials}_helloapi_mg
    
    ```
    vi manifest.yml
    name: {your_initials}_helloapi_mg
    host: {your_initials}_helloapi_mg
    ```

    export hostname
    ```
    export PCF_APPHOST={your_initials}_helloapi_mg
    ```

    Push the API to PCF
    
    ```
    cf push
    ```
    
    On successful push, you should be able to see your app with the following command
    
    ```
    cf apps
    ```
    
    You should be able to send a request, by copy/pasting the URL under the urls section of your app, to a new browser tab. `https://{URL OF YOUR APP}`
    
    ```
    cf apps
    Getting apps in org Apigee / space {PCF_SPACE} as {PCF_USER}...
    OK

    name              requested state   instances   memory   disk   urls
    {your_initials}_helloapi_mg   started           1/1         128M     1G     {your_initials}_helloapi_mg.apps.pcf.apigeek.net
	i.e http://{your_initials}_helloapi.{PCF DOMAIN}/ in the above example
	```
	
	3. Login to Apigee, through Apigee's SSO

    If you are on Linux/mac, the following commands should give you a valid token that you can use for the next step
    
    ```
    curl https://login.apigee.com/resources/scripts/sso-cli/ssocli-bundle.zip -o "ssocli-bundle.zip"
    tar xvf ssocli-bundle.zip
    ./get_token
	<<export the token to a environment variable>>
	export APIGEE_TOKEN={token}
    ```
    
    
    If you are on windows/or want to get the access token manually, you have to issue an HTTP call, similar to this
    
    ```
    curl -H 'Content-Type:application/x-www-form-urlencoded;charset=utf-8' -H 'Accept: application/json;charset=utf-8' -H 'Authorization: Basic ZWRnZWNsaTplZGdlY2xpc2VjcmV0'  -X POST https://login.apigee.com/oauth/token -d 'username=*****&password=****&grant_type=password'
    ```
    
    You will use the access_token from the JSON 
    
3. Creating an Apigee Edge Service Broker binding for your app
    We will now add apigee-edge service to our PCF_ORG.
    First lets make sure that apigee-edge tile has been enabled for this org
    ```
    cf marketplace
    ```
    This should show apigee-edge as one of the available services.
    ```
    cf create-service apigee-edge microgateway apigee_mg_service -c '{"org":"'$(echo  $APIGEE_ORG)'","env":"'$(echo  $APIGEE_ENV)'"}'
    ```
    
    To check that the service has been enabled, try the following command
    
    ```
    cf service apigee_mg_service
    ```
    Now we will bind the app (Our Node.js app that servers the Hello API) to an Apigee ORG with the following command.
	
    ```
    cf bind-route-service $PCF_DOMAIN apigee_mg_service --hostname $PCF_APPHOST -c '{"org":"'$(echo  $APIGEE_ORG)'","env":"'$(echo  $APIGEE_ENV)'", "bearer":"'$(echo $APIGEE_TOKEN)'","micro":"'$(echo $EDGE_MICRO_ENDPOINT)'", "action":"proxy bind", "protocol":"http"}'
    ```
	
	


4. Testing the API
    Login to [https://apigee.com/edge](https://apigee.com/edge)
    Go to API Proxies
    You should see an API Proxy created by the PCF Service Broker- with the following name `edgemicro_cf-{your_initials}_helloapi.YOUR-SYSTEM-DOMAIN`
	
	You will also see `edgemicro-auth` API Proxy. Where requests are sent to for authentication. As edge microgateway does validation, you can see the validation calls coming to this API Proxy
    Select the API and select `TRACE` tab on the top right
    Click on the `Start Trace Session`, the green button on the top left
	Send a request to the same endpoint, as you did in step 2 
	
	```
	curl https://{URL OF YOUR APP}"
	```
      
    If you forgot the URL OF YOUR APP, you can get if through the following command (the output will have a urls section corresponding to your app)
    ```
    cf apps
    ```
    You should see an validation error as edge micro is checking for security! 
	
	To get an API Key, go to Management UI, create an API Product add `edgemicro-auth` and `edgemicro_cf-{your_initials}_helloapi.YOUR-SYSTEM-DOMAIN` API Proxies to it. Create an APP and get a Key. 
	
	Come back to CLI restart the edge micro app, for it to get the latest API Products.
	
	```
	cf apps
	cf restart {your_initials}-edgemicro-app
	

	curl https://{URL OF YOUR APP} -H "x-api-key: {api-key}"

	```
	
	
	

	
	*Congratulations!*...
    What does this mean
    - You have analytics across all your APIs, created through PCF
    - You can add authentication, traffic management and few more directly from your cf CLI, without logging into Apigee
    - When you do that the business teams can create API Products, and scale the consumption
    - If you have swagger spec for this API, you can enable your developers to access these APIs through smartdocs
    
5. Where to from here
    We will add more labs on Apigee PCF Usecases. 
    - You can add authentication, traffic management and few more directly from your cf CLI, without logging into Apigee
    - You can choose to have these APIs proxied by Apigee Edge Microgateway, instead of the central runtime
    - You can choose to decorate your App, with the Apigee Edge Microgateway meta build pack
    - If you are using Apigee Private cloud, you can choose to manage the private cloud through PCF's BOSH


# Earn Extra-points

Try deploying the PCF App to a diffrent environment.

# Quiz

1. What are different ways in which Apigee can help apps created/deployed in PCF?


# Summary

In this lab you have added API Management to an API created in PCF.

# References

* Link to Apigee docs page

    * OAuth 2.0: Configuring a new API proxy [http://docs.apigee.com/api-services/content/understanding-default-oauth-20-configuration ](http://docs.apigee.com/api-services/content/understanding-default-oauth-20-configuration)

    * Secure an API with OAuth [http://docs.apigee.com/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](http://docs.apigee.com/tutorials/secure-calls-your-api-through-oauth-20-client-credentials) 

* [Link](https://community.apigee.com/topics/oauth+2.0.html) to Community posts and articles with topic as "OAuth 2.0" 

* Search and Revoke tokens - [https://community.apigee.com/articles/1571/how-to-enable-oauth-20-token-search-and-revocation.html](https://community.apigee.com/articles/1571/how-to-enable-oauth-20-token-search-and-revocation.html)

# Rate this lab

How did you like this lab? Rate [here](https://docs.google.com/forms/d/e/1FAIpQLSf048tEsGEfy6f6B0dd3ujg5MrkBgmcXKf9zVzgIubHtTEwnw/viewform?c=0&w=1).

