import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import { BsSearch, BsFillChatDotsFill } from 'react-icons/bs'
import { MdNotificationsActive } from 'react-icons/md'
import { BiUserCircle } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { useMyContext } from '../context/AppContext'
import Loading from './Loading'

const Navbar = () => {
    const { toggleMinibar,user,userLoading } = useMyContext()
    return (
        <Wrapper>
            <div className="nav-center">
                <div className='logo-div'>
                    <Logo width='80px' />
                    <h4>IOE Forum</h4>
                </div>
                <form className='search-form'>
                    <BsSearch />
                    <input type="text" placeholder='Search...' />
                </form>
                <div className='user-btns'>
                    {/* <button className='btn login-btn'>Log in</button>
                    <button className='btn '>sign up</button> */}

                    {/* <img src={user.profile_pic}/> */}
                    {userLoading ? <Loading/>:<img src={user.profile_pic}/>}
                    <MdNotificationsActive />
                    <BsFillChatDotsFill />
                </div>
                <button className='minibar-toggle' onClick={() => toggleMinibar()}>
                    <FaBars></FaBars>
                </button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div.attrs({ className: 'nav-main' })`
    .nav-center{
        width: 100vw;
        max-width: 1264px;
        margin:0 auto;
        height:96px;
        background-color:whitesmoke;

        display:grid;
        grid-template-columns:auto 1fr auto;
        grid-gap:1rem;
        align-items:center;
    }
    .logo-div{
        display:flex;
        align-items:center;
    }
    .logo-div>h4{
        font-family: 'Rubik Iso', cursive;
        font-size:1.5rem
    }

    
    .search-form{
        background:white;
        height:40px;
        display:flex;
        align-items:center;
        padding:1rem;
        gap:0.5rem;
        border-radius:5px;
        
    }
    .search-form>input{
        border:none;
        width:100%;
        height:30px;
        font-size:1.25rem;
        padding:1rem;
    }
    .search-form>input:focus{
        outline:none;
    }
    
    .user-btns{
        display:flex;
        gap:0.75rem;
        padding:1rem;
        font-size:1.75rem;
        color:#6692CC;
    }

    .user-btns>.loading{
        width:30px;
        height:30px;
    }
    .user-btns>img{
        width:30px;
        height:30px;
        object-fit:cover;
        border-radius:50%;
    }

    .minibar-toggle{
        display:none;
        background:transparent;
        border:none;
        margin-right:1rem;
        font-size:1.25rem;
        color:#6692CC;
        cursor: pointer;
    }
    
    @media screen and (max-width:645px){
        .logo-div>h4{
            display:none;
        }
        .logo-div>img{
            width:50px !important;
        }
        .user-btns{
            display:none
        }
        .minibar-toggle{
            display:inline-block;
        }

    }
`

export default Navbar