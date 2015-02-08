#!/bin/bash
git clone https://github.com/SkymindIO/jcuda-windows64
cd jcuda-windows64
for i in {1..5}
do
	echo "Welcome $i times"
done
echo "Successfully executed the shell script"