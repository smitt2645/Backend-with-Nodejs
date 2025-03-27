import mongoose from "mongoose";

const stringBase = () => ({
  type: String,
  unique: true,
  lowerCase: true,
  required: true,
});

const userSchema = new mongoose.Schema(
  {
    username: { ...stringBase() },
    email: { ...stringBase() },
    password:{type:String,required:true}
  },
  { timestamps: true }
);

export const User = new mongoose.model("User", userSchema);
