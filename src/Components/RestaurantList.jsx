import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [searchtext, setsearchtext] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      })
      .catch((error) => {});
  }, []);
  function handleclick(searchtext, restaurants) {
    let data = restaurants.filter((restaurant) => {
      return restaurant?.data?.name
        ?.toLowerCase()
        .includes(searchtext.toLowerCase());
    });
    setFilteredRestaurants(data);
    setsearchtext("")
  }
  return (
    <div>
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between items-center p-1">
      <input className="placeholder:italic placeholder:text-slate-400  bg-white  border border-slate-300 rounded-md py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" autoComplete="off" placeholder="Search for Restuarant..." type="text" name="search"  value={searchtext}
          onChange={(e) => setsearchtext(e.target.value)}/>
         <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={() => handleclick(searchtext, restaurants)}>Search</button>
         
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-2 bg-[#F9FBFE]">
        {isloading ? (
          <Shimmer />
        ) : (
          filteredRestaurants &&
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={`/restaurantinfo/${restaurant?.data?.id}`}
                key={restaurant?.data?.id}
              >
                <RestaurantCard {...restaurant?.data} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default RestaurantList;
