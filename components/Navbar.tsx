import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dispatch } from "redux";
import Marquee from "react-fast-marquee";
import useAuth from "@/customHook/UseAuth";
import { Box, Flex, Show, HStack, VStack, Text } from "@chakra-ui/react";
import style from "../styles/Navbar.module.css";
import { HiShoppingCart } from "react-icons/hi";
import { Icon, Button } from "@chakra-ui/react";
import useToastMsg from "@/customHook/UseToastMsg";
import NavbarDrawer from "../components/NavbarDrawer";
import { useDispatch, useSelector } from "react-redux";
import { logout, setShowAdminPanel } from "@/redux/auth/auth.action";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  MenuDivider,
} from "@chakra-ui/react";
import { auth } from "@/Backend/Firebase/firebase";
import Login from "./Login";
import Signup from "./Signup";
import Router from "next/router";
import { State } from "@/redux/store";
import logo from "../assets/GadgetRambo.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FiChevronDown } from "react-icons/fi";
import { getUsers } from "@/redux/users/users.action";
import { intrfcUser } from "@/constants/constants";

const Navbar = () => {
  // useAuth called for getting the current user of our website
  useAuth();
  const { user }: any = useSelector((store: State) => store.authManager);
  const dispatch: Dispatch<any> = useDispatch();
  const { users }: { users: Array<intrfcUser> } = useSelector(
    (store: State) => store.usersManager
  );
  const { showAdminPanel }: { showAdminPanel: boolean } = useSelector(
    (store: State) => store.authManager
  );
  const toastMsg = useToastMsg();
  const handleLogout = () => {
    dispatch(logout(toastMsg));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const showAdminFun = () => {
    for (let i = 0; i < users.length; i++) {
      if (user.email === users[i].email) {
        return users[i].isAdmin;
      }
    }
  };
  const handleCartVerify = () => {
    if (auth.currentUser === null) {
      toastMsg({
        title: "Please Login first",
        status: "warning",
      });
    } else {
      Router.replace("/cart");
    }
  };

  const navbarOne = [
    {
      title: "HOME",
      link: "/",
      dropdown: false,
    },
    {
      title: "GUIDE",
      link: "/",
      dropdown: false,
    },
    {
      title: "AUTO EXPO 2023",
      link: "/",
      dropdown: false,
    },
    {
      title: "NEWS",
      link: "/blogs",
      dropdown: false,
    },
    {
      title: "REVIEWS",
      link: "/",
      dropdown: false,
    },
    {
      title: "FEATURES",
      link: "/",
      dropdown: false,
    },
    {
      title: "VIDEO",
      link: "/",
      dropdown: true,
      dropData1: [
        { title: "LATEST", link: "/" },
        { title: "BUYING GUIDES", link: "/" },
        { title: "CRYPTOCURRENCY", link: "/" },
        { title: "EVENTS", link: "/" },
        { title: "HOW TO", link: "/" },
        { title: "SPONSORED", link: "/" },
      ],
      dropData2: [
        { title: "REVIEW & FIRST LOOKS", link: "/" },
        { title: "HINDI", link: "/" },
        { title: "ENTERTAINMENT", link: "/" },
        { title: "FEATURES", link: "/" },
        { title: "SHORTS", link: "/" },
        { title: "TV SHOWS", link: "/" },
      ],
    },
    {
      title: "PRODUCT FINDER",
      link: "/",
      dropdown: true,
      dropData1: [
        { title: "MOBILES", link: "/products/mobiles" },
        { title: "LAPTOPS", link: "/products/laptops" },
        { title: "TV", link: "/products/tv" },
        { title: "TABLETS", link: "/" },
        { title: "SMART WATCH", link: "/" },
        { title: "HEDPHONES", link: "/" },
        { title: "CAMERAS", link: "/" },
        { title: "GAMING CONSOLES", link: "/" },
        { title: "INVERTER", link: "/" },
      ],
      dropData2: [
        { title: "SMART BRANDS", link: "/" },
        { title: "SPEAKERS", link: "/" },
        { title: "SMART SPEAKERS", link: "/" },
        { title: "AC", link: "/" },
        { title: "GAMES", link: "/" },
        { title: "REFRIGERATOR", link: "/" },
        { title: "AIR COOLER", link: "/" },
        { title: "AIR PURIFIER", link: "/" },
        { title: "WASHING MACHINE", link: "/" },
      ],
    },
    {
      title: "COMPARE",
      link: "/",
      dropdown: true,
      dropData1: [
        { title: "MOBILES", link: "/products/mobiles" },
        { title: "LAPTOPS", link: "/products/laptops" },
        { title: "TV", link: "/products/tv" },
        { title: "TABLETS", link: "/" },
        { title: "SMART WATCH", link: "/" },
        { title: "HEDPHONES", link: "/" },
        { title: "CAMERAS", link: "/" },
        { title: "GAMING CONSOLES", link: "/" },
        { title: "INVERTER", link: "/" },
      ],
      dropData2: [
        { title: "SMART BRANDS", link: "/" },
        { title: "SPEAKERS", link: "/" },
        { title: "SMART SPEAKERS", link: "/" },
        { title: "AC", link: "/" },
        { title: "GAMES", link: "/" },
        { title: "REFRIGERATOR", link: "/" },
        { title: "AIR COOLER", link: "/" },
        { title: "AIR PURIFIER", link: "/" },
        { title: "WASHING MACHINE", link: "/" },
      ],
    },
    {
      title: "BRANDS",
      link: "/",
      dropdown: false,
    },
    {
      title: "RECHARGE",
      link: "/",
      dropdown: true,
      dropData1: [
        { title: "MOBILES", link: "/products/mobiles" },
        { title: "LAPTOPS", link: "/products/laptops" },
        { title: "TV", link: "/products/tv" },
        { title: "TABLETS", link: "/" },
      ],
      dropData2: [
        { title: "SMART WATCH", link: "/" },
        { title: "HEDPHONES", link: "/" },
        { title: "CAMERAS", link: "/" },
        { title: "GAMING CONSOLES", link: "/" },
      ],
    },
    {
      title: "MORE",
      link: "/",
      dropdown: true,
      dropData: [
        { title: "CRYPTOCURRENCY", link: "/" },
        { title: "GOLD RATE", link: "/" },
        { title: "AMAZON SALE", link: "/" },
        { title: "MOVIES", link: "/" },
        { title: "SERVICE CENTERS", link: "/" },
        { title: "FINANCE", link: "/" },
        { title: "COMMUNITY", link: "/" },
      ],
      dropData2: [
        { title: "DIGITAL GOLD", link: "/" },
        { title: "DEALS", link: "/" },
        { title: "FLIPKART SALE", link: "/" },
        { title: "WEB SERIES", link: "/" },
        { title: "SMART HOME", link: "/" },
        { title: "CLUB 360", link: "/" },
        { title: "SILVER RATE", link: "/" },
      ],
    },
  ];
  const navbarTwo = [
    {
      title: "MOBILES",
      link: "/products/mobiles",
    },
    {
      title: "LAPTOPS",
      link: "/products/laptops",
    },
    {
      title: "TV",
      link: "/products/tv",
    },
    {
      title: "SMART WATCHES",
      link: "/",
    },
    {
      title: "CAMERAS",
      link: "/",
    },
    {
      title: "SMART BANDS",
      link: "/",
    },
    {
      title: "SMART SPEAKERS",
      link: "/",
    },
    {
      title: "GAMES",
      link: "/",
    },
    {
      title: "AIR COOLER",
      link: "/",
    },
    {
      title: "WASHING MACHINE",
      link: "/",
    },
    {
      title: "TABLES",
      link: "/",
    },
    {
      title: "HEADPHONES",
      link: "/",
    },
  ];

  const handleShowAdminPanel = () => {
    setShowAdminPanel(dispatch);
    Router.replace("/admin");
  };

  if (showAdminPanel) {
    return <></>;
  }

  return (
    <div>
      <div className={style.marquee}>
        <Marquee>
          NDTV Business Hindi Movies Cricket Health Food Crypto Tech Webstories
          Education Swasth Lifestyle Shopping Auto Apps Art NDTV Business Hindi
          Movies Cricket Health Food Crypto Tech Webstories Education Swasth
          Lifestyle Shopping Auto Apps Art
        </Marquee>
      </div>
      <div className={style.main}>
        <div className={style.logoUpper}>
          <div className={style.logo}>
            <Link href="/">
              <Image src={logo} alt="logo" width={100} height={20} />
            </Link>
          </div>
          <div className={style.personData}>
            {/*
            Login and Logout 
             */}

            {user.uid ? (
              <div className={style.personData}>
                <Flex
                  alignItems={"center"}
                  marginBottom={"2rem"}
                  marginRight={"1rem"}
                >
                  <Menu>
                    <MenuButton
                      py={2}
                      transition="all 0.3s"
                      _focus={{ boxShadow: "none" }}
                    >
                      <HStack>
                        <Avatar size="sm" src={user.photoURL} />
                        <VStack
                          display={{ base: "none", md: "flex" }}
                          alignItems="flex-start"
                          spacing="1px"
                          ml="2"
                        >
                          <Text fontSize="lg" color="tomato">
                          {user.displayName || "User"}
                          </Text>
                        </VStack>
                        <Box display={{ base: "none", md: "flex" }}>
                          <FiChevronDown />
                        </Box>
                      </HStack>
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <Link href={"/order"}>My Orders</Link>
                      </MenuItem>
                      {
                        <MenuItem
                          onClick={() => {
                            let ans = showAdminFun();
                            if (ans) {
                              handleShowAdminPanel();
                            } else {
                              toastMsg({
                                title: "Admin",
                                desc: "You are not an Admin",
                                status: "error",
                              });
                            }
                          }}
                        >
                          Admin
                        </MenuItem>
                      }
                      <MenuDivider />
                      <MenuItem
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Sign out
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              </div>
            ) : (
              <div className={style.personData}>
                <div className={style.login}>
                  <Login />
                </div>
                <div className={style.signup}>
                  <Signup />
                </div>
              </div>
            )}
            <div className={style.cart}>
              <button onClick={handleCartVerify}>
                <Icon as={HiShoppingCart} boxSize={8} />
              </button>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////Navbar */}
        <Show above="lg">
          <Flex direction={"column"} gap={4}>
            <Flex bgColor={"white"} justifyContent={"center"}>
              {navbarOne.map((el, id) => {
                return el.dropData1 && el.dropData2 ? (
                  <Menu key={id}>
                    <MenuButton
                      p={{ base: 1, xl: 2, "2xl": 4 }}
                      borderRadius={"0px"}
                      fontSize={{ xl: "xs", "2xl": "sm" }}
                      _active={{ borderBottom: "4px solid red" }}
                      color={"black"}
                      colorScheme={"white"}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      {el.title}
                    </MenuButton>
                    <MenuList
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Box>
                        {el.dropData1.map((el2, id2) => {
                          return <MenuItem key={id2}>{el2.title}</MenuItem>;
                        })}
                      </Box>
                      <Box>
                        {el.dropData2.map((el2, id2) => {
                          return <MenuItem key={id2}>{el2.title}</MenuItem>;
                        })}
                      </Box>
                    </MenuList>
                  </Menu>
                ) : (
                  <Link key={id} href={el.link}>
                    <Button
                      _active={{ borderBottom: "4px solid red" }}
                      borderRadius={"0px"}
                      p={{ base: 1, xl: 2, "2xl": 4 }}
                      fontSize={"sm"}
                      color={"black"}
                      colorScheme={"white"}
                    >
                      {el.title}
                    </Button>
                  </Link>
                );
              })}
            </Flex>
            <Flex bgColor={"red.500"} justifyContent={"center"}>
              {navbarTwo.map((el, id) => {
                return (
                  <Link key={id} href={el.link}>
                    <Button
                      _active={{ bgColor: "gray.100", color: "black" }}
                      borderRadius={"0px"}
                      p={{ base: 1, xl: 2, "2xl": 4 }}
                      fontSize={"xs"}
                      color={"white"}
                      colorScheme={"red"}
                    >
                      {el.title}
                    </Button>
                  </Link>
                );
              })}
            </Flex>
          </Flex>
        </Show>
        {/* ///////////////////////////////////Navbar */}

        {/* DRAWER */}
        <div className={style.drawer}>
          <NavbarDrawer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
