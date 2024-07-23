import { Button } from 'primereact/button'
import React from 'react'
import { Link } from 'react-router-dom'

const HomeContact = () => {
  return (
    <div>
        <div className="h-[30vh] w-screen bg-primary-color text-center capitalize flex flex-col justify-center items-center gap-1 px-2">
<h3 className='text-white uppercase text-[3rem] md:text-[4rem] font-bold'>have you any query ?</h3>
<p className='text-gray-100 text-[1.8rem]'>feel free to communicate with us , we are here to help you give us chance for your help</p>
<Link to="/contact"  className='bg-white text-primary-color rounded font-bold mt-6 py-3 px-6 text-3xl outline-none border-0 hover:bg-transparent'>contact us</Link>
        </div>
    </div>
  )
}

export default HomeContact