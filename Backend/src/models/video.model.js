import mongoose, { Model, Schema } from "mongoose";
import mongooseAggregatePaginateV2 from "mongoose-aggregate-paginate-v2"; // this is a plugin for mongoose schema


const videoSchema = new Schema({
    title:{
        type:String,
    },
    videoFile:{
        type:String,
        required:[true,"Video src is required!"]
    },
    description:{
        type:String,
    },
    duration:{
        type:Number, // it will get by Clouldinary
    },
    views:{
        type:Number, 
        default:0,
        min:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},
{
    timestamps:true
})

videoSchema.plugin(mongooseAggregatePaginateV2);



export const videoModel = new Model("video",videoSchema)