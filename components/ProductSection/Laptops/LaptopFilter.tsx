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
  Link,
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

const LaptopFilter = () => {
  const [range, setRange] = useState<number>(198000);
  return (
    <Flex direction={"column"} p={"1"} w={"248px"} bgColor={"#DDDDDD"}>
      <Flex bgColor={"white"} mb={"5"} borderRadius={"8"} justifyContent={"space-evenly"} alignItems={"center"}>
        {/* Top Heading */}
        <Text>Filters</Text>
        <Button borderRadius={"4"} bgColor={"#FFFFFFFF"} _hover={{}}>
          Reset All
          <MdRestartAlt />
        </Button>
      </Flex>
      <Accordion defaultIndex={[0, 1, 2, 3, 4]} allowMultiple>
        {/* By Price */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} flex="1" textAlign="left">
              By Price
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Text fontSize={"sm"}>{"₹ " + range + " /-"}</Text>
            <Slider aria-label="slider-ex-1" defaultValue={198000} onChangeEnd={(val) => setRange(val * 1980)}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>

            <Button color={"white"} mt={2} w={"100%"} bgColor={"red"} _hover={{}}>
              Go
            </Button>
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
              <Input fontSize={"xs"} borderRadius={"0px"} placeholder="Search by Brand" />
              <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<BsSearch />} />
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="samsung">Asus</Checkbox>
              <Checkbox value="apple">Apple</Checkbox>
              <Checkbox value="oneplus">Dell</Checkbox>
              <Checkbox value="xiaomi">Lenovo</Checkbox>
              <Checkbox value="xiaomi">Acer</Checkbox>
              <Checkbox value="oppo">RealMe</Checkbox>
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
              <Input fontSize={"xs"} borderRadius={"0px"} placeholder="Search by Ram" />
              <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<BsSearch />} />
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="11">11 inches & Below</Checkbox>
              <Checkbox value="12">12 inches</Checkbox>
              <Checkbox value="13">13 inches</Checkbox>
              <Checkbox value="14">14 inches</Checkbox>
              <Checkbox value="15">15 inches & Above</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* By Screen Resolution */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Screen Resolution
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input fontSize={"xs"} borderRadius={"0px"} placeholder="Search by Ram" />
              <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<BsSearch />} />
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="hd">HD</Checkbox>
              <Checkbox value="fhd">Full HD</Checkbox>
              <Checkbox value="uhd">Ultra HD</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* Processor Brands */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Processor Brands
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input fontSize={"xs"} borderRadius={"0px"} placeholder="Search by Ram" />
              <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<BsSearch />} />
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="intel"> Intel</Checkbox>
              <Checkbox value="qualcomm"> Qualcomm</Checkbox>
              <Checkbox value="mediatek"> Mediatek</Checkbox>
              <Checkbox value="amd"> AMD</Checkbox>
              <Checkbox value="apple"> Apple</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* By Processor Clock Speeds */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Processor Clock Speeds
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input fontSize={"xs"} borderRadius={"0px"} placeholder="Search by Ram" />
              <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<BsSearch />} />
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="1.5"> 1.5 Ghz & Below</Checkbox>
              <Checkbox value="1.6"> 1.6 Ghz - 1.9 Ghz</Checkbox>
              <Checkbox value="2"> 2 Ghz - 2.4 Ghz</Checkbox>
              <Checkbox value="2.5"> 2.5 Ghz & Above</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* By Ram */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              RAM
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input fontSize={"xs"} borderRadius={"0px"} placeholder="Search by Ram" />
              <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<BsSearch />} />
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="2">2 GB & Below</Checkbox>
              <Checkbox value="3">3 GB</Checkbox>
              <Checkbox value="4">4 GB</Checkbox>
              <Checkbox value="6">6 GB</Checkbox>
              <Checkbox value="8">8 GB & Above</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* By Storage */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Storage Type
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input fontSize={"xs"} borderRadius={"0px"} placeholder="Search by Ram" />
              <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<BsSearch />} />
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="hdd">HDD</Checkbox>
              <Checkbox value="ssd">SSD</Checkbox>
              <Checkbox value="hdd">HDD or SSHD</Checkbox>
              <Checkbox value="sshd">SSHD</Checkbox>
              <Checkbox value="hhd">HHD</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* External Storage */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Operating System
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input fontSize={"xs"} borderRadius={"0px"} placeholder="Search by Ram" />
              <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<BsSearch />} />
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="w10">Windows 10</Checkbox>
              <Checkbox value="w10h">Windows 10 Home</Checkbox>
              <Checkbox value="mos">MacOS</Checkbox>
              <Checkbox value="w8">Windows 8</Checkbox>
              <Checkbox value="w11">Windows 11</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* Battery Capacity */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Number of USB Ports
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex>
              <Input fontSize={"xs"} borderRadius={"0px"} placeholder="Search by Ram" />
              <IconButton aria-label="SearchByBrand" borderRadius={"0px"} _hover={{}} color={"white"} bgColor={"red"} icon={<BsSearch />} />
            </Flex>
            <Flex direction={"column"}>
              <Checkbox value="1">1</Checkbox>
              <Checkbox value="2">2</Checkbox>
              <Checkbox value="3">3</Checkbox>
              <Checkbox value="4">4</Checkbox>
              <Checkbox value="5">5</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default LaptopFilter;
