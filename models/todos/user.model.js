import mongoose from "mongoose";

// Boiler Plate For Schema !
const stringBase = () => ({
  type: String,
  required: [true, "reqired field"],
  unique: true,
});

const userSchema = new mongoose.Schema(
  {
    username: { ...stringBase(), lowercase: true },
    email: { ...stringBase(), required: [true, "email is required"] },
  },
  {
    timestamps: true, // true for ==>> createdAt and updatedAt
  }
);

export const UserModel = mongoose.model("User", userSchema); // ✅ Corrected
