
const express=require("express");
const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware");
const {addProductController, getAllProuctsController, getSingleProuctController, getImageController, deleteProducteController, updateProductController}=require("../controller/productController");
const formidable=require("express-formidable")

const router= express.Router();

router.post('/add-product',requireSignIn,isAdmin,formidable(), addProductController);

// update product

router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(), updateProductController);


router.get('/get-products', getAllProuctsController);

router.get('/get-products/:slug', getSingleProuctController);

// get photo

router.get('/get-image/:pid', getImageController);

// delete product

router.delete('/delete-product/:pid', deleteProducteController);



  

module.exports=router;