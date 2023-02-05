import { db } from "@/Backend/Firebase/firebase";
import RightSidebar from "@/components/RightSidebar";
import { newsBlogId } from "@/constants/constants";
import {
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Show,
  Text,
} from "@chakra-ui/react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillMail,
  AiFillRedditCircle,
  AiFillTwitterCircle,
  AiOutlineComment,
} from "react-icons/ai";
import { BsNewspaper, BsSnapchat } from "react-icons/bs";

const Blog = ({ newsData }: newsBlogId) => {
  return (
    <>
      <Flex px={10}>
        {/* Center Side */}
        <Flex
          p={5}
          flex={8}
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <Flex mb={5}>
            <Heading size={"lg"}>{newsData.title}</Heading>
          </Flex>
          <Flex py={6} gap={2} wrap={"wrap"}>
            <Button
              fontSize={"12px"}
              colorScheme={"facebook"}
              h={7}
              borderRadius={0}
            >
              <AiFillFacebook style={{ marginRight: "5px" }} />
              Share on Facebook
            </Button>
            <Button
              fontSize={"12px"}
              colorScheme={"twitter"}
              h={7}
              borderRadius={0}
            >
              <AiFillTwitterCircle style={{ marginRight: "5px" }} /> Tweet
            </Button>
            <Button
              fontSize={"12px"}
              colorScheme={"yellow"}
              h={7}
              borderRadius={0}
            >
              <BsSnapchat style={{ marginRight: "5px" }} />
              Snapchat
            </Button>
            <Button
              fontSize={"12px"}
              colorScheme={"linkedin"}
              h={7}
              borderRadius={0}
            >
              <AiFillLinkedin style={{ marginRight: "5px" }} /> Share
            </Button>
            <Button
              fontSize={"12px"}
              colorScheme={"blue"}
              h={7}
              borderRadius={0}
            >
              <AiFillRedditCircle style={{ marginRight: "5px" }} /> Reddit
            </Button>
            <Button
              fontSize={"12px"}
              colorScheme={"gray"}
              h={7}
              borderRadius={0}
            >
              <AiFillMail style={{ marginRight: "5px" }} /> Email
            </Button>
            <Button
              fontSize={"12px"}
              colorScheme={"purple"}
              h={7}
              borderRadius={0}
            >
              <AiOutlineComment style={{ marginRight: "5px" }} /> Comment
            </Button>
            <Button
              fontSize={"12px"}
              colorScheme={"green"}
              h={7}
              borderRadius={0}
            >
              <BsNewspaper style={{ marginRight: "5px" }} />
              Google News
            </Button>
          </Flex>
          <Flex>
            <Image py={4} src={newsData.banner} alt={newsData.id} />
          </Flex>
          <Flex>
            <Flex flex={3} gap={3} direction={"column"}>
              <Text as={"b"}>HIGHLIGHTS</Text>
              <Divider w={"80px"} border={"1px solid red"}></Divider>
              <Text mr={4} textAlign={"left"}>
                InfinixNote 12i (2022) sports a 6.7-inch 60Hz AMOLED display
              </Text>
              <Divider w={"80px"} border={"1px solid red"}></Divider>
              <Text mr={4} textAlign={"left"}>
                The phone also offers 1000 nits peak brightness
              </Text>
              <Divider w={"80px"} border={"1px solid red"}></Divider>
              <Text mr={4} textAlign={"left"}>
                Infinix Note 12i launch date was announced on a Flipkart
                microsite
              </Text>
              <Divider w={"80px"} border={"1px solid red"}></Divider>
              <Text mr={4} textAlign={"left"}>
                Infinix Note 12i With Amoled Quality Display
              </Text>
            </Flex>
            <Flex ml={4} flex={10}>
              <Text textAlign={"justify"}>{newsData.description}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Show above="xl">
          {/* Right Side */}
          <Flex flex={4}>
            <RightSidebar />
          </Flex>
        </Show>
      </Flex>
    </>
  );
};

export default Blog;

export async function getStaticPaths() {
  const prodRef = collection(db, "news");
  let res = await getDocs(prodRef)
  let data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return {
    paths: data.map((blog) => ({ params: { id: blog.id.toString() } })),
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context: any) {
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
