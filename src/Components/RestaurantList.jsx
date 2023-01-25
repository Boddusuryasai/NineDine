import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-2 bg-[#F9FBFE]">
      {isloading ? (
        <Shimmer />
      ) : (
        restaurants &&
        restaurants.map((restaurant) => {
          return (
            <Link to={`/restaurantinfo/${restaurant?.data?.id}`} key={restaurant?.data?.id}>
            <RestaurantCard {...restaurant?.data}  />
            </Link> 
          );
        })
      )}
    </div>
  );
}

export default RestaurantList;
