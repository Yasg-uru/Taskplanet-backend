import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    console.log(`data base is connected with : ${response.connection.host}`);
  } catch (error) {
    console.log(`Error in database connectivity`);
  }
};
