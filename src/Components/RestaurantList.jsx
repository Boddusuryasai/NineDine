import React, { useState , useEffect } from 'react'
import RestaurantCard from './RestaurantCard'

function RestaurantList() {
   const [restaurants , setRestaurants] = useState([]);
   useEffect(() => {
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    .then(res=> 
        res.json() 
    )
    .then(json=>setRestaurants(json?.data?.cards[2]?.data?.data?.cards)) 
   }, [])
   
 

  return (
    <div className='flex flex-row flex-wrap justify-center gap-2'>
        {
            restaurants && restaurants.map((restaurant)=>{
                 console.log(restaurant.data);
          return   < RestaurantCard {...restaurant.data}/>
            })
        
        }
        
    </div>
  )
}

export default RestaurantList