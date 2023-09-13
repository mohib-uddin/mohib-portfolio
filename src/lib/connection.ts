import mongoose from "mongoose";

export const connectionDB=async()=>{
    const MONGO_URI=`${process.env.MONGODB_URI}`
    let client;
    try{
        client=await mongoose.connect(MONGO_URI)
        console.log('Database Connected')
    }
    catch (error){
        console.log(error);
    }
}
