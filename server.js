import connectDb from "./db/db.js";
import express from "express";
import cors from "cors";
import route from "./Route/route.js";

const port=5000;
const app=express()
//middle ware
app.use(express.json()); // <== Needed to parse JSON body

app.use(cors())
app.use('/api',route)
app.listen(port,()=>{
    console.log(`app is running in ${port}`);
})
connectDb();//db function

