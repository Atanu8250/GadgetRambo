import { db } from "@/Backend/Firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import React from "react";

const Laptop = ({ laptop }: any) => {
  return (
    <div>
      <div>
        <p>{laptop.model}</p>
        <img src={laptop.image} alt="" />
      </div>
    </div>
  );
};

export default Laptop;

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  try {
    const laptopRef = doc(db, "gadget_rambo/products/laptops", params.id);
    const res = await getDoc(laptopRef);
    const laptop = res.data();
    return {
      props: {
        laptop,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
