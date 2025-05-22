import mongoose from "mongoose";


const connectDb=()=>{
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/kec')
        console.log("db is connected");
    }
    catch(err)
    {
        console.log(err)
    }
}
export default connectDb;