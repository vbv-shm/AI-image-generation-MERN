import express from 'express';
import * as dotenv from "dotenv";
import cors from 'cors';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import connectDB from './mongoDB/connect.js';

dotenv.config();


const app=express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);



app.get('/',async(req,res)=>{

    res.send("Hello from Dall-E");
})


const startserver=async()=>{
    try{
        connectDB(process.env.MONGO_URL)
        app.listen(8080,()=>console.log('Server has started on port 8080'))
    }
    catch{
        console,log(err)
    }
}

startserver()