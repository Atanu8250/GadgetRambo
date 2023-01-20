import React from "react";
import styles from ".././styles/RightSidebar.module.css";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaPodcast, FaRss } from "react-icons/fa";
import { SiGooglenews } from "react-icons/si";

const RightSidebar = () => {
  return (
    <div className={styles.container}>
      {/* newletter section  */}
      <div className={styles.newsLetterBox}>
        <input type="text" placeholder="enter email for our newsletter" />
        <button>Subscribe</button>
      </div>
      {/* social handles section  */}
      <div className={styles.socialHandle}>
        <p>Follow Us</p>
        <div>
          <BsFacebook className={styles.socialIcons} />
          <BsTwitter className={styles.socialIcons} />
          <BsYoutube className={styles.socialIcons} />
          <FaPodcast className={styles.socialIcons} />
          <SiGooglenews className={styles.socialIcons} />
          <FaRss className={styles.socialIcons} />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
