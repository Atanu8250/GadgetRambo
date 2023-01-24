import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Dispatch } from "redux";
import Marquee from "react-fast-marquee";
import useAuth from "@/customHook/UseAuth";
import { Divider } from "@chakra-ui/react";
import style from "../styles/Navbar.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { Icon, Button } from "@chakra-ui/react";
import useToastMsg from "@/customHook/UseToastMsg";
import { MdAdminPanelSettings } from 'react-icons/md'
import NavbarDrawer from "../components/NavbarDrawer";
import { useDispatch, useSelector } from "react-redux";
import { logout, setShowAdminPanel } from "@/redux/auth/auth.action";
import { Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";

import Login from "./Login";
import Signup from "./Signup";
import Router from "next/router";
import { State } from "@/redux/store";
import logo from '../assets/GadgetRambo.png'

const Navbar = () => {
  // useAuth called for getting the current user of our website
  useAuth();

  const { user }: any = useSelector((store: State) => store.authManager)
  const dispatch: Dispatch<any> = useDispatch()
  const { showAdminPanel }: { showAdminPanel: boolean } = useSelector((store: State) => store.authManager)
  const toastMsg = useToastMsg()

  const handleLogout = () => {
    dispatch(logout(toastMsg));
  };

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
  const [focuswashingmashine, setWashingMashine] =
    React.useState<boolean>(false);
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
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={20}
              />
            </Link>
          </div>
          <div className={style.personData}>
            {/*
            Login and Logout 
             */}

            {user.uid ? (
              <div className={style.personData}>
                <div className={style.avatar} title={user.email || ""}>
                  <Avatar size='sm' src={user.photoURL || "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"} />

                  <div className={style.avName}>
                    <p>{user.displayName || "User"}</p>
                  </div>
                  <div className={style.showAdminButton}>
                    <Link href="/admin">
                      <Button
                      colorScheme="gray"
                      onClick={handleShowAdminPanel}
                      > <MdAdminPanelSettings /> Admin Panel</Button>
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
        <div className={style.topNav}>
          <Link
            href="/"
            className={style.notdropDown}
            onClick={handleHome}
            style={
              focusHome
                ? { borderBottom: "6px solid #EE3E38" }
                : { borderBottom: "none" }
            }
          >
            HOME
          </Link>
          <Link
            href="/blogs"
            className={style.notdropDown}
            onClick={handleGuide}
            style={
              focusGuide
                ? { borderBottom: "6px solid #EE3E38" }
                : { borderBottom: "none" }
            }
          >
            GUIDE
          </Link>
          <Link
            href="/"
            className={style.notdropDown}
            onClick={handleAutoExpo}
            style={
              focusExpo
                ? { borderBottom: "6px solid #EE3E38" }
                : { borderBottom: "none" }
            }
          >
            AUTO EXPO 2023
          </Link>
          <Link
            href="/blogs"
            className={style.notdropDown}
            onClick={handleNews}
            style={
              focusNews
                ? { borderBottom: "6px solid #EE3E38" }
                : { borderBottom: "none" }
            }
          >
            NEWS
          </Link>
          <Link
            href="/blogs"
            className={style.notdropDown}
            onClick={handleReviews}
            style={
              focusReviews
                ? { borderBottom: "6px solid #EE3E38" }
                : { borderBottom: "none" }
            }
          >
            REVIEWS
          </Link>
          <Link
            href="/"
            className={style.notdropDown}
            onClick={handleFeatures}
            style={
              focusfeatures
                ? { borderBottom: "6px solid #EE3E38" }
                : { borderBottom: "none" }
            }
          >
            FEATURES
          </Link>
          <div>
            <Menu>
              <MenuButton
                paddingRight={"10px"}
                paddingLeft={"10px"}
                bgColor={"white"}
                as={Button}
                rightIcon={<Icon as={IoIosArrowDown} />}
                onClick={handleVideo}
                style={
                  focusvideo
                    ? { borderBottom: "6px solid #EE3E38" }
                    : { borderBottom: "none" }
                }
              >
                VIDEO
              </MenuButton>
              <MenuList
                style={{
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  display: "flex",
                }}
              >
                <div>
                  <MenuItem>
                    <Link href="/">LATEST</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">BUYING GUIDES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">CRYPTOCURRENCY</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">EVENTS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">HOW TO</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">SPONSORED</Link>
                  </MenuItem>
                </div>
                <Divider orientation="vertical" color={"black"} />
                <div>
                  <MenuItem>
                    <Link href="/">REVIEWS & FIRST LOOKS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">HINDI</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">ENTERTAINMENT</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">FEATURES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">SHORTS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">TV SHOWS</Link>
                  </MenuItem>
                </div>
              </MenuList>
            </Menu>
          </div>
          <div>
            <Menu>
              <MenuButton
                paddingRight={"10px"}
                paddingLeft={"10px"}
                bgColor={"white"}
                as={Button}
                rightIcon={<Icon as={IoIosArrowDown} />}
                onClick={handleProductFinder}
                style={
                  focusproductFinder
                    ? { borderBottom: "6px solid #EE3E38" }
                    : { borderBottom: "none" }
                }
              >
                PRODUCT FINDER
              </MenuButton>
              <MenuList
                style={{
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  display: "flex",
                }}
              >
                <div>
                  <MenuItem>
                    <Link href="/products/mobiles">MOBILES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/products/laptops">LAPTOPS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/products/tv">TV</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">TABLETS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">SMART WATCHES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">HEADPHONES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">CAMERAS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">GAMING CONSOLES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">SMART BANDS</Link>
                  </MenuItem>
                </div>
                <Divider orientation="vertical" color={"black"} />
                <div>
                  <MenuItem>
                    <Link href="/">SPEAKERS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">SMART SPEAKERS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">AC</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">GAMES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">REFRIGERATOR</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">AIR COOLER</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/">AIR PURIFIER</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">WASHINE MACHINE</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">INVERTER</Link>
                  </MenuItem>
                </div>
              </MenuList>
            </Menu>
          </div>
          <div>
            <Menu>
              <MenuButton
                paddingRight={"10px"}
                paddingLeft={"10px"}
                bgColor={"white"}
                as={Button}
                rightIcon={<Icon as={IoIosArrowDown} />}
                onClick={handleCompare}
                style={
                  focuscompare
                    ? { borderBottom: "6px solid #EE3E38" }
                    : { borderBottom: "none" }
                }
              >
                COMPARE
              </MenuButton>
              <MenuList
                style={{
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  display: "flex",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
              >
                <div>
                  <MenuItem>
                    <Link href="/products/mobiles">MOBILES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/products/laptops">LAPTOPS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/products/tv">TV</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">TABLETS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">SMART WATCHES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">HEADPHONES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">CAMERAS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">GAMING CONSOLES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">SMART BANDS</Link>
                  </MenuItem>
                </div>
                <Divider orientation="vertical" />
                <div>
                  <MenuItem>
                    <Link href="/">SPEAKERS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">SMART SPEAKERS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">AC</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">GAMES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">REFRIGERATOR</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">AIR COOLER</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">AIR PURIFIER</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">WASHINE MACHINE</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">INVERTER</Link>
                  </MenuItem>
                </div>
              </MenuList>
            </Menu>
          </div>
          <Link
            href="/"
            className={style.notdropDown}
            onClick={handleBrands}
            style={
              focusbrands
                ? { borderBottom: "6px solid #EE3E38" }
                : { borderBottom: "none" }
            }
          >
            BRANDS
          </Link>
          <div>
            <Menu>
              <MenuButton
                paddingRight={"10px"}
                paddingLeft={"10px"}
                bgColor={"white"}
                as={Button}
                rightIcon={<Icon as={IoIosArrowDown} />}
                onClick={handleRecharge}
                style={
                  focusrecharge
                    ? { borderBottom: "6px solid #EE3E38" }
                    : { borderBottom: "none" }
                }
              >
                RECHARGE
              </MenuButton>
              <MenuList
                style={{
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
              >
                <div>
                  <MenuItem>
                    <Link href="/products/mobiles">MOBILES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">LAPTOPS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">TV</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">TABLETS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">SMART WATCHES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">HEADPHONES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">CAMERAS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">GAMING CONSOLES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">SMART BANDS</Link>
                  </MenuItem>
                </div>
              </MenuList>
            </Menu>
          </div>
          <div>
            <Menu>
              <MenuButton
                paddingRight={"10px"}
                paddingLeft={"10px"}
                bgColor={"white"}
                as={Button}
                rightIcon={<Icon as={IoIosArrowDown} />}
                onClick={handleMore}
                style={
                  focusmore
                    ? { borderBottom: "6px solid #EE3E38" }
                    : { borderBottom: "none" }
                }
              >
                MORE
              </MenuButton>
              <MenuList
                style={{
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  display: "flex",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
              >
                <div>
                  <MenuItem>
                    <Link href="/">CRYPTOCURRENCY PRICES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">GOLD RATE</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">AMAZON SALE</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">MOVIES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">SERVICE CENTERS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">FINANCE</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">COMMUNITY</Link>
                  </MenuItem>
                </div>
                <Divider orientation="vertical" color={"black"} />
                <div>
                  <MenuItem>
                    <Link href="/">DIGITAL GOLD</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">DEALS</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">FLIPKART SALE</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">WEB SERIES</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">SMART HOME</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">CLUB360</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/">SILVER RATE</Link>
                  </MenuItem>
                </div>
              </MenuList>
            </Menu>
          </div>
        </div>

        {/* SECOND NAVBAR */}
        <div className={style.secondNav}>
          <Link
            href="/products/mobiles"
            className={style.secondComp}
            onClick={handleMobile}
            style={
              focusmobile
                ? {
                    backgroundColor: "black",
                    color: "#EE3E38",
                  }
                : {
                    backgroundColor: "#EE3E38",
                    color: "rgb(32, 32, 32)",
                  }
            }
          >
            MOBILES
          </Link>
          <Link
            href="/products/laptops"
            className={style.secondComp}
            onClick={handleLaptops}
            style={
              focuslaptops
                ? {
                    backgroundColor: "black",
                    color: "#EE3E38",
                  }
                : {
                    backgroundColor: "#EE3E38",
                    color: "rgb(32, 32, 32)",
                  }
            }
          >
            LAPTOPS
          </Link>
          <Link
            href="/products/tv"
            className={style.secondComp}
            onClick={handleTV}
            style={
              focusTV
                ? {
                    backgroundColor: "black",
                    color: "#EE3E38",
                  }
                : {
                    backgroundColor: "#EE3E38",
                    color: "rgb(32, 32, 32)",
                  }
            }
          >
            TV
          </Link>
          <Link
            href="/"
            className={style.secondComp}
            onClick={handleSmartWatches}
            style={
              focussmartwatches
                ? {
                    backgroundColor: "black",
                    color: "#EE3E38",
                  }
                : {
                    backgroundColor: "#EE3E38",
                    color: "rgb(32, 32, 32)",
                  }
            }
          >
            SMART WATCHES
          </Link>
          <Link
            href="/"
            className={style.secondComp}
            onClick={handleCameras}
            style={
              focuscameras
                ? {
                    backgroundColor: "black",
                    color: "#EE3E38",
                  }
                : {
                    backgroundColor: "#EE3E38",
                    color: "rgb(32, 32, 32)",
                  }
            }
          >
            CAMERAS
          </Link>

          <Link
            href="/"
            className={style.secondComp}
            onClick={handleSmartBands}
            style={
              focussmartbands
                ? {
                    backgroundColor: "black",
                    color: "#EE3E38",
                  }
                : {
                    backgroundColor: "#EE3E38",
                    color: "rgb(32, 32, 32)",
                  }
            }
          >
            SMART BANDS
          </Link>

          <Link
            href="/"
            className={style.secondComp}
            onClick={handleSpeakers}
            style={
              focusspeakers
                ? {
                    backgroundColor: "black",
                    color: "#EE3E38",
                  }
                : {
                    backgroundColor: "#EE3E38",
                    color: "rgb(32, 32, 32)",
                  }
            }
          >
            SMART SPEAKERS
          </Link>

          <Link
            href="/"
            className={style.secondComp}
            onClick={handleGames}
            style={
              focusgames
                ? {
                    backgroundColor: "black",
                    color: "#EE3E38",
                  }
                : {
                    backgroundColor: "#EE3E38",
                    color: "rgb(32, 32, 32)",
                  }
            }
          >
            GAMES
          </Link>

          <Link
            href="/"
            className={style.secondComp}
            onClick={handleAirCooler}
            style={
              focusaircooler
                ? {
                    backgroundColor: "black",
                    color: "#EE3E38",
                  }
                : {
                    backgroundColor: "#EE3E38",
                    color: "rgb(32, 32, 32)",
                  }
            }
          >
            AIR COOLER
          </Link>

          <Link
            href="/"
            className={style.secondComp}
            onClick={handleWashingMashine}
            style={
              focuswashingmashine
                ? {
                    backgroundColor: "black",
                    color: "#EE3E38",
                  }
                : {
                    backgroundColor: "#EE3E38",
                    color: "rgb(32, 32, 32)",
                  }
            }
          >
            WASHING MACHINE
          </Link>

          <Link
            href="/"
            className={style.secondComp}
            onClick={handleTablets}
            style={
              focustablets
                ? {
                    backgroundColor: "black",
                    color: "#EE3E38",
                  }
                : {
                    backgroundColor: "#EE3E38",
                    color: "rgb(32, 32, 32)",
                  }
            }
          >
            TABLETS
          </Link>

          <Link
            href="/"
            className={style.secondComp}
            onClick={handleHeadPhones}
            style={
              focusheadphones
                ? {
                    backgroundColor: "black",
                    color: "#EE3E38",
                  }
                : {
                    backgroundColor: "#EE3E38",
                    color: "rgb(32, 32, 32)",
                  }
            }
          >
            HEADPHONES
          </Link>
        </div>

        {/* DRAWER */}
        <div className={style.drawer}>
          <NavbarDrawer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
