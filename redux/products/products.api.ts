import { collection, getDocs } from "firebase/firestore";
import { db } from "@/Backend/Firebase/firebase";

export const getMobileAPI = async () => {
  try {
    const mobileRef = collection(db, "mobiles");
    const res = await getDocs(mobileRef);
    const mobiles = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return mobiles;
  } catch (error) {
    console.log(error);
  }
};
export const getLaptopAPI = async () => {
  try {
    const laptopRef = collection(db, "gadget_rambo/products/laptops");
    const res = await getDocs(laptopRef);
    const laptops = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return laptops;
  } catch (error) {
    console.log(error);
  }
};
export const getTvAPI = async () => {
  try {
    const tvRef = collection(db, "tv");
    const res = await getDocs(tvRef);
    const tv = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(tv);

    return tv;
  } catch (error) {
    console.log(error);
  }
};
