import React, { useState } from "react";
import style from "../../styles/Cart.module.css";
import OrderItem from "@/components/OrderItem";
import { Box, Divider } from "@chakra-ui/react";
import Link from "next/link";
import RightSidebar from "@/components/RightSidebar";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/redux/store";
import Router from "next/router";
import useToastMsg from "@/customHook/UseToastMsg";
import { cartItemsProps } from "@/constants/constants";
import { getOrderAPI, getTotalSaleAPI } from "@/redux/orders/orders.api";

const Index = () => {
  const [orders, setOrders] = useState<any>([]);
  const [sale, setSale] = useState<any>(0);
  const getOrder = async () => {
    const data = await getOrderAPI();
    setOrders(data);
    const total = await getTotalSaleAPI();
    setSale(total);
  };
  React.useEffect(() => {
    getOrder();
  }, []);
  const { cart } = useSelector((store: State) => store.cartManager);

  return (
    <div
      style={{
        display: "flex",
        padding: "1rem",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <div className={style.mainSkeleton}>
        <div className={style.headCart}>
          <h1 className={style.headCart1}>Image</h1>
          <h1 className={style.headCart2}>Description</h1>
          <h1 className={style.headCart3}>Status</h1>
          <h1 className={style.headCart5}>Price</h1>
        </div>
        <Divider />
        <div className={style.subSkeleton}>
          {orders?.map((items: cartItemsProps) => (
            <div key={items.id}>
              <OrderItem items={items} />
            </div>
          ))}
        </div>
        <Divider />
        <div className={style.bottomCart}></div>

        <div className={style.bottomDiscount}>
          <div className={style.Applydiscount}>
            <input
              className={style.input}
              placeholder="Leave delivery feedback"
            />
            <button className={style.buttonpromo}>Feedback</button>
          </div>
          <div
            className={style.lowerButton}
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span>
              <Box className={style.checkout}>Total:- {sale}</Box>
            </span>
            <Link href="/">
              <button className={style.continue}>Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.right}>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Index;
