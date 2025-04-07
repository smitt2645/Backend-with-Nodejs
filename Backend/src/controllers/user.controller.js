import {asyncHandler}  from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"User Registered Successfully!",code:"Ok"})
})

const loginUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Logged In Successfully!",code:"Ok"})
})

export {registerUser,loginUser}