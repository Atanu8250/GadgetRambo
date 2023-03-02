import React, { useState } from "react";
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
import { IoMdPricetags } from "react-icons/io";

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
  displayType?: string;
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
  displayType,
}: productProps) => {
  const getRandomDate = () => {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
  };

  return (
    <Flex
      direction={"column"}
      transition={"1000ms"}
      width={{ base: "300px", sm: "550px", md: "650px" }}
      m={"3"}
      borderRadius={"8"}
      p={"3"}
      bgColor={"white"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Flex justifyContent={"space-evenly"} alignItems={"center"}>
        <Flex flex={1} direction={"column"} alignItems={"center"}>
          <Image src={imgsrc ? imgsrc : image} alt={imgsrc} mx={"auto"} />
        </Flex>
        <Flex flex={4} direction={"column"}>
          <Text ml={3} fontSize={"lg"}>
            {modal ? modal : name}
          </Text>
          <Flex m={"3"} w={"100%"}>
            {/* Small Specs Component */}
            <SimpleGrid w={"100%"} columns={{ base: 1, sm: 2 }} spacing={"4"}>
              <Flex alignItems={"center"} gap={"3"}>
                <BsDisplay style={{ fontSize: "24px" }} />
                <Flex direction={"column"}>
                  <Text fontSize={"xs"}>Display Size</Text>
                  <Text fontSize={"sm"}>
                    {displaySize ? displaySize : size}
                  </Text>
                </Flex>
              </Flex>
              {processor ? (
                <Flex alignItems={"center"} gap={"3"}>
                  <BsCpu style={{ fontSize: "24px" }} />
                  <Flex direction={"column"}>
                    <Text fontSize={"xs"}>Processor</Text>
                    <Text fontSize={"sm"}>{processor}</Text>
                  </Flex>
                </Flex>
              ) : (
                <Flex alignItems={"center"} gap={"3"}>
                  <BsDisplay style={{ fontSize: "24px" }} />
                  <Flex direction={"column"}>
                    <Text fontSize={"xs"}>Display Type</Text>
                    <Text fontSize={"sm"}>{displayType}</Text>
                  </Flex>
                </Flex>
              )}
              {frontCamera ? (
                <Flex alignItems={"center"} gap={"3"}>
                  <BiAperture style={{ fontSize: "24px" }} />
                  <Flex direction={"column"}>
                    <Text fontSize={"xs"}>Front Camera</Text>
                    <Text fontSize={"sm"}>{frontCamera}</Text>
                  </Flex>
                </Flex>
              ) : (
                <Flex alignItems={"center"} gap={"3"}>
                  <MdOutlineScreenSearchDesktop style={{ fontSize: "24px" }} />
                  <Flex direction={"column"}>
                    <Text fontSize={"xs"}>OS</Text>
                    <Text fontSize={"sm"}>{os}</Text>
                  </Flex>
                </Flex>
              )}
              {!rearCamera ? (
                wifi ? (
                  <Flex alignItems={"center"} gap={"3"}>
                    <BsWifi style={{ fontSize: "24px" }} />
                    <Flex direction={"column"}>
                      <Text fontSize={"xs"}>Wifi</Text>
                      <Text fontSize={"sm"}>{wifi}</Text>
                    </Flex>
                  </Flex>
                ) : (
                  <Flex alignItems={"center"} gap={"3"}>
                    <IoMdPricetags style={{ fontSize: "24px" }} />
                    <Flex direction={"column"}>
                      <Text fontSize={"xs"}>Price</Text>
                      <Text fontSize={"sm"}>{price}</Text>
                    </Flex>
                  </Flex>
                )
              ) : (
                <Flex alignItems={"center"} gap={"3"}>
                  <BsCameraFill style={{ fontSize: "24px" }} />
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
          <Text fontSize={"sm"}>
            {releaseDate ? releaseDate : "22nd January 2023"}
          </Text>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} gap={"3"}>
          <Heading size={"md"}>{"₹" + price}</Heading>
          <Link href={`${productLink}/${id}`}>
            <Button colorScheme={"red"}>Full Specs</Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
