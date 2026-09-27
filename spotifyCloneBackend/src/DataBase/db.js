import mongoose from "mongoose";
import "dotenv/config"

const connectDB = async () => {

    try {
        if(!process.env.MONGODB_URL || !process.env.DB_NAME){
            console.log("MONGODB_URL or DB_NAME is not defined in the environment");
        }

        const mongoURL = `${process.env.MONGODB_URL}/${process.env.DB_NAME}`;
        await mongoose.connect(mongoURL);

        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("MongoDB Connection error", error);
    }
}


export default connectDB;