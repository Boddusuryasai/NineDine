import React from "react";
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import RestaurantList from "./Components/RestaurantList";
import RestaurantMenu from "./Components/RestaurantMenu";
import Cart from "./Components/Cart";
import { store } from "./store/store";
import { Provider } from "react-redux";


const Container =()=>{
  
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  );
} 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Container/>,
    children: [
      {
      path:"/",
      element: <RestaurantList/>
      },
      {
        path:"/about",
        element: <About/>
        },
        {
          path:"/cart",
          element: <Cart/>
          },
          {
            path:"/restaurantinfo/:id",
            element: <RestaurantMenu/>
            }
    ]
  }
]);



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Provider store={store}>
        <RouterProvider router={router}/>
            </Provider>)