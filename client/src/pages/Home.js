import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { PostsContainer } from '../components'
import { useMyContext } from '../context/AppContext'
import { AiOutlineReload } from 'react-icons/ai'

const Home = () => {
    const { posts, getPosts } = useMyContext()
    const navigate = useNavigate()

    return (
        <Wrapper>
            <header className='home-head'>
                <div className='heading'>
                    <h4>Top posts</h4>
                    <button className='btn create-post' onClick={() => navigate('createPost')}>Create Post</button>
                </div>
                <div className="sort">
                    <button className='sort-btn'>New</button>
                    <button className='sort-btn'>Hot</button>
                    <button className='sort-btn'>Month</button>
                    <button className='sort-btn'>Year</button>
                </div>
            </header>
            <div className='refresh-div'>
                <button className='btn main-btn refresh-btn' onClick={getPosts}><AiOutlineReload />refresh</button>
            </div>
            <PostsContainer posts={posts} />
        </Wrapper>
    )
}

const Wrapper = styled.div.attrs({ className: 'home-main' })`
    .home-head{
        border-bottom:2px solid rgba(0, 0, 0, 0.1);
        padding: 1.5rem;
        padding-bottom:0.95rem;
    }
    .heading{
        display:flex;
        justify-content:space-between;
    }
    .heading h4{
        font-size:2rem;
        font-weight:400;
    }
    .create-post{
        transition:none;
        background:#6692CC;
        color:white;
        font-size:1rem;
    }
    .create-post:hover{
        background:#6692dD;
    }

    .sort{
        margin-top:1rem;
        text-transform:capitalize;
    }

    .sort-btn{
        padding:0.5rem 1rem;
        border:none;
        background:transparent;
        border:1px solid rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    .sort-btn:hover{
        background:whitesmoke;
    }

    .refresh-div{
        display:flex;
        justify-content:center;
        margin-top:1rem;
    }

    .refresh-btn{
        border-radius:10px;
        display:flex;
        align-items:center;
        gap:0.5rem;
    }

    @media screen and (max-width:645px){
        .heading h4{
            font-size:1.25rem;
        }
        .create-post{
            font-size:0.75rem;
        }
        .sort-btn{
            padding:0.125rem 0.5rem;
            font-size:0.75rem;

        }

    }

`

export default Home