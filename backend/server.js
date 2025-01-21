const express= require("express");

// rest object 
const dotenv=require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const authRoutes=require("./routes/authRoutes")
const productRoute=require("./routes/productRoute.js")
const cors=require("cors");

const app=express();
app.use(cors());
dotenv.config()

// middlewares

app.use(express.json())
// Yeh middleware incoming requests ke body ko JSON format me parse karta hai.
// Jab tumhara client (jaise React frontend) server ko koi data bhejta hai (jaise form submit karte time), to yeh JSON data ko samajhne layak format me convert karta hai, taaki tumhara server usko read aur process kar sake.
app.use(morgan('dev'))
// Yeh middleware HTTP requests ka log (record) banata hai, jo development mode me useful hota hai. 'dev' ka matlab hai ki yeh development ke liye optimized logging karega (jaise kaunsa request aaya, kaunsi URL hit hui, status code kya tha, etc.).

connectDB()
// routes

app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/product',productRoute)










// rest api 

app.get("/",(req,res)=>{
    res.send(
        "<h1>welcome to my first page </h1>"
    )
})
const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`the app is running in ${process.env.DEV_MODE} on port ${PORT}`)
})
// AJ8kvxbjFHpLXHfP
