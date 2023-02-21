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

//purchasing product

router.patch(
  "/api/product/purchase/:productID",
  async (req: Request, res: Response) => {
    try {
      const { qty } = req.body;

      const getProducts = await productModels.findById(req.params.productID);

      if (getProducts!.quantity == 0) {
        await productModels.findByIdAndUpdate(getProducts!._id, {
          status: false,
        });
      } else {
        await productModels.findByIdAndUpdate(getProducts!._id, {
          quantity: getProducts?.quantity! - qty,
        });
      }
    } catch (error) {
      res.status(404).json({
        message: "an error occured",
      });
    }
  }
);

export default router;
