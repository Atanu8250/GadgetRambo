import React, { useState } from "react";
import {
  Flex,
  Box,
  AccordionIcon,
  AccordionPanel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Checkbox,
  Input,
  Link,
  Radio,
  Stack,
  Button,
  IconButton,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
} from "@chakra-ui/react";
import Image from "next/image";
// import RestartAltIcon from "@mui/icons-material/RestartAlt";
// import SearchIcon from "@mui/icons-material/Search";

type Props = {};

const ProductFilter = (props: Props) => {
  const [range, setRange] = useState<number>(198000);
  return (
    <Flex direction={"column"} p={"1"} w={"248px"} bgColor={"#DDDDDD"}>
      <Flex
        bgColor={"white"}
        mb={"5"}
        borderRadius={"8"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        {/* Top Heading */}
        <Text>Filters</Text>
        <Button borderRadius={"4"} bgColor={"#FFFFFFFF"} _hover={{}}>
          Reset All
          {/* <RestartAltIcon /> */}
        </Button>
      </Flex>
      <Accordion defaultIndex={[0, 1, 2, 3, 4, 5]} allowMultiple>
        {/* By Price */}
        <AccordionItem bgColor={"white"}>
          <h2>
            <AccordionButton>
              <Box fontSize={"sm"} flex="1" textAlign="left">
                By Price
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={"sm"}>{"₹ " + range + " /-"}</Text>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={198000}
              onChangeEnd={(val) => setRange(val * 1980)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>

            <Button
              color={"white"}
              mt={2}
              w={"100%"}
              bgColor={"red"}
              _hover={{}}
            >
              Go
            </Button>
          </AccordionPanel>
        </AccordionItem>
        {/* By Brand */}
        <AccordionItem bgColor={"white"}>
          <h2>
            <AccordionButton>
              <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
                By Brand
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Brand"
              />
              {/* <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<SearchIcon />} /> */}
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="samsung">Samsung</Checkbox>
              <Checkbox value="apple">Apple</Checkbox>
              <Checkbox value="oneplus">OnePlus</Checkbox>
              <Checkbox value="xiaomi">Xiaomi</Checkbox>
              <Checkbox value="oppo">Oppo</Checkbox>
              <Checkbox value="vivo">Vivo</Checkbox>
            </Flex>
            <Link
              mt={"7"}
              fontSize={"xs"}
              _hover={{ color: "red" }}
              color={"red"}
              href="/**"
            >
              *** More
            </Link>
          </AccordionPanel>
        </AccordionItem>
        {/* By Ram */}
        <AccordionItem bgColor={"white"}>
          <h2>
            <AccordionButton>
              <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
                By Ram
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
              />
              {/* <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<SearchIcon />} /> */}
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="8">8 GB & Above</Checkbox>
              <Checkbox value="6">6 GB</Checkbox>
              <Checkbox value="4">4 GB</Checkbox>
              <Checkbox value="3">3 GB</Checkbox>
              <Checkbox value="2">2 GB</Checkbox>
            </Flex>
            <Link
              mt={"7"}
              fontSize={"xs"}
              _hover={{ color: "red" }}
              color={"red"}
              href="/**"
            >
              *** More
            </Link>
          </AccordionPanel>
        </AccordionItem>
        {/* By Internal Storage */}
        <AccordionItem bgColor={"white"}>
          <h2>
            <AccordionButton>
              <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
                By Internal Storage
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
              />
              {/* <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<SearchIcon />} /> */}
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="256">256 GB & Above</Checkbox>
              <Checkbox value="128">128 GB - 255.9 GB</Checkbox>
              <Checkbox value="64">64 GB - 127.9 GB</Checkbox>
              <Checkbox value="32">32 GB - 63.9 GB</Checkbox>
              <Checkbox value="16">16 GB - 31.9 GB</Checkbox>
            </Flex>
            <Link
              mt={"7"}
              fontSize={"xs"}
              _hover={{ color: "red" }}
              color={"red"}
              href="/**"
            >
              *** More
            </Link>
          </AccordionPanel>
        </AccordionItem>
        {/* External Storage */}
        <AccordionItem bgColor={"white"}>
          <h2>
            <AccordionButton>
              <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
                By External Storage
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
              />
              {/* <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<SearchIcon />} /> */}
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="exp">Expandable Storage</Checkbox>
              <Checkbox value="usb">USB OTG</Checkbox>
              <Checkbox value="memc">Dedicated MemoryCard Slot</Checkbox>
            </Flex>
            <Link
              mt={"7"}
              fontSize={"xs"}
              _hover={{ color: "red" }}
              color={"red"}
              href="/**"
            >
              *** More
            </Link>
          </AccordionPanel>
        </AccordionItem>
        {/* Battery Capacity */}
        <AccordionItem bgColor={"white"}>
          <h2>
            <AccordionButton>
              <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
                By Battery Capacity
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
              />
              {/* <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<SearchIcon />} /> */}
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="5000">5000 - 5999mAh</Checkbox>
              <Checkbox value="4000">4000 - 4999mAh</Checkbox>
              <Checkbox value="3000">3000 - 3999mAh</Checkbox>
              <Checkbox value="2000">2000 - 2999mAh</Checkbox>
            </Flex>
            <Link
              mt={"7"}
              fontSize={"xs"}
              _hover={{ color: "red" }}
              color={"red"}
              href="/**"
            >
              *** More
            </Link>
          </AccordionPanel>
        </AccordionItem>
        {/* By Screen Sizes */}
        <AccordionItem bgColor={"white"}>
          <h2>
            <AccordionButton>
              <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
                By Screen Sizes
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
              />
              {/* <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<SearchIcon />} /> */}
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="6">6 inches & Above</Checkbox>
              <Checkbox value="5.7">5.7 - 5.9 inches</Checkbox>
              <Checkbox value="5.5">5.5 - 5.6 inches</Checkbox>
              <Checkbox value="5.2">5.2 - 5.4 inches</Checkbox>
              <Checkbox value="5">5 - 5.1 inches</Checkbox>
            </Flex>
            <Link
              mt={"7"}
              fontSize={"xs"}
              _hover={{ color: "red" }}
              color={"red"}
              href="/**"
            >
              *** More
            </Link>
          </AccordionPanel>
        </AccordionItem>
        {/* By Number Of Rer Cameras */}
        <AccordionItem bgColor={"white"}>
          <h2>
            <AccordionButton>
              <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
                By Number Of Rear Cameras
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
              />
              {/* <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<SearchIcon />} /> */}
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="single">Single Camera</Checkbox>
              <Checkbox value="double">Double Camera</Checkbox>
              <Checkbox value="triple">Triple Camera</Checkbox>
              <Checkbox value="quad">Quad Camera</Checkbox>
              <Checkbox value="penta">Penta Camera</Checkbox>
            </Flex>
            <Link
              mt={"7"}
              fontSize={"xs"}
              _hover={{ color: "red" }}
              color={"red"}
              href="/**"
            >
              *** More
            </Link>
          </AccordionPanel>
        </AccordionItem>
        {/* By Primary Rear Camera */}
        <AccordionItem bgColor={"white"}>
          <h2>
            <AccordionButton>
              <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
                By Primary Rear Camera
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
              />
              {/* <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<SearchIcon />} /> */}
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="21"> 21 MP & Above</Checkbox>
              <Checkbox value="16"> 16 MP - 20.9 MP</Checkbox>
              <Checkbox value="13"> 13 MP - 15.9 MP</Checkbox>
              <Checkbox value="12"> 12 MP - 12.9 MP</Checkbox>
              <Checkbox value="8"> 8 MP - 11.9 MP</Checkbox>
            </Flex>
            <Link
              mt={"7"}
              fontSize={"xs"}
              _hover={{ color: "red" }}
              color={"red"}
              href="/**"
            >
              *** More
            </Link>
          </AccordionPanel>
        </AccordionItem>
        {/* By Front Camera */}
        <AccordionItem bgColor={"white"}>
          <h2>
            <AccordionButton>
              <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
                By Front Camera
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
              />
              {/* <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<SearchIcon />} /> */}
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="21"> 21 MP & Above</Checkbox>
              <Checkbox value="16"> 16 MP - 20.9 MP</Checkbox>
              <Checkbox value="13"> 13 MP - 15.9 MP</Checkbox>
              <Checkbox value="12"> 12 MP - 12.9 MP</Checkbox>
              <Checkbox value="8"> 8 MP - 11.9 MP</Checkbox>
            </Flex>
            <Link
              mt={"7"}
              fontSize={"xs"}
              _hover={{ color: "red" }}
              color={"red"}
              href="/**"
            >
              *** More
            </Link>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default ProductFilter;
