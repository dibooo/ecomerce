var fs = require('fs');
const deleteUserImageIfExist=async(req,res,next)=>{
    if(req.user.image&&req.file){
       fs.unlinkSync(req.user.image);   
    }
    
   
    next()
}
const deleteUserImage=async(req,res,next)=>{
    if(req.user.image){
       fs.unlinkSync(req.user.image);   
       next()
    }
    else
    res.status(404).send({message:'you do not have profile image'})
    
   
    
}
module.exports={deleteUserImageIfExist,deleteUserImage}