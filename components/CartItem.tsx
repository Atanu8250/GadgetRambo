import React from "react";
import { Box, Button, Divider, Icon } from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import style from "../styles/CartItem.module.css";
import Image from "next/image";

type CartProps = {
  items: object;
};

const CartItem = (props: CartProps) => {
  const [count, setCount] = React.useState(1);
  const [price, setPrice] = React.useState(props.items.price);

  const inc = () => {
    // setPrice(price+props.items.price);
    setCount(count + 1);
  };

  const dec = () => {
    // setPrice(price-props.items.price);
    setCount(count - 1);
  };
  return (
    <div className={style.item}>
      <div
        key={props.items.id}
        className={style.subitem}
      >
        <div style={{ width: "10rem", textAlign: "center",paddingLeft:"1.5rem"}}>
          <Image src={props.items.phone} alt="" width={100} height={100}/>
        </div>
        <div className={style.subitemText}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
            }}
          >
            {props.items.name}
          </h1>
          <p>{props.items.des}</p>
        </div>
        <div style={{ display: "flex",paddingTop:"0.5rem"}}>
          <div style={{ width: "10rem", textAlign: "center"}}>
            <Button onClick={() => inc()}>+</Button>
            <Button isDisabled>{count}</Button>
            <Button onClick={() => dec()}>-</Button>
          </div>
        </div>
        <div style={{ width: "10rem", textAlign: "center",paddingTop:"0.5rem"}}>
          <Button>
            <Icon as={RxCross2} />
          </Button>
        </div>
        <div style={{ width: "10rem", textAlign: "center",paddingTop:"0.5rem"}}>
          <h1>{price}</h1>
        </div>
      </div>
      <Divider/>
    </div>
  );
};

export default CartItem;
