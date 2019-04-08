//import wht i need to resolve for the task query
import {tasks} from './tasks'

//define what to do it is related to the schema

export const resolvers = {
    //when execute the query for the hello definition
    //the function will return the message
    Query: {
        hello: ()=>{
            return 'Hola desde Graphql'
        },
        greet(root, { name }){
            console.log(args.name);
            return `Hello ${name}`;

        },
        tasks(){
            return tasks;
        }
    }

};