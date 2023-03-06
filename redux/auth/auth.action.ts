import { authActionType, intrfcToastMsg } from "@/constants/constants";
import { Dispatch } from "react";
import { storeUser, updateUser } from "../users/users.action";
import { updateUserAPI } from "../users/users.api";

import {
  loginWithEmailAndPwdAPI,
  logoutAPI,
  SignupWithEmailAndPwdAPI,
  googleAuthAPI,
} from "./auth.api";

import * as authTypes from "./auth.type";

// sign up with only email and password
export const signupWithEmailAndPwd =
  (
    cred: { email: string; password: string },
    toastMsg: ({}: intrfcToastMsg) => void
  ) =>
  (dispatch: ({ type, payload }: authActionType) => void) => {
    if (!cred.email || !cred.password) {
      toastMsg({
        title: "Please provide proper inputs!",
        status: "warning",
      });
      return;
    }

    if (!cred.email.includes("@") || !cred.email.includes(".com")) {
      toastMsg({
        title: "Please put correct email address",
        status: "warning",
      });
      return;
    }

    if (cred.password.length <= 7) {
      toastMsg({
        title: "Please Enter longer password than 6",
        status: "warning",
      });
      return;
    }

    dispatch({ type: authTypes.AUTH_LOADING });
    const email = cred.email;
    const password = cred.password;

    SignupWithEmailAndPwdAPI(email, password)
      .then((res) => {
        storeUser(res.user)
          .then((res) => {
            dispatch({ type: authTypes.AUTH_LOGIN_SUCCESS, payload: res });
            toastMsg({
              title: "Sign up successful",
              status: "success",
            });
          })
          .catch((err) => {
            toastMsg({
              title: err.code,
              status: "error",
            });
            dispatch({ type: authTypes.AUTH_ERROR });
          });
      })
      .catch((err) => {
        toastMsg({
          title: err.code,
          status: "error",
        });
        dispatch({ type: authTypes.AUTH_ERROR });
      });
  };

// it's for signup and login via google accounts
export const googleAuth =
  (toastMsg: ({}: intrfcToastMsg) => void) =>
  (dispatch: ({ type, payload }: authActionType) => void) => {
    dispatch({ type: authTypes.AUTH_LOADING });

    googleAuthAPI()
      .then((res) => {
        storeUser(res.user)
          .then((res) => {
            dispatch({ type: authTypes.AUTH_LOGIN_SUCCESS, payload: res });
            toastMsg({
              title: "Sign up successful",
              status: "success",
            });
          })
          .catch((err) => {
            toastMsg({
              title: err.code,
              status: "error",
            });
            dispatch({ type: authTypes.AUTH_ERROR });
          });
      })
      .catch((err) => {
        toastMsg({
          title: err.code,
          status: "error",
        });
        dispatch({ type: authTypes.AUTH_ERROR });
      });
  };

// Login with only email and password
export const login =
  (
    cred: { email: string; password: string },
    toastMsg: ({}: intrfcToastMsg) => void
  ) =>
  (dispatch: Dispatch<any>) => {
    if (!cred.email || !cred.password) {
      toastMsg({
        title: "Please fill the all the details properly!",
        status: "warning",
      });
      return;
    }

    dispatch({ type: authTypes.AUTH_LOADING });
    const email = cred.email;
    const password = cred.password;

    loginWithEmailAndPwdAPI(email, password)
      .then((res) => {
        dispatch(
          updateUser(res.user.uid, {
            isActive: true,
            lastSignInTime: new Date().toLocaleString(),
          })
        );
        dispatch({ type: authTypes.AUTH_LOGIN_SUCCESS, payload: res.user });
        toastMsg({
          title: "Log in successful",
          status: "success",
        });
      })
      .catch((err) => {
        toastMsg({
          title: err.code,
          status: "error",
        });
        dispatch({ type: authTypes.AUTH_ERROR });
      });
  };

// Logout function
export const logout =
  (toastMsg: ({}: intrfcToastMsg) => void) => (dispatch: Dispatch<any>) => {
    dispatch({ type: authTypes.AUTH_LOADING });

    logoutAPI()
      .then((res) => {
        updateUserAPI(res || "", { isActive: false })
          .then(() => {
            dispatch({ type: authTypes.AUTH_LOGOUT_SUCCESS });
            toastMsg({
              title: "Logout Successful",
              status: "success",
            });
          })
          .catch((err) => {
            toastMsg({
              title: "Logout failed!",
              desc: err.code,
              status: "error",
            });
            dispatch({ type: authTypes.AUTH_ERROR });
          });
      })
      .catch((err) => {
        toastMsg({
          title: "Logout failed!",
          desc: err.code,
          status: "error",
        });
        dispatch({ type: authTypes.AUTH_ERROR });
      });
  };

export const setShowAdminPanel = (dispatch: Dispatch<any>) => {
  dispatch({ type: authTypes.AUTH_SHOW_ADMIN_PANEL });
};

export const setHideAdminPanel = (dispatch: Dispatch<any>) => {
  dispatch({ type: authTypes.AUTH_HIDE_ADMIN_PANEL });
};
