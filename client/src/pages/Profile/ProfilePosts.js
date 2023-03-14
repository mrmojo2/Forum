import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PostsContainer } from '../../components'
import { useMyContext } from '../../context/AppContext'

const ProfilePosts = () => {
    const { getProfilePosts, profilePosts } = useMyContext()
    const params = useParams()
    useEffect(() => {
        getProfilePosts(params.userId)
    }, [])

    return (
        <PostsContainer posts={profilePosts} />
    )
}

export default ProfilePosts