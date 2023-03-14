import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { linkList } from '../utils/sidebar-links'

const Sidebar = () => {
    return (
        <Wrapper>
            <div className='link-container'>
                <ul>
                    {linkList.map(link => {
                        const { id, url, icon, text } = link
                        return (
                            <li key={id}>
                                <NavLink to={url} style={({ isActive }) => { return { color: isActive ? "#EA6267" : "#6692CC" } }}>{icon} {text}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div.attrs({ className: 'sidebar-main' })`
    .link-container{
        padding:1rem;
        position:fixed
    }
    
    .link-container li{
        margin-bottom:1rem;
    }
    .link-container a{
        display:flex;
        align-items:center;
        gap:0.5rem;
        font-size:1.25rem;
        color:#6692CC;
        transition: all 0.1s linear;
    }
    .link-container a:hover{
        padding-left:0.5rem;
    }
`

export default Sidebar