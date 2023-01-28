const mongoose =require('mongoose')

const dataSch =new mongoose.Schema({
    Email:{type:String},
    Password:{type:String}
})

const mode =mongoose.model("NewData",dataSch)

module.exports=mode