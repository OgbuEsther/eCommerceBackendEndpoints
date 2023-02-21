import express from "express";

import cors from "cors";

import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

const port: number | string = process.env.PORT || 2004;

const DB_URL = "mongodb://0.0.0.0:27017/practiceEcommerce";

mongoose
  .connect(DB_URL)
  .then((conn) => {
    console.log(`database connection opened`);
  })
  .catch((err) => {
    console.log(`error`, err);
  });
