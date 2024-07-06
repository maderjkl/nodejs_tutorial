const mongoose=require('mongoose');
const personschema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['MAnager','chef','waiter'],
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    }
})
const Person=mongoose.model('Person',personschema)
module.exports=Person