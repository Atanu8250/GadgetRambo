import { db } from "@/Backend/Firebase/firebase";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { cartItemsProps, intrfcMobile } from "@/constants/constants";
import useToastMsg from "@/customHook/UseToastMsg";
import { addCart, getCart } from "@/redux/cart/cart.actions";
import {
  Button,
  Flex,
  Heading,
  Image,
  Show,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React from "react";
import { BiAperture } from "react-icons/bi";
import { BsCameraFill, BsCpu, BsDisplay, BsWifi } from "react-icons/bs";
import { useDispatch } from "react-redux";
interface singleMobile {
  mobile: intrfcMobile;
}

const Mobile = ({ mobile }: singleMobile) => {
  const toastMsg = useToastMsg();
  const dispatch = useDispatch();
  const handleAddtoCart = async () => {
    addCart(mobile, toastMsg);
    getCart(dispatch);
  };

  return (
    <Flex p={10}>
      <Show above="lg">
        {/* Left Side */}
        <Flex mx={2} flex={1}>
          <LeftSidebar />
        </Flex>
      </Show>
      {/* Center Side */}
      <Flex
        mx={{ base: 1, sm: 4 }}
        p={{ base: 0, sm: 5 }}
        flex={3}
        justifyContent={"flex-start"}
        direction={"column"}
        alignItems={"center"}
      >
        <Flex mb={8} w={"100%"} justifyContent={"center"}>
          <Heading size={{ base: "lg", sm: "xl" }}>{mobile.modal}</Heading>
        </Flex>
        <Flex
          mb={8}
          justifyContent={{ base: "center", sm: "center", md: "flex-start" }}
        >
          <Image src={mobile.imgsrc} alt={mobile.modal} w={"180px"} />
        </Flex>
        <Flex
          gap={5}
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          justifyContent={"space-evenly"}
        >
          <Flex border={"7px double #DDDDDD"} borderRadius={"20px"} p={"5"}>
            <SimpleGrid
              columns={{ base: 1, sm: 2 }}
              spacing={{ base: "8", sm: "6", md: "1" }}
            >
              <Flex alignItems={"center"} gap={"3"}>
                <BsDisplay style={{ fontSize: "30px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Display Size</Text>
                  <Text fontSize={"md"}>{mobile.displaySize}</Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"3"}>
                <BsCpu style={{ fontSize: "30px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Processor</Text>
                  <Text fontSize={"md"}>{mobile.processor}</Text>
                </Flex>
              </Flex>

              <Flex alignItems={"center"} gap={"3"}>
                <BiAperture style={{ fontSize: "30px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Front Camera</Text>
                  <Text fontSize={"md"}>{mobile.frontCamera}</Text>
                </Flex>
              </Flex>

              <Flex alignItems={"center"} gap={"3"}>
                <BsCameraFill style={{ fontSize: "30px" }} />
                <Flex direction={"column"}>
                  <Text as={"b"}>Rear Camera</Text>
                  <Text fontSize={"md"}>{mobile.rearCamera}</Text>
                </Flex>
              </Flex>
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          mt={3}
          gap={5}
          justify={"flex-end"}
          w={"100%"}
          alignItems={"center"}
        >
          <Text as={"b"} fontSize={"lg"}>
            Price
          </Text>
          <Text fontSize={"xl"} as={"b"}>
            {"₹ " + mobile.price}
          </Text>
          <Button onClick={handleAddtoCart} colorScheme={"red"}>
            Add To Cart
          </Button>
        </Flex>
        <Flex direction={"column"} gap={3}>
          <Text as={"b"}>Description</Text>
          <Text textAlign={"justify"} fontSize={"md"}>
            {mobile.modal} mobile was launched on {mobile.releaseDate}. The
            phone comes with a 120 Hz refresh rate 6.67-inch touchscreen display
            offering a resolution of 1080x2400 pixels at a pixel density of 395
            pixels per inch (ppi) and an aspect ratio of 20:9. {mobile.modal} is
            powered by an octa-core Qualcomm Snapdragon 695 processor. It comes
            with 6GB, 8GB of RAM. The {mobile.modal} runs Android 11 and is
            powered by a 5000mAh battery. The {mobile.modal} supports
            proprietary fast charging. As far as the cameras are concerned, the{" "}
            {mobile.modal} on the rear packs a triple camera setup featuring a{" "}
            {mobile.rearCamera} (f/1.9, 0.7-micron) primary camera; an
            8-megapixel camera, and a 2-megapixel (f/2.4) camera. The rear
            camera setup has autofocus. It has a single front camera setup for
            selfies, featuring a 16-megapixel sensor with an f/2.4 aperture. The{" "}
            {mobile.modal} runs MIUI 13 is based on Android 11 and packs 128GB
            of inbuilt storage that can be expanded via microSD card (up to
            1000GB). The {mobile.modal} is a dual-SIM (GSM and GSM) mobile that
            accepts Nano-SIM and Nano-SIM cards. The {mobile.modal} measures
            164.19 x 76.10 x 8.12mm (height x width x thickness) and weighs
            202.00 grams. It was launched in Atlantic Blue, Graphite Gray, and
            Polar White colours. Connectivity options on the {mobile.modal}{" "}
            include Wi-Fi 802.11 a/b/g/n/ac, GPS, Bluetooth v5.00, NFC,
            Infrared, USB Type-C, 3G, 4G (with support for Band 40 used by some
            LTE networks in India) , and 5G. Sensors on the phone include
            accelerometer, ambient light sensor, compass/ magnetometer,
            gyroscope, proximity sensor, and fingerprint sensor.
          </Text>
          <Text as={"b"}>Brand</Text>
          <Text fontSize={"md"}>{mobile.related2}</Text>
          <Text as={"b"}>Release Date</Text>
          <Text fontSize={"md"}>{mobile.releaseDate}</Text>
        </Flex>
      </Flex>
      <Show above="xl">
        {/* Right Side */}
        <Flex mx={4} flex={1.2}>
          <RightSidebar />
        </Flex>
      </Show>
    </Flex>
  );
};

export default Mobile;

export async function getStaticPaths() {
  const prodRef = collection(db, "mobiles");
  let res = await getDocs(prodRef);
  let data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return {
    paths: data.map((blog) => ({ params: { id: blog.id.toString() } })),
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps = async (context: any) => {
  const { params } = context;
  try {
    const mobileRef = doc(db, "mobiles", params.id);
    const res = await getDoc(mobileRef);
    const mobile = res.data();
    return {
      props: {
        mobile: { ...mobile, id: params.id, quantity: 1 },
      },
    };
  } catch (error) {
    console.log(error);
  }
};
