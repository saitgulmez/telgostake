import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

// import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
// import Home from './components/Home';
// import NavBar from './components/NavBar.jsx';
// import NotFoundPage from './components/NotFoundPage';
// import HowToStake from './components/HowToStake';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     // errorElement: <NotFoundPage />,
//   },
//   {
//     path: "/about",
//     element: <NavBar />,
//   },
//   {
//     path: "/howtostake",
//     element: <HowToStake />
//   }
// ]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
