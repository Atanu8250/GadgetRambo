import React from "react";
import {
  Flex,
  Link,
  Heading,
  Button,
  Text,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
// import Image from "next/image";

{
  // import ControlPointIcon from "@mui/icons-material/ControlPoint";
  // import TvIcon from "@mui/icons-material/Tv";
  // import MemoryIcon from "@mui/icons-material/Memory";
  // import CameraIcon from "@mui/icons-material/Camera";
  // import CameraAltIcon from "@mui/icons-material/CameraAlt";
}
type productProps = {
  imgsrc: string;
  modal: string;
  displaySize: string;
  frontCamera: string;
  rearCamera: string;
  processor: string;
  releaseDate: string;
  price: number;
};

const ProductCard = ({
  imgsrc,
  modal,
  displaySize,
  frontCamera,
  rearCamera,
  processor,
  releaseDate,
  price,
}: productProps) => {
  return (
    <Flex
      direction={"column"}
      transition={"1000ms"}
      my={"30px"}
      width={{ base: "300px", sm: "100%" }}
      // border={"3px solid gray"}
      borderRadius={"8"}
      p={"3"}
      bgColor={"white"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Flex>
        <Flex direction={"column"} alignItems={"center"}>
          <Image src={imgsrc} alt={imgsrc} width={"80px"} />
          <Link mt={"7"} _hover={{ color: "red" }} href="/**">
            <Flex alignItems={"center"}>
              {/* <ControlPointIcon fontSize="small" /> */}
              Compare
            </Flex>
          </Link>
        </Flex>
        <Flex direction={"column"}>
          <Text ml={3} fontSize={"lg"}>
            {modal}
          </Text>
          <Flex m={"3"}>
            {/* Small Specs Component */}
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={"4"}>
              <Flex alignItems={"center"} gap={"3"}>
                {/* <TvIcon /> */}
                <Flex direction={"column"}>
                  <Text fontSize={"xs"}>Display Size</Text>
                  <Text fontSize={"sm"}>{displaySize}</Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"3"}>
                {/* <MemoryIcon /> */}
                <Flex direction={"column"}>
                  <Text fontSize={"xs"}>Processor</Text>
                  <Text fontSize={"sm"}>{processor}</Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"3"}>
                {/* <CameraIcon /> */}
                <Flex direction={"column"}>
                  <Text fontSize={"xs"}>Front Camera</Text>
                  <Text fontSize={"sm"}>{frontCamera}</Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"3"}>
                {/* <CameraAltIcon /> */}
                <Flex direction={"column"}>
                  <Text fontSize={"xs"}>Rear Camera</Text>
                  <Text fontSize={"sm"}>{rearCamera}</Text>
                </Flex>
              </Flex>
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={"100%"}
        m={"3"}
        border={"1px soild red"}
        justifyContent={"space-evenly"}
      >
        {/* Contains Price and Release Date */}
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"xs"}>Release Date</Text>
          <Text fontSize={"sm"}>{releaseDate}</Text>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} gap={"3"}>
          <Heading size={"md"}>{"₹" + price}</Heading>
          <Button>Buy</Button>
        </Flex>
      </Flex>
      <Flex>
        {/* Contains Details of Brand */}
        <Link></Link>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
