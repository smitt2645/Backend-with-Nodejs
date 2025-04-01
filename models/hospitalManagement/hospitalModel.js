import mongoose, { Model, Schema } from "mongoose";

export const hospitalSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
        required:true
    },
    addressLine2:{
        type:String,
    },
    city:{
        type:String,
        required:true
    },
    pinCode:{
        type:String,
    },
    specialization:[
        {
            type:String
        }
    ],
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Patient"
        }
    ]
},{timestamps:true})

export const hospitalModel = new Model("Hospital",hospitalSchema)
