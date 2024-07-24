import React from 'react'
import Banner from './Banner'
import { useContext ,useEffect } from 'react'
import { TitleContext } from '../context/context'
import HomeAbout from './hoeAbout'
import Review from './Review'
const About = () => {
  const {title,setTitle}=useContext(TitleContext);
  useEffect(() => {
    setTitle(prev=>({...prev, name: "about us",bg_url:"/aboutpage2.jpg" }));
  }, [setTitle]);
  return (
    <div>
      <Banner />
      <HomeAbout />
      <Review />
    </div>
  )
}

export default About