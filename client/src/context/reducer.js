import { initialState } from "./AppContext"

const reducer = (state, action) => {
    if (action.type === 'TOGGLE_MINIBAR') {
        return ({
            ...state,
            toggle: !state.toggle,
        })
    }

    if (action.type === 'SET_USER_LOADING_FALSE') {
        return ({
            ...state,
            userLoading: false,
        })
    }

    if (action.type === 'CLEAR_ALERT') {
        return ({
            ...state,
            showAlert: false,
            alertText: '',
            alertType: '',
        })
    }

    if (action.type === 'GET_USER_BEGIN') {
        return ({
            ...state,
            userLoading: true,
        })
    }

    if (action.type === 'GET_USER_SUCCESS') {
        return ({
            ...state,
            userLoading: false,
            user: action.payload
        })
    }

    if (action.type === 'LOGIN_USER_BEGIN') {
        return ({
            ...state,
            loading: true,
        })
    }

    if (action.type === 'LOGIN_USER_SUCCESS') {
        return ({
            ...state,
            loading: false,
            user: action.payload.tokenUser,
        })
    }

    if (action.type === 'LOGIN_USER_FAIL') {
        return ({
            ...state,
            loading: false,
            showAlert: true,
            alertText: action.payload.msg,
            alertType: 'danger',
        })
    }

    if (action.type === 'LOGOUT_USER') {
        return ({
            ...initialState,
            userLoading: false,
        })
    }

    throw new Error('action milena sathi !' + action.type)
}

export default reducer