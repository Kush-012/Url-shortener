const mongoose=require("mongoose");
async function con(url){
    mongoose.connect(url);
}
module.exports={con};
