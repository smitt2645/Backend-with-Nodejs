import mongoose, { Model, Schema } from "mongoose";

// bloodgroup list for patient!
const bloodGroups = [
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-'
  ];
  

export const patientSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:["M","F"],
        required:true
    },
    bloodGroup:{
        type:String,
        enum:bloodGroups,
        require:true,
        default:null
    },
    diagonsedWith:[
        {
            type:String,
            required:true
        }
    ],
    address:{
        type:String,
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
},{timestamps:true})

export const patientModel = new Model("Patient",patientSchema)
