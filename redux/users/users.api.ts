import {  db } from '@/Backend/Firebase/firebase';
import { intrfcUser } from '@/constants/constants';
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore'


// api call for storing the user who just signed up
export const storeUserAPI = async (user: intrfcUser) => {

    const userRef = doc(db, "users", user.uid);
    return await setDoc(userRef, user)

}


// api for get all the users
export const getUsersAPI = async () => {
    const userRef = collection(db, "users")
    const res = await getDocs(userRef);
    return res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}


// api for deleting user
export const deleteUserAPI = async (uid: string) => {
    try {
        const userRef = doc(db, "users", uid)
        await deleteDoc(userRef)
    } catch (error) {
        console.log('error:', error)
    }

}


// api calling for updating user's data
export const updateUserAPI = async (uid:string, updatedData:{}) => {
    try {
        const userRef = doc(db, "users", uid )
        await updateDoc(userRef, {...updatedData})
    } catch (error) {
        console.log('error:', error)
    }
}

