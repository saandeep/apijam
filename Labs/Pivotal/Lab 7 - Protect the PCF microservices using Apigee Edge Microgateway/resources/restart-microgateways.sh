#You should be logged in as amdin to run this script
#This script resarts two edge microgateway apps, listening to the same endpoint
#This will help when you are in a workshop and the attendees are constantly pushing Microgateway api proxies.
#Restarting the microgateways will automatically pull the changes
mg1=system-edgemicro-app
mg2=system-edgemicro-app-2
cf target -o system -s system

while true
do
	echo "Restarting mg1:"$mg1
	cf restart $mg1
	echo "Restarting mg2:"$mg2
	cf restart $mg1
	echo "sleeping for 30s"
   	sleep 30s
   	
done

