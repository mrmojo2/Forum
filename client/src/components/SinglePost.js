import React from 'react'
import styled from 'styled-components'
import { RxThickArrowUp, RxThickArrowDown } from 'react-icons/rx'
import { BiCommentDetail, BiBookmark, BiFlag } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const SinglePost = ({ title, upvotes, comments, tags, _id }) => {
    return (
        <Wrapper>
            <div className='upvotes'>
                <button className='upvote-btn upvote'><RxThickArrowUp /></button>
                <p>{upvotes}</p>
                <button className='upvote-btn downvote'><RxThickArrowDown /></button>
            </div>
            <div className='post-main'>
                <header className='h'>
                    <Link to={`/posts/${_id}`}>
                        <h3 className='post-header'>{title}</h3>
                    </Link>
                </header>
                <div className='tags'>
                    {tags.map((tag, i) => {
                        return <a href='#' key={i}>{tag}</a>
                    })}
                </div>
                <footer className='post-footer'>
                    <div><BiCommentDetail />{comments} comments</div>
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

    .h>a:hover{
        text-decoration:underline;
    }

    .post-header{
        font-weight:400;
        font-size:1.25rem;
        color:black;
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