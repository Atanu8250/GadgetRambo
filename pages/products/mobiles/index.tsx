import React, { useEffect, useRef, useState } from "react";
import { Flex, IconButton, Input, Show } from "@chakra-ui/react";
import MobileFilter from "@/components/ProductSection/Mobiles/MobileFilter";
import ResponsiveMobileFilter from "@/components/ProductSection/Mobiles/ResponsiveMobileFilter";
import ProductCard from "@/components/ProductSection/ProductCard";
import { BsSearch } from "react-icons/bs";
import { getMobileAPI } from "@/redux/products/products.api";
import Link from "next/link";

const Mobiles = ({ mobiles }: any) => {
  const srcIpRef = useRef<HTMLInputElement>(null);

  // let searchValue = srcIpRef?.current?.value || "";

  // const HandleSearch = () => {
  //   let searchedData = mobiles.filter((el) => {
  //     // return Object.values(el).find((str) => ("" + str).toLowerCase().includes(searchValue.toLowerCase()));
  //     return Object.values(el);
  //   });
  //   setMobileData(searchedData);
  // };

  return (
    <>
      <Flex
        direction={{ base: "column", sm: "column", md: "row" }}
        w={"100%"}
        p={"8"}
        justifyContent={"center"}
      >
        <Flex
          flex={1}
          justifyContent={{
            base: "flex-start",
            sm: "flex-start",
            md: "center",
          }}
        >
          <Show above="md">
            <MobileFilter />
          </Show>
          <ResponsiveMobileFilter />
        </Flex>
        <Flex flex={2} direction={"column"} alignItems={"center"}>
          {/* Search Functionality */}
          <Flex>
            <Input
              ref={srcIpRef}
              w={{ base: "270px", sm: "380px" }}
              variant="flushed"
              type={"text"}
              placeholder={"Search Here"}
            />
            <IconButton
              aria-label="xyz"
              // onClick={() => HandleSearch()}
              borderRadius={"0px"}
              _hover={{}}
              color={"white"}
              bgColor={"red"}
              icon={<BsSearch />}
            />
          </Flex>
          {/* Search Function End */}
          {mobiles?.map((data: any) => (
            <ProductCard key={data.id} {...data} productLink={"mobiles"} />
          ))}
        </Flex>
        <Show above="lg">
          <Flex flex={2} justifyContent={"center"}>
            Last Div
          </Flex>
        </Show>
      </Flex>
    </>
  );
};

export default Mobiles;

export const getServerSideProps = async () => {
  const mobiles = await getMobileAPI(10);
  return {
    props: {
      mobiles,
    },
  };
};
