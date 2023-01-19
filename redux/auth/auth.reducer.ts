import React from 'react'
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
}

export const authReducer = (state = initAuthState, action: reducerAction) => {
    const { type, payload } = action;
    switch (type) {
        case authTypes.AUTH_LOADING: {
            return { ...state, loading: true, error: false }
        }

        case authTypes.AUTH_ERROR: {
            return { ...state, loading: false, error: true }
        }

        case authTypes.AUTH_LOGIN_SUCCESS: {
            return { loading: false, error: false, isAuth: true, user: payload }
        }

        case authTypes.AUTH_LOGOUT_SUCCESS: {
            return initAuthState;
        }

        default: {
            return state
        }
    }
}