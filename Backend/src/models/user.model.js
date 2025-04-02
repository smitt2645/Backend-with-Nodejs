import mongoose, { Model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userShema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, // for easy serching purpose !
    },
    fullName: {
      type: String,
      lowercase: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avtar: {
      type: String,
      required: true, // cloudinary URL
    },
    coverImage: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Types of Middleware:

// Mongoose has 4 types of middleware: document middleware, model middleware, aggregate middleware, and query middleware.

// Document middleware is supported for the following document functions. In Mongoose, a document is an instance of a Model class. In document middleware functions, this refers to the document. To access the model, use this.constructor.

// validate
// save
// updateOne
// deleteOne
// init (note: init hooks are synchronous)
// middleware will have always access og next !

// do encrypt the password before saved in database!
userShema.pre("save", async function (next) {
  // hash is defalut method to encrypt password of bycrypt package!
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

//mongoose allow to add custom methods ,=> here we can add custom method which is isPasswordCorrect in userSchema.

// it will compare the password from database that encrypted password is correct or not which stored in database!
userShema.method.isPasswordCorrect = async function (password) {
  if (password) {
    // provide password from the user for compare!
    const providedPassword = password;

    // comparing the encrypted password from database!
    return await bcrypt.compare(providedPassword, this.password); // this.password , refers from the schema which stored in database!
  }
};

// generate access token from jwt
userShema.method.generateAccessToken = async function () {
  // for generate access token use sign methof of jwt!
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    process.env.Access_Token_Secret,
    {
      expiresIn: process.env.Access_Token_Expiry,
    }
  );
};

// generate refresh token from jwt
userShema.method.generateRefreshToken = async function () {
  // also generate refreshtoken by sign method of jwt
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    process.env.Refresh_Token_Secret,
    {
      expiresIn: process.env.Refresh_Token_Expiry,
    }
  );
};
export const UserModel = new Model("User", userShema);
