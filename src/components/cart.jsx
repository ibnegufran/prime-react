import { Button } from 'primereact/button';
import React from 'react'
import {useCart} from 'react-use-cart'

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
        cartTotal
    }=useCart();
    if(isEmpty) return( <h1 className='text-[3rem] my-6 text-red-500 font-bold text-center'>your cart is empty</h1>);
  return (
    <div className='px-4'>
        <div className=" max-w-[1200px] mx-auto py-8">
            <h3 className='text-[3.5rem] text-primary-color my-4 font-bold text-center'>your shopping cart</h3>
            <p className='text-[2rem] my-2 '>cart ({totalUniqueItems}) total items  ({totalItems}):  </p>
            <table className='w-full bg-white'>
                <tbody>
                    {items.map((ele,index)=>{
                        return(
                            <tr>
                                <td className='text-center text-[1.8rem] border-1 border-gray-200 pl-4 md:p-2 mx-auto'><img src={ele.img_url} alt="" className='h-[8vh] w-[8rem] md:h-[10vh] md:w-[10rem]  md:m-2'/></td>
                                <td className='text-center text-[1.4rem] md:text-[1.8rem] border-1 border-gray-200 py-2 px-1 md:p-2'>{ele.name}</td>
                                <td className='text-center text-[1.4rem] md:text-[1.8rem] border-1 border-gray-200 py-2 px-3 md:p-2'>₹ {ele.price}</td>
                                <td className='text-center text-[1.4rem] md:text-[1.8rem] border-1 border-gray-200 py-2 px-1 md:p-2'>Quantity ({ele.quantity})</td>
                                {/* <td className='text-center text-[1.4rem] md:text-[1.8rem] border-1 border-gray-200 py-2 px-1 md:p-2'>sub total (₹{ele.itemTotal})</td> */}
                                <td className='text-center text-[1.4rem] md:text-[1.8rem] border-1 border-gray-200 py-2 px-0 md:p-2'>
                                    <Button className='m-3 py-2 px-3 md:py-2 md:px-4 font-bold text-[1.5rem]  md:mx-2 pi pi-angle-up md:pi-plus block  md:inline-block' severity="secondary md:info" onClick={()=>updateItemQuantity(ele.id,ele.quantity +1)}></Button>

                                    <Button className='m-3 px-3 md:my-0 py-2 md:px-4  text-[1.5rem] pi pi-trash block  md:inline-block' severity="danger"  onClick={()=>removeItem(ele.id)}></Button>


                                    <Button className='m-3 py-2 px-3 md:py-2 md:px-4 font-bold text-[1.5rem] md:mx-2  block  md:inline-block pi pi-angle-down md:pi-plus' severity="secondary md:info"  onClick={()=>updateItemQuantity(ele.id, ele.quantity -1)}></Button>
                                </td>




                            </tr>
                        );



                    })}
                </tbody>
            </table>
            <div className="w-full text-center">
                <p className='text-[2rem] my-4 text-center'>grand total: ₹ {cartTotal}</p>
                <Button className='py-2 px-4  text-[2rem] mx-auto' severity="danger"   onClick={()=>emptyCart()} >delete all</Button>


<Button className='py-2 px-4 text-[2rem] mx-3' severity="success" >buy now</Button>
            </div>

        </div>
    </div>
  )
}

export default Cart