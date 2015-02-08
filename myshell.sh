#!/bin/bash
git clone https://github.com/SkymindIO/nd4j
cd nd4j
for i in 'seq 1 5';
do
	echo $i
done
echo "Successfully executed the shell script"