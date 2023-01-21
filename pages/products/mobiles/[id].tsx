import { db } from "@/Backend/Firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import React from "react";

const Mobile = ({ mobile }: any) => {

  return (
    <div>
      <p>{mobile.modal}</p>
      <img src={mobile.imgsrc} alt="" />
    </div>
  );
};

export default Mobile;

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  try {
    const mobileRef = doc(db, "mobiles", params.id);
    const res = await getDoc(mobileRef);
    const mobile = res.data();
    return {
      props: {
        mobile,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
