import usermodel from "../model/user.model.js";
import { io } from "../index.js";
export const createUser = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newUser = new usermodel({
      name,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error",
    });
  }
};

export const GetUsers = async (req, res, next) => {
  try {
    console.log("request from frontend");
    const users = await usermodel.find({});
    res.status(200).json({
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error",
    });
  }
};
export const UserClaim = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const points = Math.floor(Math.random() * 10) + 1;
    console.log("this is a user id:", userId);
    const user = await usermodel.findById(userId);
    if (user) {
      user.points += points;
      io.emit("leaderboard-update");
      await user.save();
      res.json({ user, points });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error",
    });
  }
};
export const getLeaderBoard = async (req, res, next) => {
  try {
    const leaders = await usermodel.find().sort({ points: -1 });
    res.status(200).json({
      message: "Fetched leader board",
      leaders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error",
    });
  }
};
