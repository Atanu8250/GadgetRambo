import React, { useState } from "react";
import { Button, Flex, IconButton, Input, Show } from "@chakra-ui/react";
import LaptopFilter from "@/components/ProductSection/Laptops/LaptopFilter";
import ResponsiveLaptopFilter from "@/components/ProductSection/Laptops/ResponsiveLaptopFilter";
import ProductCard from "@/components/ProductSection/ProductCard";
import { BsSearch } from "react-icons/bs";
import { getTvAPI } from "@/redux/products/products.api";
import RightSidebar from "@/components/RightSidebar";

const Television = ({ televisons }: any) => {
  const [loader, setLoader] = useState<number>(5);

  return (
    <>
      <Flex direction={{ base: "column", sm: "column", md: "row" }} w={"100%"} p={"10"} justifyContent={"center"}>
        <Flex
          flex={1}
          justifyContent={{
            base: "flex-start",
            sm: "flex-start",
            md: "center",
          }}
          alignItems={"flex-start"}
          mx={4}
        >
          <Show above="md">
            <LaptopFilter />
          </Show>
          <ResponsiveLaptopFilter />
        </Flex>
        <Flex flex={2} mx={4} direction={"column"} alignItems={"center"}>
          <Flex>
            <Input w={{ base: "300px", sm: "380px" }} variant="flushed" type={"text"} placeholder={"Search Here"} />
            <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<BsSearch />} />
          </Flex>
          {televisons.map((data: any, id: number) => {
            if (id < loader) {
              return <ProductCard key={data.id} {...data} productLink={"tv"} />;
            }
          })}
          <Button onClick={() => setLoader((prev) => prev + 2)} colorScheme={"red"}>
            Load More
          </Button>
        </Flex>
        <Show above="xl">
          <Flex mx={4} flex={2} justifyContent={"center"}>
            <RightSidebar />
          </Flex>
        </Show>
      </Flex>
    </>
  );
};

export default Television;

export const getServerSideProps = async () => {
  const televisons = await getTvAPI(10);
  return {
    props: {
      televisons,
    },
  };
};
