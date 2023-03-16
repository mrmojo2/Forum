import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loading, PostsContainer } from '../../components'
import { useMyContext } from '../../context/AppContext'

const ProfilePosts = () => {
    const { profilePosts, loading } = useMyContext()

    return (
        <PostsContainer posts={profilePosts} />
    )
}

export default ProfilePosts