#! /bin/bash


# Run  5 measurements
for i in {1..1}
do

	# Loop through each .json file in the scenarios directory
	for filepath in /home/jason/memoire/simulator/scenarios_2025/*.json
	do

		# Extract the filename from the path
		filename=$(basename "$filepath")

		# Replace the line in the usage_scenario.yml file : we want the scenario.py to be run with the scenario.json in this loop
		sed -i "s/^\([[:space:]]*\)python -u src\/scenario.py.*/\1python -u src\/scenario.py scenarios_2025\/$filename/" /home/jason/memoire/simulator/entrypoint.sh
        
        # Script to launch the containers and open the window imediately
        xtigervncviewer localhost::5900 &
        docker compose up
        docker compose down
	    
	done
done


#speaker-test -t sine -f 500 -l 1