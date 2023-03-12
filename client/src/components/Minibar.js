import React from 'react'
import styled from 'styled-components'
import { linkList } from '../utils/sidebar-links'
import { NavLink } from 'react-router-dom'
import { useMyContext } from '../context/AppContext'

const Minibar = () => {
    const { toggle } = useMyContext()
    return (
        <aside className={toggle ? 'show-minibar minibar-main' : 'minibar-main'}>
            <Wrapper>
                <ul>
                    {linkList.map(link => {
                        const { id, url, icon, text } = link
                        return (
                            <li key={id} className='minibar-list'>
                                <NavLink to={url} style={({ isActive }) => { return { color: isActive ? "#EA6267" : "#6692CC" } }} className='minibar-nav-link'>{icon} {text}</NavLink>
                            </li>
                        )
                    })}
                </ul>

            </Wrapper>
        </aside>
    )
}

const Wrapper = styled.div.attrs({ className: 'minibar-center' })`
    .minibar-list{
        /* display:inline; */
        margin-bottom:1rem;
    }
    .minibar-nav-link{
        font-size:0.9rem;
    }
`

export default Minibar