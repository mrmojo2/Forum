import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Eventsbar, Minibar, Navbar, Sidebar } from '../components'
import { useMyContext } from '../context/AppContext'

const SharedLayout = () => {
    const { getPosts } = useMyContext()
    useEffect(() => {
        getPosts()
    }, [])
    return (
        <>
            <Navbar />
            <Minibar />
            <div className="main-div">
                <Sidebar />
                <Outlet />
                <Eventsbar />
            </div>
        </>
    )
}


export default SharedLayout