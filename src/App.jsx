import { useState } from 'react'
// import './App.css'
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import HowToStake from './components/HowToStake';

function App() {

  return (
    <div className="w-screen h-screen overflow-auto m-4 ">
      <NavBar />


      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/notfound" element={<NotFoundPage />} />
          {/* <Route path="/howtostake" element={<HowToStake />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App
