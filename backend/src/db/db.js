import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to database")
    } catch (error) {
        console.log(`error occured while connecting to db : ${error}`)
        process.exit(1);
    }
}

export default connectDB;