import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart} from "../store/cartSlice" 
import CartCard from './CartCard';
function Cart() {
  const cartItems = useSelector(store=>store.cart.cartItems)
  const dispatch = useDispatch();
  const handleClick =()=>{
    dispatch(clearCart())
  }
  return (
    <>
    <button className='border p-2 bg-[#a3acb5] text-white font-semibold m-1' onClick={handleClick}>Empty-Cart</button>
    <div className='flex flex-row flex-wrap gap-3 justify-center my-2 '>
      { cartItems.map((item)=>{
        return <CartCard key={item.id} {...item}/>
      })
        
      }
    </div>
    </>
  )
}

export default Cart