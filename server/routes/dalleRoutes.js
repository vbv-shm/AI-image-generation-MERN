import express  from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

import PostSchema from "../mongoDB/models/posts.js";

// for plotting env variable
dotenv.config()


const router=express.Router();


const openai=new OpenAIapi({
    apiKey:process.env.OPEN_API_KEY
});
router.route('/').get((req,res)=>{
    res.send("Hello from Dall-E!")
})

router.route('/').post(async(req,res)=>{
    try{
        constprompt=req.body;
        const aiResponse=await  openai.crea
    }
    catch{}
})
export default router