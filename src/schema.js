
//glue for the resolver
import {makeExecutableSchema} from 'graphql-tools'
import { resolvers } from './resolvers'

//what to query
const typeDefs = `
    type Query {
        hello: String 
        greet(name:String!): String
        tasks: [Task]
    }

    type Task {
        id : ID
        name: String!
        description: String
        number: Int

    }

    `;


export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

