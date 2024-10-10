import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import HowToStake from './components/HowToStake';
import Contact from './components/Contact';
import FAQ from './components/FAQ';

function App() {

  return (
    <div className="overflow-y-scroll no-scrollbar mr-4 ml-4">
      <Navbar />
      {/* <hr className="mx-0 md:my-24  bg-gray-200 md:border-2 border-2 md:w-screen dark:bg-gray-700"></hr> */}

      {/* <div className="bg-indigo-600 w-full h-screen">
        <Home />
      </div> */}
      <div>
        <Routes>
          <Route path="/" />
          <Route path="/home" element={<Home />} />
          <Route path="/notfound" element={<NotFoundPage />} />
          <Route path="/howtostake" element={<HowToStake />} />
          <Route path="/FAQ" element={<FAQ />} className="w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-600"/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
