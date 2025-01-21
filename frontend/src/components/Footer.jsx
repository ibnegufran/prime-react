import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const [footerData,setFooterData]=useState([

        {
            heading:"quick links",
            a1:"home",
            a2:"about",
            a3:"shop",
            a4:"contact",
            lin1:"/",
            lin2:"/about",
            lin3:"/shop",
            lin4 :"/contact",


        },
        {
            heading:"extra links",
            a1:"register",
            a2:"login",
            a3:"cart",
            a4:"orders",
            lin1:"/Signup",
            lin2:"/Login",
            lin3:"/Cart",
            lin4:"/Orders",


        },
        {
            heading:"Contact info",
            a1:"876544576",
            a2:"346547658",
            a3:"abc@gmail.com",
            a4:"bhiwandi , maharashtra",
            icon1:"pi pi-phone",
            icon2:"pi pi-phone",
            icon3:"pi pi-envelope",
            icon4:"pi pi-map-marker",


        },
        {
            heading:"Join Us",
            a1:"whatsapp",
            a2:"instagram",
            a3:"facebook",
            a4:"twitter",
            icon1:"pi pi-whatsapp",
            icon2:"pi pi-instagram",
            icon3:"pi pi-facebook",
            icon4:"pi pi-twitter",

        }

    ])
    let gStyle={
gridTemplateColumns:'repeat(auto-fit,20rem)',
gap:'3rem'
    };
  return (
    <div className='py-2 border-t-2'>
        <div className=" border-b-1 border-black con mx-auto py-8 px-4">

   {footerData.map((ele,index)=>{
    return(
<div className="flex flex-col gap-4" key={index} style={gStyle}>
    <h2 className='text-4xl text-primary-color'>{ele.heading}</h2>
    <Link to={ele.lin1} className='text-[1.3rem]'><span className={`${ele.icon1} text-[1.5rem] mr-3`}></span>{ele.a1}</Link>
        <Link to={ele.lin2}  className='text-[1.3rem]'><span className={`${ele.icon2} text-[1.5rem] mr-3`}></span>{ele.a2}</Link>
        <Link to={ele.lin3}  className='text-[1.3rem]'><span className={`${ele.icon3} text-[1.5rem] mr-3`}></span>{ele.a3}</Link>
        <Link to={ele.lin4} className='text-[1.3rem]' ><span className={`${ele.icon4} text-[1.5rem] mr-3`}></span>{ele.a4}</Link>
   </div>
    );
   })}
</div>
    </div>
  )
}

export default Footer