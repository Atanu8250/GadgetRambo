import { db } from "@/Backend/Firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import React from "react";

const Blog = ({ newsData }: any) => {
  return <div></div>;
};

export default Blog;

export async function getServerSideProps(context: any) {
  const { params } = context;
  try {
    const newsRef = doc(db, "news", params.id);
    const res = await getDoc(newsRef);
    const newsData = res.data();
    return {
      props: {
        newsData: newsData || {},
      },
    };
  } catch (error) {
    console.log(error);
  }
}
