import { db } from "@/Backend/Firebase/firebase";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { Button, Flex, Heading, Image, Show, SimpleGrid, Text } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { BiAperture } from "react-icons/bi";
import { BsCameraFill, BsCpu, BsDisplay, BsWifi } from "react-icons/bs";

interface singleMobile {
  mobile: {
    displaySize: string;
    frontCamera: string;
    imgsrc: string;
    modal: string;
    price: number;
    processor: string;
    rearCamera: string;
    related: string;
    related2: string;
    releaseDate: string;
  };
}

const Mobile = ({ mobile }: singleMobile) => {
  console.log(mobile);

  return (
    <Flex p={7}>
      <Show above="lg">
        {/* Left Side */}
        <Flex mx={4} flex={1}>
          <LeftSidebar />
        </Flex>
      </Show>
      {/* Center Side */}
      <Flex mx={{ base: 1, sm: 4 }} p={{ base: 1, sm: 5 }} flex={4} justifyContent={"flex-start"} direction={"column"} alignItems={"center"}>
        <Flex mb={8} w={"100%"} justifyContent={"flex-start"}>
          <Heading size={{ base: "lg", sm: "xl" }}>{mobile.modal}</Heading>
        </Flex>
        <Flex gap={5} direction={{ base: "column", sm: "column", md: "row", lg: "row" }} justifyContent={"space-evenly"}>
          <Flex mb={8} justifyContent={{ base: "center", sm: "center", md: "flex-start" }}>
            <Image src={mobile.imgsrc} alt={mobile.modal} w={"280px"} />
          </Flex>
          <Flex>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: "8", sm: "6", md: "2" }}>
              <Flex alignItems={"center"} gap={"3"}>
                <BsDisplay style={{ fontSize: "50px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Display Size</Text>
                  <Text fontSize={"md"}>{mobile.displaySize}</Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"3"}>
                <BsCpu style={{ fontSize: "50px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Processor</Text>
                  <Text fontSize={"md"}>{mobile.processor}</Text>
                </Flex>
              </Flex>

              <Flex alignItems={"center"} gap={"3"}>
                <BiAperture style={{ fontSize: "50px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Front Camera</Text>
                  <Text fontSize={"md"}>{mobile.frontCamera}</Text>
                </Flex>
              </Flex>

              <Flex alignItems={"center"} gap={"3"}>
                <BsCameraFill style={{ fontSize: "50px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Rear Camera</Text>
                  <Text fontSize={"md"}>{mobile.rearCamera}</Text>
                </Flex>
              </Flex>
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex direction={"column"} gap={3}>
          <Text as={"b"}>Description</Text>
          <Text textAlign={"justify"} fontSize={"md"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio repellendus tenetur accusamus sunt molestiae esse quod, sint assumenda labore et ex,
            repellat voluptates error dignissimos laborum sapiente nesciunt. Maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a error sit eligendi dolore quos
            dignissimos maiores perferendis officiis, quibusdam quasi in quia molestiae. Magnam ex facere itaque cupiditate voluptatem! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vitae autem, asperiores dolorem corporis modi natus cupiditate blanditiis. Molestias non repellat quia in expedita. Nihil deleniti quam alias ut aut
            eaque! Alias, quisquam. Minus sed illum eos expedita laudantium dicta fuga a aut, est omnis animi totam soluta, maiores ab neque. Quaerat quis commodi ab? Non nesciunt
            eos error esse laudantium? Aperiam dolore vero architecto ducimus maxime, doloremque optio vel est
          </Text>
          <Text as={"b"}>Brand</Text>
          <Text fontSize={"md"}>{mobile.related2}</Text>
          <Text as={"b"}>Release Date</Text>
          <Text fontSize={"md"}>{mobile.releaseDate}</Text>
          <Text as={"b"} fontSize={"lg"}>
            Price
          </Text>
          <Text fontSize={"lg"}>{"₹ " + mobile.price}</Text>
        </Flex>
        <Flex justify={"flex-start"} w={"100%"}>
          <Button mt={3} colorScheme={"red"}>
            Buy Now
          </Button>
        </Flex>
      </Flex>
      <Show above="xl">
        {/* Right Side */}
        <Flex mx={4} flex={2}>
          <RightSidebar />
        </Flex>
      </Show>
    </Flex>
  );
};

export default Mobile;

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  try {
    const mobileRef = doc(db, "mobiles", params.id);
    const res = await getDoc(mobileRef);
    const mobile = res.data();
    return {
      props: {
        mobile,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
