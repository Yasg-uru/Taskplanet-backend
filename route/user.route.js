import { Router } from "express";
import { createUser, GetUsers, UserClaim } from "../controller/user.controller.js";
const userRouter = Router();
userRouter.post("/create", createUser);
userRouter.get("/users", GetUsers);
userRouter.get("/claim/:userId", UserClaim);
export default userRouter;
