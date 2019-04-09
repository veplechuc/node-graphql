import mongoose from "mongoose";
export async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/nodegraphql',  {
            useNewUrlParser:true
        });    
        console.log('>>>> conectado');    
    } catch (error) {
        console.log(error);        
    }
}

