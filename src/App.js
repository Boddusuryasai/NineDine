import React from "react";
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import RestaurantList from "./Components/RestaurantList";

const Container =()=>{
   return (
     <>
       <Navbar />
       <RestaurantList/>
     </>
   );
} 

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Container/>)