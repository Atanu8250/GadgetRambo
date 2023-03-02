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
  Checkbox,
  Input,
  Button,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  IconButton,
} from "@chakra-ui/react";
import { MdRestartAlt } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

// { imgsrc, modal, displaySize, frontCamera, rearCamera, processor, releaseDate, price }: mobileType

const MobileFilter = () => {
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
          <MdRestartAlt />
        </Button>
      </Flex>
      <Accordion defaultIndex={[0, 1, 2, 3, 4]} allowMultiple >
        {/* By Price */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} flex="1" textAlign="left">
              By Price
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex direction={"column"}>
              <Checkbox value="">Low to High</Checkbox>
              <Checkbox value="">High to Low</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* By Brand */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Brand
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Brand"
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
            <Flex direction={"column"}>
              <Checkbox value="samsung">Samsung</Checkbox>
              <Checkbox value="apple">Apple</Checkbox>
              <Checkbox value="oneplus">OnePlus</Checkbox>
              <Checkbox value="xiaomi">Xiaomi</Checkbox>
              <Checkbox value="oppo">Oppo</Checkbox>
              <Checkbox value="vivo">Vivo</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* By Screen Sizes */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Screen Sizes
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
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
            <Flex direction={"column"}>
              <Checkbox value="6">6 inches & Above</Checkbox>
              <Checkbox value="5.7">5.7 - 5.9 inches</Checkbox>
              <Checkbox value="5.5">5.5 - 5.6 inches</Checkbox>
              <Checkbox value="5.2">5.2 - 5.4 inches</Checkbox>
              <Checkbox value="5">5 - 5.1 inches</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* By Number Of Rear Cameras */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Number Of Rear Cameras
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
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
            <Flex direction={"column"}>
              <Checkbox value="single">Single Camera</Checkbox>
              <Checkbox value="double">Double Camera</Checkbox>
              <Checkbox value="triple">Triple Camera</Checkbox>
              <Checkbox value="quad">Quad Camera</Checkbox>
              <Checkbox value="penta">Penta Camera</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* By Primary Rear Camera */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Primary Rear Camera
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
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
            <Flex direction={"column"}>
              <Checkbox value="21"> 21 MP & Above</Checkbox>
              <Checkbox value="16"> 16 MP - 20.9 MP</Checkbox>
              <Checkbox value="13"> 13 MP - 15.9 MP</Checkbox>
              <Checkbox value="12"> 12 MP - 12.9 MP</Checkbox>
              <Checkbox value="8"> 8 MP - 11.9 MP</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* By Front Camera */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Front Camera
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
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
            <Flex direction={"column"}>
              <Checkbox value="21"> 21 MP & Above</Checkbox>
              <Checkbox value="16"> 16 MP - 20.9 MP</Checkbox>
              <Checkbox value="13"> 13 MP - 15.9 MP</Checkbox>
              <Checkbox value="12"> 12 MP - 12.9 MP</Checkbox>
              <Checkbox value="8"> 8 MP - 11.9 MP</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* By Ram */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Ram
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
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
            <Flex direction={"column"}>
              <Checkbox value="8">8 GB & Above</Checkbox>
              <Checkbox value="6">6 GB</Checkbox>
              <Checkbox value="4">4 GB</Checkbox>
              <Checkbox value="3">3 GB</Checkbox>
              <Checkbox value="2">2 GB</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* By Internal Storage */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Internal Storage
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
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
            <Flex direction={"column"}>
              <Checkbox value="256">256 GB & Above</Checkbox>
              <Checkbox value="128">128 GB - 255.9 GB</Checkbox>
              <Checkbox value="64">64 GB - 127.9 GB</Checkbox>
              <Checkbox value="32">32 GB - 63.9 GB</Checkbox>
              <Checkbox value="16">16 GB - 31.9 GB</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* External Storage */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              External Storage
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
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
            <Flex direction={"column"}>
              <Checkbox value="exp">Expandable Storage</Checkbox>
              <Checkbox value="usb">USB OTG</Checkbox>
              <Checkbox value="memc">Dedicated MemoryCard Slot</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* Battery Capacity */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Battery Capacity
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input
                fontSize={"xs"}
                borderRadius={"0px"}
                placeholder="Search by Ram"
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
            <Flex direction={"column"}>
              <Checkbox value="5000">5000 - 5999mAh</Checkbox>
              <Checkbox value="4000">4000 - 4999mAh</Checkbox>
              <Checkbox value="3000">3000 - 3999mAh</Checkbox>
              <Checkbox value="2000">2000 - 2999mAh</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default MobileFilter;
