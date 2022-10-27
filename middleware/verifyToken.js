const User = require("../models/user");

const verifyToken=async(req,res,next)=>{
    //Auth header value = > send token into header

    const bearerHeader = req.headers['authorization'];
    //check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){

        //split the space at the bearer 
        const bearer = bearerHeader.split(' ');
        //Get token from string
        const bearerToken = bearer[1];
        if(!bearerToken)
        res.status(401).send({message:'unauthorized'})
        

        const user= await User.findOne({token:bearerToken})
        console.log(bearerToken);
        if(user){
            
            req.user=user;
            next()
        }
        else
        {
            res.status(400).send({message:'invalid token'})
        }
    }
    else {
        res.status(401).send({message:'unauthorized'})
    }
}
module.exports={verifyToken}
