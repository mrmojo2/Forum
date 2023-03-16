import React from 'react'
import { useMyContext } from '../context/AppContext'
import Loading from './Loading'
import SinglePost from './SinglePost'

const PostsContainer = ({ posts }) => {
    const { loading } = useMyContext()

    if (loading) {
        return <Loading />
    }

    if (posts.length === 0) {
        return <h2>No posts to display</h2>
    }

    return (
        <div className='posts-container'>
            {posts.map((post, i) => {
                return (
                    <SinglePost {...post} key={i} />
                )
            })}
        </div>
    )
}

export default PostsContainer