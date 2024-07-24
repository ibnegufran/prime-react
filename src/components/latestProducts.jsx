import React, { useState } from 'react'

import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import Container from 'postcss/lib/container';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

const HotProducts = () => {
const {addItem}=useCart();
  const [products,setProducts]=useState([
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
]);


const responsiveOptions = [
  {
    breakpoint: '1600px',
    numVisible: 1,
    numScroll: 1
},
  {
      breakpoint: '1400px',
      numVisible: 1,
      numScroll: 1
  },
 
];
 const productTemplate =(product)=>{
  return (
    <div className="border-1    border-gray-300 m-2 text-center border-bottom-8 py-5 px-3 flex flex-col justify-center items-center gap-4 shadow-md">
        <div className="mb-3">
            <img src={product.img_url} alt={product.name} className="w-[100%] h-[30vh] sm:max-h-[70vh]" />
        </div>
        <div>
            <h4 className="mb-1 text-3xl font-bold capitalize">{product.name}</h4>
            <h6 className="mt-0 mb-3 text-3xl font-bold capitalize text-red-500">₹{product.price}</h6>
          
            <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                <Button className='py-2 px-4 text-[1.5rem] font-200' label='add to cart ' icon="pi pi-cart-arrow-down mx-2 text-[1.2rem]" rounded  onClick={()=>addItem(product)}/>
               <Link to="/buy"> <Button className='py-2 px-4 text-[1.5rem]' icon="pi pi-shopping-bag mx-2 text-[1.2rem]" label='buy now' rounded severity="success"   /></Link>
            </div>
        </div>
    </div>
);
 }
 
  return (
    <>
    <div className="card w-screen text-center flex justify-center items-center  py-8 px-8">
            <Carousel value={products} className='' numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} autoplayInterval={3000} containerClassName={'w-[90vw] sm:w-[60vw] xl:w-[40vw] my-0 mx-auto'} contentClassName={''} indicatorsContentClassName={''} header={"Today's products"} prevIcon="text-[2rem]  pi pi-chevron-left" nextIcon="text-[2rem]  pi pi-chevron-right" circular={true} pt={{
            
           header:'text-[4rem] md:text-[4.5rem] text-center text-primary-color font-bold uppercase',
           item:'',
           indicators:'py-4',
           indicator:'',
           indicatorButton:'h-[8px] mx-1 w-[30px]',
           previousButton:'p-5 bg-gray-200',
           nextButton:'p-5 bg-gray-200'
          
          
          
          
           }
          } 
          > 
          </Carousel>
        </div>
          <div className="li h-[8px] w-[40vw] bg-gradient-to-r from-white via-primary-color to-white rounded mx-auto my-4"></div>
        </>
  )
}

export default HotProducts