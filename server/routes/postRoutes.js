import express  from "express";
import * as dotenv from "dotenv";
// import {v2 as cloudinary} from cloudinary;

import PostSchema from "../mongoDB/models/posts.js";

// for plotting env variable
dotenv.config()

const router=express.Router();
