import axios from 'axios';
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import { useAuth } from '../context/authContext';



const Login = () => {
  let btn={
    paddingLeft:'2rem',
    fontSize:'5rem'
  }
 
  const navigate = useNavigate();
const [auth,setAuth]=useAuth();

const submitHandler = async (e) => {
  try {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData);
    console.log(obj);
    const { name, email, password } = obj;
    // console.log( email, password);
    const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
      email,
      password,
    });

   
    console.log(auth)
    if (res.data.success) {
   
      toast.success(res.data.message, {
        duration: 2000,
        position: 'top-center',
        className: 'text-[1.5rem]',
      });
      setAuth({
        ...auth,
        user:res.data.user,
        token:res.data.token,
      })
      localStorage.setItem('auth',JSON.stringify(res.data));
      navigate("/");
    } else {
      console.log(res.data.message);
      toast.error(res.data.message, {
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
    <>
    <Navbar />
    <div className='h-screen w-screen  grid place-items-center justify-center'>
        <form onSubmit={submitHandler} className="bg-white shadow:md py-8 px-6 text-center flex flex-col items-center gap-4 rounded-md shadow-sm border-1 border-gray-200">
            <h2 className='text-[3.5rem] text-primary-color capitalize font-bold'>login now!</h2>
          
           <input type="email" placeholder='Enter Your email' className='lowercase w-[70vw] md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md' name='email'/>
           <input type="password" placeholder='Enter Your password' className=' w-[70vw] md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md lowercase' name='password'/>
          
           <input type="submit" id='btn' name='submit'  value={"login"} className='bg-primary-color  text-[1.8rem] border-0 border-gray-100 shadow-md text-white rounded-lg font-bold '/>
           <p className='text-[1.6rem] my-4 text-gray-800 tracking-wider'>dont have an account ? <Link to='/signup' className='text-[1.6rem] my-4 text-primary-color underline tracking-wider'>signup now</Link></p>
           <Link to="/forgot"  className="no-underline hover:underline md:hover:text-gary300 text-blue-500 text-[1.4rem]">Forgot password</Link>       
            </form>
    </div>
    
    </>
  )
}

export default Login