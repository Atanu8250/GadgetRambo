import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Navbar.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { Icon, Button } from "@chakra-ui/react";
import Logo from "../assets/Logo.png";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { Divider } from "@chakra-ui/react";

const Navbar = () => {
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
  const [focusHome, setFocusHome] = React.useState<boolean>(false);
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

  return (
    <div>
      <div className={style.marquee}>
        <Marquee>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cumque, consequatur ut unde nulla minus ratione quo! Nihil, omnis! Iusto exercitationem repellat voluptatem fugiat commodi dolorem, praesentium nihil dolores eveniet!
        </Marquee>
      </div>
      <div className={style.logo}>
        <Image
          src="https://i.ibb.co/kmPvGZt/Capture-removebg-preview.png"
          alt="logo"
          width={150}
          height={20}
        />
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
          href="/dummy"
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
          href="/dummy"
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
          href="/dummy"
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
          href="/dummy"
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
          href="/dummy"
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
              paddingRight={0}
              paddingLeft={0}
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
            <MenuList>
              <MenuItem>
                <Link href="/dummy">LATEST</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/dummy">BUYING GUIDES</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/dummy">CRYPTOCURRENCY</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/dummy">EVENTS</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/dummy">HOW TO</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/dummy">SPONSORED</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <Link
          href="/dummy"
          className={style.notdropDown}
          onClick={handlePodcasts}
          style={
            focuspodcasts
              ? { borderBottom: "6px solid #EE3E38" }
              : { borderBottom: "none" }
          }
        >
          PODCASTS
        </Link>
        <Link
          href="/dummy"
          className={style.notdropDown}
          onClick={handleProductFinder}
          style={
            focusproductFinder
              ? { borderBottom: "6px solid #EE3E38" }
              : { borderBottom: "none" }
          }
        >
          PRODUCT FINDER
        </Link>
        <div>
          <Menu>
            <MenuButton
              paddingRight={0}
              paddingLeft={0}
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
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <Link
          href="/dummy"
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
              paddingRight={0}
              paddingLeft={0}
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
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <Link
          href="/dummy"
          className={style.notdropDown}
          onClick={handleMore}
          style={
            focusmore
              ? { borderBottom: "6px solid #EE3E38" }
              : { borderBottom: "none" }
          }
        >
          MORE
        </Link>
      </div>

      {/* SECOND NAVBAR */}
      <div className={style.secondNav}>
        <Link
          href="/dummy"
          className={style.secondComp}
          onClick={handleMobile}
          style={
            focusmobile
              ? {
                backgroundColor: "black",
                borderRadius: "10px",
                color: "#EE3E38",
              }
              : {
                backgroundColor: "#EE3E38",
                borderRadius: "0",
                color: "rgb(32, 32, 32)",
              }
          }
        >
          MOBILES
        </Link>
        <Link
          href="/dummy"
          className={style.secondComp}
          onClick={handleLaptops}
          style={
            focuslaptops
              ? {
                backgroundColor: "black",
                borderRadius: "10px",
                color: "#EE3E38",
              }
              : {
                backgroundColor: "#EE3E38",
                borderRadius: "0",
                color: "rgb(32, 32, 32)",
              }
          }
        >
          LAPTOPS
        </Link>
        <Link
          href="/dummy"
          className={style.secondComp}
          onClick={handleTV}
          style={
            focusTV
              ? {
                backgroundColor: "black",
                borderRadius: "10px",
                color: "#EE3E38",
              }
              : {
                backgroundColor: "#EE3E38",
                borderRadius: "0",
                color: "rgb(32, 32, 32)",
              }
          }
        >
          TV
        </Link>
        <Link
          href="/dummy"
          className={style.secondComp}
          onClick={handleSmartWatches}
          style={
            focussmartwatches
              ? {
                backgroundColor: "black",
                borderRadius: "10px",
                color: "#EE3E38",
              }
              : {
                backgroundColor: "#EE3E38",
                borderRadius: "0",
                color: "rgb(32, 32, 32)",
              }
          }
        >
          SMART WATCHES
        </Link>
        <Link
          href="/dummy"
          className={style.secondComp}
          onClick={handleCameras}
          style={
            focuscameras
              ? {
                backgroundColor: "black",
                borderRadius: "10px",
                color: "#EE3E38",
              }
              : {
                backgroundColor: "#EE3E38",
                borderRadius: "0",
                color: "rgb(32, 32, 32)",
              }
          }
        >
          CAMERAS
        </Link>

        <Link
          href="/dummy"
          className={style.secondComp}
          onClick={handleSmartBands}
          style={
            focussmartbands
              ? {
                backgroundColor: "black",
                borderRadius: "10px",
                color: "#EE3E38",
              }
              : {
                backgroundColor: "#EE3E38",
                borderRadius: "0",
                color: "rgb(32, 32, 32)",
              }
          }
        >
          SMART BANDS
        </Link>

        <Link
          href="/dummy"
          className={style.secondComp}
          onClick={handleSpeakers}
          style={
            focusspeakers
              ? {
                backgroundColor: "black",
                borderRadius: "10px",
                color: "#EE3E38",
              }
              : {
                backgroundColor: "#EE3E38",
                borderRadius: "0",
                color: "rgb(32, 32, 32)",
              }
          }
        >
          SMART SPEAKERS
        </Link>

        <Link
          href="/dummy"
          className={style.secondComp}
          onClick={handleGames}
          style={
            focusgames
              ? {
                backgroundColor: "black",
                borderRadius: "10px",
                color: "#EE3E38",
              }
              : {
                backgroundColor: "#EE3E38",
                borderRadius: "0",
                color: "rgb(32, 32, 32)",
              }
          }
        >
          GAMES
        </Link>

        <Link
          href="/dummy"
          className={style.secondComp}
          onClick={handleAirCooler}
          style={
            focusaircooler
              ? {
                backgroundColor: "black",
                borderRadius: "10px",
                color: "#EE3E38",
              }
              : {
                backgroundColor: "#EE3E38",
                borderRadius: "0",
                color: "rgb(32, 32, 32)",
              }
          }
        >
          AIR COOLER
        </Link>

        <Link
          href="/dummy"
          className={style.secondComp}
          onClick={handleWashingMashine}
          style={
            focuswashingmashine
              ? {
                backgroundColor: "black",
                borderRadius: "10px",
                color: "#EE3E38",
              }
              : {
                backgroundColor: "#EE3E38",
                borderRadius: "0",
                color: "rgb(32, 32, 32)",
              }
          }
        >
          WASHING MACHINE
        </Link>

        <Link
          href="/dummy"
          className={style.secondComp}
          onClick={handleTablets}
          style={
            focustablets
              ? {
                backgroundColor: "black",
                borderRadius: "10px",
                color: "#EE3E38",
              }
              : {
                backgroundColor: "#EE3E38",
                borderRadius: "0",
                color: "rgb(32, 32, 32)",
              }
          }
        >
          TABLETS
        </Link>

        <Link
          href="/dummy"
          className={style.secondComp}
          onClick={handleHeadPhones}
          style={
            focusheadphones
              ? {
                backgroundColor: "black",
                borderRadius: "10px",
                color: "#EE3E38",
              }
              : {
                backgroundColor: "#EE3E38",
                borderRadius: "0",
                color: "rgb(32, 32, 32)",
              }
          }
        >
          HEADPHONES
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
