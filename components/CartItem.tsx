import React from "react";
import { Button, Divider, Icon, Image, Text } from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import style from "../styles/CartItem.module.css";
import { useDispatch } from "react-redux";
import { getCart, removeCart } from "@/redux/cart/cart.actions";
import useToastMsg from "@/customHook/UseToastMsg";

const CartItem = ({ items }: any) => {
  const [count, setCount] = React.useState(1);
  const [price, setPrice] = React.useState(items.price);
  const toastMsg = useToastMsg();
  const dispatch = useDispatch();

  const handleRemove = () => {
    removeCart(items.id, dispatch, toastMsg);
    getCart(dispatch);
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
        <div className={style.image}>
          <Image
            src={items.imgsrc || items.image}
            height={100}
            margin={"auto"}
            alt=""
          />
        </div>
        <div className={style.subitemText}>
          <h1 className={style.name}>{items.modal || items.name}</h1>
          <div>
            <Text>{items.related}</Text>
            <Text className={style.price}>Rs.{price}</Text>
            <div className={style.quantityDesc}>
              <Button
                className={style.quantityInnerButton}
                isDisabled={count == 1}
                onClick={() => dec()}
              >
                -
              </Button>
              <Button
                className={style.quantityInnerButton}
                isDisabled
                fontSize={20}
              >
                {count}
              </Button>
              <Button
                className={style.quantityInnerButton}
                isDisabled={count == 5}
                onClick={() => inc()}
              >
                +
              </Button>
            </div>
          </div>
        </div>
        <div className={style.quantity}>
          <div className={style.quantityInner}>
            <Button
              className={style.quantityInnerButton}
              isDisabled={count == 1}
              onClick={() => dec()}
            >
              -
            </Button>
            <Button
              className={style.quantityInnerButton}
              isDisabled
              fontSize={20}
            >
              {count}
            </Button>
            <Button
              className={style.quantityInnerButton}
              isDisabled={count == 5}
              onClick={() => inc()}
            >
              +
            </Button>
          </div>
        </div>
        <div className={style.remove}>
          <Button onClick={handleRemove}>
            <Icon as={RxCross2} />
          </Button>
        </div>
        <div className={style.lastPrice}>
          <h1>{price}</h1>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default CartItem;
