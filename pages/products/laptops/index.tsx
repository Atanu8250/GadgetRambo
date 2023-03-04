import React, { useEffect, useRef, useState } from "react";
import { Button, Flex, IconButton, Input, Show } from "@chakra-ui/react";
import LaptopFilter from "@/components/ProductSection/Laptops/LaptopFilter";
import ResponsiveLaptopFilter from "@/components/ProductSection/Laptops/ResponsiveLaptopFilter";
import ProductCard from "@/components/ProductSection/ProductCard";
import { BsSearch } from "react-icons/bs";
import RightSidebar from "@/components/RightSidebar";
import { getLaptopAPI } from "@/redux/products/products.api";

const Laptops = ({ laptops }: any) => {
  const [loader, setLoader] = useState<number>(5);
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
          alignItems={"flex-start"}
          mx={1}
        >
          <Show above="md">
            <LaptopFilter />
          </Show>
          <ResponsiveLaptopFilter />
        </Flex>
        <Flex flex={3} mx={4} direction={"column"} alignItems={"center"}>
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
          {laptops.map((data: any, id: number) => {
            if (id < loader) {
              return (
                <ProductCard key={data.id} {...data} productLink={"laptops"} />
              );
            }
          })}
          <Button
            onClick={() => setLoader((prev) => prev + 2)}
            colorScheme={"red"}
          >
            Load More
          </Button>
        </Flex>
        <Show above="xl">
          <Flex mx={4} flex={1.2} justifyContent={"center"}>
            <RightSidebar />
          </Flex>
        </Show>
      </Flex>
    </>
  );
};

export default Laptops;

export const getStaticProps = async () => {
  const laptops = await getLaptopAPI();
  return {
    props: {
      laptops,
    },
  };
};
