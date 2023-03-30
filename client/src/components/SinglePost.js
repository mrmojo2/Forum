import React, { useState } from 'react'
import styled from 'styled-components'
import { RxThickArrowUp, RxThickArrowDown } from 'react-icons/rx'
import { BiCommentDetail, BiBookmark, BiFlag, BiDotsVerticalRounded } from 'react-icons/bi'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useMyContext } from '../context/AppContext'





const SinglePost = ({ title, upvotes, comments, tags, _id, postedBy }) => {
    const [toggle, setToggle] = useState(false)
    const { user, deletePost } = useMyContext()

    const handleDelete = e => {
        deletePost(_id)
    }

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
                    {
                        (user.userId === postedBy || user.role === 'admin') &&
                        <button onClick={() => setToggle(!toggle)}>
                            <BiDotsVerticalRounded />
                        </button>
                    }
                    <div className={toggle ? 'post-options show-post-options' : 'post-options'}>
                        <ul>
                            <li><button><AiOutlineEdit />update post</button></li><br />
                            <li><button onClick={handleDelete}><AiOutlineDelete />delete post</button></li>
                        </ul>
                    </div>
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
        padding-right:1rem;
        display:grid;
        grid-template-rows:2fr 1fr 1fr;
        grid-gap:0.5rem;
    }
    .h{
        display:flex;
        justify-content:space-between;
        position:relative;
    }
    .h button{
        background:transparent;
        border:none;
    }
    .h svg{
        font-size:1.5rem;
        cursor:pointer;

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

    .post-options{
        position:absolute;
        width:120px;
        height:100px;
        background:white;
        /* width of the bars icon*/
        right:calc(24px);
        border-radius:5px;
        padding:0.5rem;
        transition: all 0.3s linear;
        display:none
    }

    .show-post-options{
        display:block;
    }

    .post-options button{
        text-transform:capitalize;
        color: rgba(0,0,0,0.6);
        cursor:pointer;
        display:flex;
        align-items:center;
        gap:0.25rem;
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

    @media screen and (min-wdth:980px){
        
    }
`

export default SinglePost