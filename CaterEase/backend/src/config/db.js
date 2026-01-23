import mongoose from "mongoose";
const connectDB=async()=>{
    try {
        console.log("MongoDB connected");
        const conn= await mongoose.connect(process.env.MONGODB_URI)
        
    } catch (error) {
        console.log("MongoDB connection failed");
        console.error(error);
        process.exit(1);
    }
}
export default connectDB;