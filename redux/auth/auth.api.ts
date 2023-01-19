import { auth, provider } from '@/Backend/Firebase/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const SignupWithEmailAndPwdAPI = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const loginWithEmailAndPwdAPI = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password)
}

export const logoutAPI = async () => {
    return await signOut(auth)
}

export const googleAuthAPI = async () => {
    return await signInWithPopup(auth, provider)
}