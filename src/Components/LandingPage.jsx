import React from "react";
import Tucan from "../assets/Tucan.png";
import Lineup1 from "../assets/Lineup1.svg";
import Lineup2 from "../assets/Lineup2.svg";
import Ticket1 from "../assets/Ticket1.svg";
import Ticket2 from "../assets/Ticket2.svg";
import Letter from "../assets/Letter.svg";
function LandingPage() {


  return (
    <>
      <div className="LandingPage-container" >
        <div className="LandingPage1">
          <a href="#LINEUPPAGE" className="LandingBtn1" id="Btn1" draggable="false">
            <img src={Lineup1} alt="" /></a>
          <a href="#LINEUPPAGE" className="LandingBtn1" id="Btn1-pressed" draggable="false"><img src={Lineup2} alt="" /></a>
          
          <a href="#TICKETPAGE" className="LandingBtn2" id="Btn2" draggable="false"><img src={Ticket1} alt="" /></a>
          <a href="" className="LandingBtn2" id="Btn2-pressed" draggable="false"><img src={Ticket2} alt="" /></a>

        </div>
        <div id="Disk">
          <img src={Tucan} alt="" />
        </div>
        <div className="LandingPage2" id="ABOUTPAGE">
            <img src={Letter} alt=""  />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
