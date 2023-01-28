const express =require('express')

const app =express()
const Schema =require('./PostSch')
const JWT =require('./JWT')
app.post('/geting',JWT,async(req,res)=>{
    try {
        const find =await Schema.find({Detail:req.user})
        return res.json(find)
    } catch (error) {
        return res.json(error.message)
    }
})
app.post('/posting',JWT,async(req,res)=>{
    try {
         req.body.Detail=req.user  
        // console.log(req.body)
        const create =await Schema.create(req.body)
        return res.json('uploaded')
    } catch (error) {
        return res.json(error.message)
    }
})
module.exports=app