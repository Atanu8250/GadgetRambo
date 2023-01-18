import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Footer.module.css"
import { Divider } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGooglePlay, FaApple } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className={style.main}>
            <div className={style.secMain}>
                <div className={style.logo}>
                    <Image
                        src="https://cdn.gadgets360.com/gadgets360_logo.png"
                        alt="logo"
                        width={180}
                        height={60}
                    />
                </div>
                <div className={style.texts}>
                    <div className={style.footerText}>
                        <Link href="/dummy"><p>About Us</p></Link>
                        <Link href="/dummy"><p>Sitemaps</p></Link>
                        <Link href="/dummy"><p>Feedback</p></Link>
                        <Link href="/dummy"><p>Archives</p></Link>
                        <Link href="/dummy"><p>Contact Us</p></Link>
                    </div>
                    <div className={style.footerText}>
                        <Link href="/dummy"><p>Advertise</p></Link>
                        <Link href="/dummy"><p>Career</p></Link>
                        <Link href="/dummy"><p>Privacy Policy</p></Link>
                        <Link href="/dummy"><p>Ethics</p></Link>
                        <Link href="/dummy"><p>Terms & Conditions</p></Link>
                    </div>
                </div>
                {/* <Divider orientation='vertical' colorScheme="whiteAlpha" /> */}
                <div className={style.footerText}>
                    <div className={style.centerText}>
                        <h3>Gadgets 360 is available in</h3>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <Link href="/"><p>English</p></Link>
                        <Divider orientation='vertical' colorScheme="whiteAlpha" />
                        <Link href="/dummy"><p>Hindi</p></Link>
                    </div>
                    <div className={style.centerText}>
                        <h3>Follow Us</h3>
                    </div>
                    <div className={style.follow}>
                        <Link href="/dummy"><Icon as={FaFacebook} boxSize={6} /></Link>
                        <Link href="/dummy"><Icon as={FaTwitter} boxSize={6} /></Link>
                        <Link href="/dummy"><Icon as={FaInstagram} boxSize={6} /></Link>
                        <Link href="/dummy"><Icon as={FaYoutube} boxSize={6} /></Link>
                    </div>
                </div>
                <div className={style.download}>
                    <div className={style.footerText}>
                        <div className={style.centerText}>
                            <h3>Download Our App</h3>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <Link href="/dummy"><p><Icon as={FaGooglePlay} boxSize={6} /></p></Link>
                            <Link href="/dummy"><p><Icon as={FaApple} boxSize={6} /></p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer