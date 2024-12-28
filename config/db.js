import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(
             `Connected to mongodb database ${mongoose.connection.host}`.bgMagenta.white
        )
    } catch (error) {
        console.log(`MongoDb Error: ${error}`.bgRed.white);
    }
};

export default connectDB;