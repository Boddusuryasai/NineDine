import { useSelector, useDispatch } from 'react-redux';
import { addItem , removeItem , clearCart} from "../store/cartSlice"
const CartCard = ({cloudinaryImageId
, name , price, id})=>{
    const dispatch = useDispatch()
    const handleRemoveItem = ()=>{
        dispatch(removeItem(id))
    }
    
    return (
        
        <div className="max-w-[200px] border p-2 flex flex-col  gap-1 shadow-lg">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <h4>{price}</h4>
            <div className="flex flex-row justify-between">
            <button className="border px-2" onClick={handleRemoveItem}>-</button>
            </div>
        </div>
    )
};
export default CartCard;