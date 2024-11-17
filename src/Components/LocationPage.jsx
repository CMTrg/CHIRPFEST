import React from "react";
import MapBackground from "./Map";
import LocationTitle from "../assets/Location/LocationTitle.svg";
import MapDes from "../assets/Location/MapDes.svg";
function LocationPage() {
  return (
    <>
      <div className="location-page-container" >
        <div className="location-title-container" id="LOCATIONPAGE">
          <img src={LocationTitle} alt="LOCATION" id="LOCATIONTITLE"/>
        </div>
        <div className="location-map-container">
          <MapBackground></MapBackground>
        </div>
        <div className="location-mapdes-container">
        <img src={MapDes} alt="" />
        </div>
      </div>
    </>
  );
}

export default LocationPage;
