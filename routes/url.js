const express=require("express");
const router=express.Router();
const {generateurl,geturl}=require("../controllers/url");

router.post("/",generateurl);
router.get("/:shortid",geturl);
module.exports=router;
