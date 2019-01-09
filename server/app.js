const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// enable cross-origin requests
app.use(cors());

// connect to mLab mongodb.
// to avoid complete mongodb setup I have configured the online db as a service
mongoose.connect('mongodb://pratap:pratap123@ds245523.mlab.com:45523/ecommerce-db');
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('Nodejs server listening on port 4000');
})