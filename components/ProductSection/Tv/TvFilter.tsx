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
import { intrfcTv, lap_filterProps } from "@/constants/constants";
import { State } from "@/redux/store";

const TvFilter = ({ setTv }: any) => {
  const { televisions } = useSelector((store: State) => store.productsManager);
  let sortedArr = televisions;
  const [cat, setCat] = useState<lap_filterProps>({
    price: "",
    brand: "",
    screen: "",
    os: "",
  });
  useEffect(() => {
    setTv(televisions);
  }, []);

  const HandleReset = () => {
    setTv(televisions);
    setCat({
      price: "",
      brand: "",
      screen: "",
      os: "",
    });
  };

  //*  price sorting
  const lthSort = () => {
    sortedArr = sortedArr.sort((a: intrfcTv, b: intrfcTv) => {
      return +a.price - +b.price;
    });
    setTv(sortedArr);
  };
  const htlSort = () => {
    sortedArr = sortedArr.sort((a: intrfcTv, b: intrfcTv) => {
      return +b.price - +a.price;
    });
    setTv(sortedArr);
  };
  //* brand filtering
  const lgFilter = () => {
    sortedArr = sortedArr.filter((el: any) => el.modal.includes("LG"));
    setTv(sortedArr);
  };
  const sonyFilter = () => {
    sortedArr = sortedArr.filter((el: intrfcTv) => el.modal.includes("Sony"));
    setTv(sortedArr);
  };
  const panasonicFilter = () => {
    sortedArr = sortedArr.filter((el: intrfcTv) =>
      el.modal.includes("Panasonic")
    );
    setTv(sortedArr);
  };
  const vuFilter = () => {
    sortedArr = sortedArr.filter((el: intrfcTv) => el.modal.includes("Vu"));
    setTv(sortedArr);
  };
  const oneplusF = () => {
    sortedArr = sortedArr.filter((el: intrfcTv) =>
      el.modal.includes("OnePlus")
    );
    setTv(sortedArr);
  };

  //* screen filtering
  const s1filter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcTv) =>
        el.displaySize.includes("43") ||
        el.displaySize.includes("55") ||
        el.displaySize.includes("70") ||
        el.displaySize.includes("65") ||
        el.displaySize.includes("60")
    );
    setTv(sortedArr);
  };
  const s2filter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcTv) =>
        el.displaySize.includes("32") ||
        el.displaySize.includes("40") ||
        el.displaySize.includes("42")
    );
    setTv(sortedArr);
  };
  const s3filter = () => {
    sortedArr = sortedArr.filter(
      (el: intrfcTv) =>
        el.displaySize.includes("24") || el.displaySize.includes("28")
    );
    setTv(sortedArr);
  };

  //* display type filtering
  const o1filter = () => {
    sortedArr = sortedArr.filter((el: intrfcTv) =>
      el.displayType.includes("LED")
    );
    setTv(sortedArr);
  };
  const o2filter = () => {
    sortedArr = sortedArr.filter((el: intrfcTv) =>
      el.displayType.includes("HD-Ready")
    );
    setTv(sortedArr);
  };
  const o3filter = () => {
    sortedArr = sortedArr.filter((el: intrfcTv) =>
      el.displayType.includes("Full-HD")
    );
    setTv(sortedArr);
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
                isChecked={cat.brand === "lg"}
                onChange={(e: any) => {
                  if (cat.brand === "lg") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                    lgFilter();
                  }
                }}
                value="lg"
              >
                LG
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "sony"}
                onChange={(e: any) => {
                  if (cat.brand === "sony") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                    sonyFilter();
                  }
                }}
                value="sony"
              >
                Sony
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "panasonic"}
                onChange={(e: any) => {
                  if (cat.brand === "panasonic") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                    panasonicFilter();
                  }
                }}
                value="panasonic"
              >
                Panasonic
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "vu"}
                onChange={(e: any) => {
                  if (cat.brand === "vu") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                    vuFilter();
                  }
                }}
                value="vu"
              >
                Vu
              </Checkbox>
              <Checkbox
                isChecked={cat.brand === "oneplus"}
                onChange={(e: any) => {
                  if (cat.brand === "oneplus") {
                    setCat({ ...cat, brand: "" });
                  } else {
                    setCat({ ...cat, brand: e.target.value });
                    oneplusF();
                  }
                }}
                value="oneplus"
              >
                Oneplus
              </Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* By Screen Sizes */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Display Sizes
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Flex direction={"column"}>
              <Checkbox
                isChecked={cat.screen === "43"}
                onChange={(e: any) => {
                  if (cat.screen === "43") {
                    setCat({ ...cat, screen: "" });
                  } else {
                    setCat({ ...cat, screen: e.target.value });
                    s1filter();
                  }
                }}
                value="43"
              >
                43 inches & Above
              </Checkbox>
              <Checkbox
                isChecked={cat.screen === "32"}
                onChange={(e: any) => {
                  if (cat.screen === "32") {
                    setCat({ ...cat, screen: "" });
                  } else {
                    setCat({ ...cat, screen: e.target.value });
                    s2filter();
                  }
                }}
                value="32"
              >
                32 - 42 inches
              </Checkbox>
              <Checkbox
                isChecked={cat.screen === "28"}
                onChange={(e: any) => {
                  if (cat.screen === "28") {
                    setCat({ ...cat, screen: "" });
                  } else {
                    setCat({ ...cat, screen: e.target.value });
                    s3filter();
                  }
                }}
                value="28"
              >
                28 - 24 inches
              </Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        {/* display types */}
        <AccordionItem bgColor={"white"}>
          <AccordionButton>
            <Box fontSize={"sm"} as="span" flex="1" textAlign="left">
              Display Types
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
                LED
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
                HD-Ready
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
                Full-HD
              </Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default TvFilter;
