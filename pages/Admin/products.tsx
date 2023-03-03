import SidebarWithHeader from "@/components/admin/Navbar";
import React from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/redux/store";
import {
  deleteMobile,
  deleteTv,
  getLaptop,
  getMobile,
  getTv,
} from "@/redux/products/products.actions";
import { Dispatch } from "redux";
import { intrfcLaptop, intrfcMobile, intrfcTv } from "@/constants/constants";
import { Box, Button, Flex, Image, Select, Text } from "@chakra-ui/react";

import { GrAdd } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { deleteLaptop } from "../../redux/products/products.actions";

import styles from "../../styles/adminProducts.module.css";
import useToastMsg from "@/customHook/UseToastMsg";

// get price in indian price format
let dollarIndianLocale = Intl.NumberFormat("en-IN");

const Products = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { laptops, mobiles, televisions } = useSelector(
    (store: State) => store.productsManager
  );
  const toastMsg = useToastMsg();

  const [showItems, setShowItems] = React.useState<string>("laptops");

  React.useEffect(() => {
    getLaptop(dispatch, 16);

    getMobile(dispatch, 80);

    getTv(dispatch, 80);
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    if (e.target.value == "" || e.target.value == "laptops") {
      setShowItems("laptops");
    } else {
      setShowItems(e.target.value);
    }
  };

  const underConstruction = () => {
    toastMsg({
      title: "Sorry!",
      desc: "This part is under Construction",
      status: "info",
    });
  };

  return (
    <>
      <Head>
        <title>GadgetRambo: Products</title>
      </Head>
      <SidebarWithHeader active="Products">
        <div className={styles.products}>
          <Flex>
            <Select
              variant="filled"
              bgColor="#fff"
              placeholder="Choose Product"
              onChange={handleChange}
            >
              <option value="laptops">Laptops</option>
              <option value="mobiles">Mobiles</option>
              <option value="televisions">Televisions</option>
            </Select>
            <Button onClick={underConstruction}>
              <GrAdd />
            </Button>
          </Flex>
          {showItems === "laptops" ? (
            <div className={styles.Prod}>
              <Flex>
                <Box>
                  <Text>SN</Text>
                </Box>
                <Box>
                  <Text>Image</Text>
                </Box>
                <Box>
                  <Text>Name</Text>
                </Box>
                <Box>
                  <Text>Colours</Text>
                </Box>
                <Box>
                  <Text>Processor</Text>
                </Box>
                <Box>
                  <Text>Size</Text>
                </Box>
                <Box>
                  <Text>Price</Text>
                </Box>
                <Box>
                  <Text>Edit</Text>
                </Box>
                <Box>
                  <Text>Delete</Text>
                </Box>
              </Flex>
              {laptops.map((item: intrfcLaptop, i: number) => (
                <Flex key={i}>
                  <Box>
                    <Text>{i + 1}</Text>
                  </Box>
                  <Box>
                    <Image src={item.image} alt={item.name} h="50px" />
                  </Box>
                  <Box>
                    <Text>{item.name}</Text>
                    <Box className={styles.responsive}>
                      <Text>₹ {dollarIndianLocale.format(item.price)} /-</Text>
                      <Button
                        colorScheme="blue"
                        onClick={underConstruction}
                        className={styles.responsiveEdit}
                      >
                        <BiEdit />
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          dispatch(deleteLaptop(item.id || "", toastMsg));
                        }}
                      >
                        <RiDeleteBin6Line />
                      </Button>
                    </Box>
                  </Box>
                  <Box>
                    <Text>{item.colours}</Text>
                  </Box>
                  <Box>
                    <Text>{item.processor}</Text>
                  </Box>
                  <Box>
                    <Text>{item.size}</Text>
                  </Box>
                  <Box>
                    <Text>₹ {dollarIndianLocale.format(item.price)} /-</Text>
                  </Box>
                  <Box>
                    <Button colorScheme="blue" onClick={underConstruction}>
                      <BiEdit />
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        dispatch(deleteLaptop(item.id || "", toastMsg));
                      }}
                    >
                      <RiDeleteBin6Line />
                    </Button>
                  </Box>
                </Flex>
              ))}
            </div>
          ) : showItems === "mobiles" ? (
            <div className={styles.Prod}>
              <Flex>
                <Box>
                  <Text>SN</Text>
                </Box>
                <Box>
                  <Text>Image</Text>
                </Box>
                <Box>
                  <Text>Name</Text>
                </Box>
                <Box>
                  <Text>Related</Text>
                </Box>
                <Box>
                  <Text>Processor</Text>
                </Box>
                <Box>
                  <Text>Size</Text>
                </Box>
                <Box>
                  <Text>Price</Text>
                </Box>
                <Box>
                  <Text>Edit</Text>
                </Box>
                <Box>
                  <Text>Delete</Text>
                </Box>
              </Flex>
              {mobiles.map((item: intrfcMobile, i: number) => (
                <Flex key={i}>
                  <Box>
                    <Text>{i + 1}</Text>
                  </Box>
                  <Box>
                    <Image src={item.imgsrc} alt={item.modal} h="50px" />
                  </Box>
                  <Box>
                    <Text>{item.modal}</Text>
                    <Box className={styles.responsive}>
                      <Text>₹ {dollarIndianLocale.format(item.price)} /-</Text>
                      <Button
                        colorScheme="blue"
                        onClick={underConstruction}
                        className={styles.responsiveEdit}
                      >
                        <BiEdit />
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          dispatch(deleteLaptop(item.id || "", toastMsg));
                        }}
                      >
                        <RiDeleteBin6Line />
                      </Button>
                    </Box>
                  </Box>
                  <Box>
                    <Text>{item.related2}</Text>
                  </Box>
                  <Box>
                    <Text>{item.processor}</Text>
                  </Box>
                  <Box>
                    <Text>{item.displaySize}</Text>
                  </Box>
                  <Box>
                    <Text>₹ {dollarIndianLocale.format(item.price)} /-</Text>
                  </Box>
                  <Box>
                    <Button colorScheme="blue" onClick={underConstruction}>
                      <BiEdit />
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        dispatch(deleteMobile(item.id || "", toastMsg));
                      }}
                    >
                      <RiDeleteBin6Line />
                    </Button>
                  </Box>
                </Flex>
              ))}
            </div>
          ) : (
            <div className={styles.Prod}>
              <Flex>
                <Box>
                  <Text>SN</Text>
                </Box>
                <Box>
                  <Text>Image</Text>
                </Box>
                <Box>
                  <Text>Name</Text>
                </Box>
                <Box>
                  <Text>Related</Text>
                </Box>
                <Box>
                  <Text>OS</Text>
                </Box>
                <Box>
                  <Text>Size</Text>
                </Box>
                <Box>
                  <Text>Price</Text>
                </Box>
                <Box>
                  <Text>Edit</Text>
                </Box>
                <Box>
                  <Text>Delete</Text>
                </Box>
              </Flex>
              {televisions.map((item: intrfcTv, i: number) => (
                <Flex key={i}>
                  <Box>
                    <Text>{i + 1}</Text>
                  </Box>
                  <Box>
                    <Image src={item.imgsrc} alt={item.modal} h="50px" />
                  </Box>
                  <Box>
                    <Text>{item.modal}</Text>
                    <Box className={styles.responsive}>
                      <Text>₹ {dollarIndianLocale.format(item.price)} /-</Text>
                      <Button
                        colorScheme="blue"
                        onClick={underConstruction}
                        className={styles.responsiveEdit}
                      >
                        <BiEdit />
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          dispatch(deleteLaptop(item.id || "", toastMsg));
                        }}
                      >
                        <RiDeleteBin6Line />
                      </Button>
                    </Box>
                  </Box>
                  <Box>
                    <Text>{item.related}</Text>
                  </Box>
                  <Box>
                    <Text>{item.os}</Text>
                  </Box>
                  <Box>
                    <Text>{item.displaySize}</Text>
                  </Box>
                  <Box>
                    <Text>₹ {dollarIndianLocale.format(item.price)} /-</Text>
                  </Box>
                  <Box>
                    <Button colorScheme="blue" onClick={underConstruction}>
                      <BiEdit />
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        dispatch(deleteTv(item.id || "", toastMsg));
                      }}
                    >
                      <RiDeleteBin6Line />
                    </Button>
                  </Box>
                </Flex>
              ))}
            </div>
          )}
        </div>
      </SidebarWithHeader>
    </>
  );
};

export default Products;
