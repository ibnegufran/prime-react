import React from 'react'
let btn={
  paddingLeft:'2rem',
  fontSize:'5rem'
}
const Login = () => {
  return (
    <div className='h-screen w-screen  grid place-items-center justify-center'>
        <div className="bg-white shadow:md py-8 px-6 text-center flex flex-col items-center gap-6 rounded-md shadow-sm border-1 border-gray-200">
            <h2 className='text-[3.5rem] text-primary-color capitalize font-bold'>login now!</h2>
          
           <input type="email" placeholder='Enter Your email' className=' w-[70vw] md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md'/>
           <input type="password" placeholder='Enter Your password' className=' w-[70vw] md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md'/>
          
           <input type="submit"id='btn'  value={"login"} className='bg-primary-color  text-[1.8rem] border-0 border-gray-100 shadow-md text-white rounded-lg font-bold '/>
        </div>
    </div>
  )
}

export default Login