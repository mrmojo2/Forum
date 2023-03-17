import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer.js'
import axios from 'axios'

const AppContext = React.createContext()

const useMyContext = () => {
    return useContext(AppContext)
}

export const initialState = {
    toggle: false,
    user: null,
    userLoading: true,
    loading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    posts: [],
    profile: {},
    profilePosts: [],

}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const toggleMinibar = () => {
        dispatch({ type: 'TOGGLE_MINIBAR' })
    }

    const displayAlert = (text, type) => {
        dispatch({ type: 'SHOW_ALERT', payload: { text, type } })
        clearAlert()
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: 'CLEAR_ALERT' })
        }, 2000)
    }

    const getUser = async () => {
        dispatch({ type: 'SET_USER_LOADING_TRUE' })
        try {
            const { data } = await axios.get('/api/v1/auth/getLoginUser')
            dispatch({ type: 'GET_USER_SUCCESS', payload: data })
        } catch (error) {
            dispatch({ type: 'SET_USER_LOADING_FALSE' })
        }
    }

    const loginUser = async (loginData) => {
        dispatch({ type: 'SET_LOADING_TRUE' })
        try {
            const { data } = await axios.post('/api/v1/auth/login', loginData)
            dispatch({ type: 'LOGIN_USER_SUCCESS', payload: data })
        } catch (error) {
            dispatch({ type: 'LOGIN_USER_FAIL', payload: error.response.data })
            clearAlert()
        }
    }
    const registerUser = async (registerData) => {
        dispatch({ type: 'SET_LOADING_TRUE' })
        try {
            const { data } = await axios.post('/api/v1/auth/register', registerData)
            dispatch({ type: 'LOGIN_USER_SUCCESS', payload: data })
        } catch (error) {
            dispatch({ type: 'LOGIN_USER_FAIL', payload: error.response.data })
            clearAlert()
        }
    }
    const logout = async () => {
        try {
            await axios.get('/api/v1/auth/logout')
            dispatch({ type: 'LOGOUT_USER' })
        } catch (error) {
            console.log(error.response)
        }
    }

    const getPosts = async () => {
        dispatch({ type: 'SET_LOADING_TRUE' })
        try {
            const { data } = await axios.get('/api/v1/posts')
            dispatch({ type: 'get_posts_success', payload: data })
        } catch (error) {
            console.log(error)
            //if 401 code then logout user (maybe the token expired!)
        }
    }


    const createPost = async (postData) => {
        dispatch({ type: 'SET_LOADING_TRUE' })
        try {
            const { data } = await axios.post('/api/v1/posts', postData)
            console.log(data)
            dispatch({ type: 'create_post_success', payload: data })
            clearAlert()
        } catch (error) {
            dispatch({ type: 'create_post_fail', payload: error.response.data })
            console.log(error)
        }
    }

    const getSinglePost = async (postId) => {
        try {
            const { data } = await axios.get(`/api/v1/posts/${postId}`)
            return data
        } catch (error) {
            console.log(error.response)
        }
    }

    const getProfilePosts = async (userId) => {
        dispatch({ type: 'SET_LOADING_TRUE' })
        try {
            const { data } = await axios.get(`/api/v1/posts?postedBy=${userId}`)
            dispatch({ type: 'get_profile_posts_success', payload: data })
        } catch (error) {
            console.log(error)
            dispatch({ type: 'SET_LOADING_FALSE' })
            //if 401 code then logout user (maybe the token expired!)
        }
    }

    const getProfile = async (userId) => {
        dispatch({ type: 'SET_LOADING_TRUE' })
        try {

            const result = await Promise.all([
                axios.get(`/api/v1/users/${userId}`),
                axios.get(`/api/v1/posts?postedBy=${userId}`)
            ])
            const { data: profile } = result[0]
            const { data: posts } = result[1]
            console.log(posts)
            dispatch({ type: 'get_profile_success', payload: { profile, posts } })
        } catch (error) {
            //find if error is 404 , 500, 400 (cookie expired) and handle accordingly
            dispatch({ type: 'SET_LOADING_FALSE' })
            console.log(error.response)
        }
    }

    const updateProfile = async (img = null, name, bio, faculty) => {
        dispatch({ type: 'SET_LOADING_TRUE' })
        try {
            let profileformData = new FormData()
            img && profileformData.append("img", img)
            profileformData.append("name", name)
            profileformData.append("bio", bio)
            profileformData.append("faculty", faculty)

            const { data } = await axios.patch(`/api/v1/users/${state.user.userId}`, profileformData)
            dispatch({ type: 'update_profile_success', payload: data })
            clearAlert()
        } catch (error) {
            dispatch({ type: 'update_profile_fail', payload: error.response.data })
            clearAlert()
        }
    }

    const deletePost = async (postId) => {
        try {
            await axios.delete(`/api/v1/posts/${postId}`)
            getPosts()
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getUser()
    }, [])

    return <AppContext.Provider value={{ ...state, toggleMinibar, displayAlert, loginUser, logout, getPosts, createPost, registerUser, getSinglePost, getProfilePosts, getProfile, updateProfile, deletePost }}>
        {children}
    </AppContext.Provider>

}

export { AppProvider, useMyContext }