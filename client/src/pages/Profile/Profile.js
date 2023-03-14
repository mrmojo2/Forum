import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMyContext } from '../../context/AppContext'
import default_img from '../../assets/hqdefault.jpg'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import NotFound from '../NotFound'

const Profile = () => {
    const { logout, user, getProfile } = useMyContext()
    const params = useParams()

    const [profile, setProfile] = useState({})
    const [profileError, setProfileError] = useState(false)

    useEffect(() => {
        getProfile(params.userId)
            .then(foo => setProfile(foo.profile))
            .catch(err => setProfileError(true))
    })

    if (profileError) {
        return <NotFound />
    }

    return (
        <Wrapper>
            <div className='profile-info'>
                <div className='profile-pic-div'>
                    <img src={default_img} alt="user" className='profile-pic' />
                    {params.userId === user.userId && <button className='btn main-btn'>Edit Profile</button>}
                </div>
                <h3>{profile.name}</h3><br />
                <p>{profile?.bio || 'this user doesn\'t have a bio...lame'}</p>
                <br />
                <div className='profile-links'>
                    <NavLink to={`/profile/${params.userId}/`}>Posts</NavLink>
                    <NavLink to='comments' >Comments</NavLink>
                    <NavLink to='savedPosts'>Saved</NavLink>
                </div>
            </div>
            <Outlet />
            <button className='btn main-btn' onClick={logout}>logout</button>
        </Wrapper>
    )
}

const Wrapper = styled.div.attrs({ className: 'profile-main' })`
    .profile-info{
        padding:1.5rem;
        padding-bottom:0;
        border-bottom:2px solid rgba(0, 0, 0, 0.1);

    }

    .profile-pic-div{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    .profile-pic{
        width:70px;
        height:70px;
        border-radius:50%;
        object-fit:cover;
    }
    .profile-links{
        display:flex;
        gap: 2rem;
    }
    .profile-links>a{
        color:black;
        cursor:pointer;
        color:rgba(0, 0, 0, 0.6);
        padding-bottom:1.5rem;
    }
    .profile-links .active{
        border-bottom:4px solid #6692CC;
    }

    .profile-body{
        padding:1.5rem;
    }

`

export default Profile