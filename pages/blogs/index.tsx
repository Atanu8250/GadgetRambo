import { db } from "@/Backend/Firebase/firebase";
import NewsCard from "@/components/newsCard";
import { collection, getDocs, query } from "firebase/firestore";
import Link from "next/link";
import React from "react";

const Blogs = ({ newsData }: any) => {
  return (
    <div>
      {newsData.map((news: any) => (
        <Link href={`blogs/${news.id}`} key={news.id}>
          <NewsCard
            title={news.title}
            titleSize={"20px"}
            banner={news.banner}
          />
        </Link>
      ))}
    </div>
  );
};

export default Blogs;

export async function getServerSideProps() {
  try {
    const newsRef = collection(db, "news");
    //   const q = query(newsRef, limi(limitQuery));
    const res = await getDocs(newsRef);
    const newsData = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return {
      props: {
        newsData,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
