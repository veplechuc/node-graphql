//import wht i need to resolve for the task query
import {tasks} from './tasks'

import User from "./models/User";

//define what to do it is related to the schema

export const resolvers = {
    //when execute the query for the hello definition
    //the function will return the message
    Query: {
        hello: ()=>{
            return 'Hola desde Graphql'
        },
        greet(root, { name }){
            console.log(name);
            return `Hello ${name}`;

        },
        tasks(){
            return tasks;
        },
        //resolver query for users
        async Users(){
            return await User.find();
        }

    },    
      
    Mutation: {
            createTask(root, { input }){
                input.id = tasks.length;
                tasks.push(input);
                return input;
            },

            //creates an user
            async createUser(root, { input }){
                const newUser = new User(input);
                await newUser.save();
                return newUser;
            },
            //delte info passing the id
            async deleteUser(root, id){
                return await User.findByIdAndDelete(id);
            },
            //update user information
            //{ new : true} add this in order to get the modified data as a response
            async updateUser(root, { id, input}){
                return await User.findByIdAndUpdate(id, input, { new: true})
            }


        }
};