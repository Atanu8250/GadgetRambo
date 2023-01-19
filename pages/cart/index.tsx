import { async } from "@firebase/util";
import React from "react";
import style from "../../styles/Cart.module.css";

const index = () => {
  const [Item,setItem]=React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3030/product")
    .then((res)=>{
      return (res.json());
    })
    .then((data)=>{
      setItem(data);
    })
  }, []);

  console.log(Item);
  return (
    <div className={style.mainSkeleton}>
      <div className={style.subSkeleton}>
        <div className={style.cart}>Cart</div>
      </div>
    </div>
  );
};

export default index;
