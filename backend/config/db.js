const mongoose=require("mongoose");


const connectDB= async ()=>{
    try {
        const conn=await mongoose.connect(process.env.DATABASE_URL)
        console.log("connected to the database")
    } catch (error) {
        console.log("error :" , error)
    }
}

module.exports= connectDB;