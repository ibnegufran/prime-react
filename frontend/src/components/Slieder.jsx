import React from 'react'

import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
        
const Slieder = () => {
  return (
    <div className=' w-screen h-[70vh] md:h-[92vh] bg-no-repeat bg-cover bg-center banner grid place-items-center justify-center px-4'>
<div className=" text-center w-[60rem] md:w-[90rem]">
  <h2 className='text-[5rem] text-white font-bold'>Bringing the Market to Your Doorstep</h2>
  <p className='text-[1.8rem] text-gray-100'>Discover the latest home gadgets that bring convenience and innovation to your everyday life.</p>
  <br />
  <br />
  <Link to="/about"  className='bg-secondry-color py-3 px-6 text-2xl outline-none border-0  text-white font-bold mt-8 rounded-lg'>know more</Link>
</div>
    </div>
  )
};

export default Slieder