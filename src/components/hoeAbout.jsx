import { Button } from 'primereact/button'
import React from 'react'
import { Link } from 'react-router-dom'

const HomeAbout = () => {
  return (
    <div className="px-8 h-fit ">
    <div className=' con-fr home-about justify-evenly gap-8 place-items-center'>
<div className="img flex justify-center">
    <img src="../public/about2.jpeg" alt="" className='h-[35rem] rounded'/>
</div>
<div className="content ">
    <h2 className='text-[3rem] md:text-[4rem] uppercase text-primary-colo text-primary-color font-bold'>why choose us ?</h2>
    <p className='text-[1.5rem] text-gray-600 text-justify mb-6'>At Al-Kahf online market, we strive to be your one-stop shop for all your needs, from cutting-edge mobile accessories to innovative home gadgets and stylish home accessories. We pride ourselves on offering a diverse range of high-quality products designed to enhance your lifestyle. Our commitment to excellence is evident in our carefully curated selection, which combines premium quality, unique designs, and affordability. Whether you're looking for the latest tech accessories, practical home gadgets, or stylish decor, we have something for everyone. Our customer-centric approach ensures your satisfaction, with a dedicated support team ready to assist you and fast, reliable shipping to get your orders to you promptly. Choose al-Kahf online market for a seamless shopping experience that brings convenience, style, and innovation right to your doorstep.</p>
    <Link to="/contact"  className='bg-primary-color py-3 px-6 text-2xl  border-0  text-white font-bold rounded-lg ' style={{marginTop:'3rem'}} id='pink-btn'>contact us</Link>
</div>

    </div>
    <div className="li h-[8px] w-[40vw] bg-gradient-to-r from-white via-primary-color to-white rounded mx-auto my-4"></div>

    </div>
  )
}

export default HomeAbout