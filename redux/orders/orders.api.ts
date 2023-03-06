import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "@/Backend/Firebase/firebase";
import { intrfcToastMsg } from "@/constants/constants";

// api for getting all order items
export const getOrderAPI = async () => {
  try {
    const orderRef = collection(
      db,
      `orderItems/${auth.currentUser?.email}/items`
    );
    const res = await getDocs(orderRef);
    const orderItems = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return orderItems;
  } catch (error) {
    console.log(error);
  }
};

export const getTotalSaleAPI = async () => {
  const orderRef = collection(
    db,
    `orderItems/${auth.currentUser?.email}/items`
  );
  const res = await getDocs(orderRef);
  const orderItems = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  let sale = 0;
  orderItems.forEach((el: any) => {
    sale += el.price;
  });
  return sale;
};

// api for adding  order items
export const addOrderAPI = async (toastMsg: ({}: intrfcToastMsg) => void) => {
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
      const cartItems = res.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      for (let el of cartItems) {
        const orderRef = doc(
          db,
          `orderItems/${auth.currentUser?.email}/items`,
          el.id
        );
        await setDoc(orderRef, el);
      }
      for (let el of cartItems) {
        const orderRef = doc(
          db,
          `cartItems/${auth.currentUser?.email}/items`,
          el.id
        );
        await deleteDoc(orderRef);
      }
      toastMsg({
        title: "Payment success",
        status: "success",
      });
    }
  } catch (error: any) {
    toastMsg({
      title: error.code,
      status: "error",
    });
  }
};
