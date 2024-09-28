import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import HowToStake from './components/HowToStake';

function App() {

  return (
    <div className="w-screen h-screen overflow-auto m-4 ">
      <div className="bg-black md:bg-red-950 lg:bg-green-950 text-white md:font-bold sm:text-center md:h-10 xsm:h-40" >
        Deneme
      </div>
    </div>
  );
}

export default App
