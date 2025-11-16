const express=require("express");
require("dotenv").config();
const app=express();
const port=process.env.port;
const urlRoute=require("./routes/url");
const {con}=require("./connect");
con(process.env.mongodburl);

app.use(express.json());
app.use(express.static("public"));
app.use("/url",urlRoute);
app.listen(port,()=>{
    console.log("server is running");
});

