import express from 'express';
import {postData,getData,updateData,deleteData} from '../Controller/controller.js';
const route =express.Router();

route.post("/post",postData);
route.get("/post",getData);
route.update("/post",updateData);
route.delete("/post",deleteData);

export default route;