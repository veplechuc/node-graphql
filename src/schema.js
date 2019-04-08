
//glue for the resolver
import {makeExecutableSchema} from 'graphql-tools'
import { resolvers } from './resolvers'

//what to query / mutation forchanges
const typeDefs = `
    # the schema allows the following query:
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

    input TaskInput{
        name: String!
        description: String
        number: Int

    }
    
    # this schema allows the following mutation:
    type Mutation {
        createTask (input: TaskInput): Task
    }

   
    `;


export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

