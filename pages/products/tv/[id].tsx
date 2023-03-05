import { db } from "@/Backend/Firebase/firebase";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { intrfcTv } from "@/constants/constants";
import useToastMsg from "@/customHook/UseToastMsg";
import { addCart, getCart } from "@/redux/cart/cart.actions";
import {
  Button,
  Flex,
  Heading,
  Image,
  Show,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React from "react";
import { BsDisplay } from "react-icons/bs";
import { IoMdPricetags } from "react-icons/io";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { useDispatch } from "react-redux";

interface singleTv {
  tv: intrfcTv;
}

const Tv = ({ tv }: singleTv) => {
  const toastMsg = useToastMsg();
  const dispatch = useDispatch();
  const handleAddtoCart = () => {
    addCart(tv, toastMsg);
    getCart(dispatch);
  };
  return (
    <Flex p={10}>
      <Show above="lg">
        {/* Left Side */}
        <Flex mx={2} flex={1}>
          <LeftSidebar />
        </Flex>
      </Show>
      {/* Center Side */}
      <Flex
        mx={{ base: 1, sm: 4 }}
        p={{ base: 0, sm: 5 }}
        flex={3}
        justifyContent={"flex-start"}
        direction={"column"}
        alignItems={"center"}
      >
        <Flex mb={8} w={"100%"} justifyContent={"center"}>
          <Heading size={{ base: "lg", sm: "xl" }}>{tv.modal}</Heading>
        </Flex>
        <Flex
          mb={8}
          justifyContent={{ base: "center", sm: "center", md: "flex-start" }}
        >
          <Image src={tv.imgsrc} alt={tv.modal} w={"180px"} />
        </Flex>
        <Flex
          gap={5}
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          justifyContent={"space-evenly"}
        >
          <Flex border={"7px double #DDDDDD"} borderRadius={"20px"} p={"5"}>
            <SimpleGrid
              columns={{ base: 1, sm: 2 }}
              spacing={{ base: "8", sm: "6", md: "1" }}
            >
              <Flex alignItems={"center"} gap={"3"}>
                <BsDisplay style={{ fontSize: "30px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Display Size</Text>
                  <Text fontSize={"md"}>{tv.displaySize}</Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"3"}>
                <BsDisplay style={{ fontSize: "30px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Display Type</Text>
                  <Text fontSize={"md"}>{tv.displayType}</Text>
                </Flex>
              </Flex>

              <Flex alignItems={"center"} gap={"3"}>
                <MdOutlineScreenSearchDesktop style={{ fontSize: "30px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>OS</Text>
                  <Text fontSize={"md"}>{tv.os}</Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"3"}>
                <IoMdPricetags style={{ fontSize: "30px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Price</Text>
                  <Text fontSize={"md"}>{tv.price}</Text>
                </Flex>
              </Flex>
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          mt={3}
          gap={5}
          alignItems={"center"}
          justify={"flex-end"}
          w={"100%"}
        >
          <Text as={"b"} fontSize={"lg"}>
            Price
          </Text>
          <Text fontSize={"xl"} as={"b"}>
            {"₹ " + tv.price}
          </Text>
          <Button onClick={handleAddtoCart} colorScheme={"red"}>
            Add To Cart
          </Button>
        </Flex>
        <Flex direction={"column"} gap={3}>
          <Text as={"b"}>{tv.modal} Summary</Text>
          <Text textAlign={"justify"} fontSize={"md"}>
            {tv.modal} Inch Crystal 4K Neo TV (UA43AUE65AKXXL) price in India
            starts from ₹ {tv.price}. The lowest price of Samsung 43 Inch
            Crystal 4K Neo TV (UA43AUE65AKXXL) is ₹ {tv.price} at Amazon on 22nd
            January 2023. Comes with Android OS and Support with Google Apps
            With this {tv.related} TV that breathes life into your
            entertainment, you bring home the real entertainer and always keep
            one step ahead of the entertainment curve. The stunning bezel-less
            design of this TV elevates your viewing experience to a whole new
            level. Furthermore, you can hear every note thanks to Dolby Audio
            and 30 W of power from the speakers. The Quad-core A55 CPU also
            enables this TV to function amazingly well, mesmerising you with its
            effectiveness.
          </Text>
        </Flex>
      </Flex>
      <Show above="xl">
        {/* Right Side */}
        <Flex mx={4} flex={1.2}>
          <RightSidebar />
        </Flex>
      </Show>
    </Flex>
  );
};

export default Tv;

export async function getStaticPaths() {
  const prodRef = collection(db, "tv");
  let res = await getDocs(prodRef);
  let data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return {
    paths: data.map((blog) => ({ params: { id: blog.id.toString() } })),
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps = async (context: any) => {
  const { params } = context;
  try {
    const tvRef = doc(db, "tv", params.id);
    const res = await getDoc(tvRef);
    const tv = res.data();
    return {
      props: {
        tv: { ...tv, id: params.id, quantity: 1 },
      },
    };
  } catch (error) {
    console.log(error);
  }
};
