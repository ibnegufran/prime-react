import React, { useContext, useEffect } from 'react'
import { TitleContext } from '../context/context'
const Banner = () => {
  const {title,setTitle}=useContext(TitleContext);
  useEffect(() => {
    setTitle({ name: "about us",bg_url:"/aboutpage.jpg" });
  }, [setTitle]);


  return (
    <div>
        <div className={`h-[40vh] w-screen  flex items-center justify-center bg-no-repeat bg-cover bg-center`}  style={{
        background: `linear-gradient(rgb(241 237 237 / 10%), rgb(0 0 0 / 60%)) 80% center, url('${title.bg_url}')`,
      }}>
            <h2 className='text-[4rem] capitalize font-bold text-white'>{title.name}</h2>

        </div>
    </div>
  )
}

export default Banner