import React from "react";
//import Style from "../productsDetails/productsDetail.module.css";
import Productsimg from "./productimg"
const Products=()=>{
    return(
    <div className="hero-sec content-div">
      <div className="hero-row">
        <div className="hero-col hero-col1">
          <Productsimg />
        </div>
        <div className="hero-col hero-col2">
          <div className="col2-wrapper">
            <h4 className="hero-subHeading">Xiaomi</h4>
            <h1 className="main-heading">Redmi Note 12 5G</h1>
            <p className="hero-para">
            Redmi Note 12 5G, Redmi Note 12 Pro 5G, and Redmi Note 12 Pro+ 5G will go on sale in India today. The Redmi Note 12 5G is powered by a Snapdragon 4 Gen 1 SoC, while the Redmi Note 12 Pro+ 5G and Redmi Note 12 Pro 5G has a MediaTek Dimensity 1080 SoC under the hood.
            </p>
            <span className="dollar">17,999</span>
            <span className="discount hero-subHeading">0%</span>
            <del className="discount2 hero-para">17,999</del>
            <div className="cart2-sec">
              <div className="cart2-col cart2-col1">
                <button
                  className="cart2-btn"
                >
                  <svg
                    className="cart2-main"
                    width="60"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                    />
                  </svg>
                  <span ><a href="#" className="cart2-text">By Now</a></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    );
}
export default Products;