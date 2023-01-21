import React, { useEffect } from "react";
import { Flex, IconButton, Input, Show } from "@chakra-ui/react";
import LaptopFilter from "@/components/ProductSection/Laptops/LaptopFilter";
import ResponsiveLaptopFilter from "@/components/ProductSection/Laptops/ResponsiveLaptopFilter";
import { useDispatch, useSelector } from "react-redux";
import { getLaptop } from "@/redux/products/products.actions";
import ProductCard from "@/components/ProductSection/ProductCard";
import { State } from "@/redux/store";
import { BsSearch } from "react-icons/bs";
import { getLaptopAPI } from "@/redux/products/products.api";

const Laptops = ({ laptops }: any) => {
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
            <LaptopFilter />
          </Show>
          <ResponsiveLaptopFilter />
        </Flex>
        <Flex flex={2} direction={"column"} alignItems={"center"}>
          <Flex>
            <Input
              w={"380px"}
              variant="flushed"
              type={"text"}
              placeholder={"Search Here"}
            />
            <IconButton
              aria-label="SearchByBrand"
              borderRadius={"0px"}
              _hover={{}}
              color={"white"}
              bgColor={"red"}
              icon={<BsSearch />}
            />
          </Flex>
          {laptops.map((data: any) => (
            <ProductCard key={data.id} {...data} />
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

export default Laptops;

export const getServerSideProps = async () => {
  const laptops = await getLaptopAPI(10);
  return {
    props: {
      laptops,
    },
  };
};
