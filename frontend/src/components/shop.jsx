import React, { useContext , useEffect } from 'react'
import HomeProducts from './homeProd'
import { FirstContext } from '../context/context'
import { TitleContext } from '../context/context'
import Banner from './Banner'

const Shop = () => {
  const {title,setTitle}=useContext(TitleContext);
  useEffect(() => {
    setTitle(prev=>({...prev, name: "shop your needs",bg_url:"/shop.jpg" }));
  }, []);  return (
    <div>
      <Banner />
      <HomeProducts />
    </div>
  )
}

export default Shop