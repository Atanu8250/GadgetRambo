import { db } from "@/Backend/Firebase/firebase";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { Button, Flex, Heading, Image, Show, SimpleGrid, Text } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { BsDisplay } from "react-icons/bs";
import { IoMdPricetags } from "react-icons/io";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const Tv = ({ tv }: any) => {
  console.log(tv);
  return (
    <Flex p={7}>
      <Show above="lg">
        {/* Left Side */}
        <Flex mx={4} flex={1}>
          <LeftSidebar />
        </Flex>
      </Show>
      {/* Center Side */}
      <Flex mx={{ base: 1, sm: 4 }} p={{ base: 1, sm: 5 }} flex={4} justifyContent={"flex-start"} direction={"column"} alignItems={"center"}>
        <Flex mb={8} w={"100%"} justifyContent={"flex-start"}>
          <Heading size={{ base: "lg", sm: "xl" }}>{tv.modal}</Heading>
        </Flex>
        <Flex gap={5} direction={{ base: "column", sm: "column", md: "row", lg: "row" }} justifyContent={"space-evenly"}>
          <Flex mb={8} justifyContent={{ base: "center", sm: "center", md: "flex-start" }}>
            <Image src={tv.imgsrc} alt={tv.modal} w={"180px"} />
          </Flex>
          <Flex border={"7px double #DDDDDD"} borderRadius={"20px"} p={"5"}>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: "8", sm: "6", md: "1" }}>
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
        <Flex justify={"flex-end"} w={"100%"}>
          <Button mt={3} colorScheme={"red"}>
            Buy Now
          </Button>
        </Flex>
        <Flex direction={"column"} gap={3}>
          <Text as={"b"}>{tv.name} Summary</Text>
          <Text textAlign={"justify"} fontSize={"md"}>
            {tv.modal} Inch Crystal 4K Neo TV (UA43AUE65AKXXL) price in India starts from ₹ {tv.price}. The lowest price of Samsung 43 Inch Crystal 4K Neo TV (UA43AUE65AKXXL) is ₹{" "}
            {tv.price} at Amazon on 22nd January 2023. Comes with Android OS and Support with Google Apps With this {tv.related} TV that breathes life into your entertainment, you
            bring home the real entertainer and always keep one step ahead of the entertainment curve. The stunning bezel-less design of this TV elevates your viewing experience to
            a whole new level. Furthermore, you can hear every note thanks to Dolby Audio and 30 W of power from the speakers. The Quad-core A55 CPU also enables this TV to
            function amazingly well, mesmerising you with its effectiveness.
          </Text>
          <Text as={"b"}>Brand</Text>
          <Text fontSize={"md"}>{tv.brand}</Text>
          <Text as={"b"}>Release Date</Text>
          <Text fontSize={"md"}>{tv.releaseDate}</Text>
          <Text as={"b"} fontSize={"lg"}>
            Price
          </Text>
          <Text fontSize={"lg"}>{"₹ " + tv.price}</Text>
        </Flex>
      </Flex>
      <Show above="xl">
        {/* Right Side */}
        <Flex mx={4} flex={2}>
          <RightSidebar />
        </Flex>
      </Show>
    </Flex>
  );
};

export default Tv;

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  try {
    const tvRef = doc(db, "tv", params.id);
    const res = await getDoc(tvRef);
    const tv = res.data();
    return {
      props: {
        tv,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
