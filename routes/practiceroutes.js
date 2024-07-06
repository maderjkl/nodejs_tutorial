const express=require('express')
const app=express.Router()
const Practice=require('../module/practice1')
const bodyparser=require('body-parser')
app.use(bodyparser.json())
const practice=require('../module/practice1')
app.post('',async(req,res)=>{
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
  app.get('',async(req,res)=>{
      const data= await Practice.find()
      res.status(200).json(data)
  })
  module.exports=app