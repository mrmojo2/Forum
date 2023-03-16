import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMyContext } from '../../context/AppContext'
import { Alert, Loading, EditProfileForm } from '../../components'
import { AiFillCamera } from 'react-icons/ai'

const EditProfile = () => {
    const { profile, getProfile, user, showAlert, updateProfile, loading } = useMyContext()

    useEffect(() => {
        getProfile(user.userId)
    }, [])


    if (loading) {
        return <Loading />
    }

    return (
        <Wrapper>
            <EditProfileForm />
        </Wrapper>
    )
}

const Wrapper = styled.div.attrs({ className: 'edit-profile-main' })`
    .edit-profile-form{
        padding:1rem;
        background:#F5F5F5;
        border-radius:5px;
        box-shadow: 0 10px 24px hsla(0,0%,0%,0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
    }
    .profile-pic{
        width:100px;
        height:100px;
        border-radius:50%;
        object-fit:cover;
    }
    .form-row>label{
        font-weight:500;
    }
    .form-row>input,
    .form-row>select
    {
        height:1.65rem;
        width:100%;
    }
    
    .bio-input{
        height:3rem !important;
    }
    .btn-div{
        display:flex;
        gap: 1rem;
    }
`

export default EditProfile