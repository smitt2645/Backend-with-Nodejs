import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import apiError from '../utils/apiErrorHandler.js';
import dotenv from "dotenv"

dotenv.config({
    path: "../.env",
}); // Load env variables from .env

cloudinary.config({
    cloud_name: process.env.Cloudinary_Cloud_name,
    api_key:process.env.Cloudinary_API_Key,
    api_secret:process.env.Cloudinary_API_Secret,
})

const uploadOnCloudinary = async (filePath) => {
    try {
        if(!filePath) return;

    const res = await cloudinary.uploader.upload(filePath,{resource_type:"auto"},(err,res)=>{
        if(err) return console.log("Error in uploading file on cloudinary", err);
        console.log("File uploaded successfully on cloudinary", res);
        });
        return res;
    } catch (error) {
        fs.unlinkSync(filePath) // remove the file from locally temp file!
        console.log("File Upload Failure!",error);
        throw new apiError(500,"File Upload Failure!",[error.message]);
    }
}
export {uploadOnCloudinary}