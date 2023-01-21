import React, { useEffect, useRef } from "react";
import { Flex, IconButton, Input, Show } from "@chakra-ui/react";
import LaptopFilter from "@/components/ProductSection/Laptops/LaptopFilter";
import ResponsiveLaptopFilter from "@/components/ProductSection/Laptops/ResponsiveLaptopFilter";
import ProductCard from "@/components/ProductSection/ProductCard";
import { BsSearch } from "react-icons/bs";
import RightSidebar from "@/components/RightSidebar";
import { getLaptopAPI } from "@/redux/products/products.api";

const Laptops = ({ laptops }: any) => {
  return (
    <>
      <Flex
        direction={{ base: "column", sm: "column", md: "row" }}
        w={"100%"}
        p={"10"}
        justifyContent={"center"}
      >
        <Flex
          flex={1}
          justifyContent={{
            base: "flex-start",
            sm: "flex-start",
            md: "center",
          }}
          mx={"4"}
        >
          <Show above="md">
            <LaptopFilter />
          </Show>
          <ResponsiveLaptopFilter />
        </Flex>
        <Flex flex={2} direction={"column"} alignItems={"center"}>
          <Flex>
            <Input
              w={{ base: "300px", sm: "380px" }}
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
          {laptops.map((data: any) => (
            <ProductCard key={data.id} {...data} productLink={"laptops"} />
          ))}
        </Flex>
        <Show above="lg">
          <Flex mx={4} flex={2} justifyContent={"center"}>
            <RightSidebar />
          </Flex>
        </Show>
      </Flex>
    </>
  );
};

export default Laptops;

export const getServerSideProps = async () => {
  const laptops = await getLaptopAPI(10);
  return {
    props: {
      laptops,
    },
  };
};
