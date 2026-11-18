import mongoose from "mongoose";
import dns from "node:dns";
import { DB_NAME } from "./constants.js";

try {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch (error) {
  // Fallback to default system DNS
}

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
};

export { connectDB };
export default connectDB;
