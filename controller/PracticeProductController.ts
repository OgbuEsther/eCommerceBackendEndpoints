import UserModel from "../models/UserModel";
import productModels from "../models/productModels";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

// create product

router.post("/api/product", async (req: Request, res: Response) => {
  try {
    const { title, description, price, quantity, category, status } = req.body;

    const newProduct = await productModels.create({
      title,
      description,
      price,
      quantity,
      category,
      status,
    });

    return res.status(201).json({
      message: "Product successfully created",
      data: newProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: "unable to create product",
      data: error,
    });
  }
});
