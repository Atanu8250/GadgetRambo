import React from "react";
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
  Input,
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
import { Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";
import style from "../styles/NavDrawer.module.css";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Login from "./Login";
import Signup from "./Signup";
import useAuth from "@/customHook/UseAuth";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/redux/store";
import { logout } from "@/redux/auth/auth.action";
import { Dispatch } from "redux";
import logo from '../assets/GadgetRambo.png'
import useToastMsg from "@/customHook/UseToastMsg";


const NavbarDrawer = () => {

  // useAuth called for getting the current user of our website
  useAuth();

  const { user }: any = useSelector((store: State) => store.authManager)

  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch: Dispatch<any> = useDispatch()
  const toastMsg = useToastMsg()

  const handleLogout = () => {
    dispatch(logout(toastMsg))
  }

  return (
    <div>
      <Button colorScheme="red" onClick={onOpen}>
        <Icon as={GiHamburgerMenu} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"#EE3E38"} />
          <DrawerHeader className={style.drawer}>
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={150}
                height={20}
              />
            </Link>
          </DrawerHeader>

          <DrawerBody className={style.drawer}>
            <p style={{ paddingLeft: "1rem" }}>
              <Link href="/" className={style.notdropDown}>
                HOME
              </Link>
            </p>
            <br />
            <p style={{ paddingLeft: "1rem" }}>
              <Link href="/" className={style.notdropDown}>
                GUIDE
              </Link>
            </p>
            <br />
            <p style={{ paddingLeft: "1rem" }}>
              <Link href="/" className={style.notdropDown}>
                AUTO EXPO 2023
              </Link>
            </p>
            <br />
            <p style={{ paddingLeft: "1rem" }}>
              <Link href="/" className={style.notdropDown}>
                NEWS
              </Link>
            </p>
            <br />
            <p style={{ paddingLeft: "1rem" }}>
              <Link href="/" className={style.notdropDown}>
                REVIEWS
              </Link>
            </p>
            <br />
            <p style={{ paddingLeft: "1rem" }}>
              <Link href="/" className={style.notdropDown}>
                FEATURES
              </Link>
            </p>
            <br />
            <p style={{ paddingLeft: "1rem" }}>
              <Link href="/" className={style.notdropDown}>
                BRANDS
              </Link>
            </p>
            <br />
            <p style={{ paddingLeft: "1rem" }}>
              <Link href="/" className={style.notdropDown}>
                PODCASTS
              </Link>
            </p>
            <br />
            <p style={{ paddingLeft: "1rem" }}>
              <Link href="/" className={style.notdropDown}>
                PRODUCT FINDER
              </Link>
            </p>
            <br />
            <p>
              <Accordion defaultIndex={[0]} allowMultiple>
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
                    <p>
                      <Link href="/">LATEST</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">BUYING GUIDES</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">CRYPTOCURRENCY</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">EVENTS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">HOW TO</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">SPONSORED</Link>
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </p>
            <p>
              <Accordion defaultIndex={[0]} allowMultiple>
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
                    <p>
                      <Link href="/">MOBILE</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">LAPTOPS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">TV</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">SMART WATCH</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">CAMERAS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">SMART BANDS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">SMART SPEAKERS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">GAMES</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">AIR COOLER</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">WASHING MACHINE</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">TABLETS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">HEADPHONES</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">GAMING CONSOLE</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">SPEAKERS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">AC</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">REFRIGERATOR</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">AIR PURIFIER</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">INVERTER</Link>
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </p>
            <p>
              <Accordion defaultIndex={[0]} allowMultiple>
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
                    <p>
                      <Link href="/products/mobiles">MOBILE</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/products/laptops">LAPTOPS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/products/tv">TV</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">SMART WATCH</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">CAMERAS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">SMART BANDS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">SMART SPEAKERS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">GAMES</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">AIR COOLER</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">WASHING MACHINE</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">TABLETS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">HEADPHONES</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">GAMING CONSOLE</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">SPEAKERS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">AC</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">REFRIGERATOR</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">AIR PURIFIER</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">INVERTER</Link>
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </p>
            <p>
              <Accordion defaultIndex={[0]} allowMultiple>
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
                    <p>
                      <Link href="/">BROADBAND PLANS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">DTH RECHARGE</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">MOBILE RECHARGE</Link>
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </p>
            <p>
              <Accordion defaultIndex={[0]} allowMultiple>
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
                    <p>
                      <Link href="/">CRYPTOCURRENCY PRICES</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">GOLD RATE</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">AMAZON SALE</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">MOVIES</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">SERVICE CENTERS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">FINANCE</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">COMMUNITY</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">DIGITAL GOLD</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">DEALS</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">FLIPKART SALE</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">WEB SERIES</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">SMART HOME</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">CLUB360</Link>
                    </p>
                    <br />
                    <p>
                      <Link href="/">SILVER RATE</Link>
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </p>
          </DrawerBody>

          <DrawerFooter className={style.drawer}>

            {/*
            Login and Logout 
             */}

            {user.uid ? (
              <div style={{ display: "flex", gap: "1rem" }}>
                <div className={style.avatar}>
                  <Avatar size='sm' src={user.photoURL || "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"} />
                  <div>
                    <p>{user.displayName || "User"}</p>
                  </div>
                </div>
                <div className={style.login}>
                  <div
                    className={style.loginButton}
                    onClick={handleLogout}
                  >Logout</div>
                </div>
              </div>
            ) : (
              <div className={style.login}>
                <Login />
                <Signup />
              </div>
            )}
            <Link href="/cart">
              <Icon
                as={HiShoppingCart}
                boxSize={8}
                color={"#EE3E38"}
                paddingTop="0.2rem"
              />
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavbarDrawer;
