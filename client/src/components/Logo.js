import React from 'react'
import logo from '../assets/logo.svg'

const Logo = ({ width }) => {
    return (
        <img src={logo} width={width || '50px'} alt='fuck'></img>
    )
}

export default Logo