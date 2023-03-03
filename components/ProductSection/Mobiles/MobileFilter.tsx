import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  AccordionIcon,
  AccordionPanel,
  Checkbox,
  Button,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
} from "@chakra-ui/react";
import { MdRestartAlt } from "react-icons/md";
import { filterProps, intrfcMobile } from "@/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { getMobile } from "@/redux/products/products.actions";
import { State } from "@/redux/store";

const MobileFilter = ({ setMobiles }: any) => {
  const { mobiles } = useSelector((store: State) => store.productsManager);
  let sortedArr = mobiles;
  const [cat, setCat] = useState<filterProps>({
    price: "",
    brand: "",
    screen: "",
    rcam: "",
    fcam: "",
    ram: "",
  });
  const dispatch = useDispatch();
  const getdata = () => {
    setMobiles(mobiles);
  };
  useEffect(() => {
    getMobile(dispatch, 43);
    getdata();
  }, []);

  //  price sorting
  const lthSort = () => {
    sortedArr = sortedArr.sort((a: intrfcMobile, b: intrfcMobile) => {
      return +a.price - +b.price;
    });
    setMobiles(mobiles);
  };
  const htlSort = () => {
    sortedArr = sortedArr.sort((a: intrfcMobile, b: intrfcMobile) => {
      return +b.price - +a.price;
    });
    setMobiles(mobiles);
  };

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
        <Button
          onClick={() => {
            setCat({
              price: "",
              brand: "",
              screen: "",
              rcam: "",
              fcam: "",
              ram: "",
            });
          }}
          borderRadius={"4"}
          bgColor={"#FFFFFFFF"}
          _hover={{}}
        >
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
            <Flex direction={"column"}>
              <Checkbox
                isChecked={cat.price === "lth"}
                value="lth"
                onChange={(e: any) => {
                  if (cat.price === "lth") {
                    setCat({ ...cat, price: "" });
                  } else {
                    setCat({ ...cat, price: e.target.value });
                    lthSort();
                  }
                }}
              >
                Low to High
              </Checkbox>
              <Checkbox
                isChecked={cat.price === "htl"}
                onChange={(e: any) => {
                  if (cat.price === "htl") {
                    setCat({ ...cat, price: "" });
                  } else {
                    setCat({ ...cat, price: e.target.value });
                    htlSort();
                  }
                }}
                value="htl"
              >
                High to Low
              </Checkbox>
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
            <Flex direction={"column"}>
              <Checkbox
                isChecked={cat.brand === "samsung"}
                onChange={(e: any) => {
                  if (cat.brand === "samsung") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                  }
                }}
                value="samsung"
              >
                Samsung
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "apple"}
                onChange={(e: any) => {
                  if (cat.brand === "apple") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                  }
                }}
                value="apple"
              >
                Apple
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "oneplus"}
                onChange={(e: any) => {
                  if (cat.brand === "oneplus") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                  }
                }}
                value="oneplus"
              >
                OnePlus
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "xiaomi"}
                onChange={(e: any) => {
                  if (cat.brand === "xiaomi") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                  }
                }}
                value="xiaomi"
              >
                Xiaomi
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "oppo"}
                onChange={(e: any) => {
                  if (cat.brand === "oppo") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                  }
                }}
                value="oppo"
              >
                Oppo
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "vivo"}
                onChange={(e: any) => {
                  if (cat.brand === "vivo") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                  }
                }}
                value="vivo"
              >
                Vivo
              </Checkbox>
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
            <Flex direction={"column"}>
              <Checkbox
                isChecked={cat.screen === "6"}
                onChange={(e: any) => {
                  if (cat.screen === "6") {
                    setCat({ ...cat, screen: "" });
                  } else {
                    setCat({ ...cat, screen: e.target.value });
                  }
                }}
                value="6"
              >
                6 inches & Above
              </Checkbox>
              <Checkbox
                isChecked={cat.screen === "5.7"}
                onChange={(e: any) => {
                  if (cat.screen === "5.7") {
                    setCat({ ...cat, screen: "" });
                  } else {
                    setCat({ ...cat, screen: e.target.value });
                  }
                }}
                value="5.7"
              >
                5.7 - 5.9 inches
              </Checkbox>
              <Checkbox
                isChecked={cat.screen === "5.5"}
                onChange={(e: any) => {
                  if (cat.screen === "5.5") {
                    setCat({ ...cat, screen: "" });
                  } else {
                    setCat({ ...cat, screen: e.target.value });
                  }
                }}
                value="5.5"
              >
                5.5 - 5.6 inches
              </Checkbox>
              <Checkbox
                isChecked={cat.screen === "5.2"}
                onChange={(e: any) => {
                  if (cat.screen === "5.2") {
                    setCat({ ...cat, screen: "" });
                  } else {
                    setCat({ ...cat, screen: e.target.value });
                  }
                }}
                value="5.2"
              >
                5.2 - 5.4 inches
              </Checkbox>
              <Checkbox
                isChecked={cat.screen === "5"}
                onChange={(e: any) => {
                  if (cat.screen === "5") {
                    setCat({ ...cat, screen: "" });
                  } else {
                    setCat({ ...cat, screen: e.target.value });
                  }
                }}
                value="5"
              >
                5 inches & Below
              </Checkbox>
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
            <Flex direction={"column"}>
              <Checkbox
                isChecked={cat.rcam === "21"}
                onChange={(e: any) => {
                  if (cat.rcam === "21") {
                    setCat({ ...cat, rcam: "" });
                  } else {
                    setCat({ ...cat, rcam: e.target.value });
                  }
                }}
                value="21"
              >
                21 MP & Above
              </Checkbox>
              <Checkbox
                isChecked={cat.rcam === "16"}
                onChange={(e: any) => {
                  if (cat.rcam === "16") {
                    setCat({ ...cat, rcam: "" });
                  } else {
                    setCat({ ...cat, rcam: e.target.value });
                  }
                }}
                value="16"
              >
                16 MP - 20.9 MP
              </Checkbox>
              <Checkbox
                isChecked={cat.rcam === "13"}
                onChange={(e: any) => {
                  if (cat.rcam === "13") {
                    setCat({ ...cat, rcam: "" });
                  } else {
                    setCat({ ...cat, rcam: e.target.value });
                  }
                }}
                value="13"
              >
                13 MP - 15.9 MP
              </Checkbox>
              <Checkbox
                isChecked={cat.rcam === "12"}
                onChange={(e: any) => {
                  if (cat.rcam === "12") {
                    setCat({ ...cat, rcam: "" });
                  } else {
                    setCat({ ...cat, rcam: e.target.value });
                  }
                }}
                value="12"
              >
                12 MP - 12.9 MP
              </Checkbox>
              <Checkbox
                isChecked={cat.rcam === "8"}
                onChange={(e: any) => {
                  if (cat.rcam === "8") {
                    setCat({ ...cat, rcam: "" });
                  } else {
                    setCat({ ...cat, rcam: e.target.value });
                  }
                }}
                value="8"
              >
                8 MP - 11.9 MP
              </Checkbox>
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
            <Flex direction={"column"}>
              <Checkbox value="8">8 GB & Above</Checkbox>
              <Checkbox value="6">6 GB</Checkbox>
              <Checkbox value="4">4 GB</Checkbox>
              <Checkbox value="3">3 GB</Checkbox>
              <Checkbox value="2">2 GB</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default MobileFilter;
