import mongoose from "mongoose";
import {dbname} from "../constant.js";

const connectDB = async () => {
    try{
        const connection = await mongoose.connect(`${process.env.MONGO_URI}/${dbname}`);
        console.log(`MongoDB connected: ${connection.connection.host}`);
    }catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

export default connectDB;