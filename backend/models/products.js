const mongoose=require('mongoose')
const ProductSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
slug:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
image:{
    data:Buffer,
    contentType:String
}
},{timestamps:true})


module.exports= mongoose.model('products',ProductSchema);