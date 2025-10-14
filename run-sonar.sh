#!/bin/bash
cd /home/coder/project/workspace/.github/workflows
mvn sonar:sonar \
  -Dsonar.sources=/home/coder/project/workspace/reactapp/src,/home/coder/project/workspace/springapp/src/main \
  -Dsonar.java.binaries=/home/coder/project/workspace/springapp/target/classes \
  -Dsonar.token=${SONAR_TOKEN}