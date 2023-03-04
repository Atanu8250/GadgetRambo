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
import { useSelector } from "react-redux";
import { intrfcLaptop, lap_filterProps } from "@/constants/constants";
import { State } from "@/redux/store";

const LaptopFilter = ({ setLaptops }: any) => {
  const { laptops } = useSelector((store: State) => store.productsManager);
  let sortedArr = laptops;
  const [cat, setCat] = useState<lap_filterProps>({
    price: "",
    brand: "",
    screen: "",
    os: "",
  });
  useEffect(() => {
    setLaptops(laptops);
  }, []);

  const HandleReset = () => {
    setLaptops(laptops);
    setCat({
      price: "",
      brand: "",
      screen: "",
      os: "",
    });
  };

  //*  price sorting
  const lthSort = () => {
    sortedArr = sortedArr.sort((a: intrfcLaptop, b: intrfcLaptop) => {
      return +a.price - +b.price;
    });
    setLaptops(sortedArr);
  };
  const htlSort = () => {
    sortedArr = sortedArr.sort((a: intrfcLaptop, b: intrfcLaptop) => {
      return +b.price - +a.price;
    });
    setLaptops(sortedArr);
  };
  //* brand filtering
  const asusFilter = () => {
    sortedArr = sortedArr.filter((el: any) => el.name.includes("Asus"));
    setLaptops(sortedArr);
  };
  const dellFilter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcLaptop) =>
        el.name.includes("Apple") || el.name.includes("Dell")
    );
    setLaptops(sortedArr);
  };
  const lenovoFilter = () => {
    sortedArr = sortedArr.filter((el: intrfcLaptop) =>
      el.name.includes("Lenovo")
    );
    setLaptops(sortedArr);
  };
  const acerFilter = () => {
    sortedArr = sortedArr.filter((el: intrfcLaptop) =>
      el.name.includes("Acer")
    );
    setLaptops(sortedArr);
  };
  const realmeFilter = () => {
    sortedArr = sortedArr.filter((el: intrfcLaptop) =>
      el.name.includes("Realme")
    );
    setLaptops(sortedArr);
  };

  //* screen filtering
  const s1filter = () => {
    sortedArr = sortedArr.filter((el: intrfcLaptop) =>
      el.size.includes("16.00")
    );
    setLaptops(sortedArr);
  };
  const s2filter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcLaptop) =>
        el.size.includes("14.00") || el.size.includes("15.60")
    );
    setLaptops(sortedArr);
  };

  //* os filtering
  const o1filter = () => {
    sortedArr = sortedArr.filter((el: intrfcLaptop) => el.os.includes("10"));
    setLaptops(sortedArr);
  };
  const o2filter = () => {
    sortedArr = sortedArr.filter((el: intrfcLaptop) =>
      el.os.includes("Chrome")
    );
    setLaptops(sortedArr);
  };
  const o3filter = () => {
    sortedArr = sortedArr.filter((el: intrfcLaptop) => el.os.includes("11"));
    setLaptops(sortedArr);
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
          onClick={HandleReset}
          borderRadius={"4"}
          bgColor={"#FFFFFFFF"}
          _hover={{}}
        >
          Reset All
          <MdRestartAlt />
        </Button>
      </Flex>
      <Accordion defaultIndex={[0, 1, 2, 3]} allowMultiple>
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
                onChange={(e: any) => {
                  if (cat.price === "lth") {
                    setCat({ ...cat, price: "" });
                  } else {
                    setCat({ ...cat, price: e.target.value });
                    lthSort();
                  }
                }}
                value="lth"
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
                isChecked={cat.brand === "asus"}
                onChange={(e: any) => {
                  if (cat.brand === "asus") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                    asusFilter();
                  }
                }}
                value="asus"
              >
                Asus
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "dell"}
                onChange={(e: any) => {
                  if (cat.brand === "dell") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                    dellFilter();
                  }
                }}
                value="dell"
              >
                Dell
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "lenevo"}
                onChange={(e: any) => {
                  if (cat.brand === "lenevo") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                    lenovoFilter();
                  }
                }}
                value="lenevo"
              >
                Lenovo
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "acer"}
                onChange={(e: any) => {
                  if (cat.brand === "acer") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                    acerFilter();
                  }
                }}
                value="acer"
              >
                Acer
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "realme"}
                onChange={(e: any) => {
                  if (cat.brand === "realme") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                    realmeFilter();
                  }
                }}
                value="realme"
              >
                RealMe
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
                isChecked={cat.screen === "15"}
                onChange={(e: any) => {
                  if (cat.screen === "15") {
                    setCat({ ...cat, screen: "" });
                  } else {
                    setCat({ ...cat, screen: e.target.value });
                    s1filter();
                  }
                }}
                value="15"
              >
                16 inches & Above
              </Checkbox>
              <Checkbox
                isChecked={cat.screen === "16"}
                onChange={(e: any) => {
                  if (cat.screen === "16") {
                    setCat({ ...cat, screen: "" });
                  } else {
                    setCat({ ...cat, screen: e.target.value });
                    s2filter();
                  }
                }}
                value="16"
              >
                15.9 inches & Below
              </Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* Operating System */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Operating System
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex direction={"column"}>
              <Checkbox
                isChecked={cat.os === "w10"}
                onChange={(e: any) => {
                  if (cat.os === "w10") {
                    setCat({ ...cat, os: "" });
                  } else {
                    setCat({ ...cat, os: e.target.value });
                    o1filter();
                  }
                }}
                value="w10"
              >
                Windows 10
              </Checkbox>
              <Checkbox
                isChecked={cat.os === "chrome"}
                onChange={(e: any) => {
                  if (cat.os === "chrome") {
                    setCat({ ...cat, os: "" });
                  } else {
                    setCat({ ...cat, os: e.target.value });
                    o2filter();
                  }
                }}
                value="chrome"
              >
                Chrome OS
              </Checkbox>
              <Checkbox
                isChecked={cat.os === "w11"}
                onChange={(e: any) => {
                  if (cat.os === "w11") {
                    setCat({ ...cat, os: "" });
                  } else {
                    setCat({ ...cat, os: e.target.value });
                    o3filter();
                  }
                }}
                value="w11"
              >
                Windows 11
              </Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default LaptopFilter;
