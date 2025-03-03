import React, { useContext, useEffect, useState } from 'react'
import { FirstContext } from '../context/context'
import {useCart} from 'react-use-cart'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import toast from 'react-hot-toast';
// import (useCart)
const HomeProducts = () => {
  const {loc,setLoc}=useContext(FirstContext);
  // console.log(loc);
const {addItem}=useCart();
let myLocation=useLocation();
// console.log(myLocation.pathname);
const [auth , setAuth]=useAuth();
    const [data,setData]=useState([
        {
            id:1,
            name:'bluetooth',
            price:'400',
            img_url:'/pr1.jpeg'
          },
          {
            id:2,
            name:'durable chair',
            price:'400',
            img_url:'/pr2.jpg'
          },{
            id:3,
            name:'earphone',
            price:'344',
            img_url:'/pr7.jpg'
          },{
            id:4,
            name:'flask bottle',
            price:'349',
            img_url:'/pr9.jpeg'
          },{
            id:5,
            name:'flask bottle',
            price:'600',
            img_url:'/pr10.jpeg'
          },{
            id:6,
            name:'earbuds',
            price:'500',
            img_url:'/pr8.jpg'
          },
          {
            id:7,
            name:'first product',
            price:'34',
            img_url:'/pr2.jpg'
          },{
            id:8,
            name:'first product',
            price:'34',
            img_url:'/pr7.jpg'
          },{
            id:9,
            name:'first product',
            price:'34',
            img_url:'/pr9.jpeg'
          }
    ])
    // const [sliced,setSliced]=useState(data.slice(0,6));
  

    useEffect(()=>{

        if(myLocation.pathname == "/shop"){
          
         setData(data.slice(0,9))
        
       }
       else{
        setData(data.slice(0,6));
        

       }
    },[myLocation]);
  return (
    <div className='py-8 px-4 text-center'>
        <h3 className={`my-8 text-[4rem] font-bold text-primary-color text-center uppercase ${myLocation.pathname == "/" ? "inline-block" :"hidden"}`}>latest products</h3>
      

        <div className="con-fr my-0 mx-auto px-3">
             {data.map((ele,index)=>{
                return(
                    <Card  key={index} className="shadow-md border-1 border-200-gray text-center p-4">
                        <img src={ele.img_url} alt="" className='h-[30rem] w-auto mx-auto'/>
                        <h4 className={`text-4xl font-bold my-3 capitalize `}>{ele.name}</h4>
                        <p className='text-4xl font-bold my-2 capitalize text-red-500'>₹{ele.price}</p>
                        <div className="">
                        <Button className='py-2 px-4 text-[1.5rem] font-200 mr-4' label='add to cart ' icon="pi pi-cart-arrow-down mx-2 text-[1.2rem]" rounded onClick={()=>auth.user == null ?   toast.error("please login first", {
        duration: 2000,
        position: 'top-center',
        className: 'text-[1.5rem]',
      }) : addItem(ele)}/>
                        <Link to="/buy"> <Button className='py-2 px-4 text-[1.5rem]' icon="pi pi-shopping-bag mx-2 text-[1.2rem]" label='buy now' rounded severity="success"   /></Link>
                        </div>
   
</Card>
                )
             })}
        </div>
        <Link to="/shop"><Button label='see more ' className={`capitalize py-2 px-6 text-[1.5rem] font-200 mr-4 place-items-center mx-auto my-8 ${myLocation.pathname == "/" ? "inline-block" :"hidden"}`}></Button></Link>
    </div>
  )
}

export default HomeProducts