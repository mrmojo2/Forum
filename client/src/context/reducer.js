import { initialState } from "./AppContext"

const reducer = (state, action) => {
    if (action.type === 'TOGGLE_MINIBAR') {
        return ({
            ...state,
            toggle: !state.toggle,
        })
    }

    if (action.type === 'SHOW_ALERT') {
        return ({
            ...state,
            showAlert: true,
            alertText: action.payload.text,
            alertType: action.payload.type,
        })
    }

    if (action.type === 'SET_USER_LOADING_FALSE') {
        return ({
            ...state,
            userLoading: false,
        })
    }

    if (action.type === 'SET_USER_LOADING_TRUE') {
        return ({
            ...state,
            userLoading: true,
        })
    }

    if (action.type === 'SET_LOADING_TRUE') {
        return ({
            ...state,
            loading: true
        })
    }
    if (action.type === 'SET_LOADING_FALSE') {
        return ({
            ...state,
            loading: false
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


    if (action.type === 'GET_USER_SUCCESS') {
        return ({
            ...state,
            userLoading: false,
            user: action.payload.tokenUser,
            notice: action.payload.notice
        })
    }


    if (action.type === 'LOGIN_USER_SUCCESS') {
        return ({
            ...state,
            loading: false,
            user: action.payload.tokenUser,
            notice: action.payload.notice
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

    if (action.type === 'get_posts_success') {
        return ({
            ...state,
            loading: false,
            posts: action.payload.posts
        })
    }

    if (action.type === 'create_post_success') {
        return ({
            ...state,
            loading: false,
            showAlert: true,
            alertText: action.payload.msg,
            alertType: 'success'
        })
    }
    if (action.type === 'create_post_fail') {
        return ({
            ...state,
            loading: false,
            showAlert: true,
            alertText: action.payload.msg,
            alertType: 'danger'
        })
    }
    if (action.type === 'get_profile_success') {
        return ({
            ...state,
            loading: false,
            profile: action.payload.profile.profile,
            profilePosts: action.payload.posts.posts,
        })
    }

    if (action.type === 'update_profile_success') {
        return ({
            ...state,
            loading: false,
            user: action.payload.tokenUser,
            profile: action.payload.user,
            showAlert: true,
            alertText: 'profile successfully updated',
            alertType: 'success',
        })
    }

    if (action.type === 'update_profile_fail') {
        return ({
            ...state,
            loading: false,
            showAlert: true,
            alertText: action.payload.msg,
            alertType: 'danger'
        })
    }


    throw new Error('action milena sathi !' + action.type)
}

export default reducer