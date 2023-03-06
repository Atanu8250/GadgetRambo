import React, { useEffect, useState } from "react";
import { Button, Flex, Show } from "@chakra-ui/react";
import ProductCard from "@/components/ProductSection/ProductCard";
import { getTvAPI } from "@/redux/products/products.api";
import RightSidebar from "@/components/RightSidebar";
import { useDispatch } from "react-redux";
import { getTv } from "@/redux/products/products.actions";
import TvFilter from "@/components/ProductSection/Tv/TvFilter";
import ResponsiveTvFilter from "@/components/ProductSection/Tv/ResponsiveTvFilter";

const Television = ({ tv }: any) => {
  const [loader, setLoader] = useState<number>(5);
  const [televisons, setTelevision] = useState<[]>([]);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const setTv = (d: any) => {
    setTelevision(d);
    setCount(count + 1);
  };
  useEffect(() => {
    getTv(dispatch, tv);
    setTelevision(tv);
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
          <Show above="md">
            <TvFilter setTv={setTv} />
          </Show>
          <ResponsiveTvFilter setTv={setTv} />
        </Flex>
        <Flex flex={3} mx={4} direction={"column"} alignItems={"center"}>
          {televisons.map((data: any, id: number) => {
            if (id < loader) {
              return <ProductCard key={data.id} {...data} productLink={"tv"} />;
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

export default Television;

export const getStaticProps = async () => {
  const tv = await getTvAPI();
  return {
    props: {
      tv,
    },
  };
};
