import React, { useEffect, useRef, useState } from "react";
import { Flex, IconButton, Input, Show } from "@chakra-ui/react";
import MobileFilter from "@/components/ProductSection/Mobiles/MobileFilter";
import ResponsiveMobileFilter from "@/components/ProductSection/Mobiles/ResponsiveMobileFilter";
import { useDispatch, useSelector } from "react-redux";
import { getMobile } from "@/redux/products/products.actions";
import ProductCard from "@/components/ProductSection/ProductCard";
import { State } from "@/redux/store";
import { BsSearch } from "react-icons/bs";

const Mobiles = () => {
  const srcIpRef = useRef<HTMLInputElement>(null);

  const { mobiles } = useSelector((store: State) => store.productsManager);
  const [mobileData, setMobileData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (mobiles.length === 0) {
      getMobile(dispatch);
    } else {
      setMobileData(mobiles);
    }
  }, [mobiles]);
  let searchValue = srcIpRef?.current?.value || "";

  const HandleSearch = () => {
    let searchedData = mobiles.filter((el) => {
      // return Object.values(el).find((str) => ("" + str).toLowerCase().includes(searchValue.toLowerCase()));
      return Object.values(el);
    });
    setMobileData(searchedData);
  };

  return (
    <>
      <Flex direction={{ base: "column", sm: "column", md: "row" }} w={"100%"} p={"8"} justifyContent={"center"}>
        <Flex flex={1} justifyContent={{ base: "flex-start", sm: "flex-start", md: "center" }}>
          <Show above="md">
            <MobileFilter />
          </Show>
          <ResponsiveMobileFilter />
        </Flex>
        <Flex flex={2} direction={"column"} alignItems={"center"}>
          {/* Search Functionality */}
          <Flex>
            <Input ref={srcIpRef} w={{ base: "270px", sm: "380px" }} variant="flushed" type={"text"} placeholder={"Search Here"} />
            <IconButton aria-label="xyz" onClick={() => HandleSearch()} borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<BsSearch />} />
          </Flex>
          {/* Search Function End */}
          {(mobileData ? mobileData : mobiles).map((data: any) => (
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
