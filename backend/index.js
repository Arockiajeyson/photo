const express =require('express')
const register =require('./register')
const mongoose =require('mongoose')
const cors =require('cors')
const app =express()
app.use(cors())
app.use(express.urlencoded())
app.use(express.json({limit:"5mb"}))
app.use('/posts',require('./PostView'))
app.use('/register',register)
app.use('/login',require('./Login'))
app.listen(3000,async()=>{
    await mongoose.connect('mongodb+srv://Aro:aro123@arockiajeyson.aswzaya.mongodb.net/?retryWrites=true&w=majority')
    console.log('dbconnented')
    console.log('port')
})