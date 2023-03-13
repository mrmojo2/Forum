import React from 'react'
import styled from 'styled-components'
import cat from '../assets/not_found_cat.svg'

const NotFound = () => {
    return (
        <Wrapper>
            <div className='main-ctr'>
                <img src={cat} alt="cat" />
                <h1>404! Page Not Found</h1>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    .main-ctr{
        width:100vw;
        height: 100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    @media screen and (max-width:640px){
        .main-ctr img{
            width:250px;
        }
        .main-ctr h1{
            font-size:1rem;
        }
    }
`

export default NotFound