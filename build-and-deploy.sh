#!/bin/bash

echo "Building Spring Boot Backend..."
cd springapp
mvn clean package -DskipTests
cd ..

echo "Building React Frontend..."
cd reactapp
npm run build
cd ..

echo "Build completed successfully!"
echo "Backend JAR: springapp/target/springapp-0.0.1-SNAPSHOT.jar"
echo "Frontend Build: reactapp/build/"