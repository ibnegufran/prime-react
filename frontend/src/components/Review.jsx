import { Carousel } from 'primereact/carousel'
import React, { useState } from 'react'

const Review = () => {
// const [reviews,setReviews] =useState([
    const reviews=[

    {
        name:"khalid s.",
        rev: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi iure repellat, atque mollitia animi aut illum error quaerat delectus incidunt cumque ipsum, sequi placeat? Ea adipisci doloremque dolor a."
    },
    {
        name:"shahid s.",
        rev: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi iure repellat, atque mollitia animi aut illum error quaerat delectus incidunt cumque ipsum, sequi placeat? Ea adipisci doloremque dolor a."
    },
    {
        name:"salman s.",
        rev: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi iure repellat, atque mollitia animi aut illum error quaerat delectus incidunt cumque ipsum, sequi placeat? Ea adipisci doloremque dolor a."
    },
    {
        name:"khalid s.",
        rev: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi iure repellat, atque mollitia animi aut illum error quaerat delectus incidunt cumque ipsum, sequi placeat? Ea adipisci doloremque dolor a."
    }
];
const responsiveOptions = [
   
    {
        breakpoint: '1600px',
        numVisible: 1,
        numScroll: 1
    }, {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
];

const reviewTemplate=(review)=>{
    return(
<div className="border-1 border-gray-200 p-6 shadow-lg">
    <h4 className='text-[2.5rem] mb-2 font-bold text-primary-color'>{review.name}</h4>
    <p  className='text-[1.5rem] mb-2 text-gray-500'>{review.rev}</p>
    <div className="">
        <span className='pi pi-star-fill text-2xl text-primary-color'></span>
        <span className='pi pi-star-fill text-2xl text-primary-color'></span>
        <span className='pi pi-star-fill text-2xl text-primary-color'></span>
        <span className='pi pi-star-fill text-2xl text-primary-color'></span>
        <span className='pi pi-star-half-fill text-2xl text-primary-color'></span>

    </div>
</div>
    );
}






    
  return (
    <div className="card mt-8">
        <h2 className='text-[3.5rem] font-bold text-primary-color my-4 text-center'>reviews</h2>
    <Carousel value={reviews} numVisible={1} numScroll={1} className="custom-carousel" circular={true}
    autoplayInterval={3000} itemTemplate={reviewTemplate}  containerClassName=' w-[95vw] md:w-[50vw] mx-auto ' prevIcon="text-[2rem]  pi pi-chevron-left" nextIcon="text-[2rem]  pi pi-chevron-right"  
    pt={
        {

        indicatorButton:'w-[3rem]  mx-2 my-6 ',
        previousButton:'mx-4',
        nextButton:'mx-4'
    }
}
    
    ></Carousel>
</div>
  )
}

export default Review