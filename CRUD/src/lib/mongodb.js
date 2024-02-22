import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const url = process.env.DATABASE_URL;
        console.log("url", url);
        await mongoose.connect(url);

        console.log("Connected to Mongo");
    } catch (error) {
        console.log("MongoDb Error: " + error); 
    }
}

export default connectDB;