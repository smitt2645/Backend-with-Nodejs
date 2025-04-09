import {asyncHandler}  from "../utils/asyncHandler.js";
import {apiResponse} from "../utils/apiResponseHandler.js"
import apiError from "../utils/apiErrorHandler.js"
import { UserModel } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"

const registerUser = asyncHandler(async(req,res)=>{
    // logical steps for this controller!

    // get details from front-end!
    // check user is already exist ot not through email or username!
    // validate password and email and username !
    // hash password before save into database!
    // upload image in cloudinary !
    // save user into database!
    // remove password and refreshtoken from the response!
    // send res to client side!
    
    const {username,password,fullName,email,coverImage,avatar} = req.body;

    // this function check that values is exist or not and value's type must be string and do not empty as well!
    // const checkIsEmpty = (val) => !val || typeof val !== "string" || val.trim() === ""
   
    const checkIsEmpty = (val) => val === undefined || val === null || (typeof val !== "string" && val.trim() === "");
      
    const fieldsCheck = checkIsEmpty(username) || checkIsEmpty(email) || checkIsEmpty(password);
 
    if(fieldsCheck){
        throw new apiError(404,"username or password or email is required! ,Please verify once that are fields contains empty string!")
    }

    console.table([username,password,email])

    // if user already exist so send error!
    const isUserAlreadyExist = await UserModel.findOne({
        $or:[{email},{username}]   
    })
    
    if(isUserAlreadyExist){
        throw new apiError(404,"User already exist with this email or username!")
    }

    // get file from client side and upload into cloudinary !
    const avatarPath = req.files?.avatar[0]?.path;
    const coverImagePath = req.files?.coverImage[0]?.path;
    console.log("avatarPath===>>>",avatarPath)
    console.log("coverImagePath===>>>",coverImagePath)
    
    if(!avatarPath){
        throw new apiError(404,"avatar is required!")
    }
    // New user creation!

    const cloudinaryAvtarFilePath = await uploadOnCloudinary(avatarPath)
    const cloudinaryCoverImageFilePath = await uploadOnCloudinary(coverImagePath)
    console.log(cloudinaryAvtarFilePath,"cloudinaryAvtarFilePath")

    const newUser = {
        username:username.toLowerCase(),
        password,
        fullName,
        email,
        avatar : cloudinaryAvtarFilePath.url || "",
        coverImage : cloudinaryCoverImageFilePath.url || "",
    }

    if(Object.keys(newUser).length === 0){
        throw new apiError(404,"User data is empty!")
    }

    const user = await UserModel.create(newUser)
    const finalUser = await UserModel.findById(user._id).select("-password,-refreshtoken")
    if(!finalUser){
        throw new apiError(404,"User not created!")
    }

    res.status(200).json(new apiResponse("User Registered Successfully!",200,finalUser))
})

const loginUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Logged In Successfully!",code:"Ok"})
})

export {registerUser,loginUser}