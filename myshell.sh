#!/bin/bash
git clone https://github.com/SkymindIO/nd4j
cd nd4j
mvn clean install -DskipTests -Dmaven.javadoc.skip=true
echo "Successfully executed the build script"