import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Environment variable setup
dotenv.config({
    path:"./.env",
});

// Application setup !
const app = express();

// Allow cors with options !
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
    // allowedHeaders:["content-type","Authorization"],
}));
const port = process.env.PORT || 3000 
app.listen(port,()=>{
    console.log(`your server is listening on http://localhost:${port} `)
})