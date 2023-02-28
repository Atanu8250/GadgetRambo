import { authActionType } from "@/constants/constants"
import { Dispatch } from "redux"
import { getUsersAPI, storeUserAPI, updateUserAPI } from "./users.api"
import { GET_USERS_SUCCESS, USERS_ERROR, USERS_LOADING } from "./users.type"

export const storeUser = async (obj: any) => {
    const user = {
        uid: obj.uid,
        displayName: obj.displayName,
        email: obj.email,
        emailVerified: obj.emailVerified,
        photoURL: obj.photoURL,
        creationTime: obj.metadata.creationTime,
        lastSignInTime: new Date().toLocaleString(),
        isAdmin: false,
        isActive: true,
    }

    try {
        storeUserAPI(user)
    } catch (error) {
        console.log('error:', error)
    }
    return user;
}

export const getUsers = () => async (dispatch: ({ type, payload }: authActionType) => void) => {
    dispatch({ type: USERS_LOADING })
    try {
        const res = await getUsersAPI()
        dispatch({ type: GET_USERS_SUCCESS, payload: res })
    } catch (error) {
        dispatch({ type: USERS_ERROR })
        console.log('error:', error)
    }
}


export const updateUser = (uid: string , updatedData: {}) => async (dispatch: Dispatch<any> ) => {
    if(!uid) return;
    dispatch({ type: USERS_LOADING })
    try {
        await updateUserAPI(uid, updatedData)
        dispatch(getUsers())
    } catch (error) {
        console.log('error:', error)
    }
}
