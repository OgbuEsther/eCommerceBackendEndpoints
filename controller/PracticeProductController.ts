import UserModel from "../models/UserModel";
import productModels from "../models/productModels";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

//
