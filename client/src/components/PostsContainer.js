import React from 'react'
import { useMyContext } from '../context/AppContext'
import Loading from './Loading'
import SinglePost from './SinglePost'

const PostsContainer = () => {
    const { loading, posts } = useMyContext()

    if (loading) {
        return <Loading />
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