import mongoose from "mongoose";
import { database_name } from "../constant.js";

// when you define IIFE must start with ( ; ) , if there is any code exist before IIFE define.

// Approch 1 : direct put this IIFE on index.js

// ;(async ()=>{
//     try {
//         const connect = await mongoose.connect(`${process.env.MongoDB_URI}/${database_name}`)
//     } catch (error) {
//         console.log("error=>",error)
//         throw error;
//     }
// })();

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MongoDB_URI}/${database_name}`);
        // console.log(` mongoDB connected successfully !`)
    } catch (error) {
        console.log("mongoDb_connection_error:",error)
        process.exit(1);
        // throw error
    }
}
export default connectDb;