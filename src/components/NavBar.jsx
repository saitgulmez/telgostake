import React from "react";
import { Link, NavLink } from 'react-router-dom';
// import logo from '../assets/logo1024.png'
// import logo from '../assets/logo-white-371-130.png'
// import logo from '../assets/logo-white-371-100.png'
import logo from '../assets/logo-black-371-130.png'

const NavBar = () => {
  const navItem = "font-med text-xl px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 "

  return (
    <nav className="fixed flex justify-end space-x-4 border-b items-center text-center w-[98%] h-24 mx-auto">
      <img className="logo" src={logo} alt="" />
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className=" inline-flex m-4 items-center p-2 w-20 h-15 justify-center text-sm  text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-10 h-7 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <Link to="/home" className={navItem}>
          {" "}
          Home{" "}
        </Link>
        <Link to="/howtostake" className={navItem}>
          {" "}
          How to Stake{" "}
        </Link>
        <Link to="/faq" className={navItem}>
          {" "}
          FAQ{" "}
        </Link>
        <Link to="/about" className={navItem}>
          {" "}
          About Us{" "}
        </Link>
        <Link to="/contact" className={navItem}>
          {" "}
          Contact{" "}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
