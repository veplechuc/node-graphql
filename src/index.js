
// import is possible because of babel
import express from "express";
// from docs - middleware
import graphqlHTTP from "express-graphql";
//import the all module
import schema from './schema'


const app = express();

// creates a route /graphql to be able to  get the tool
//route returns a tool
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});