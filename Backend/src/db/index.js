import mongoose from "mongoose";


const connectDB = async () => {
    try {
        console.log(`${process.env.DB_URI}, JR`)
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB;