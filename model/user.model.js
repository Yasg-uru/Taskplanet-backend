import mongoose, { Schema } from "mongoose";
const userSchema=new Schema({
    name:{type:String,required:[true ,"Name is required"]},
    points:{type:Number,
        default:0
    }
});
const usermodel=mongoose.model("user",userSchema);
export default usermodel;
