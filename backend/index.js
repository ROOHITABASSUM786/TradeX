require('dotenv').config();
const express=require("express");
const mongoose =require("mongoose");
const dns = require("dns");
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])
const PORT=process.env.PORT|| 3000;
const url=process.env.MONGO_URL;

const app=express();
app.listen(3000,()=>{
    console.log("app is running at port 3000");
    mongoose.connect(url);
    console.log("connection successful with DB");
});