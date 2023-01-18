import { collection, getDocs } from "firebase/firestore";
import { db } from "@/Backend/Firebase/firebase";

export const getData = async () => {
  try {
    const mobileRef = collection(db, "mobiles");
    const res = await getDocs(mobileRef);
    const mobiles = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return mobiles;
  } catch (error) {
    console.log(error);
  }
};
