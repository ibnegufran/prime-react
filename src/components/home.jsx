import { Slider } from 'primereact/slider'
import React from 'react'
import Slieder from './Slieder'
import HomeAbout from './hoeAbout'
import HotProducts from './latestProducts'
import HomeProducts from './homeProd'
import HomeContact from './HomeContact'
import Footer from './Footer'

const Home = () => {
  return (
   <>
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