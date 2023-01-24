import React from "react";
import Link from "next/link";
import Image from "next/image";
import { State } from "@/redux/store";
import { Icon } from '@chakra-ui/react'
import { useSelector } from "react-redux";
import { Divider } from "@chakra-ui/react";
import style from "../styles/Footer.module.css"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGooglePlay, FaApple } from 'react-icons/fa'
import logo from '../assets/GadgetRambo.png'

const Footer = () => {

    const { showAdminPanel }: { showAdminPanel: boolean } = useSelector((store: State) => store.authManager)

    if(showAdminPanel){
        return <></>;
    }

    return (
        <div className={style.main}>
            <div className={style.secMain}>
                <div className={style.logo}>
                    <Image
                        src={logo}
                        alt="logo"
                        width={150}
                        height={60}
                    />
                </div>
                <div className={style.texts}>
                    <div className={style.footerText}>
                        <Link href="/dummy" className={style.footerText1}><p>About Us</p></Link>
                        <Link href="/dummy" className={style.footerText2}><p>Sitemaps</p></Link>
                        <Link href="/dummy" className={style.footerText3}><p>Feedback</p></Link>
                        <Link href="/dummy" className={style.footerText4}><p>Archives</p></Link>
                        <Link href="/dummy" className={style.footerText5}><p>Contact Us</p></Link>
                    </div>
                    <div className={style.footerText}>
                        <Link href="/dummy" className={style.footerText6}><p>Advertise</p></Link>
                        <Link href="/dummy" className={style.footerText7}><p>Career</p></Link>
                        <Link href="/dummy" className={style.footerText10}><p>Privacy Policy</p></Link>
                        <Link href="/dummy" className={style.footerText11}><p>Ethics</p></Link>
                        <Link href="/dummy" className={style.footerText12}><p>Terms & Conditions</p></Link>
                    </div>
                </div>
                {/* <Divider orientation='vertical' colorScheme="whiteAlpha" /> */}
                <div className={style.footerText}>
                    <div className={style.centerText}>
                        <h3>Gadgets 360 is available in</h3>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center",gap:"0.5rem" }}>
                        <Link href="/"><p className={style.footerText17} >English</p></Link>
                        <Divider orientation='vertical' colorScheme="whiteAlpha" />
                        <Link href="/dummy"><p className={style.footerText18} >Hindi</p></Link>
                    </div>
                    <div className={style.centerText}>
                        <h3>Follow Us</h3>
                    </div>
                    <div className={style.follow}>
                        <Link href="/dummy"><Icon className={style.footerText13} as={FaFacebook} boxSize={6} /></Link>
                        <Link href="/dummy"><Icon className={style.footerText14} as={FaTwitter} boxSize={6} /></Link>
                        <Link href="/dummy"><Icon className={style.footerText15} as={FaInstagram} boxSize={6} /></Link>
                        <Link href="/dummy"><Icon className={style.footerText16} as={FaYoutube} boxSize={6} /></Link>
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