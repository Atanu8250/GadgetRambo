import React, { useEffect, useRef } from "react";
import { Flex, IconButton, Input, Show } from "@chakra-ui/react";
import LaptopFilter from "@/components/ProductSection/Laptops/LaptopFilter";
import ResponsiveLaptopFilter from "@/components/ProductSection/Laptops/ResponsiveLaptopFilter";
import { useDispatch, useSelector } from "react-redux";
import { getLaptop } from "@/redux/products/products.actions";
import ProductCard from "@/components/ProductSection/ProductCard";
import { State } from "@/redux/store";
import { BsSearch } from "react-icons/bs";
import RightSidebar from "@/components/RightSidebar";

const Laptops = () => {
  const { laptops } = useSelector((store: State) => store.productsManager);
  console.log("laptops: ", laptops);
  const srcIpRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  useEffect(() => {
    if (laptops.length === 0) {
      getLaptop(dispatch, 20);
    }
  }, []);

  return (
    <>
      <Flex direction={{ base: "column", sm: "column", md: "row" }} w={"100%"} p={"10"} justifyContent={"center"}>
        <Flex flex={1} justifyContent={{ base: "flex-start", sm: "flex-start", md: "center" }} mx={"4"}>
          <Show above="md">
            <LaptopFilter />
          </Show>
          <ResponsiveLaptopFilter />
        </Flex>
        <Flex flex={2} direction={"column"} alignItems={"center"}>
          <Flex>
            <Input ref={srcIpRef} w={{ base: "300px", sm: "380px" }} variant="flushed" type={"text"} placeholder={"Search Here"} />
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
            <ProductCard key={data.id} {...data} />
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
