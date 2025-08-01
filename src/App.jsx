import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './App.css'

import Navbar from './Component/NavBar/Navbar'
import LayOut from './Component/LayOut/LayOut'
import Home from './Component/Home/Home'
import About from './Component/About/About'

import Contact from './Component/Contact/Contact';
import Portfolio from './Component/Portfolio/Portfolio';




export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Portfolio",
          element: <Portfolio />,
        },
        {
          path: "Contact",
          element: <Contact/>,
        },
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );


  return (
    <>

      <Navbar />
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
    
    </>

  )
}
