import React from "react";
import {
  Flex,
  Heading,
  Button,
  Text,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { BsDisplay, BsCpu, BsCameraFill, BsWifi } from "react-icons/bs";
import { BiAperture } from "react-icons/bi";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import Link from "next/link";

type productProps = {
  imgsrc?: string;
  modal?: string;
  displaySize?: string;
  frontCamera?: string;
  rearCamera?: string;
  processor?: string;
  releaseDate?: string;
  price?: number;
  id?: string;
  image?: string;
  name?: string;
  os?: string;
  size?: string;
  wifi?: string;
  productLink?: string;
};

const ProductCard = ({
  imgsrc,
  modal,
  displaySize,
  frontCamera,
  rearCamera,
  processor,
  releaseDate,
  price,
  image,
  name,
  os,
  wifi,
  size,
  id,
  productLink,
}: productProps) => {
  return (
    <Flex
      direction={"column"}
      transition={"1000ms"}
      width={{ base: "300px", sm: "500px" }}
      m={"4"}
      borderRadius={"8"}
      p={"3"}
      bgColor={"white"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Flex>
        <Flex direction={"column"} alignItems={"center"}>
          <Image src={imgsrc ? imgsrc : image} alt={imgsrc} width={"80px"} />
        </Flex>
        <Flex direction={"column"}>
          <Text ml={3} fontSize={"lg"}>
            {modal ? modal : name}
          </Text>
          <Flex m={"3"}>
            {/* Small Specs Component */}
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={"4"}>
              <Flex alignItems={"center"} gap={"3"}>
                <BsDisplay />
                <Flex direction={"column"}>
                  <Text fontSize={"xs"}>Display Size</Text>
                  <Text fontSize={"sm"}>
                    {displaySize ? displaySize : size}
                  </Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"3"}>
                <BsCpu />
                <Flex direction={"column"}>
                  <Text fontSize={"xs"}>Processor</Text>
                  <Text fontSize={"sm"}>{processor}</Text>
                </Flex>
              </Flex>
              {frontCamera ? (
                <Flex alignItems={"center"} gap={"3"}>
                  <BiAperture />
                  <Flex direction={"column"}>
                    <Text fontSize={"xs"}>Front Camera</Text>
                    <Text fontSize={"sm"}>{frontCamera}</Text>
                  </Flex>
                </Flex>
              ) : (
                <Flex alignItems={"center"} gap={"3"}>
                  <MdOutlineScreenSearchDesktop />
                  <Flex direction={"column"}>
                    <Text fontSize={"xs"}>OS</Text>
                    <Text fontSize={"sm"}>{os}</Text>
                  </Flex>
                </Flex>
              )}
              {!rearCamera ? (
                <Flex alignItems={"center"} gap={"3"}>
                  <BsWifi />
                  <Flex direction={"column"}>
                    <Text fontSize={"xs"}>Wifi</Text>
                    <Text fontSize={"sm"}>{wifi}</Text>
                  </Flex>
                </Flex>
              ) : (
                <Flex alignItems={"center"} gap={"3"}>
                  <BsCameraFill />
                  <Flex direction={"column"}>
                    <Text fontSize={"xs"}>Rear Camera</Text>
                    <Text fontSize={"sm"}>{rearCamera}</Text>
                  </Flex>
                </Flex>
              )}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={"100%"}
        m={"3"}
        border={"1px soild red"}
        justifyContent={"space-evenly"}
      >
        {/* Contains Price and Release Date */}
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"xs"}>Release Date</Text>
          <Text fontSize={"sm"}>{releaseDate}</Text>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} gap={"3"}>
          <Heading size={"md"}>{"₹" + price}</Heading>
          <Link href={`${productLink}/${id}`}>
            <Button>Buy</Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
