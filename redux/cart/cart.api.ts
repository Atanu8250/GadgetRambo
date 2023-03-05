import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "@/Backend/Firebase/firebase";
import { cartItemsProps, intrfcToastMsg } from "@/constants/constants";

// api for getting all cart items
export const getCartAPI = async () => {
  try {
    const cartRef = collection(
      db,
      `cartItems/${auth.currentUser?.email}/items`
    );
    const res = await getDocs(cartRef);
    const cartItems = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return cartItems;
  } catch (error) {
    console.log(error);
  }
};

// api for adding items in cart reducer
export const addCartAPI = async (
  cartItems: cartItemsProps,
  toastMsg: ({}: intrfcToastMsg) => void
) => {
  try {
    if (auth.currentUser === null) {
      toastMsg({
        title: "Please Login first",
        status: "warning",
      });
    } else {
      const cartRef = collection(
        db,
        `cartItems/${auth.currentUser?.email}/items`
      );
      const res = await getDocs(cartRef);
      const olddata = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      let flag = false;
      for (let el of olddata) {
        if (el.id === cartItems.id) flag = true;
      }
      if (flag) {
        toastMsg({
          title: "Item already exist in cart",
          status: "success",
        });
      } else {
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
      }
    }
  } catch (error: any) {
    toastMsg({
      title: error.code,
      status: "error",
    });
  }
};

// api for updating items in cart reducer
export const updateCartAPI = async (cartId: string) => {
  try {
    const cartRef = doc(db, "dataurl", cartId);
    await updateDoc(cartRef, {});
  } catch (error) {
    console.log(error);
  }
};

// api for removing items from cart reducer
export const removeCartAPI = async (
  cartId: string,
  toastMsg: ({}: intrfcToastMsg) => void
) => {
  try {
    const cartRef = doc(
      db,
      `cartItems/${auth.currentUser?.email}/items`,
      cartId
    );
    await deleteDoc(cartRef);
    toastMsg({
      title: "Item removed from Cart",
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};
