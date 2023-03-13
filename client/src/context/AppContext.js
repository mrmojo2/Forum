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
            const { data } = await axios.get('/api/v1/auth/getUser')
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

    useEffect(() => {
        getUser()
    }, [])

    return <AppContext.Provider value={{ ...state, toggleMinibar, displayAlert, loginUser, logout, getPosts, createPost, registerUser }}>
        {children}
    </AppContext.Provider>

}

export { AppProvider, useMyContext }