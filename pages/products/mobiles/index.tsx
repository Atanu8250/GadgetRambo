import React, { useEffect, useRef, useState } from "react";
import { Button, Flex, IconButton, Input, Show } from "@chakra-ui/react";
import MobileFilter from "@/components/ProductSection/Mobiles/MobileFilter";
import ResponsiveMobileFilter from "@/components/ProductSection/Mobiles/ResponsiveMobileFilter";
import ProductCard from "@/components/ProductSection/ProductCard";
import { BsSearch } from "react-icons/bs";
import { getMobileAPI } from "@/redux/products/products.api";
import RightSidebar from "@/components/RightSidebar";
import { intrfcMobile } from "@/constants/constants";
import { getMobile } from "@/redux/products/products.actions";
import { useDispatch } from "react-redux";

const Mobiles = ({ mobiles }: any) => {
  const [loader, setLoader] = useState<number>(5);
  const [mobile, setMobile] = useState<[]>([]);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const setMobiles = (d: any) => {
    setMobile(d);
    setCount(count + 1);
  };
  useEffect(() => {
    getMobile(dispatch, mobiles);
    setMobile(mobile);
  }, []);

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
          <Show breakpoint="(min-width: 768px)">
            <MobileFilter setMobiles={setMobiles} />
          </Show>
          <ResponsiveMobileFilter setMobiles={setMobiles} />
        </Flex>
        <Flex mx={4} flex={3} direction={"column"} alignItems={"center"}>
          {mobile?.map((data: intrfcMobile, id: number) => {
            if (id < loader) {
              return (
                <ProductCard key={data.id} {...data} productLink={"mobiles"} />
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

export default Mobiles;

export const getStaticProps = async () => {
  const mobiles = await getMobileAPI();
  return {
    props: {
      mobiles,
    },
  };
};
