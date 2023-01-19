import { auth } from '@/Backend/Firebase/firebase';
import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS } from '@/redux/auth/auth.type';
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

const useAuth = () => {

    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({ type: AUTH_LOGIN_SUCCESS, payload: user })
            } else {
                dispatch({ type: AUTH_LOGOUT_SUCCESS })
            }
        })

        return unsubscribe;
    }, [])

}

export default useAuth;