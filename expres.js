const express = require('express')
const app = express()
const db = require('./workingfiles/db')
require('dotenv').config()
const Port=process.env.Port || 3000
const bodyparser=require('body-parser')
app.use(bodyparser.json())
app.get('/', function (req, res) {
  res.send('Hello World')
})
const personr=require('./routes/personroutes')
app.use('/person',personr)
const practicer=require('./routes/practiceroutes')
app.use('/practice',practicer)
app.listen(Port,()=>{
  console.log("liosteninh")
})