
//glue for the resolver
import {makeExecutableSchema} from 'graphql-tools'
import { resolvers } from './resolvers'

//what to query / mutation forchanges
const typeDefs = `
    # the schema allows the following query:
    type Query {
        hello: String 
        greet(name:String!): String
        # returns list of tasks
        tasks: [Task]
        # returns list of users
        Users: [User]
    }

    # defines the task type for returning queries
    type Task {
        id : ID
        name: String!
        description: String
        number: Int

    }

    # defines the taskinput type for passing input information
    input TaskInput{
        name: String!
        description: String
        number: Int

    }
    
    # this schema allows the following mutation:
    type Mutation {
        createTask (input: TaskInput): Task
        # CRUD actions
        createUser(input: UserInput): User
        deleteUser(id:ID):User
        updateUser(id:ID, input: UserInput): User
    }

    # defines the User type for queries
    type User {
        id:ID
        firstname: String!
        lastname: String!
        age: Int!
    }

    # defines the userinput type for updating/creation actions
    input UserInput{
        firstname: String!
        lastname: String!
        age: Int

    }
    `;


export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

