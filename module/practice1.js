const mongoose=require('mongoose')
const practiceschema=mongoose.Schema({
    Name:{
        type:String
    },
        age:{
            type:Number
        },
        password:{
            type:Number,
            require:true
        }
})
const Practice=mongoose.model('practice',practiceschema)
module.exports=Practice