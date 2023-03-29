import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const GoBack = ({ p }) => {
    const goBack = () => {
        window.history.back()
    }
    return (
        <div className='back-div'>
            <button className='back-arrow-btn' onClick={goBack}>
                <BiArrowBack className='back-arrow' />
            </button>
            <p>{p}</p>
        </div>
    )
}

export default GoBack