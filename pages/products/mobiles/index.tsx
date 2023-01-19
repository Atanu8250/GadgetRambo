import React, { useEffect } from "react";
import { Flex, Show } from "@chakra-ui/react";
import ProductFilter from "@/components/ProductSection/ProductFilter";
import SmallScreenFilter from "@/components/ProductSection/SmallScreenFIlter";
import { useDispatch, useSelector } from "react-redux";
import { getMobile } from "@/redux/products/products.actions";
import ProductCard from "@/components/ProductSection/ProductCard";
import { State } from "@/redux/store";

const Mobiles = () => {
  const { mobiles } = useSelector((store: State) => store.productsManager);
  console.log("mobiles: ", mobiles);

  const dispatch = useDispatch();
  useEffect(() => {
    if (mobiles.length === 0) {
      getMobile(dispatch);
    }
  }, []);

  return (
    <>
      <Flex w={"100%"} p={"8"} justifyContent={"center"}>
        <Flex flex={1} justifyContent={"center"}>
          <Show above="md">
            <ProductFilter />
          </Show>
          <SmallScreenFilter />
        </Flex>
        <Flex flex={2} direction={"column"}>
          {mobiles.map((data: any) => (
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

export default Mobiles;
