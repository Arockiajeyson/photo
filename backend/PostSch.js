const mongoose =require('mongoose')

const dataSch =new mongoose.Schema({
    Title:{type:String},
    Dis:{type:String},
    img:{type:String},
    Detail :{type:mongoose.Types.ObjectId,ref:"NewData"}
})

const mode =mongoose.model("NewPostDa",dataSch)

module.exports=mode