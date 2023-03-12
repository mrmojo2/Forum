import React from 'react'
import { useMyContext } from '../context/AppContext'

const Profile = () => {
    const { logout } = useMyContext()
    return (
        <div>
            <button className='btn' onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile