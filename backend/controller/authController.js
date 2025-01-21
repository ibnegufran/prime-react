const { passwordHashing, passwordComparing } = require("../utils/authHelper");
const userModel= require("../models/users");
const { JsonWebTokenError } = require("jsonwebtoken");
var jwt = require('jsonwebtoken');
const registerController=async(req,res)=>{
try {
    const {name,email,password,phone,address,answer,role}=req.body;
    if(!name){
        return res.send({message:"name is required"})
    }
    if(!email){
        return res.send({message:"email is required"})
    }
    if(!password){
        return res.send({message:"password is required"})
    }
    if(!phone){
        return res.send({message:"phone is required"})
    }
    if(!address){
        return res.send({message:"address is required"})
    }
    if(!role){
        return res.send({message:"role is required"})
    }

    const checkuser= await userModel.findOne({email})
    if(checkuser){
        res.status(500).send({
            success:false,
            message:"already registered",
            error
        })    
    }

    const hashedPassword=await passwordHashing(password);


    const user=await new userModel({name,email,phone,address,password:hashedPassword,answer,role}).save();
     res.status(201).send({
        success:true,
        message:"registered successfully",
        user
        
    })
    console.log(user)
    


} catch (error) {
    console.log(error)
     res.status(500).send({
            success:false,
            message:"error in registration",
            error
        })    
}
}

// forgot pasword controller
const forgotPasswordController=async(req,res)=>{

    try {
        const {email,password,answer}=req.body;
        if(!email){
            return res.send({message:"email is required"})
        }
        if(!answer){
            return res.send({message:"answer  is required"})
        }
        if(!password){
            return res.send({message:"password is required"})
        }
        const user=await userModel.findOne({email,answer});

        if(!user){
            return res.status(404).send({
                success:false,
                message:"wrong eamil or answer",
                
            })  
        }

        const hashed=await passwordHashing(password);
        await userModel.findByIdAndUpdate(user._id,{password:hashed})
        res.status(200).send({
            success:true,
            message:"passwors reset successfully",
            
            
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
               success:false,
               message:"error in reseting password",
               error
           })    
    }
}


const loginController=async(req,res)=>{
try {
    const {email,password}=req.body;

    if(!email || !password){
       return res.status(404).send({
            success:false,
            message:"invalid email and password",
            
        })  
    }
    // check user

    const user=await userModel.findOne({email})
    if(!user){
       return res.status(404).send({
            success:false,
            message:"email is not registered",
        
        })  
    }

    const matchPassword=await passwordComparing(password,user.password)
    if(!matchPassword){
      return res.status(200).send({
            success:false,
            message:"invalid password ",
            
        })  
    }

    const token=await jwt.sign({_id:user._id},process.env.SECRET_KEY,{
        expiresIn:'7d',
    })
    res.status(200).send({
        success:true,
        message:"login successfully",
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.name,
            role:user.role
        },
        token
        
    })
    
} catch (error) {
    console.log(error)
    res.status(500).send({
           success:false,
           message:"error in login",
           error
       })    
}
}

const testController=async(req,res)=>{
    try {
        res.send("protectted route")
    } catch (error) {
        console.log(error)
    }

}
module.exports={
    registerController,
    loginController,
    testController,
    forgotPasswordController
}
