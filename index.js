import express from "express";
import { config } from "dotenv";
import { connectDB } from "./util/connectDB.js";
import { Server } from "socket.io";
import http from "http";
import userRouter from "./route/user.route.js";
import cors from "cors";

config();
const app = express();
const server = http.createServer(app);
app.use(cors({origin:["http://localhost:5173","https://taskplanet-frontend.vercel.app"]}))
export const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173","https://taskplanet-frontend.vercel.app"],
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
export default server;
io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
