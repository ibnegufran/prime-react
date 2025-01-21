import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ForgotPass = () => {
  const navigate = useNavigate();
    const submitHandler = async (e) => {
        try {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = Object.fromEntries(formData);
          console.log(obj);
          const {  email,answer, password } = obj;
          console.log( email,answer, password);
          const res = await axios.post("http://localhost:8080/api/v1/auth/forgot-password", {
            email,
            answer,
            password,
          });
      
         
          
          if (res.data.success) {
         
            toast.success(res.data.message, {
              duration: 2000,
              position: 'top-center',
              className: 'text-[1.5rem]',
            });
        
            navigate("/Login");
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
   <div className='h-screen w-screen  grid place-items-center justify-center'>
        <form onSubmit={submitHandler} className="bg-white shadow:md py-8 px-6 text-center flex flex-col items-center gap-4 rounded-md shadow-sm border-1 border-gray-200">
            <h2 className='text-[3.5rem] text-primary-color capitalize font-bold'>reset password</h2>
          
           <input type="email" placeholder='Enter Your email' className='lowercase w-[70vw] md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md' name='email'/>
           <input type="text" placeholder='Enter Your secret answer' className=' w-[70vw] md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md lowercase' name='answer'/>
           <input type="password" placeholder='Enter Your new password' className=' w-[70vw] md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md lowercase' name='password'/>
          
           <input type="submit" id='btn' name='submit'  value={"reset"} className='bg-primary-color  text-[1.8rem] border-0 border-gray-100 shadow-md text-white rounded-lg font-bold '/>
            </form>
    </div>
    
  
  </>
  )
}

export default ForgotPass