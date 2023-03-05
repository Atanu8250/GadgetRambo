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
import { useSelector } from "react-redux";
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
  useEffect(() => {
    setMobiles(mobiles);
  }, []);

  const HandleReset = () => {
    setMobiles(mobiles);
    setCat({
      price: "",
      brand: "",
      screen: "",
      rcam: "",
      fcam: "",
      ram: "",
    });
  };

  //*  price sorting
  const lthSort = () => {
    sortedArr = sortedArr.sort((a: intrfcMobile, b: intrfcMobile) => {
      return +a.price - +b.price;
    });
    setMobiles(sortedArr);
  };
  const htlSort = () => {
    sortedArr = sortedArr.sort((a: intrfcMobile, b: intrfcMobile) => {
      return +b.price - +a.price;
    });
    setMobiles(sortedArr);
  };
  //* brand filtering
  const samsungFilter = () => {
    sortedArr = sortedArr.filter((el: any) => el.modal.includes("Samsung"));
    setMobiles(sortedArr);
  };
  const appleFilter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcMobile) =>
        el.modal.includes("Apple") || el.modal.includes("Iphone")
    );
    setMobiles(sortedArr);
  };
  const redmiFilter = () => {
    sortedArr = sortedArr.filter((el: intrfcMobile) =>
      el.modal.includes("Redmi")
    );
    setMobiles(sortedArr);
  };
  const oppoFilter = () => {
    sortedArr = sortedArr.filter((el: intrfcMobile) =>
      el.modal.includes("Oppo")
    );
    setMobiles(sortedArr);
  };
  const xiaomiFilter = () => {
    sortedArr = sortedArr.filter((el: intrfcMobile) =>
      el.modal.includes("Xiaomi")
    );
    setMobiles(sortedArr);
  };

  //* screen filtering
  const s1filter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcMobile) =>
        el.displaySize.includes("6.53") ||
        el.displaySize.includes("6.26") ||
        el.displaySize.includes("6.71") ||
        el.displaySize.includes("6.20") ||
        el.displaySize.includes("6.60") ||
        el.displaySize.includes("6.50") ||
        el.displaySize.includes("6.40") ||
        el.displaySize.includes("6.70")
    );
    setMobiles(sortedArr);
  };
  const s2filter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcMobile) =>
        el.displaySize.includes("5.71") ||
        el.displaySize.includes("5.80") ||
        el.displaySize.includes("5.40")
    );
    setMobiles(sortedArr);
  };
  const s3filter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcMobile) =>
        el.displaySize.includes("4.00") || el.displaySize.includes("4.70")
    );
    setMobiles(sortedArr);
  };

  //* rear camera filtering
  const rear1filter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcMobile) =>
        el.rearCamera.includes("108MP") ||
        el.rearCamera.includes("64MP") ||
        el.rearCamera.includes("50MP")
    );
    setMobiles(sortedArr);
  };
  const rear2filter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcMobile) =>
        el.rearCamera.includes("48MP") ||
        el.rearCamera == "12MP + 12MP + 12MP" ||
        el.rearCamera == "12MP + 12MP" ||
        el.rearCamera == "13MP" ||
        el.rearCamera == "12MP"
    );
    setMobiles(sortedArr);
  };

  //* front camera filtering
  const front1filter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcMobile) =>
        el.frontCamera.includes("48MP + 5MP") ||
        el.frontCamera.includes("48MP") ||
        el.frontCamera.includes("50MP + 2MP") ||
        el.frontCamera.includes("50MP") ||
        el.frontCamera.includes("200MP")
    );
    setMobiles(sortedArr);
  };
  const front3filter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcMobile) =>
        el.frontCamera.includes("32MP") || el.frontCamera.includes("40MP")
    );
    setMobiles(sortedArr);
  };
  const front4filter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcMobile) =>
        el.frontCamera == "12MP + 2MP" ||
        el.frontCamera == "13MP" ||
        el.frontCamera == "13MP + 2MP" ||
        el.frontCamera == "16MP" ||
        el.frontCamera == "16MP + 5MP" ||
        el.frontCamera == "13MP + 2MP + 2MP"
    );
    setMobiles(sortedArr);
  };
  const front5filter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcMobile) =>
        el.frontCamera == "8MP" ||
        el.frontCamera == "5MP" ||
        el.frontCamera == "7MP" ||
        el.frontCamera == "1.2MP"
    );
    setMobiles(sortedArr);
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
                    samsungFilter();
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
                    appleFilter();
                  }
                }}
                value="apple"
              >
                Apple
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "xiaomi"}
                onChange={(e: any) => {
                  if (cat.brand === "xiaomi") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                    redmiFilter();
                  }
                }}
                value="xiaomi"
              >
                Redmi
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "oppo"}
                onChange={(e: any) => {
                  if (cat.brand === "oppo") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                    oppoFilter();
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
                    xiaomiFilter();
                  }
                }}
                value="vivo"
              >
                Xiaomi
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
                    s1filter();
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
                    s2filter();
                  }
                }}
                value="5.7"
              >
                5 to 6 inches
              </Checkbox>
              <Checkbox
                isChecked={cat.screen === "5"}
                onChange={(e: any) => {
                  if (cat.screen === "5") {
                    setCat({ ...cat, screen: "" });
                  } else {
                    setCat({ ...cat, screen: e.target.value });
                    s3filter();
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
                    rear1filter();
                  }
                }}
                value="21"
              >
                50 MP & Above
              </Checkbox>
              <Checkbox
                isChecked={cat.rcam === "8"}
                onChange={(e: any) => {
                  if (cat.rcam === "8") {
                    setCat({ ...cat, rcam: "" });
                  } else {
                    setCat({ ...cat, rcam: e.target.value });
                    rear2filter();
                  }
                }}
                value="8"
              >
                49 MP & Below
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
              <Checkbox
                isChecked={cat.fcam === "21"}
                onChange={(e: any) => {
                  if (cat.fcam === "21") {
                    setCat({ ...cat, fcam: "" });
                  } else {
                    setCat({ ...cat, fcam: e.target.value });
                    front1filter();
                  }
                }}
                value="21"
              >
                40 MP & Above
              </Checkbox>
              <Checkbox
                isChecked={cat.fcam === "16"}
                onChange={(e: any) => {
                  if (cat.fcam === "16") {
                    setCat({ ...cat, fcam: "" });
                  } else {
                    setCat({ ...cat, fcam: e.target.value });
                    front3filter();
                  }
                }}
                value="16"
              >
                31 MP - 40 MP
              </Checkbox>
              <Checkbox
                isChecked={cat.fcam === "12"}
                onChange={(e: any) => {
                  if (cat.fcam === "12") {
                    setCat({ ...cat, fcam: "" });
                  } else {
                    setCat({ ...cat, fcam: e.target.value });
                    front4filter();
                  }
                }}
                value="12"
              >
                11 MP - 30 MP
              </Checkbox>
              <Checkbox
                isChecked={cat.fcam === "8"}
                onChange={(e: any) => {
                  if (cat.fcam === "8") {
                    setCat({ ...cat, fcam: "" });
                  } else {
                    setCat({ ...cat, fcam: e.target.value });
                    front5filter();
                  }
                }}
                value="8"
              >
                10MP & Below
              </Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default MobileFilter;
