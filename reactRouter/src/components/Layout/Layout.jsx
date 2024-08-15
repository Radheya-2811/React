import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/footer'
import { Outlet } from 'react-router'
function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout
