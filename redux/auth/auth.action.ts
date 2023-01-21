import { auth } from "@/Backend/Firebase/firebase";
import { authActionType } from "@/constants/constants";
import { Dispatch } from "react";
import { storeUser, updateUser } from "../users/users.action";
import { updateUserAPI } from "../users/users.api";

import { loginWithEmailAndPwdAPI, logoutAPI, SignupWithEmailAndPwdAPI, googleAuthAPI } from "./auth.api";

import * as authTypes from "./auth.type";


// sign up with only email and password
export const signupWithEmailAndPwd = (cred: { email: string, password: string }) => (dispatch: ({ type, payload }: authActionType) => void) => {

    dispatch({ type: authTypes.AUTH_LOADING })
    const email = cred.email;
    const password = cred.password;

    SignupWithEmailAndPwdAPI(email, password)
        .then((res) => {
            storeUser(res.user).then(res => {
                dispatch({ type: authTypes.AUTH_LOGIN_SUCCESS, payload: res })
                alert("signup success");
            }).catch(err => console.log(err))
        })
        .catch((err) => {
            console.log(err);
        })
}


// it's for signup and login via google accounts
export const googleAuth = () => (dispatch: ({ type, payload }: authActionType) => void) => {

    dispatch({ type: authTypes.AUTH_LOADING })

    googleAuthAPI().then((res) => {
        storeUser(res.user).then(res => {
            dispatch({ type: authTypes.AUTH_LOGIN_SUCCESS, payload: res })
            alert("signup with google success");
        }).catch(err => console.log(err))
    })
        .catch((err) => {
            console.log(err);
        })

}


// Login with only email and password
export const login = (cred: { email: string, password: string }) => (dispatch: Dispatch<any>) => {

    dispatch({ type: authTypes.AUTH_LOADING })
    const email = cred.email;
    const password = cred.password;

    loginWithEmailAndPwdAPI(email, password)
        .then((res) => {
            dispatch(updateUser(res.user.uid, { isActive: true, lastSignInTime: new Date().toLocaleString() }))
            dispatch({ type: authTypes.AUTH_LOGIN_SUCCESS, payload: res.user })
            alert("login success");
        })
        .catch((err) => {
            console.log(err);
        })
}


// Logout function
export const logout = () => (dispatch: Dispatch<any>) => {

    dispatch({ type: authTypes.AUTH_LOADING })

    logoutAPI().then((res) => {
        updateUserAPI(res || "", { isActive: false }).then(() => {
            dispatch({ type: authTypes.AUTH_LOGOUT_SUCCESS })
            alert("logout success");
        }).catch((error) => {
            console.log('error:', error)
        })
    })
        .catch((err) => {
            console.log(err);
        })
}

