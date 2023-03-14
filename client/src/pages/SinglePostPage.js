import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useMyContext } from '../context/AppContext'
import { NotFound } from '../pages'

const SinglePostPage = () => {
    const { getSinglePost } = useMyContext()
    const params = useParams()

    const [post, setPost] = useState({})
    const [postError, setPostError] = useState(false)

    useEffect(() => {
        getSinglePost(params.id)
            .then(foo => {
                setPost(foo.post)
            })
            .catch(error => {
                setPostError(true)
            })
    }, [])

    if (postError) {
        return (
            <NotFound />
        )
    }


    return (
        <Wrapper>
            <header className='post-header post-div'>
                <h2> {post.title}</h2><br />
                <div className='post-info'>
                    <p>Posted At: {new Date(post.createdAt).toDateString().split(' ').slice(1).join(' ')}</p>
                    <p>Modified At: {new Date(post.createdAt).toDateString().split(' ').slice(1).join(' ')}</p>
                    <p>Posted By: <Link to={`/profile/${post.postedBy}/`}> {post.poster} </Link></p>
                </div>
            </header>
            <div className='post-body post-div'>
                <p style={{ whiteSpace: 'pre-line' }}>{post.body}</p>
            </div>
            <div className='post-comments post-div'>
                <h5>Comments</h5>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div.attrs({ className: 'post-main' })`
    .post-div{
        padding:1.5rem;
        border-bottom:2px solid rgba(0, 0, 0, 0.1);

    }

    .post-header>h2{
        font-weight:400;
        font-size:2rem;
    }

    .post-info{
        display:flex;
        flex-direction:column;
        gap:1rem;
    }
    .post-info>p{
        color:rgba(0, 0, 0, 0.6);
    }

    .post-body>p{
        letter-spacing:1px;
    }
`

export default SinglePostPage