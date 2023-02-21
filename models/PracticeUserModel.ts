import mongoose from "mongoose";

interface UserData {
  name: string;
  email: string;
  password: string;
  cart: any[];
  isAdmin: boolean;
}

interface User extends UserData, mongoose.Document {}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    cart: [],
  },
  { timestamps: true }
);
