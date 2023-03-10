import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from "../store/cartSlice"


function restaurantInfo() {
  const { id } = useParams();
  const [restaurantInfo, setrestaurantInfo] = useState(null);
  const [restaurantMenu, setrestaurantMenu] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [filteredrestaurantMenu, setfilteredrestaurantMenu] = useState([]);
  const cartItems = useSelector(store=>store.cart.cartItems)
  const dispatch = useDispatch() 

  const handleAdd=(item)=>{
    dispatch(addItem(item))
  }

  const isInCat =(item)=>{
   const exists = cartItems.find((i)=>{
      if(i.id ===item.id){
        return true
      }
      return false
    })
    return exists
}

  useEffect(() => {
    fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=17.385044&lng=78.486671&menuId=${id}`
    )
      .then((res) => res.json())
      .then((d) => {
        setrestaurantInfo(d.data);
        setrestaurantMenu([...Object.values(d.data?.menu?.items)])
        setfilteredrestaurantMenu([...Object.values(d.data?.menu?.items)])
      })
      .catch((e) => {});
  }, []);
  function handleclick(searchtext, restaurantMenu) {
    let data = restaurantMenu.filter((item) => {
      return item?.name
        ?.toLowerCase()
        .includes(searchtext.toLowerCase());
    });
    setfilteredrestaurantMenu(data);
    setsearchtext("")
  }

  return !restaurantInfo ? (
    <div className="flex flex-row flex-wrap justify-center gap-2">
      <Shimmer />
    </div>
  ) : (
    <div>
      <div className="flex flex-col gap-3 md:flex-row bg-[#171A29] p-4 text-white md:gap-6 font-[Poppins]">
        <img
          className="h-40"
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurantInfo?.cloudinaryImageId}`}
          alt=""
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">{restaurantInfo?.name}</h1>
          <h3 className="text-gray-400">
            {restaurantInfo?.area} {" , "} {restaurantInfo?.city}
          </h3>
          <h3 className="text-gray-400">{restaurantInfo?.cuisines?.join(" , ")}</h3>
          <div className="mt-5">
          <input className="placeholder:italic placeholder:text-black  bg-white  border border-slate-300 rounded-md py-2 pl-3 pr-6 text-black shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" autoComplete="off" placeholder="Search for an Item..." type="text" name="search"  value={searchtext}
          onChange={(e) => setsearchtext(e.target.value)}/>
         <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-5 py-2 ml-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={() => handleclick(searchtext, restaurantMenu)}>Search</button>
         </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
        {filteredrestaurantMenu && filteredrestaurantMenu.map((item) => (  
           <div className="relative w-[250px] mt-4" key={item.id}>
          {item.cloudinaryImageId ? <img className="w-full h-[250px] rounded-md"  src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item.cloudinaryImageId}`}
                alt={item.name}/>: <div className="w-full h-[250px] rounded-md border"></div>}
          <div className="w-[230px] absolute border shadow-lg left-[50%] bottom-[-5%]  bg-white/50  p-4 rounded-xl translate-x-[-50%] ">
              <div className="flex flex-row  justify-between items-center gap-3">
              <div>
                  <h4 className="text-black text-md font-bold">{item.name}</h4>
                  <small className="text-black font-semibold">???{item.price / 100}</small>
              </div>
         
             
                { isInCat(item) ? 
                <Link to="/cart" className="text-white bg-[#171A29]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 " >
                 Go to cart</Link> :
                <button  className="text-white bg-[#171A29]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 " onClick={()=>handleAdd(item)}><svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>Add</button>
                
                }
          </div>
          </div>
          </div>))}
          
        
      </div>
    </div>
  );
}

export default restaurantInfo;