#!/bin/sh

while true :; do

	echo "|------------------|"
	echo "|                  |"
	echo "|   Spring  Boot   |"
	echo "|                  |"
    for number in 3 2 1
    do
		echo "|      In $number...     |"
        sleep 1
    done
	echo "|                  |"
	echo "|------------------|"
	
	java -jar Cars-1.0.1.jar
	
	done
	
exit 0
