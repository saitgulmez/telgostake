import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from '../assets/logo1024.png'
// import logo from '../assets/logo-white-371-130.png'
// import logo from '../assets/logo-white-371-100.png'
import logo from "../assets/logo-black-371-130.png";

const NavBar = () => {
  const Links = [
    { name: "Home", link: "/home" },
    { name: "How to Stake", link: "/howtostake" },
    { name: "FAQ", link: "/faq" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* Logo Part */}
        {/* <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
        text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Telgo Stake
        </div> */}
        <div>
          <img src={logo} alt="logo" className="md:cursor-pointer w-[10rem]" />
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12  uppercase absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                // href={link.link}
                className="text-gray-800 hover:text-gray-400  duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
