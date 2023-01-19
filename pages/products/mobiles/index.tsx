import React, { useEffect, useRef } from "react";
import styles from "../../../styles/products.module.css";
import { Show } from "@chakra-ui/react";
import ProductFilter from "@/components/MobileSection/ProductFilter";
import SmallScreenFilter from "@/components/MobileSection/SmallScreenFIlter";
import { useDispatch, useSelector } from "react-redux";
import { getMobile } from "@/redux/products/products.actions";
import ProductCard from "@/components/MobileSection/ProductCard";

const Products = () => {
  const { mobiles } = useSelector((store: any) => store.productsManager);
  const dispatch = useDispatch();
  useEffect(() => {
    if (mobiles.length === 0) {
      getMobile(dispatch);
    }
  }, []);
  

  return (
    <div className={styles.products_container}>
      <div className={styles.filter_container_left}>
        <Show above="md">
          <ProductFilter />
        </Show>
        <SmallScreenFilter />
      </div>
      <div className={styles.allProducts_middle}>
        {mobiles.map((mobile: any) => (
          <ProductCard key={mobile.id} {...mobile} />
        ))}
      </div>
      <div className={styles.suggestion_container}>last div</div>
    </div>
  );
};

export default Products;
