# ecommerce-react-app



## Server
A simple graphql server with express. This server will connect to the mLab mongodb connection. So will need internet connection while running the server.

# to start server
Navigate to the server directory
/> cd server
Run the below command to start server at port 4000.
/> nodemon app

## Client
Bootstrapped a create-react-app to generate initial source code files. Than I added graphql client to make the queries from UI. 

# to start Client
Navigate to the client directory
/> cd client
Run the below command to start the client at port 3000
/> npm run start



## UI workflow screenshots
- screenshots are present in images folder of the root directory


## UI
When we add a new card by going the Admin Portal. The newly created item will appear in Customer interface window.


## Workflow
-  Home screen or `Ecommerce Customer Interface` will show all the product cards

-  Click on `Admin Portal` button to navigate to the Admin Customer Interface.

- Add name and category. select appropriate brand and click `+` button to add this to the product list.

- Click on the `Back` button  to come to home page.

- Presently brands are added manually using graphiql ui.
http://localhost:4000/graphql?
