This is some boiler for a react and redux front end application.

It's compatible with two other repos of mine, java-api-boiler or node-api-boiler, for java and react full stack.


######IF YOU DO NOT WANT TO USE THE JAVA BACKEND BOILER#######
From the root of the directory
1. Run the cmd node tools/createMockDb.js
--this will create a file with mock data called db.json
2. Start the node server with node tools/apiServer.js
--check that the data is available by navigating to localhost:8080/people
3. Run the react app with npm start. On load you'll see the last names of each person as a list.
