import React, { useEffect } from "react";
import styles from ".././styles/RightSidebar.module.css";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FaPodcast, FaRss, FaFacebookF } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/redux/store";
import { getNews } from "@/redux/news/news.actions";
import { getMobile } from "@/redux/products/products.actions";
import Link from "next/link";

const RightSidebar = () => {
  const { news } = useSelector((store: State) => store.newsManager);
  const { mobiles } = useSelector((store: State) => store.productsManager);
  const dispatch = useDispatch();
  useEffect(() => {
    getNews(dispatch, 15);
    getMobile(dispatch, 43);
  }, []);

  return (
    <div className={styles.container}>
      {/* newletter section  */}
      <div className={styles.newsLetterBox}>
        <input type="text" placeholder="Enter email for our newsletter" />
        <button>Subscribe</button>
      </div>
      {/* social handles section  */}
      <div className={styles.socialHandle}>
        <p>Follow Us</p>
        <div>
          <FaFacebookF
            className={styles.socialIcons}
            style={{ background: "#177aee" }}
          />
          <BsTwitter
            className={styles.socialIcons}
            style={{ background: "#26b8e9" }}
          />
          <BsYoutube
            className={styles.socialIcons}
            style={{ background: "#fd0000" }}
          />
          <FaPodcast
            className={styles.socialIcons}
            style={{ background: "#7d50a0" }}
          />
          <FaRss
            className={styles.socialIcons}
            style={{ background: "#e07645" }}
          />
        </div>
      </div>
      {/* TRENDING GADGETS AND TOPICS SECTION  */}
      <div className={styles.gadGetsAndTopics}>
        <p>TRENDING GADGETS AND TOPICS</p>
        <p></p>
        <div>
          <div>
            <p>Latest</p>
            <div>
              {mobiles.map((el: any, i: number) => {
                if (i <= 20) {
                  return (
                    <Link href={`products/mobiles/${el.id}`} key={el.id}>
                      <p>{el.modal}</p>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
          <div>
            <p>Popular</p>
            <div>
              {mobiles.map((el: any, i: number) => {
                if (i > 20) {
                  return (
                    <Link href={`products/mobiles/${el.id}`} key={el.id}>
                      <p>{el.modal}</p>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
