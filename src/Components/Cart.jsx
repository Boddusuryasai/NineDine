import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart} from "../store/cartSlice" 
import CartCard from './CartCard';
function Cart() {
  const cartItems = useSelector(store=>store.cart.cartItems)
  const dispatch = useDispatch();
  const handleClick =()=>{
    dispatch(clearCart())
  } 
  const price = (cartItems)=>{
      const total = cartItems.reduce((a  ,b )=>{
            const k = (b.price/100)*b.count;
            return k+a;
      },0)
      return total
    }
    const notify = () =>{
     toast.success('Order Placed Succesfully.')
     setTimeout(()=>{
      handleClick()
     }, 3000)
   };
  return (
    <>
    {cartItems.length >0 ? <button className='border p-2 bg-[#a3acb5] text-white font-semibold m-1' onClick={handleClick}>Empty-Cart</button>: <h2 className='text-2xl text-gray-400 font-bold'>Your cart is Empty</h2>}
    <div className='flex flex-row flex-wrap gap-3 justify-center my-2 '>
      { cartItems.map((item)=>{
        return <CartCard key={item.id} {...item}/>
      })
     
      }
       
    </div>
    <div className='text-center my-4'>
    {cartItems.length >0 ? <div className=""
    >
      <h3>Total Price : {price(cartItems)}</h3>
      <button className='bg-gray-400 text-white p-4 border my-4' onClick={notify}>Place Order</button>
      <Toaster />
    </div>
    :null}
    </div>
    </>
  )
}

export default Cart