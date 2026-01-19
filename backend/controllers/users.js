const mongoose = require('mongoose');
const db = mongoose.connection;
const userCollection = db.collection('users');
exports.getUsers = async (req,res)=>{
    try{
        const user = await userCollection.find().toArray();
        res.json(user);
    }
    catch(err){
        console.error('Error fetching users:', err); 
    }
    
  }

  exports.getUserById = async (req,res) =>{
    try{
        const userId = Number(req.query.id);
        const user = await userCollection.findOne({userId:userId});
        res.json(user);
    }
    catch(err){
        console.error('Error fetching user:', err); 
    }
  } 