const express=require("express");
const {registerController,loginController, testController, forgotPasswordController} = require("../controller/authController");
const {requireSignIn,isAdmin} = require("../middlewares/authMiddleware");


const router=express.Router();

router.post("/register",registerController)
router.post("/forgot-password",forgotPasswordController)
router.post("/login",loginController)

router.get("/test",requireSignIn ,isAdmin,testController)
router.get("/auth-user",requireSignIn ,(req,res)=>{
res.status(200).send({ok :true});
})
router.get("/admin-auth",requireSignIn ,isAdmin,(req,res)=>{
    res.status(200).send({ok :true});
    })



module.exports=router;
// {
//     "name":"abc",
//     "email":"abcd@gmail@com",
//     "password":"123",
//     "phone":1234567,
//     "address":"abcaddress"



// }

