import mongoose from "mongoose";

interface Iprod {
  title: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  status: boolean;
}
