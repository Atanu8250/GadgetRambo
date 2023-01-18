import React from "react";
import { Flex, Link, Heading, Button, Text, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import TvIcon from "@mui/icons-material/Tv";
import MemoryIcon from "@mui/icons-material/Memory";
import CameraIcon from "@mui/icons-material/Camera";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

type Props = {};

const MobileCard = (props: Props) => {
  const tempData = "xyz";
  return (
    <Flex direction={"column"} transition={"1000ms"} width={{ base: "300px", sm: "500px" }} border={"3px solid gray"} borderRadius={"8"} p={"3"} bgColor={"white"}>
      <Flex>
        <Flex direction={"column"} alignItems={"center"}>
          <Image src={tempData} alt={tempData} width={120} height={120} />
          <Link mt={"7"} _hover={{ color: "red" }} href="/**">
            <Flex alignItems={"center"}>
              <ControlPointIcon fontSize="small" />
              Compare
            </Flex>
          </Link>
        </Flex>
        <Flex direction={"column"}>
          <Text ml={3} fontSize={"lg"}>
            {tempData}
          </Text>
          <Flex m={"3"}>
            {/* Small Specs Component */}
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={"4"}>
              <Flex alignItems={"center"} gap={"3"}>
                <TvIcon />
                <Flex direction={"column"}>
                  <Text fontSize={"xs"}>Display Size</Text>
                  <Text fontSize={"sm"}>{tempData}</Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"3"}>
                <MemoryIcon />
                <Flex direction={"column"}>
                  <Text fontSize={"xs"}>Processor</Text>
                  <Text fontSize={"sm"}>{tempData}</Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"3"}>
                <CameraIcon />
                <Flex direction={"column"}>
                  <Text fontSize={"xs"}>Front Camera</Text>
                  <Text fontSize={"sm"}>{tempData}</Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"3"}>
                <CameraAltIcon />
                <Flex direction={"column"}>
                  <Text fontSize={"xs"}>Rear Camera</Text>
                  <Text fontSize={"sm"}>{tempData}</Text>
                </Flex>
              </Flex>
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
      <Flex w={"100%"} m={"3"} border={"1px soild red"} justifyContent={"space-evenly"}>
        {/* Contains Price and Release Date */}
        <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
          <Text fontSize={"xs"}>Release Date</Text>
          <Text fontSize={"sm"}>{tempData}</Text>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} gap={"3"}>
          <Heading size={"md"}>{"₹" + tempData}</Heading>
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

export default MobileCard;
