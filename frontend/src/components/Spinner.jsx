import React, { useEffect, useRef, useState } from 'react'
import { Audio } from 'react-loader-spinner';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const Spinner = () => {
    const toastShown = useRef(false);
const [count,setCount]=useState(3);
const navigate=useNavigate();
// useEffect(() => {
//     if (!toastShown.current) {
//       toast.error("Please first login to your account", {
//         duration: 2000,
//         position: 'top-center',
//         className: 'text-[1.5rem]',
        
//       });
//       toastShown.current = true; // Mark the toast as shown
//     }
//   }, []);


useEffect(()=>{
const interval=setInterval(() => {
    setCount((prev)=>  --prev);
}, 1000);

count === 0 && navigate("/Login");
return () => clearInterval(interval)
} ,[count,navigate])

  return (
    <div className='h-screen w-full flex justify-center items-center flex-col'>
        <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
<p className='text-[1.5rem] my-3'>please first login to your account</p>
<p className='text-[2.5rem]'>you are re-directing to the page in {count}s</p>
    </div>
  )
}

export default Spinner