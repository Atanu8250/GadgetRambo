import React, { useEffect, useRef } from "react";
import styles from "../../../styles/laptops.module.css";
import { Show } from "@chakra-ui/react";
import ProductFilter from "@/components/ProductSection/ProductFilter";
import SmallScreenFilter from "@/components/ProductSection/SmallScreenFIlter";
import { useDispatch, useSelector } from "react-redux";
// import {  } from "@/redux/laptops/laptops.actions";
import ProductCard from "@/components/ProductSection/ProductCard";

const Laptops = () => {
  const { mobiles } = useSelector((store: any) => store.laptopsManager);
  const dispatch = useDispatch();
  useEffect(() => {
    if (mobiles.length === 0) {
      //   getMobile(dispatch);
    }
  }, []);

  return (
    <div className={styles.laptops_container}>
      <div className={styles.filter_container_left}>
        <Show above="md">
          <ProductFilter />
        </Show>
        <SmallScreenFilter />
      </div>
      <div className={styles.alllaptops_middle}>
        {mobiles.map((mobile: any) => (
          <ProductCard key={mobile.id} {...mobile} />
        ))}
      </div>
      <div className={styles.suggestion_container}>last div</div>
    </div>
  );
};

export default Laptops;
