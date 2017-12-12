# Lab 1 - API Design, Developement - Build a microservice on PCF from an OpenAPI Specification

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

**Important** - Click on this link to get the environment variables and login credentials you need for the next step (The snippet below is a template and does not contain the actual variables)

If you have an issue retrieving or using the environment variables, ask your instructor.  If you’re completing this lab self-paced, reach out to Edgepartners@google.com.

Here is a brief description of the parameters: 

PCF_API: The API endpoint for your PCF Instance
PCF_ORG/PCF_SPACE: The environment where you want to deploy your sample app
PCF_DOMAIN: Domain for all the routes created in your PCF Environment
APIGEE_ORG/APIGEE_ENV: Details of the Apigee environment where your Proxies are deployed


0. Setup Environment Variables
   ```
   export PCF_API={CF-API}
   export PCF_ORG={PCF ORG}
   export PCF_SPACE={PCF SPACE}
   export PCF_DOMAIN={PCF DOMAIN}
   export APIGEE_ORG={org-name}
   export APIGEE_ENV={env-name}
   ```

1. Login to the PCF Environment
    Open Shell (CLI for windows). CD to your working directory

    ```
    cf api $PCF_API  --skip-ssl-validation

    cf login
    ```
    Enter the **PCF-USER-NAME** and **PCF-PASSWORD**
    Select the **PCF_ORG** and **PCF_SPACE**

    Once you login, you can also select the org and space through the following command	
    ```
    cf target -o $PCF_ORG -s $PCF_SPACE
    ```


2. Deploy a sample App to PCF
    Download the sample employee api from the [resources folder](./resources/employees-api.zip)
	The sample code for this API has been generated from the [following spec](http://playground.apistudio.io/070cde0a-44f7-4e2c-8085-6e1020db7baf/spec), though [swagger codegen](https://github.com/swagger-api/swagger-codegen) (sample command swagger-codegen generate -i ./employees-oas.yaml -l nodejs-server -o ./)

    Unzip the employees-api.zip folder. Open terminal/command line and point to the employees-api folder that you extracted.
    
    Open manifest.yml file and change the following paramater - update this paramater with {your_initials} 
    **name**: YOUR_INITIALS-employees-api
    
    ```
    vi manifest.yml
    name: YOUR_INITIALS-employees-api
    ```

    export hostname
    ```
    export PCF_APPHOST={your_initials}-employees-api
    ```

    Push the API to PCF
    
    ```
    cf push
    ```
    
    On successful push, you should be able to see your app with the following command
    
    ```
    cf apps
    ```
    
    
	


4. Testing the API
    You should be able to send a request, by copy/pasting the URL under the urls section of your app, to a new browser tab. `https://{URL OF YOUR APP}`
    
    ```
    cf apps
    Getting apps in org Apigee / space {PCF_SPACE} as {PCF_USER}
    OK

	   name              requested state   instances   memory   disk   urls
	   sm-employees-api   started           1/1         128M     1G     sm-employees-api.apps.apigee-demo.net
	   
	   i.e http://{your_initials}_employees-api.{PCF DOMAIN}/ in the above example
    ```
    
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

