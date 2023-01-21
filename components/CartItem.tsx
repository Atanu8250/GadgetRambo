import React from "react";
import { Box, Button, Divider, Icon,Image, Text } from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import style from "../styles/CartItem.module.css";

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
        <div style={{ width: "10%",margin:"auto", textAlign: "center"}}>
          <Image src={props.items.phone} mx="auto" alt=""/>
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
          <Text noOfLines={2}>{props.items.des}</Text>
        </div>
        <div className={style.quantity}>
          <div className={style.quantityInner}>
            <Button onClick={() => dec()}>-</Button>
            <Button isDisabled fontSize={20}>{count}</Button>
            <Button onClick={() => inc()}>+</Button>
          </div>
        </div>
        <div className={style.remove}>
          <Button>
            <Icon as={RxCross2} />
          </Button>
        </div>
        <div style={{ width: "10%",margin:"auto", textAlign: "center",paddingTop:"0.5rem"}}>
          <h1>{price}</h1>
        </div>
      </div>
      <Divider/>
    </div>
  );
};

export default CartItem;
