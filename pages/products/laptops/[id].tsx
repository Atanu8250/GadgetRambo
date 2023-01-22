import { db } from "@/Backend/Firebase/firebase";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { Button, Flex, Heading, Image, Show, SimpleGrid, Text } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { BiMemoryCard } from "react-icons/bi";
import { BsCpu, BsDisplay, BsWifi } from "react-icons/bs";
import { FaUsb } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const Laptop = ({ laptop }: any) => {
  console.log("laptop: ", laptop);
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
          <Heading size={{ base: "lg", sm: "xl" }}>{laptop.name}</Heading>
        </Flex>
        <Flex gap={5} direction={{ base: "column", sm: "column", md: "row", lg: "row" }} justifyContent={"space-evenly"}>
          <Flex mb={8} justifyContent={{ base: "center", sm: "center", md: "flex-start" }}>
            <Image src={laptop.image} alt={laptop.name} w={"180px"} />
          </Flex>
          <Flex border={"7px double #DDDDDD"} borderRadius={"20px"} p={"5"}>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: "8", sm: "6", md: "1" }}>
              <Flex alignItems={"center"} gap={"3"}>
                <BsDisplay style={{ fontSize: "30px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Display Size</Text>
                  <Text fontSize={"md"}>{laptop.size + " " + laptop.resolution}</Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"3"}>
                <BsCpu style={{ fontSize: "30px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Processor</Text>
                  <Text fontSize={"md"}>{laptop.processor}</Text>
                </Flex>
              </Flex>

              <Flex alignItems={"center"} gap={"3"}>
                <BiMemoryCard style={{ fontSize: "30px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Hard Disk</Text>
                  <Text fontSize={"md"}>{laptop.hardDisk}</Text>
                </Flex>
              </Flex>

              <Flex alignItems={"center"} gap={"3"}>
                <FaUsb style={{ fontSize: "30px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Usb Ports</Text>
                  <Text fontSize={"md"}>{laptop.numberOfUSBPorts}</Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"3"}>
                <MdOutlineScreenSearchDesktop style={{ fontSize: "30px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>OS</Text>
                  <Text fontSize={"md"}>{laptop.os}</Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"3"}>
                <BsWifi style={{ fontSize: "30px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Wifi</Text>
                  <Text fontSize={"md"}>{laptop.wifi}</Text>
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
          <Text as={"b"}>{laptop.name} Summary</Text>
          <Text textAlign={"justify"} fontSize={"md"}>
            {laptop.name} is a {laptop.os} laptop with a {laptop.size} display that has a resolution of {laptop.resolution}. It is powered by a {laptop.processor} processor and it
            comes with 4GB of RAM. The {laptop.name} packs 128GB of SSD storage. Connectivity options include Wi-Fi 802.11 ax and it comes with {laptop.numberOfUSBPorts} USB ports,
            USB 3.2 Gen 1 (Type A), USB 3.2 Gen 2 (Type C), Thunderbolt 4 (Type C), HDMI Port, Multi Card Slot, Headphone and Mic Combo Jack ports. As of 22nd January 2023,{" "}
            {laptop.name} price in India starts at Rs. 54,700.
          </Text>
          <Text as={"b"}>Brand</Text>
          <Text fontSize={"md"}>{laptop.brand}</Text>
          <Text as={"b"}>Release Date</Text>
          <Text fontSize={"md"}>{laptop.releaseDate}</Text>
          <Text as={"b"} fontSize={"lg"}>
            Price
          </Text>
          <Text fontSize={"lg"}>{"₹ " + laptop.price}</Text>
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

export default Laptop;

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  try {
    const laptopRef = doc(db, "gadget_rambo/products/laptops", params.id);
    const res = await getDoc(laptopRef);
    const laptop = res.data();
    return {
      props: {
        laptop,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
