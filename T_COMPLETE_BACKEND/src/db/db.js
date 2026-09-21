import mongoose from "mongoose";
import "dotenv/config";


async function connectDB(){
    try {
        if(!process.env.MONGODB_URL){
            console.log("MONGODB_URL is not defiend in the environment");
        }

        const mongoURL = `${process.env.MONGODB_URL}/${process.env.DB_NAME}`;
        await mongoose.connect(mongoURL);
        console.log("MONGODB connection successfully");
    } catch (error) {
        console.log("MONGODB connection error: ", error);
        throw error;
    }

}