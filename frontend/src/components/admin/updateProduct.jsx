import React, { useContext, useEffect } from 'react'
import { Dialog } from 'primereact/dialog';
import { VisibleContext } from '../../context/context';
import toast from 'react-hot-toast';
const UpdateProduct = ({product,getSingleProduct}) => {
  const {visible, setVisible} = useContext(VisibleContext)
  console.log(product)
// getSingleProduct();

if (!product || product.length === 0) {
  return null; // Render nothing if product is not yet available
}

const updateProductHandler=async(e)=>{
try {
  e.preventDefault();
  
} catch (error) {
  console.log(error);
  toast.error("something went wrong",{
    duration:2000,
    position: 'top-center',
      className: 'text-[1.5rem]',
  })
}
}




  return (
    <div className="card flex justify-content-center">
  
    <Dialog visible={visible} style={{ width: '70vw'  }} closable="true" closeIcon="" closeOnEscape="true" headerClassName='w-full bg-red-300 px-3 py-3' onHide={() => {if (!visible) return; setVisible(false); }}
      pt={{
        closeButton:"",
        closeButtonIcon:'fs-12 h-[10vh] my-2 mx-2 '
      }}
      >
    <div>
      <form action="" className='w-[50%]  flex mx-auto mt-8 flex-column justify-around items-center px-6 border-1 py-4 rounded-md shadow-md my-4' onSubmit={updateProductHandler}>
        <h1 className='text-[3rem] text-primary-color font-bold'>update product</h1>
        <img src={`http://localhost:8080/api/v1/product/get-image/${product[0]._id}`} alt="" className='h-[30rem]'/>
        <input type="text" className='w-full p-3 outline-none rounded-md text-[1.5rem] my-3 shadow-sm border-1'  placeholder='please enter product name' name='name' value={product[0].name}/>
        <input type="number" className='w-full p-3 outline-none rounded-md text-[1.5rem] my-3 shadow-sm border-1'  placeholder='please enter product price' name="price" id="" value={product[0].price}/>
        <input type="file"  className='w-full p-3 outline-none rounded-md text-[1.5rem] my-3 shadow-sm border-1'  placeholder='please choose product image' name="image" id="" accept='image/*' />
        <input type="submit" value="update product" className=' px-6 py-3 outline-none rounded-md text-[1.5rem] my-3 bg-primary-color text-white cursor-pointer'/>
      </form>
    </div>
    </Dialog>
</div>  
)
}

export default UpdateProduct