import mongoose from "mongoose";
import  { DB_NAME } from "../constant.js";
import dotenv from "dotenv";

dotenv.config();    

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB Error:", error);
    process.exit(1);
  }
};

export default connectDB; 