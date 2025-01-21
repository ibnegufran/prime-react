const fs=require("fs");
const productSchema=require("../models/products");
const { default: slugify } = require("slugify");

const addProductController=async(req,res)=>{
try {
    const {name,slug,price}=req.fields;
    const {image}=req.files;

if(!name){
    return res.status(500).send({message:"name is required"})
}
if(!price){
    return res.status(500).send({message:"price is required"})
}
if(!name){
    return res.status(500).send({message:"name is required"})
}
if(!image){
    return res.status(500).send({message:"image is required"})
}
if(image.size > 1000000){
    return res.status(500).send({message:"image should be less than 1mb"})
}

    const products=new productSchema({...req.fields,slug:slugify(name)})
    if(image){
products.image.data=fs.readFileSync(image.path);
products.image.contentType=image.type;
await products.save();
res.status(201).send({
    success:true,
    message:"product added successfully",
    products
})

    }
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:"error in adding product",
        error
    })
}
}
// get all products 


const getAllProuctsController = async(req,res)=>{
try {
    const products=await productSchema.find({}).select("-image").limit(12).sort({createdAt:-1});
    res.status(200).send({
        success:true,
        message:"All products",
        totalCount:products.length,
        products
    })
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:"error in getting product",
        error
    })
}
}

// get single product base on slugify

const getSingleProuctController = async(req,res)=>{
    try {
        const products=await productSchema.find({slug:req.params.slug}).select("-image");
        res.status(200).send({
            success:true,
            message:"single product based on slug",
            products
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error in getting product",
            error
        })
    }
    }

// get image

const getImageController=async(req,res)=>{
try {
    const product=await productSchema.findById(req.params.pid).select("image");
    if(product.image.data){
        res.set("Content-type" , product.image.contentType);
        return res.status(200).send(product.image.data)
    }
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:"error in getting product",
        error
    })
}
}

// delete product


const deleteProducteController =async(req,res)=>{
try {
    await productSchema.findByIdAndDelete(req.params.pid)
    res.status(200).send({
        success:true,
        message:"product deleted successfully",
    })
} catch (error) {
    res.status(500).send({
        success:false,
        message:"error in deleting product",
        error
    })
}
}
// update product

const updateProductController=async(req,res)=>{
    try {
        const {name,slug,price}=req.fields;
        const {image}=req.files;
    
    if(!name){
        return res.status(500).send({message:"name is required"})
    }
    if(!price){
        return res.status(500).send({message:"price is required"})
    }
    if(!name){
        return res.status(500).send({message:"name is required"})
    }
    if(!image){
        return res.status(500).send({message:"image is required"})
    }
    if(image.size > 1000000){
        return res.status(500).send({message:"image should be less than 1mb"})
    }
    
        const products=await productSchema.findByIdAndUpdate(req.params.pid,
            {...req.fields,slug:slugify(name)},
            {new:true}
        
        )
        if(image){
    products.image.data=fs.readFileSync(image.path);
    products.image.contentType=image.type;
    await products.save();
    res.status(201).send({
        success:true,
        message:"product updated successfully",
        products
    })
    
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error in updating product",
            error
        })
    }
    }


module.exports={
    addProductController,
    getAllProuctsController,
    getSingleProuctController,
    getImageController,
    deleteProducteController,
    updateProductController
};

