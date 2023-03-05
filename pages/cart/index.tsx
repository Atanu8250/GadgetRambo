import React from "react";
import style from "../../styles/Cart.module.css";
import CartItem from "@/components/CartItem";
import { Divider } from "@chakra-ui/react";
import Link from "next/link";
import RightSidebar from "@/components/RightSidebar";
import { getCart } from "@/redux/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/redux/store";
import Router from "next/router";
import useToastMsg from "@/customHook/UseToastMsg";
import { cartItemsProps } from "@/constants/constants";

const Index = () => {
  const toastMsg = useToastMsg();
  const dispatch = useDispatch();
  React.useEffect(() => {
    getCart(dispatch);
  }, []);
  const { cart } = useSelector((store: State) => store.cartManager);
  const goTocheckout = () => {
    if (cart.length) {
      Router.replace("/checkout");
    } else {
      toastMsg({
        title: "Cart is empty! Please add some items.",
        status: "warning",
      });
    }
  };

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
          <h1 className={style.headCart3}>Quantity</h1>
          <h1 className={style.headCart4}>Remove</h1>
          <h1 className={style.headCart5}>Price</h1>
        </div>
        <Divider />
        <div className={style.subSkeleton}>
          {cart?.map((items: cartItemsProps) => (
            <div key={items.id}>
              <CartItem items={items} />
            </div>
          ))}
        </div>
        <Divider />
        <div className={style.bottomCart}></div>

        <div className={style.bottomDiscount}>
          <div className={style.Applydiscount}>
            <input
              className={style.input}
              placeholder="Please enter promo code"
            />
            <button className={style.buttonpromo}>Apply Discount</button>
          </div>
          <div
            className={style.lowerButton}
            style={{ display: "flex", gap: "0.5rem" }}
          >
            <span onClick={goTocheckout}>
              <button className={style.checkout}>Checkout</button>
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
