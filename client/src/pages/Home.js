import React from 'react'
import styled from 'styled-components'
import { SinglePost } from '../components'

const Home = () => {
    return (
        <Wrapper>
            <header className='home-head'>
                <div className='heading'>
                    <h4>Top posts</h4>
                    <button className='btn create-post'>Create Post</button>
                </div>
                <div className="sort">
                    <button className='sort-btn'>New</button>
                    <button className='sort-btn'>Hot</button>
                    <button className='sort-btn'>Month</button>
                    <button className='sort-btn'>Year</button>
                </div>
            </header>
            <div className='posts-container'>
                <SinglePost />
                <SinglePost />
                <SinglePost />
                <SinglePost />
                <SinglePost />
            </div>
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

    .posts-container{
        padding:1.5rem;
        display:grid;
        grid-gap:1.5rem;
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