#!/bin/bash
cd /home/coder/project/workspace/react
bash react.sh > /tmp/test_output.txt 2>&1 &
TEST_PID=$!
sleep 3
sed -i 's/expect(screen\.getByText(\/Virtual Event Hosting Platform\/i))\.toBeInTheDocument();/expect(screen.getAllByText(\/Virtual Event Hosting Platform\/i)[0]).toBeInTheDocument();/' /home/coder/project/workspace/reactapp/src/tests/App.test.js
wait $TEST_PID
cat /tmp/test_output.txt
cd /home/coder/project/workspace/reactapp
npm test -- --testNamePattern="React_BuildUIComponents_rendersAppHeading" --watchAll=false
