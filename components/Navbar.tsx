import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Dispatch } from "redux";
import Marquee from "react-fast-marquee";
import useAuth from "@/customHook/UseAuth";
import { Box, Divider, Flex } from "@chakra-ui/react";
import style from "../styles/Navbar.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { Icon, Button } from "@chakra-ui/react";
import useToastMsg from "@/customHook/UseToastMsg";
import { MdAdminPanelSettings } from "react-icons/md";
import NavbarDrawer from "../components/NavbarDrawer";
import { useDispatch, useSelector } from "react-redux";
import { logout, setShowAdminPanel } from "@/redux/auth/auth.action";
import { Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";

import Login from "./Login";
import Signup from "./Signup";
import Router from "next/router";
import { State } from "@/redux/store";
import logo from "../assets/GadgetRambo.png";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  // useAuth called for getting the current user of our website
  useAuth();

  const { user }: any = useSelector((store: State) => store.authManager);
  const dispatch: Dispatch<any> = useDispatch();
  const { showAdminPanel }: { showAdminPanel: boolean } = useSelector((store: State) => store.authManager);
  const toastMsg = useToastMsg();

  const handleLogout = () => {
    dispatch(logout(toastMsg));
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

  const handleFuse = () => {
    setFocusHome(false);
    setFocusGuide(false);
    setFocusExpo(false);
    setFocusNews(false);
    setFocusReviews(false);
    setFeatures(false);
    setVideo(false);
    setPodcasts(false);
    setProductFinder(false);
    setCompare(false);
    setBrands(false);
    setRecharge(false);
    setMore(false);
    setMobile(false);
    setTV(false);
    setSmartWatches(false);
    setCameras(false);
    setSmartBands(false);
    setSpeakers(false);
    setGames(false);
    setAirCooler(false);
    setWashingMashine(false);
    setTablets(false);
    setHeadPhones(false);
    setLaptops(false);
  };

  // HOME
  const [focusHome, setFocusHome] = React.useState<boolean>(true);
  const handleHome = () => {
    handleFuse();
    setFocusHome(true);
  };

  // GUIDE
  const [focusGuide, setFocusGuide] = React.useState<boolean>(false);
  const handleGuide = () => {
    handleFuse();
    setFocusGuide(true);
  };

  // AUTO EXPO 2023
  const [focusExpo, setFocusExpo] = React.useState<boolean>(false);
  const handleAutoExpo = () => {
    handleFuse();
    setFocusExpo(true);
  };

  // NEWS
  const [focusNews, setFocusNews] = React.useState<boolean>(false);
  const handleNews = () => {
    handleFuse();
    setFocusNews(true);
  };

  // REVIEWS
  const [focusReviews, setFocusReviews] = React.useState<boolean>(false);
  const handleReviews = () => {
    handleFuse();
    setFocusReviews(true);
  };

  // FEATURES
  const [focusfeatures, setFeatures] = React.useState<boolean>(false);
  const handleFeatures = () => {
    handleFuse();
    setFeatures(true);
  };

  // VIDEOS
  const [focusvideo, setVideo] = React.useState<boolean>(false);
  const handleVideo = () => {
    handleFuse();
    setVideo(true);
  };

  // PODCASTS
  const [focuspodcasts, setPodcasts] = React.useState<boolean>(false);
  const handlePodcasts = () => {
    handleFuse();
    setPodcasts(true);
  };

  // PRODUCT FINDER
  const [focusproductFinder, setProductFinder] = React.useState<boolean>(false);
  const handleProductFinder = () => {
    handleFuse();
    setProductFinder(true);
  };

  // COMPARE
  const [focuscompare, setCompare] = React.useState<boolean>(false);
  const handleCompare = () => {
    handleFuse();
    setCompare(true);
  };

  // BRANDS
  const [focusbrands, setBrands] = React.useState<boolean>(false);
  const handleBrands = () => {
    handleFuse();
    setBrands(true);
  };

  // RECHARGE
  const [focusrecharge, setRecharge] = React.useState<boolean>(false);
  const handleRecharge = () => {
    handleFuse();
    setRecharge(true);
  };

  // MORE
  const [focusmore, setMore] = React.useState<boolean>(false);
  const handleMore = () => {
    handleFuse();
    setMore(true);
  };

  // MOBILE
  const [focusmobile, setMobile] = React.useState<boolean>(false);
  const handleMobile = () => {
    handleFuse();
    setMobile(true);
  };

  // TV
  const [focusTV, setTV] = React.useState<boolean>(false);
  const handleTV = () => {
    handleFuse();
    setTV(true);
  };

  // SMART WATCHES
  const [focussmartwatches, setSmartWatches] = React.useState<boolean>(false);
  const handleSmartWatches = () => {
    handleFuse();
    setSmartWatches(true);
  };

  // CAMERAS
  const [focuscameras, setCameras] = React.useState<boolean>(false);
  const handleCameras = () => {
    handleFuse();
    setCameras(true);
  };

  // SMART BANDS
  const [focussmartbands, setSmartBands] = React.useState<boolean>(false);
  const handleSmartBands = () => {
    handleFuse();
    setSmartBands(true);
  };

  // SMART SPEAKERS
  const [focusspeakers, setSpeakers] = React.useState<boolean>(false);
  const handleSpeakers = () => {
    handleFuse();
    setSpeakers(true);
  };

  // GAMES
  const [focusgames, setGames] = React.useState<boolean>(false);
  const handleGames = () => {
    handleFuse();
    setGames(true);
  };

  // AIR COOLER
  const [focusaircooler, setAirCooler] = React.useState<boolean>(false);
  const handleAirCooler = () => {
    handleFuse();
    setAirCooler(true);
  };

  // WASHING MACHINE
  const [focuswashingmashine, setWashingMashine] = React.useState<boolean>(false);
  const handleWashingMashine = () => {
    handleFuse();
    setWashingMashine(true);
  };

  // TABLETS
  const [focustablets, setTablets] = React.useState<boolean>(false);
  const handleTablets = () => {
    handleFuse();
    setTablets(true);
  };

  // HEADPHONES
  const [focusheadphones, setHeadPhones] = React.useState<boolean>(false);
  const handleHeadPhones = () => {
    handleFuse();
    setHeadPhones(true);
  };

  // LAPTOPS
  const [focuslaptops, setLaptops] = React.useState<boolean>(false);
  const handleLaptops = () => {
    handleFuse();
    setLaptops(true);
  };

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
          NDTV Business Hindi Movies Cricket Health Food Crypto Tech Webstories Education Swasth Lifestyle Shopping Auto Apps Art NDTV Business Hindi Movies Cricket Health Food
          Crypto Tech Webstories Education Swasth Lifestyle Shopping Auto Apps Art
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
                <div className={style.avatar} title={user.email || ""}>
                  <Avatar size="sm" src={user.photoURL || "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"} />

                  <div className={style.avName}>
                    <p>{user.displayName || "User"}</p>
                  </div>
                  <div className={style.showAdminButton}>
                    <Link href="/admin">
                      <Button colorScheme="gray" onClick={handleShowAdminPanel}>
                        {" "}
                        <MdAdminPanelSettings /> Admin Panel
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className={style.login}>
                  <div className={style.loginButton} onClick={handleLogout}>
                    Logout
                  </div>
                </div>
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
              <Link href="/cart">
                <Icon as={HiShoppingCart} boxSize={8} />
              </Link>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////Navbar */}
        <Flex direction={"column"} gap={4}>
          <Flex bgColor={"white"} justifyContent={"center"}>
            {navbarOne.map((el, id) => {
              return el.dropData1 && el.dropData2 ? (
                <Menu>
                  <MenuButton
                    borderRadius={"0px"}
                    fontSize={"sm"}
                    _active={{ borderBottom: "4px solid red" }}
                    color={"black"}
                    colorScheme={"white"}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    {el.title}
                  </MenuButton>
                  <MenuList style={{ display: "flex", direction: "column" }}>
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
                  <Button _active={{ borderBottom: "4px solid red" }} borderRadius={"0px"} p={{ base: 1, xl: 2 }} fontSize={"sm"} color={"black"} colorScheme={"white"}>
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
                  <Button _active={{ bgColor: "gray.100", color: "black" }} borderRadius={"0px"} p={{ base: 1, xl: 2 }} fontSize={"xs"} color={"white"} colorScheme={"red"}>
                    {el.title}
                  </Button>
                </Link>
              );
            })}
          </Flex>
        </Flex>
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
