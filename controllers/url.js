const { nanoid } = require('nanoid');
const data=require("../models/url.js");

async function generateurl(req,res){

    const body=req.body;
    if(!body || !body.url){
        return res.status(400).json({error:"url is required"});
    } 
    const short=nanoid(8);
    await data.create({
        shortid:short,
        redirecturl:body.url,
        visithistory:[],
    });
    return res.json({id:short});

}

async function geturl(req, res) {
    const id=req.params.shortid;
    const entry=await data.findOneAndUpdate(
      { shortid: id },
      { $push: { visithistory: { timestamp: Date.now() } } },
      { new: true } 
    );
    
    res.redirect(entry.redirecturl);

} 

module.exports = { generateurl, geturl };