import mongoose from "mongoose";

const connectDB = async () => {
   try {
       const connectioIntance =
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB conneted !!!
            ${connectioIntance.connection.host} `);

   } catch (error) {
    console.log("MongoDB connection failed ",error)
    process.exit(1)
   } 
}

export default connectDB ;