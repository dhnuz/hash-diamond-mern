import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connceted to MongoDB ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error in MongoDB ${err}`);
  }
};

export default connectDB;
