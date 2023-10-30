import express  from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

import PostSchema from "../mongoDB/models/posts.js";

// for plotting env variable
dotenv.config()


const router=express.Router();


const openai=new OpenAI({
    apiKey:process.env.OPEN_API_KEY
});
router.send('/').get((req,res)=>{
    res.send("Hello from Dall-E!")
})