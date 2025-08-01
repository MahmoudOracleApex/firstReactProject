import React from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import DetailContact from '../DetailContact/DetailContact'

import { Outlet } from 'react-router-dom'



export default function LayOut() {
    return (
        <>
            <Navbar />
            <Outlet />
            <DetailContact/>
            <Footer/>
             
        </>
    )
}
