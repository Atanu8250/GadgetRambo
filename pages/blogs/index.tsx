import { db } from "@/Backend/Firebase/firebase";
import LeftSidebar from "@/components/LeftSidebar";
import NewsCard from "@/components/newsCard";
import RightSidebar from "@/components/RightSidebar";
import { newsBlogIndex } from "@/constants/constants";
import { Flex, Heading, Show, SimpleGrid } from "@chakra-ui/react";
import { collection, getDocs, query } from "firebase/firestore";
import Link from "next/link";
import React from "react";

const Blogs = ({ newsData }: newsBlogIndex) => {
  return (
    <>
      <Flex p={7}>
        <Show above="lg">
          {/* Left Side */}
          <Flex mx={4} flex={1}>
            <LeftSidebar />
          </Flex>
        </Show>
        {/* Center Side */}
        <Flex mx={4} p={5} flex={4} justifyContent={"center"} direction={"column"} alignItems={"center"}>
          <Flex border={"3px soild red"}>
            <Heading>Blogs</Heading>
          </Flex>
          <SimpleGrid columns={3} gap={8} w={"100%"}>
            {newsData.map((news: any, i: number) => {
              if (i >= 5) {
                return (
                  <Link href={`blogs/${news.id}`} key={news.id}>
                    <NewsCard
                      title={news.title}
                      titleSize={"16px"}
                      imgHeight={{ base: "70px", sm: "110px", md: "130px", lg: "150px", xl: "140px" }}
                      imgWidth={"100%"}
                      banner={news.banner}
                    />
                  </Link>
                );
              }
            })}
          </SimpleGrid>
        </Flex>
        <Show above="xl">
          {/* Right Side */}
          <Flex mx={4} flex={2}>
            <RightSidebar />
          </Flex>
        </Show>
      </Flex>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
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
