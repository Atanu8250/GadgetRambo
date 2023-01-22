import { async } from "@firebase/util";
import React from "react";
import style from "../../styles/Cart.module.css";
import CartItem from "@/components/CartItem";
import { Divider, Button, Input } from "@chakra-ui/react";
import Link from "next/link";
import RightSidebar from "@/components/RightSidebar";

const Index = () => {
  const [Item, setItem] = React.useState<Array<object>>([]);
  const [discount, setDiscount] = React.useState<number>(0);
  const [delivery, setDelivery] = React.useState<number>(0);
  const [subTotal, setSubTotal] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);


  React.useEffect(() => {
    fetch("http://localhost:3030/product")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItem(data);
      });
  }, []);

  console.log(Item);
  return (
    <div  className={style.main}>
      <div className={style.mainSkeleton}>
      <div className={style.headCart}>
        <h1 className={style.headCart1}>
          Image
        </h1>
        <h1
          className={style.headCart2}
        >
          Description
        </h1>
        <h1
          className={style.headCart3}
        >
          Quantity
        </h1>
        <h1
          className={style.headCart4}
        >
          Remove
        </h1>
        <h1
          className={style.headCart5}
        >
          Price
        </h1>
      </div>
      <Divider />
      <div className={style.subSkeleton}>
        {Item.map((items) => (
          <div key={items.id}>
            <CartItem items={items} />
          </div>
        ))}
      </div>
      <Divider />
      <div className={style.bottomCart}>
        <div className={style.box}>Discount: Rs{discount}</div>
        <div className={style.box}>Delivery: Rs{discount}</div>
        <div className={style.box}>Subtotal: Rs{subTotal}</div>
        <div className={style.box}>Total: Rs{total}</div>
      </div>
      <p style={{paddingLeft:"3rem"}}>If you have a promo code enter it here</p>
      <div className={style.bottomDiscount}>
        <div>
          <div style={{ display: "flex"}}>
            <input
              className={style.input}
              placeholder="Please enter promo code"
            />
            <button className={style.buttonpromo}>Apply Discount</button>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
          <Link href="/checkout"><button className={style.checkout}>Checkout</button></Link>
          <Link href="/"><button className={style.continue}>Continue Shopping</button></Link>
        </div>
      </div>
    </div>
    <div className={style.right}>
      <RightSidebar/>
    </div>
    </div>
  );
};

export default Index;
