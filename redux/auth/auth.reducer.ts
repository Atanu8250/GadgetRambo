import React from 'react'
import { LOGIN } from './auth.type';

type reducerAction = {
    type: string,
    payload?: string,
}

const initAuthState = {
    isAuth: true,
    token: "",
    loading: false,
    error: false,
}

export const authReducer = ( state=initAuthState, action: reducerAction) => {
    const {type, payload} = action;
    switch (type) {
        case LOGIN:{
            return {...state, token:payload}
        }
    
        default:{
            return state
        }
    }
}