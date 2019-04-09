
// import is possible because of babel
import express from "express";
// from docs - middleware
import graphqlHTTP from "express-graphql";
//import the all module
import schema from './schema'

import { connect } from "./databse";


const app = express();

//call connect function from database.js
connect();

// creates a route /graphql to be able to  get the tool
//route returns a tool
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    //para pasar data entre los resolvers
    context: {

    }
}));


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});