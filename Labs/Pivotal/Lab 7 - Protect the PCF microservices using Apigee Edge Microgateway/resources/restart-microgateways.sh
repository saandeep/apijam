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

