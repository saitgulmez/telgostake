import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from '../assets/logo1024.png'
// import logo from '../assets/logo-white-371-130.png'
// import logo from '../assets/logo-white-371-100.png'
import logo from "../assets/logo-black-371-130.png";

const NavBar = () => {
  const Links = [
    { name: "Home", link: "/home" },
    // { name: "How to Stake", link: "/howtostake" },
    { name: "FAQ", link: "/faq" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 left-0 mr-0 ml-0  ">
      <div className="md:flex items-center  justify-between  py-4 md:px-10 px-7 bg-gradient-to-r from-stone-500 to-sky-700">
        {/* <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> */}
        {/* Logo Part */}
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
        text-gray-800 "
        >
          <img
            src={logo}
            alt="logo"
            className="md:cursor-pointer w-[10rem] md:ml-16 "
          />
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden  "
        >
          <ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 uppercase absolute md:static md:bg-transparent md:z-auto z-[-1] left-0 w-full h-screen md:h-auto md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-20 bg-white h-[96rem] " : "top-[-490px] "
          }`}
        >

          {Links.map((item) => (
            <li
              key={item.name}
              className="md:ml-2 text-xl md:my-0 my-3 "
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link
                to={item.link}
                className="font-bold text-sm px-3 py-2 text-slate-700 md:text-white rounded-lg  hover:text-slate-900 "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>


    </nav>
  );
};

export default NavBar;
