import UserModel from "../models/UserModel";
import productModels from "../models/productModels";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

//get all users
router.get("/users", async (req: Request, res: Response) => {
  try {
    const fetchUsers = await UserModel.find();

    return res.status(200).json({
      message: "Success",
      data: fetchUsers,
    });
  } catch (error) {
    return res.status(404).json({
      message: "User not found",
    });
  }
});
