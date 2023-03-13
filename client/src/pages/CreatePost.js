import React, { useState } from 'react'
import styled from 'styled-components'
import { useMyContext } from '../context/AppContext'
import { Alert } from '../components'

const CreatePost = () => {
    const { loading, createPost, showAlert, displayAlert } = useMyContext()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState('')



    const handleSubmit = e => {
        e.preventDefault()
        if (!title || !body || !tags) {
            displayAlert('please provide all values', 'danger')
            return
        }
        const tagsArr = tags.split(' ')
        createPost({ title, body, tags: tagsArr })
    }

    return (
        <Wrapper>
            <div className='heading'>
                <h1>Create Post</h1>
            </div><br /><br /><br />
            <form className="create-post-form" onSubmit={handleSubmit}>
                {showAlert && <Alert />}
                <div className='post-row title'>
                    <label >Title</label><br />
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div><br />
                <div className='post-row body'>
                    <label >Body</label><br />
                    <textarea spellCheck='false' value={body} onChange={e => setBody(e.target.value)} />
                </div><br /><br />
                <div className='post-row tags'>
                    <label >tags</label><br />
                    <input type="text" value={tags} onChange={e => setTags(e.target.value)} />
                </div><br /><br />
                <div className='submit-div'>
                    <button className='post-btn' type='submit' disabled={loading}>{loading ? 'Posting....' : 'Post'}</button>
                    <button className='draft-btn' type='button'>save as draft</button>
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div.attrs({ className: 'create-post-div' })`
    
    .heading h1{
        font-weight:400;
    }
    
    .create-post-form{
        padding:1rem;
        background:#F5F5F5;
        border-radius:5px;
        box-shadow: 0 10px 24px hsla(0,0%,0%,0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1)

    }
    .post-row input,
    .post-row textarea
    {
        width:100%;
        border-radius:5px;
        border:1px solid rgba(0,0,0,0.4);
    }

    textarea{
        resize:none;
    }

    .title input{
        height:2rem;
        font-size:1rem;
    }
    .body textarea{
        min-height:10rem;
    }

    .tags input{
        height:2rem;
    }

    .submit-div button{
        text-transform:capitalize;
        padding:0.5rem 0.95rem;
        margin-right:0.5rem;
        border:none;
        border-radius:5px;
        cursor: pointer;
        font-size:1rem;
    }
    
    .post-btn{
        background:#6692CC;
        color:white;
    }
    .post-btn:hover{
        background:#6692fC;

    }
    
`

export default CreatePost