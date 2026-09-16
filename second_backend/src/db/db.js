import mongoose from 'mongoose';
import "dotenv/config";


const connectDB = async () => {
    try {

        if(!process.env.MONGODB_URL){
            throw new Error("MONGODB_URL is not defined in the environment");
        }

        const mongoURL = `${process.env.MONGODB_URL}/${process.env.DB_NAME}`
        await mongoose.connect(mongoURL);
        console.log("MongoDB Connection successfully!");
        
    } catch (error) {
        console.log("MongoDb connection Error: ", error);
        throw error;
    }
}

export default connectDB