import React from "react";
import { Link, NavLink } from 'react-router-dom';
// import logo from '../assets/logo1024.png'
// import logo from '../assets/logo-white-371-130.png'
// import logo from '../assets/logo-white-371-100.png'
import logo from '../assets/logo-black-371-130.png'
import './NavBar.css';

const NavBar = () => {
  const navItem = "font-med text-xl px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 "

  return (
      <nav className="fixed flex justify-end space-x-4 items-center text-center w-[98%] h-24 mx-auto ">
          <img className="logo" src={logo} alt="" />
        <Link to="/home" className={navItem}> Home </Link>
        <Link to="/howtostake" className={navItem}> How to Stake </Link>
        <Link to="/faq" className={navItem}> FAQ </Link>
        <Link to="/about" className={navItem}> About Us </Link>
        <Link to="/contact" className={navItem}> Contact </Link>
    </nav>
  );
};

export default NavBar;
