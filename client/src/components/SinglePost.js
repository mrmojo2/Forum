import React from 'react'
import styled from 'styled-components'
import { RxThickArrowUp, RxThickArrowDown } from 'react-icons/rx'
import { BiCommentDetail, BiBookmark, BiFlag } from 'react-icons/bi'

const SinglePost = () => {
    return (
        <Wrapper>
            <div className='upvotes'>
                <button className='upvote-btn upvote'><RxThickArrowUp /></button>
                <p>69</p>
                <button className='upvote-btn downvote'><RxThickArrowDown /></button>
            </div>
            <div className='post-main'>
                <header>
                    <h3 className='post-header'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea totam minima fuga iusto vel pariatur dicta! Praesentium corporis quaerat quisquam delectus ab ut fugit, eligendi sunt! Error aspernatur expedita doloribus?</h3>
                </header>
                <div className='tags'>
                    <a href='#'>mech</a>
                    <a href='#'>programming</a>
                    <a href='#'>civil</a>
                </div>
                <footer className='post-footer'>
                    <div><BiCommentDetail />69 comments</div>
                    <div><BiBookmark />Save</div>
                    <div><BiFlag />Report</div>
                </footer>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.article.attrs({ className: "single-post" })`
    .upvotes{
        background:whitesmoke;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        padding:1rem 0rem;
    }
    .upvote-btn{
        background:transparent;
        border:none;
        font-size:2rem;
        color:rgba(0,0,0,0.6);
        cursor:pointer;
    }
    .downvote:hover{
        color:#6692CC;
    }
    .upvote:hover{
        color:#EA6267;
    }

    .post-main{
        background:whitesmoke;
        padding:1rem 0;
        display:grid;
        grid-template-rows:2fr 1fr 1fr;
        grid-gap:0.5rem;
    }
    .post-header{
        font-weight:400;
        font-size:1.25rem;
    }
    .tags{
        display:flex;
        align-items:center;
    }
    .tags>a{
        background:#6692CC;
        margin:0 0.25rem;
        color:white;
        padding:0.125rem 0.35rem;
        border-radius:5px;
    }

    .post-footer{
        display:flex;
        gap:1rem;
    }

    .post-footer>div{
        display:flex;
        align-items:center;
        color:rgba(0,0,0,0.6);
        font-size:1rem;
        cursor:pointer;
    }
    .post-footer>div>svg{
        font-size:1.5rem;
    }

    @media screen and (max-width:640px){
        .post-header{
            font-weight:400;
            font-size:1rem;
        }
        .tags>a{
            margin:0 0.125rem;
            font-size:0.85rem;
        }
        .post-footer>div{
            display:flex;
            align-items:center;
            color:rgba(0,0,0,0.6);
            font-size:0.95rem;
            cursor:pointer;
        }
        .post-footer>div>svg{
            font-size:1.25rem;
        }
    }
`

export default SinglePost