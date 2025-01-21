import { Slider } from 'primereact/slider'
import React, { useContext, useEffect } from 'react'
import Slieder from './Slieder'
import HomeAbout from './hoeAbout'
import HotProducts from './latestProducts'
import HomeProducts from './homeProd'
import HomeContact from './HomeContact'
import Footer from './Footer'
import { useAuth } from '../context/authContext'

const Home = () => {
  const [auth,setAuth]=useAuth();
  
  // console.log(auth)
  return (
   <>
{/* <p>{JSON.stringify(auth)}</p> */}
   <Slieder />
   <HotProducts/>
   <HomeAbout />
   <HomeProducts />
   <HomeContact />
   <Footer />
   </>
  )
}

export default Home