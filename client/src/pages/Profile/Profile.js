import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMyContext } from '../../context/AppContext'
import { NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'

import { MdSchool, MdOutlineCalendarMonth } from 'react-icons/md'
import { Loading } from '../../components'

const ProfileHead = () => {
    const { user, loading, profile } = useMyContext()
    const navigate = useNavigate()
    const params = useParams()

    if (loading) {
        //we don't need two loadings! (one is in PostsContainer)
        return <></>
    }

    return (
        <div className='profile-info'>
            <div className='profile-pic-div'>
                <img src={profile.profile_pic} alt="user" className='profile-pic' />
                {params.userId === user.userId && <button className='btn main-btn' onClick={() => navigate('/editProfile')}>Edit Profile</button>}
            </div>
            <h3>{profile?.name}</h3>
            <br />
            <div className='more-info'>
                <p><MdOutlineCalendarMonth />joined: {new Date(profile?.createdAt).toDateString().split(' ').slice(1).join(' ')}</p>
                <p><MdSchool />faculty: {profile?.faculty}</p>
            </div><br />
            <p>{profile?.bio || 'this user doesn\'t have a bio...lame'}</p>
            <br />
            <div className='profile-links'>
                <NavLink to={`/profile/${params.userId}/`}>Posts</NavLink>
                <NavLink to='comments' >Comments</NavLink>
                <NavLink to='savedPosts'>Saved</NavLink>
            </div>
        </div>
    )
}


const Profile = () => {
    const { logout, getProfile } = useMyContext()
    const params = useParams()
    const location = useLocation()

    //with this approach getProfile() is sent even when going to comments or saved as the location changes
    useEffect(() => {
        getProfile(params.userId)
    }, [location])

    return (
        <Wrapper>
            <ProfileHead />
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

    .profile-info>h3{
        font-weight:500;
        font-size:1.25rem;
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

    .profile-name{
        display:flex;
        align-items:center;
        gap:0.5rem;
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

    .more-info{
        display:flex;
        gap:0.95rem;
        text-transform:capitalize;
    }
    .more-info>p{
        color:rgba(0, 0, 0, 0.8);
        display:flex;
        align-items:center;
        gap:0.45rem;
    }
    .more-info svg{
        font-size:1.25rem;
    }

`

export default Profile