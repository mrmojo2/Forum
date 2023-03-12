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
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const toggleMinibar = () => {
        dispatch({ type: 'TOGGLE_MINIBAR' })
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: 'CLEAR_ALERT' })
        }, 2000)
    }

    const getUser = async () => {
        dispatch({ type: 'GET_USER_BEGIN' })
        try {
            const { data } = await axios.get('/api/v1/auth/getUser')
            dispatch({ type: 'GET_USER_SUCCESS', payload: data })
        } catch (error) {
            dispatch({ type: 'SET_USER_LOADING_FALSE' })
        }
    }

    const loginUser = async (loginData) => {
        dispatch({ type: 'LOGIN_USER_BEGIN' })
        try {
            const { data } = await axios.post('/api/v1/auth/login', loginData)
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

    useEffect(() => {
        getUser()
    }, [])

    return <AppContext.Provider value={{ ...state, toggleMinibar, loginUser, logout }}>
        {children}
    </AppContext.Provider>

}

export { AppProvider, useMyContext }