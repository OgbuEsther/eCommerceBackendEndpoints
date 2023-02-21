import mongoose from "mongoose";

interface Iprod {
  title: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  status: boolean;
}

interface Product extends Iprod, mongoose.Document {}

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    category: {
      type: String,
    },
    status: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Product>("MyProducts", ProductSchema);
