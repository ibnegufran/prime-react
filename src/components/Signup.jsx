import Input from 'postcss/lib/input'
import React from 'react'

const Signup = () => {
    let btn={
        paddingLeft:'2rem',
        fontSize:'5rem'
    }
  return (
    <div className='h-screen w-screen  grid place-items-center justify-center'>
        <div className="bg-white shadow:md py-8 px-6 text-center flex flex-col items-center gap-6 rounded-md shadow-sm border-1 border-gray-200">
            <h2 className='text-[3.5rem] text-primary-color capitalize font-bold'>sign up!</h2>
           <input type="text" placeholder='Enter Your Name' className=' w-[70vw] md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md'/>
           <input type="email" placeholder='Enter Your email' className=' w-[70vw] md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md'/>
           <input type="password" placeholder='Enter Your password' className=' w-[70vw] md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md'/>
           <input type="password" placeholder='confirm Your password' className=' w-[70vw] md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md'/>
           <input type="submit"id='btn'  value={"sign Up"} className='bg-primary-color  text-[1.8rem] border-0 border-gray-100 shadow-md text-white rounded-lg font-bold '/>
        </div>
    </div>
  )
}

export default Signup