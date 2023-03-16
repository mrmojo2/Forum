import React, { useState } from 'react'
import { useMyContext } from '../context/AppContext'
import { Alert } from './'


const EditProfileForm = () => {
    const { updateProfile, showAlert, profile, loading } = useMyContext()
    const [name, setName] = useState(profile?.name)
    const [bio, setBio] = useState(profile?.bio)
    const [faculty, setFaculty] = useState(profile?.faculty)
    const [img, setImg] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        updateProfile(img, name, bio, faculty)
    }


    return (
        <form className='edit-profile-form' onSubmit={handleSubmit}>
            {showAlert && <Alert />}
            <div className='upload-pic-div'>
                <img src={profile.profile_pic} alt="profile_pic" className='profile-pic' />
                <input type='file'
                    onChange={e => setImg(e.target.files[0])}
                    accept='image/*'
                />
            </div>
            <div className='form-row'>
                <label>name</label><br />
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div><br />
            <div className='form-row'>
                <label>bio</label>
                <input type="text" className='bio-input' value={bio} onChange={e => setBio(e.target.value)} />
            </div><br />
            <select value={faculty} onChange={e => setFaculty(e.target.value)}>
                <option value="BCT">BCT</option>
                <option value="BEX">BEX</option>
                <option value="BCE">BCE</option>
                <option value="BME">BME</option>
                <option value="BEL">BEL</option>
            </select><br /><br />
            <div className='btn-div'>
                <button className='btn main-btn' type='submit' disabled={loading}>Update</button>
                <button className='btn main-btn discard-btn' type='button'>Discard</button>
            </div>

        </form>
    )
}

export default EditProfileForm