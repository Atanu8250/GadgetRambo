import { State } from "@/redux/store";
import { Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import styles from "@/styles/Home.module.css";

import { useDispatch, useSelector } from "react-redux";
import { getNews } from "@/redux/news/news.actions";
import NewsCard from "./newsCard";

const LeftSidebar = () => {
  const { news } = useSelector((store: State) => store.newsManager);
  const dispatch = useDispatch();
  useEffect(() => {
    getNews(dispatch, 15);
  }, []);
  return (
    <div className={styles.left_sideBar}>
      <Text color={"var(--color-primary)"} fontSize={"18px"} fontWeight={"400"}>
        TRENDING
      </Text>
      {news.map((el: any, index: number) => {
        if (index >= 10) {
          return;
        }
        return (
          <NewsCard
            key={el.id}
            title={el.title}
            titleSize={"11px"}
            banner={el.banner}
            imgHeight={"100px"}
            titleMaxHeight={"3.9rem"}
          />
        );
      })}
    </div>
  );
};

export default LeftSidebar;
