import React from "react";
import ShopTitle from "../assets/Shop/ShopTitle.svg";
import TitleDes from "../assets/Shop/TitleDes.svg";
import ShopImageList from "./ShopImageList";
function ShopPage() {
  return (
    <>
      <div className="shop-page-container" id="SHOPPAGE">
        <div className="shop-title-container">
            <img src={ShopTitle} alt="SHOP" id="ShopTitle"/>
            <img src={TitleDes} alt="" />
            <br />
            </div>
        <div className="shop-component-container">
            <div className="shop-component-title"></div>
            <div className="shop-component-img"></div>
            <ShopImageList></ShopImageList>
        </div>
      </div>
    </>
  );
}

export default ShopPage;
