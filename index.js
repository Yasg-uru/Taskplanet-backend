import express from "express";
import { config } from "dotenv";
import { connectDB } from "./util/connectDB.js";
import { Socket } from "socket.io";
import userRouter from "./route/user.route.js";
config();
const app=express();
const PORT=process.env.PORT || 4000;
app.use(express.json());
app.use("/user",userRouter);

connectDB()
app.listen(PORT,()=>{
    console.log(`Taskplanet server is running on port : ${PORT}`);

})