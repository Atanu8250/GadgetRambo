import { authActionType } from "@/constants/constants";
import { loginWithEmailAndPwdAPI, logoutAPI, SignupWithEmailAndPwdAPI, googleAuthAPI } from "./auth.api";
import * as authTypes from "./auth.type";


export const signupWithEmailAndPwd = (cred: { email: string, password: string }) => (dispatch: ({ type, payload }: authActionType) => void) => {

    dispatch({ type: authTypes.AUTH_LOADING })
    const email = cred.email;
    const password = cred.password;

    SignupWithEmailAndPwdAPI(email, password)
        .then((res) => {
            dispatch({ type: authTypes.AUTH_LOGIN_SUCCESS, payload: res.user })
            alert("signup success");
        })
        .catch((err) => {
            console.log(err);
        })
}


export const googleAuth = () => (dispatch: ({ type, payload }: authActionType) => void) => {

    dispatch({ type: authTypes.AUTH_LOADING })

    googleAuthAPI().then((res) => {
        dispatch({ type: authTypes.AUTH_LOGIN_SUCCESS, payload: res.user })
        alert("signup with google success");
    })
        .catch((err) => {
            console.log(err);
        })

}

export const login = (cred: { email: string, password: string }) => async (dispatch: ({ type, payload }: authActionType) => void) => {

    dispatch({ type: authTypes.AUTH_LOADING })
    const email = cred.email;
    const password = cred.password;

    loginWithEmailAndPwdAPI(email, password)
        .then((res) => {
            dispatch({ type: authTypes.AUTH_LOGIN_SUCCESS, payload: res.user })
            alert("login success");
        })
        .catch((err) => {
            console.log(err);
        })
}


export const logout = () => (dispatch: ({ type, payload }: authActionType) => void) => {

    dispatch({ type: authTypes.AUTH_LOADING })

    logoutAPI().then(() => {
        dispatch({ type: authTypes.AUTH_LOGOUT_SUCCESS })
        alert("logout success");
    })
        .catch((err) => {
            console.log(err);
        })
}