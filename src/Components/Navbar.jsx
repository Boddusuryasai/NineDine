import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <nav className="bg-[#171A29] px-2 sm:px-4 py-2.5   dark:bg-gray-900 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dybiiddob/image/upload/v1674560039/logo_iiia3s.png"
              className="h-16 mr-3 md:h-9"
              alt="NINE-DINE Logo"
            />
            <span className="self-center text-white text-xl font-bold whitespace-nowrap dark:text-white">
              NINE-DINE
            </span>
          </Link>
          {!toggle ? (
            <AiOutlineMenu
              className="text-white text-2xl md:hidden block"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <AiOutlineClose
              className="text-white text-2xl md:hidden block"
              onClick={() => setToggle(!toggle)}
            />
          )}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          {/* responsive menu */}
          {
            <ul
              className={`fixed w-full  duration-300 bg-[#171A29] h-screen top-[68px] md:hidden flex flex-col p-4 mt-4
          ${toggle ? "left-0" : "left-[-100%]"}`}
            >
              <li  onClick={() => setToggle(!toggle)}>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li  onClick={() => setToggle(!toggle)}>
                <Link
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li  onClick={() => setToggle(!toggle)}>
                <Link
                  to="/cart"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Cart
                </Link>
              </li>
            </ul>
          }
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
