import axios from 'axios';
import { Card } from 'primereact/card';
import React, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import UpdateProduct from './updateProduct';
import { VisibleContext } from '../../context/context';

const AllProducts = ({tabChange}) => {
   
    const [products,setProducts]=useState([]);
    const [singleProduct,setsingleProduct]=useState([]);

    const {visible, setVisible} = useContext(VisibleContext)


    const getAllProducts=async()=>{
        try {
            const {data}= await axios.get('http://localhost:8080/api/v1/product/get-products');
            setProducts(data?.products);
        } catch (error) {
            console.log(error)
            toast.error("something went wrong",{
                duration: 2000,
                position: 'top-center',
                className: 'text-[1.5rem]',
            })
        }
    }


    const getSingleProduct=async(slug)=>{
try {
    setVisible(true);
    const {data}= await axios.get(`http://localhost:8080/api/v1/product/get-products/${slug}`);
    setsingleProduct(data?.products);

} catch (error) {
    console.log(error)
            toast.error("something went wrong",{
                duration: 2000,
                position: 'top-center',
                className: 'text-[1.5rem]',
            })
}
    }

    useEffect(()=>{
getAllProducts()
// getSingleProduct()
    },[])
  return (
    <>
<VisibleContext.Provider value={{visible, setVisible}}>
    {visible ? <UpdateProduct product={singleProduct} getSingleProduct={getSingleProduct}/> : "" }
    </VisibleContext.Provider>

    <div className="w-full px-6 text-center py-6">
        <h1 className='text-[3rem] text-center  text-primary-color font-bold'>all products</h1>
        <div className="con-fr my-0 mx-auto px-3">
             {products.map((ele,index)=>{
                return(
                    <Card  key={index} className="shadow-md border-1 border-200-gray text-center p-4">
                        <img src={`http://localhost:8080/api/v1/product/get-image/${ele._id}`} alt="" className='h-[30rem] w-auto mx-auto'/>
                        <h4 className={`text-4xl font-bold my-3 capitalize `}>{ele.name}</h4>
                        <p className='text-4xl font-bold my-2 capitalize text-red-500'>₹{ele.price}</p>
                        <div className="flex justify-center my-4">
                            <button className='bg-green-500 py-2 px-6  mx-2 text-white rounded-md border-0 text-[1.5rem] ' onClick={()=>getSingleProduct(ele.slug)}>update</button>
                            <button className='bg-red-500 py-2 px-6  mx-2 text-white rounded-md border-0 text-[1.5rem] '>delete</button>

                        </div>
   
</Card>
                )
             })}
        </div>
    </div>
    </>
  )
}

export default AllProducts