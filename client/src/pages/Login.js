import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Alert } from '../components'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub, FaFacebook } from 'react-icons/fa'
import { useMyContext } from '../context/AppContext'



const Login = () => {
    const { loginUser, user, showAlert } = useMyContext()
    const [loginValues, setLoginValues] = useState({ email: '', password: '' })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(loginValues)
    }

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    })

    return (
        <Wrapper>
            <div className='oauth-logins'>
                <button className='google'><FcGoogle />Log in with Google</button><br />
                <button className='github'><FaGithub />Log in with GitHub</button><br />
                <button className='facebook'><FaFacebook />Log in with Facebook</button><br />
            </div>
            <form className='login-form' onSubmit={handleSubmit}>
                {showAlert && <Alert />}
                <div className='form-row'>
                    <label>Email</label><br />
                    <input type="text" value={loginValues.email} onChange={e => setLoginValues({ ...loginValues, email: e.target.value })} />
                </div>
                <br />
                <div className='form-row'>
                    <label>Password</label><br />
                    <input type="password" value={loginValues.password} onChange={e => setLoginValues({ ...loginValues, password: e.target.value })} />
                </div>
                <br />
                <button className='btn login-btn'>Login</button>
            </form>
            <p>Not a member? <Link to='/register'>Register</Link></p>
        </Wrapper>
    )
}

const Wrapper = styled.main.attrs({ className: 'login-main' })`
    .login-form{
        width:90vw;
        max-width:300px;
        background:white;
        padding:2rem;
        border-radius:5px;
        box-shadow: 0 10px 24px hsla(0,0%,0%,0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1)
    }
    .form-row>label{
        font-weight:500;
    }
    .form-row>input{
        height:1.65rem;
        width:100%;
    }
    .login-btn{
        width:100%;
        font-size:1rem;
        color:white;
        transition:none;
    }
    .login-btn:hover{
        background:#2CB1cC;
    }
    .oauth-logins{
        width:90vw;
        max-width:300px;
        display:grid;
        grid-gap:0.25rem;
    }

    .oauth-logins>button{
        width:100%;
        height:1.95rem;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:0.5rem;
        border-radius:5px;
        border:1px solid rgba(0,0,0,0.4);
        cursor:pointer;

    }
    .oauth-logins>button>svg{
        font-size:1.25rem;
    }

    .google{
        background:white;
    }
    .google:hover{
        background:whitesmoke;
    }
    .github{
        background:black;
        color:white;
    }
    .github:hover{
        background: rgba(0,0,0,0.8);
    }
    
    .facebook{
        background:#385499;
        color:white;
    }
    .facebook:hover{
        background:#385489;
    }
`

export default Login