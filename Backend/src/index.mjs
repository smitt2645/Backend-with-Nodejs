import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/user.routes.js";

// Server Setup!
const app = express();

// set limit that we will accept in json from client-side or browser in api req!
app.use(express.json({ limit: "20kb" }));

// Url encoded ! eg. if space so => %20 , it is for url!
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

// set or remote Cookie on client side in cookie!
app.use(cookieParser());

// allowed origin!
app.use(
  cors({
    origin: "*", // for production we can define specific origin to allow reqest on server!
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

// environment variable setup !
dotenv.config({
  path: "./.env",
});

// static public folder!
app.use(express.static("public"));

// import routes!
app.use("/api/v1/users", userRouter);

// Database connection !
const Port = process.env.PORT || 8003;
connectDb()
  .then((log) => {
    app.listen(Port, () => {
      console.log(`your app is listening on http://localhost:${Port}`);
    });
    console.log(" mongoDB connected successfully!");
  })
  .catch((err) => console.log(" mongo db connection error, ERROR :", err));
