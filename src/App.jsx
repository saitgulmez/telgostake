import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import HowToStake from './components/HowToStake';

function App() {

  return (
    <>
      <Navbar />
      <div className="bg-indigo-600 w-full h-screen">
      </div>
    </>
  );
}

export default App
