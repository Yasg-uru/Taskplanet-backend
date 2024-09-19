import express from "express";
import { config } from "dotenv";
import { connectDB } from "./util/connectDB.js";
import { Server } from "socket.io";
import http from "http";
import userRouter from "./route/user.route.js";
config();
const app = express();
const server = http.createServer();
export const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/user", userRouter);

connectDB();
server.listen(PORT, () => {
  console.log(`Taskplanet server is running on port : ${PORT}`);
});
