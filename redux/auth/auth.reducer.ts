import * as authTypes from './auth.type';

type reducerAction = {
    type: string,
    payload?: string,
}

const initAuthState = {
    user: {},
    isAuth: false,
    loading: false,
    error: false,
    showAdminPanel: false,
}

export const authReducer = (state = initAuthState, action: reducerAction) => {
    const { type, payload } = action;
    switch (type) {
        case authTypes.AUTH_LOADING: {
            return { ...state, loading: true, error: false, showAdminPanel: false }
        }

        case authTypes.AUTH_ERROR: {
            return { ...state, loading: false, error: true, showAdminPanel: false }
        }

        case authTypes.AUTH_LOGIN_SUCCESS: {
            return { loading: false, error: false, isAuth: true, user: payload, showAdminPanel: false }
        }

        case authTypes.AUTH_LOGOUT_SUCCESS: {
            return initAuthState;
        }

        case authTypes.AUTH_SHOW_ADMIN_PANEL: {
            return { ...state, showAdminPanel: true}
        }

        case authTypes.AUTH_HIDE_ADMIN_PANEL: {
            return { ...state, showAdminPanel: false}
        }

        default: {
            return state
        }
    }
}