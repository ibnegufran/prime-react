const jwt=require("jsonwebtoken");
const userModel= require("../models/users");

const requireSignIn=async(req,res,next)=>{
try {
    const decode= jwt.verify(req.headers.authorization,process.env.SECRET_KEY);
    req.user=decode;
    next();
} catch (error) {
    console.log(error)
}
}
// is admin or not
const isAdmin=async (req,res,next) => { 
    try {

        const checkAdmin=await userModel.findById(req.user._id)
        if(checkAdmin.role !== 1){
            return  res.status(401).send({
                success:false,
                message:"unauthorized access !only admin can access this",
                
            })   
        }
        else{
            next()
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"unauthorized access",
            error
        })    
        }
    
}



module.exports={
    requireSignIn,
    isAdmin
};