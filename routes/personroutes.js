
const express=require('express')
const app=express.Router()

const Person=require('../module/person')
const bodyparser=require('body-parser')
app.use(bodyparser.json())
app.get('/:worktype', async (req, res) =>{
    try{
      const worktype=req.params.worktype
      if(worktype=='MAnager' || worktype=='waiter' || worktype=='chef'){
        const fds=await Person.find({work:worktype})
        res.status(200).json(fds)
      }
      else{
        res.status(404).json("work mot foumd")
      }
    
    }
    catch(error){
      res.status(505).json("error occured") 
    }
  
  })
  app.post('',async(req,res)=>{
    try{
      const data=req.body
      const newperson=new Person(data)
       const response=await  newperson.save()
       console.log("Success")
       res.status(200).json(response)
    }
    catch(error){
       console.log("error")
       res.status(500).json({error:"data not saved"})
    }
  
  })
  app.get('',async(req,res)=>{
    const nperson=await Person.find()
    res.status(500).json(nperson)

  })
  app.put('/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const updateperson=req.body
        const response=await Person.findByIdAndUpdate(id,updateperson,{
            new:true,
            runValidators:true
           
        })
        res.status(500).json(response)
    }
   catch(error){
    res.status(404).json("error occured")
   }
  })
  app.delete('/:id', async (req, res) => {
    try {
        const idi = req.params.id;
        const deletedItem = await Person.findOneAndDelete({_id:idi});

        if (!deletedItem) {
            // If the item with the given ID does not exist
            return res.status(404).json({ error: 'Item not found' });
        }

        // Item successfully deleted
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        // Handle other errors (e.g., database connection issues)
        res.status(500).json({ error: 'An error occurred while deleting the item' });
    }
});

  module.exports=app