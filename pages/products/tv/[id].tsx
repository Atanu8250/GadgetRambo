import { db } from "@/Backend/Firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import React from "react";

const Tv = ({ tv }: any) => {
  return (
    <div>
      <p>{tv.modal}</p>
      <img src={tv.imgsrc} alt={""} />
    </div>
  );
};

export default Tv;

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  try {
    const tvRef = doc(db, "tv", params.id);
    const res = await getDoc(tvRef);
    const tv = res.data();
    return {
      props: {
        tv,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
