import React from "react";
import { Box, Button, Divider, Icon, Image, Text } from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import style from "../styles/CartItem.module.css";
import { useDispatch } from "react-redux";
import { getCart, removeCart } from "@/redux/cart/cart.actions";

// type CartProps = {
//   items: object;
// };

const CartItem = ({ items }: any) => {
  const [count, setCount] = React.useState(1);
  const [price, setPrice] = React.useState(items.price);
  const dispatch = useDispatch();

  const handleRemove = () => {
    removeCart(items.id, dispatch);
    getCart(dispatch)
  };

  const inc = () => {
    setPrice(price + items.price);
    setCount(count + 1);
  };

  const dec = () => {
    setPrice(price - items.price);
    setCount(count - 1);
  };
  return (
    <div className={style.item}>
      <div key={items.id} className={style.subitem}>
        <div style={{ width: "10%", margin: "auto", textAlign: "center" }}>
          <Image src={items.imgsrc} height={120} margin={"auto"} alt="" />
        </div>
        <div className={style.subitemText}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
            }}
          >
            {items.modal}
          </h1>
          <Text>{items.related}</Text>
        </div>
        <div className={style.quantity}>
          <div className={style.quantityInner}>
            <Button isDisabled={count == 1} onClick={() => dec()}>
              -
            </Button>
            <Button isDisabled fontSize={20}>
              {count}
            </Button>
            <Button isDisabled={count == 5} onClick={() => inc()}>
              +
            </Button>
          </div>
        </div>
        <div className={style.remove}>
          <Button onClick={handleRemove}>
            <Icon as={RxCross2} />
          </Button>
        </div>
        <div
          style={{
            width: "10%",
            margin: "auto",
            textAlign: "center",
            paddingTop: "0.5rem",
          }}
        >
          <h1>{price}</h1>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default CartItem;
