import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "@/Backend/Firebase/firebase";
import { intrfcToastMsg } from "@/constants/constants";

// api for getting all cart items
export const getCartAPI = async () => {
  try {
    const cartRef = collection(db, `cartItem`);
    const res = await getDocs(cartRef);
    const cartItems = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return cartItems;
  } catch (error) {
    console.log(error);
  }
};

// api for adding items in cart reducer
export const addCartAPI = async (
  cartItems: any,
  toastMsg: ({}: intrfcToastMsg) => void
) => {
  try {
    const cartRef = doc(
      db,
      `cartItems/${auth.currentUser?.email}/items`,
      cartItems.id
    );
    await setDoc(cartRef, cartItems);
    toastMsg({
      title: "Item added to Cart",
      status: "success",
    });
  } catch (error: any) {
    toastMsg({
      title: error.code,
      status: "error",
    });
  }
};

// api for updating items in cart reducer
export const updateCartAPI = async (cartId: any) => {
  try {
    const cartRef = doc(db, "dataurl", cartId);
    await updateDoc(cartRef, {});
  } catch (error) {
    console.log(error);
  }
};

// api for removing items from cart reducer
export const removeCartAPI = async (cartId: any) => {
  try {
    const cartRef = doc(db, `cartItems`, cartId);
    await deleteDoc(cartRef);
  } catch (error) {
    console.log(error);
  }
};
