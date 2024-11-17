import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CenterMode from "./Slider";
import Title from "../assets/Lineup-Title.svg";

function Lineup() {

  return (
    <>
      <div className="lineup-page-container" >
        <div className="lineup-title">
          <img src={Title} alt="" id="LINEUPPAGE"/>
        </div>
        <CenterMode></CenterMode>
      </div>
    </>
)}

export default Lineup;
