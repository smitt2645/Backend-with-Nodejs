import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.js";
const app = express();

// environment variable setup ! 
dotenv.config({
    path:"./.env"
})

// Database connection !
connectDb();

const Port = process.env.PORT || 8003;
// app.route("/",)

// Server Setup: 
app.listen(Port,()=>{
    console.log(`your app is listening on http://localhost:${Port}`)
})