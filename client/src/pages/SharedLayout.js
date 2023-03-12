import React from 'react'
import { Outlet } from 'react-router-dom'
import { Eventsbar, Minibar, Navbar, Sidebar } from '../components'

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <div className="main-div">
                <Sidebar />
                <Minibar />
                <Outlet />
                <Eventsbar />
            </div>
        </>
    )
}


export default SharedLayout