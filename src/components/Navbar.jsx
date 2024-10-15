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
    // <nav className="bg-white border-gray-200 dark:bg-gray-900">
    // <nav className="shadow-md w-full fixed top-0 left-0 ml-10">
    // <nav className="md:container w-full fixed top-0 left-0 ">
    <nav className="w-full sticky top-0 left-0 mr-0 ml-0  ">
      {/* <nav className="w-full fixed top-0 left-0 mr-0 ml-0  "> */}
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
          {/* <ul
          className={`md:flex md:items-center md:pb-0 pb-12 uppercase absolute md:static md:z-auto z-[-1] left-0 w-full h-screen md:h-auto md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-20 bg-white " : "top-[-490px]"
          }`}http://localhost:5173/about
        > */}
          {Links.map((item) => (
            <li
              key={item.name}
              className="md:ml-2 text-xl md:my-0 my-3 "
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link
                to={item.link}
                // href={link.link}
                // className="text-gray-800 hover:text-gray-400  duration-500"
                // "hover:underline hover:decoration-red-500 hover:decoration-2"
                // className="font-bold text-sm px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 "
                // className="font-bold text-sm px-3 py-2 text-slate-700 md:text-white rounded-lg hover:bg-slate-100 hover:text-slate-900 "
                className="font-bold text-sm px-3 py-2 text-slate-700 md:text-white rounded-lg  hover:text-slate-900 "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* {isOpen && (
        <div className="container px-5 md:py-24 py-10 mx-auto flex flex-wrap mt-40 md:mt-10" >
          <div className="h-full p-4 lg:w-1/3 ">
            <div className=" bg-gray-100 px-8 pt-16 pb-16 ">
              <h2 className="text-xs mb-1">CATEGORY</h2>
              <h1 className="title-font sm:text-2xl text-xl  mb-3">
                Raclette Blueberry Nextious
              </h1>
              <p className="mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
              </a>
            </div>
          </div>

          <div className="h-full p-4 lg:w-1/3">
            <div className="bg-gray-100 px-8 pt-16 pb-16 ">
              <h2 className="text-xs mb-1">CATEGORY</h2>
              <h1 className="title-font sm:text-2xl text-xl mb-3">
                Selvage Poke Waistcoat
              </h1>
              <p className="mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="h-full p-4 lg:w-1/3">
            <div className="bg-gray-100 px-8 pt-16 pb-16 ">
              <h2 className="text-xs mb-1">CATEGORY</h2>
              <h1 className="title-font sm:text-2xl text-xl mb-3">
                Selvage Poke Waistcoat
              </h1>
              <p className="mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
              </a>
            </div>
          </div>
        </div>
      )}   */}

    </nav>
  );
};

export default NavBar;
