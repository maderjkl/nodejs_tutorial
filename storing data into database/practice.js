const express=require('express')
const app=express()
const db=require('./db')
const Practice=require('../module/practice1')
const bodyparser=require('body-parser')
app.use(bodyparser.json())
app.post('/practice',async(req,res)=>{
  try{
        const data=req.body

       const newPractice=new Practice(data)
       const save=await newPractice.save()
       res.status(200).json({save})
  }
  catch(error){
    res.status(500).json("error occured")
  }
})
app.get('/practice',async(req,res)=>{
    const data= await Practice.find()
    res.status(200).json(data)
})
app.listen(3000,()=>{
    console.log("liosteninh")
  })