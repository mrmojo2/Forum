import React from 'react'
import styled from 'styled-components'
import { useMyContext } from '../context/AppContext'

const Eventsbar = () => {
    const { notice } = useMyContext()
    return (
        <Wrapper>
            <div className="sidebox events">
                <h4 className='heading event-heading'>Notice</h4>
                <ul className='list'>
                    {
                        notice.map((n, i) => {
                            return (
                                <li key={i}><a href={n.link} target="_blank" rel="noopener noreferrer">{n.heading}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="sidebox notice">
                <h4 className='heading notice-heading'>Upcoming Events</h4>
                <ul className='list'>
                    <li><a href="#">Notice</a></li>
                    <li><a href="#">Notice</a></li>
                    <li><a href="#">Notice</a></li>
                    <li><a href="#">Notice</a></li>
                    <li><a href="#">Notice</a></li>
                    <li><a href="#">Notice</a></li>
                    <li><a href="#">Notice</a></li>
                </ul>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div.attrs({ className: 'events-main' })`
    .sidebox{
        min-height:100px;
        border-radius:10px;
        margin-top:1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .heading{
        border-top-left-radius:10px;
        border-top-right-radius:10px;
        font-weight:400;
        letter-spacing:1px;
        text-align:center;
        margin-bottom:0.5rem;
        padding:0.5rem;
    }

    .events{
        background:#fceaea;

    }

    .notice{
        background:#c2d3eb;
    }
    .event-heading{
        background:#f9d4d5;
        border-bottom:1px solid #f9d4d5;
    }

    .notice-heading{
        background:#b3c9e6;
        border-bottom:1px solid #b3c9e6;
    }
    .list{
        padding:0.5rem;
        margin-bottom:1rem;
        display:flex;
        flex-direction:column;
        gap:0.75rem;
    }
    .list a{
        font-size:0.85rem;
        color:rgba(0, 0, 0, 0.6);
    }
`


export default Eventsbar