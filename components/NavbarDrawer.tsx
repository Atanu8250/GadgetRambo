import React, { useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiShoppingCart } from "react-icons/hi";
import { Avatar } from "@chakra-ui/react";
import style from "../styles/NavDrawer.module.css";
import Link from "next/link";
import Image from "next/image";
import Login from "./Login";
import Signup from "./Signup";
import useAuth from "@/customHook/UseAuth";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/redux/store";
import { logout, setShowAdminPanel } from "@/redux/auth/auth.action";
import { Dispatch } from "redux";
import logo from "../assets/GadgetRambo.png";
import useToastMsg from "@/customHook/UseToastMsg";
import { auth } from "@/Backend/Firebase/firebase";
import { intrfcUser } from "@/constants/constants";
import { getUsers } from "@/redux/users/users.action";
import Router from "next/router";

const NavbarDrawer = () => {
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toastMsg = useToastMsg();
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

  const handleLogout = () => {
    dispatch(logout(toastMsg));
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
      <Button colorScheme="red" onClick={onOpen}>
        <Icon as={GiHamburgerMenu} />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"#EE3E38"} />
          <DrawerHeader className={style.drawer}>
            <Link href="/">
              <Image src={logo} alt="logo" width={150} height={20} />
            </Link>
          </DrawerHeader>

          <DrawerBody className={style.drawer}>
            <p className={style.topDetails} onClick={onClose}>
              <Link href="/" className={style.notdropDown}>
                HOME
              </Link>
            </p>
            <br />
            <p className={style.topDetails} onClick={onClose}>
              <Link href="/" className={style.notdropDown}>
                GUIDE
              </Link>
            </p>
            <br />
            <p className={style.topDetails} onClick={onClose}>
              <Link href="/" className={style.notdropDown}>
                AUTO EXPO 2023
              </Link>
            </p>
            <br />
            <p className={style.topDetails} onClick={onClose}>
              <Link href="/" className={style.notdropDown}>
                NEWS
              </Link>
            </p>
            <br />
            <p className={style.topDetails} onClick={onClose}>
              <Link href="/" className={style.notdropDown}>
                REVIEWS
              </Link>
            </p>
            <br />
            <p className={style.topDetails} onClick={onClose}>
              <Link href="/" className={style.notdropDown}>
                FEATURES
              </Link>
            </p>
            <br />
            <p className={style.topDetails} onClick={onClose}>
              <Link href="/" className={style.notdropDown}>
                BRANDS
              </Link>
            </p>
            <br />
            <p className={style.topDetails} onClick={onClose}>
              <Link href="/" className={style.notdropDown}>
                PODCASTS
              </Link>
            </p>
            <br />
            <p className={style.topDetails} onClick={onClose}>
              <Link href="/" className={style.notdropDown}>
                PRODUCT FINDER
              </Link>
            </p>
            <br />
            <div>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={style.drawer}
                      >
                        VIDEOS
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <p onClick={onClose}>
                      <Link href="/">LATEST</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">BUYING GUIDES</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">CRYPTOCURRENCY</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">EVENTS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">HOW TO</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">SPONSORED</Link>
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={style.drawer}
                      >
                        PRODUCT FINDER
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <p onClick={onClose}>
                      <Link href="/products/mobiles">MOBILE</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/products/laptops">LAPTOPS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/products/tv">TV</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">SMART WATCH</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">CAMERAS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">SMART BANDS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">SMART SPEAKERS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">GAMES</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">AIR COOLER</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">WASHING MACHINE</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">TABLETS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">HEADPHONES</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">GAMING CONSOLE</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">SPEAKERS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">AC</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">REFRIGERATOR</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">AIR PURIFIER</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">INVERTER</Link>
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={style.drawer}
                      >
                        COMPARE
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <p onClick={onClose}>
                      <Link href="/products/mobiles">MOBILE</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/products/laptops">LAPTOPS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/products/tv">TV</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">SMART WATCH</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">CAMERAS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">SMART BANDS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">SMART SPEAKERS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">GAMES</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">AIR COOLER</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">WASHING MACHINE</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">TABLETS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">HEADPHONES</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">GAMING CONSOLE</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">SPEAKERS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">AC</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">REFRIGERATOR</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">AIR PURIFIER</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">INVERTER</Link>
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={style.drawer}
                      >
                        RECHARGE
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <p onClick={onClose}>
                      <Link href="/">BROADBAND PLANS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">DTH RECHARGE</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">MOBILE RECHARGE</Link>
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={style.drawer}
                      >
                        MORE
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <p onClick={onClose}>
                      <Link href="/">CRYPTOCURRENCY PRICES</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">GOLD RATE</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">AMAZON SALE</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">MOVIES</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">SERVICE CENTERS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">FINANCE</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">COMMUNITY</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">DIGITAL GOLD</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">DEALS</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">FLIPKART SALE</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">WEB SERIES</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">SMART HOME</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">CLUB360</Link>
                    </p>
                    <br />
                    <p onClick={onClose}>
                      <Link href="/">SILVER RATE</Link>
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <br />
            {user.uid ? (
              <div className={style.user}>
                <Button className={style.userDetails} onClick={onClose}>
                  <Link href="/" className={style.notdropDown}>
                    User Profile
                  </Link>
                </Button>
                <Button className={style.userDetails} onClick={onClose}>
                  <Link href="/order" className={style.notdropDown}>
                    My Order
                  </Link>
                </Button>

                {
                  <Button
                    className={style.userDetails}
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
                    <Link href="/" className={style.notdropDown}>
                      Admin
                    </Link>
                  </Button>
                }
              </div>
            ) : (
              <div></div>
            )}
            <br />
          </DrawerBody>

          <DrawerFooter className={style.drawer}>
            {/*
            Login and Logout 
             */}

            {user.uid ? (
              <div style={{ display: "flex", gap: "1rem" }}>
                <div className={style.avatar}>
                  <Avatar
                    size="sm"
                    src={
                      user.photoURL ||
                      "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
                    }
                  />
                  <div>
                    <p>{user.displayName || "User"}</p>
                  </div>
                </div>
                <div className={style.login}>
                  <div className={style.loginButton} onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              </div>
            ) : (
              <div className={style.login}>
                <Login />
                <Signup />
              </div>
            )}
            <button onClick={handleCartVerify}>
              <Icon
                as={HiShoppingCart}
                boxSize={8}
                color={"#EE3E38"}
                paddingTop="0.2rem"
              />
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavbarDrawer;
