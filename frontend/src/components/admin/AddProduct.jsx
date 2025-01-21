import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

const AddProduct = () => {
const addProductHandler=async(e)=>{
  try {
    e.preventDefault();
    const formData= new FormData(e.target);
    const obj=Object.fromEntries(formData);
    console.log(formData);
    const form = e.target; 
    const {name,price,image} =obj;

    const {data}=await axios.post("http://localhost:8080/api/v1/product/add-product",
     formData
    );
    if(data.success){
      toast.success(data.message, {
        duration: 2000,
        position: 'top-center',
        className: 'text-[1.5rem]',
      });
      form.reset();
    }
    else{
      console.log(data.message);
      toast.error(data.message, {
        duration: 2000,
        position: 'top-center',
        className: 'text-[1.5rem]',
      }); 
    }
  } catch (error) {
    console.log(error);
    toast.error("something went wrong", {
      duration: 2000,
      position: 'top-center',
      className: 'text-[1.5rem]',
    });
  }

}



  return (
    <div>
      <form action="" className='w-[50%]  flex mx-auto mt-8 flex-column justify-around items-center px-6 border-1 py-4 rounded-md shadow-md' onSubmit={addProductHandler}>
        <h1 className='text-[3rem] text-primary-color font-bold'>add new product</h1>
        <input type="text" className='w-full p-3 outline-none rounded-md text-[1.5rem] my-3 shadow-sm border-1'  placeholder='please enter product name' name='name'/>
        <input type="number" className='w-full p-3 outline-none rounded-md text-[1.5rem] my-3 shadow-sm border-1'  placeholder='please enter product price' name="price" id="" />
        <input type="file"  className='w-full p-3 outline-none rounded-md text-[1.5rem] my-3 shadow-sm border-1'  placeholder='please choose product image' name="image" id="" accept='image/*'/>
        <input type="submit" value="add product" className=' px-6 py-3 outline-none rounded-md text-[1.5rem] my-3 bg-primary-color text-white cursor-pointer'/>
      </form>
    </div>
  )
}

export default AddProduct