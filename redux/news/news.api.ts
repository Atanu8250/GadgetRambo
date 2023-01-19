import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "@/Backend/Firebase/firebase";

export const getNewsAPI = async (limitQuery: number) => {
  try {
    const newsRef = collection(db, "news");
    const q = query(newsRef, limit(limitQuery));
    const res = await getDocs(q);
    const newsData = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return newsData;
  } catch (error) {
    console.log(error);
  }
};
