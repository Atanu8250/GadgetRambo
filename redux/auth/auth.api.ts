import { auth,  provider } from '@/Backend/Firebase/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'


// api calling for sign up with email and password
export const SignupWithEmailAndPwdAPI = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password)
}


// api calling for loging in with email and password
export const loginWithEmailAndPwdAPI = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password)
}


// api calling for signout
export const logoutAPI = async () => {
    let x = auth.currentUser?.uid;
    await signOut(auth);
    return x;
}


// api calling for sign in with google
export const googleAuthAPI = async () => {
    return await signInWithPopup(auth, provider)
}

