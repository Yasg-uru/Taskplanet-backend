import { Router } from "express";
import {
  createUser,
  getLeaderBoard,
  GetUsers,
  UserClaim,
} from "../controller/user.controller.js";
const userRouter = Router();
userRouter.post("/create", createUser);
userRouter.post("/claim", UserClaim);
userRouter.get("/users", GetUsers);
userRouter.get("/leaderboard", getLeaderBoard);
export default userRouter;
