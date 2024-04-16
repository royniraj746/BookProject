const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    title:{
        type:String ,
        resuired:true
    },
    author:{
        type:String ,
        required:true
    },
    year:{
        type:Number ,
        required:true
    },
    createDate:{
        type:Date,
        default:new Date(),
        required:true
    }
})

module.exports=mongoose.model("BookSchema",schema);
