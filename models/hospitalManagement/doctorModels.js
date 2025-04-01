import mongoose, { Model, Schema } from "mongoose";


export const doctorSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    salary:{
        type:mongoose.Schema.Types.Decimal128,
        required:true,
        min:mongoose.Types.Decimal128.fromString("0.01") // prevent negative value !
    },
    qualification:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        default:0        
    },
    worksInHospitals:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }]
},{timestamps:true})

export const doctorModel = new Model("Doctor",doctorSchema)
