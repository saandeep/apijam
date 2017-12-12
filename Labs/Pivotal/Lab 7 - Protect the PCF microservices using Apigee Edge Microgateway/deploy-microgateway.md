1. Deploy Edge Microgateway as PCF App

	Follow the instructions from this [Apigee Edge Microgateway for Cloud Foundry Page](https://github.com/apigee/pivotal-cf-apigee/tree/master/microgateway-addons)
	
	Or you can follow these instructions from the lab (The Lab still has all the details of what each of the commands) 
	
	```
	git clone https://github.com/apigee-internal/microgateway
	cd microgateway
	npm install .
	edgemicro configure -o $APIGEE_ORG -e $APIGEE_ENV -u {apigee-username}
	cp ~/.edgemicro/$APIGEE_ORG-$APIGEE_ENV-config.yaml config/ 
	vi config/$APIGEE_ORG-$APIGEE_ENV-config.yaml 
	
	add cloud-foundry-route-service to the sequence - like
	edgemicro:
	  port: 8000
	  max_connections: 1000
	  ...
	  plugins:
	    sequence:
	      - oauth
	      - cloud-foundry-route-service
	
	Exit and save (:wq)
	
	vi manifest.yml
	---
	applications:
	- name: {your_initials}-edgemicro-app
	  memory: 512M
	  instances: 1
	  host: {your_initials}-edgemicro-app
	  path: .
	  buildpack: nodejs_buildpack
	  env:
	    EDGEMICRO_KEY: 'UPDATE THIS'
	    EDGEMICRO_SECRET: 'UPDATE THIS'
	    EDGEMICRO_CONFIG_DIR: '/app/config'
	    EDGEMICRO_ENV: 'UPADATE WITH APIGEE ENV'
	    EDGEMICRO_ORG: 'UPADATE WITH APIGEE ORG'
	    NODE_TLS_REJECT_UNAUTHORIZED: 0
	
	Exit and save (:wq)
	
	cf push
	
	```