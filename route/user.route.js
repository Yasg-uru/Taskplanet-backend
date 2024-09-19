import { Router } from "express";
import { createUser, GetUsers } from "../controller/user.controller.js";
const userRouter = Router();
userRouter.post("/create", createUser);
userRouter.get("/users", GetUsers);
export default userRouter;
