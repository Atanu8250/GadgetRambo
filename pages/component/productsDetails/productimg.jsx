import { useState } from "react";
import img1 from "./img/img1.webp";
import img2 from "./img/img2.webp";
import img3 from "./img/img3.webp";
import img4 from "./img/img4.webp";
const Productsimg=()=>{
    const [image, setImage] = useState(1);
  let url = image;
  // console.log("The state number is : ", image);
  if (image == 1) {
    url = img1;
   } else if (image == 2) {
     url = img2;
   } else if (image == 3) {
     url = img3;
   } else if (image == 4) {
     url = img4;
  }
    return(
        <div className="details-div">
      <div className="sneakers-col sneakers-col1">
        <svg
          onClick={() => {
            let num;
            num = image - 1;
            if (num < 1) {
              num = 4;
            }
            setImage(num);
          }}
          className="mobile-prev"
          width="12"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
        <img
          className="big-sneaker"
          alt="img"
          onClick={() => {
            document
              .querySelector(".lightBox-div")
              .classList.add("lightBox-toggle");
            document.querySelector(".shadow").classList.add("shadow-toggle");
          }}
          src={"https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-db-gadgets360-800x600-1673019609.jpg?downsize=*:180"}
        />
        <svg
          onClick={() => {
            let num;
            num = image + 1;
            if (num > 4) {
              num = 1;
            }
            setImage(num);
          }}
          className="mobile-next"
          width="13"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
        {/* <LightBox imageTrack={image} /> */}
      </div>
      <div className="sneakers1">compare</div>
      <div className="sneakers1">Get Price Drop Alert</div>
      <div className="sneakers-col sneakers-col2">
        <div className={`small-sneaker-div ${image == 1 && "active-sneaker"}`}>
          <img
            alt="img"
            className={`small-sneaker`}
            onClick={() => {
              setImage(1);
            }}
            src={"https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-db-gadgets360-800x600-1673019609.jpg?downsize=*:180"}
          />
        </div>
        <div className={`small-sneaker-div ${image == 2 && "active-sneaker"}`}>
          <img
            alt="img"
            className={`small-sneaker`}
            onClick={() => {
              setImage(2);
            }}
            src={"https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-db-gadgets360-800x600-1673019609.jpg?downsize=*:180"}
          />
        </div>
        <div className={`small-sneaker-div ${image == 3 && "active-sneaker"}`}>
          <img
            alt="img"
            className={`small-sneaker`}
            onClick={() => {
              setImage(3);
            }}
            src={"https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-db-gadgets360-800x600-1673019609.jpg?downsize=*:180"}
          />
        </div>
        <div className={`small-sneaker-div ${image == 4 && "active-sneaker"}`}>
          <img
            alt="img"
            className={`small-sneaker`}
            onClick={() => {
              setImage(4);
            }}
            src={"https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-db-gadgets360-800x600-1673019609.jpg?downsize=*:180"}
          />
        </div>
      </div>
    </div>
    );
}
export default Productsimg;