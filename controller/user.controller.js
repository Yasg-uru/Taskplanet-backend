import usermodel from "../model/user.model.js";
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

export const GetUsers=async (req,res,next)=>{
  try {
    const users=await usermodel.find({});
    res.status(200).json({
      message :"Users fetched successfully",
      users
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error",
    });
  }
}