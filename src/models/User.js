import { Schema, model} from "mongoose";

//new schema for mongo not for graphql

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: String,
    age: Number
})

export default model('User', userSchema)