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