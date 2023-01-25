import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"

function RestaurantMenu() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=17.385044&lng=78.486671&menuId=" +
        id
    )
      .then((res) => res.json())
      .then((d) => {
       
        setRestaurant(d.data);     
      }).catch((e)=>{

      });
  }, []);

  return !restaurant? (  <div className="flex flex-row flex-wrap justify-center gap-2">
    <Shimmer/>
  </div> ) : (
    <div>
       <div className="flex flex-row bg-[#171A29] p-8 text-white gap-6">
        <img className="h-40"
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant.cloudinaryImageId}`}
          alt=""
        />
        <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">{restaurant?.name}</h1>
        <h3 className="text-gray-400">{restaurant?.area} {" , "} {restaurant?.city}</h3>
        <h3 className="text-gray-400">{restaurant?.cuisines?.join(" , ")}</h3>
        </div>

      </div>

   <div className="flex flex-col items-center gap-2 mt-2">
      {Object.values(restaurant?.menu?.items).map((item) => (
        <div  key={item.id} className="flex flex-row justify-between items-center w-3/6 border p-2 shadow-xl">
            <div>
                <h3 className="font-bold font-mono">{item.name}</h3>
                <h3 className="text-sm font-mono">Rs:{item.price/100}</h3>
               
            </div> 
            <div className="flex flex-col gap-2">
            <img className="h-28 rounded-lg" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item.cloudinaryImageId}`} alt="" />
            <Link
              href="#"
              className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </Link></div>
            
         </div>
       
      ))}
      </div>
       </div>
   
  ) ;
   
  }
     


export default RestaurantMenu;
