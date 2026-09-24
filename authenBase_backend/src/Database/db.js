import mongoose, { mongo } from "mongoose";


async function connectDB() {
    
    try {
        if(!process.env.MONGODB_URL || !process.env.DB_NAME){
            console.log("MONGODB_URL or DB_NAME is not defined in the environment");
        }

        const mongo_URL = `${process.env.MONGODB_URL}/${process.env.DB_NAME}`;

        await mongoose.connect(mongo_URL);
        console.log("MongoDB Connection Successfully");
        
    } catch (error) {
        console.log("MONGODB connection error:", error.message);
    }
}

export default connectDB