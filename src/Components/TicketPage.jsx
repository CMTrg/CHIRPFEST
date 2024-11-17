import React from "react";
//SVG IMPORT
import AddBtn from "../assets/Ticket/AddBtn.svg";
import AddBtnPressed from "../assets/Ticket/AddBtn-pressed.svg";
import AddBtnPressedVIP from "../assets/Ticket/AddBtn-pressed-VIP.svg";
import NormTicket from "../assets/Ticket/NormTicket.svg";
import NormTicketTitle from "../assets/Ticket/NormTicket-title.svg";
import NormTicketInfo from "../assets/Ticket/NormTicket-info.svg";
import VIPTicket from "../assets/Ticket/VIPTicket.svg";
import VIPTicketTitle from "../assets/Ticket/VIPTicket-title.svg";
import VIPTicketInfo from "../assets/Ticket/VIPTicket-info.svg";
import TicketMap from "../assets/Ticket/Ticket-map.svg";
import Ticket from "../assets/Ticket/Ticket-title.svg";
//

function TicketPage(){
    return <>
    <div className="ticket-container" id="TICKETPAGE">
        <div className="ticket-title-container">
            <img src={Ticket} alt="Ticket"className="TicketTitle"/>
        </div>
        <div className="ticket-component-container">
            <div className="ticket-tickets">
                <div id="StandardTicket">
                    <img src={NormTicket} alt="" className="tickets"/>
                    
                    <img src={NormTicketTitle} alt="" id="title1"/>
                    <img src={NormTicketInfo} alt="" />
                    <img src={AddBtn} alt="" className="AddBtn1"/>
                    <img src={AddBtnPressed} alt="" className="AddBtn"/>

                </div>
                <div id="VIPTicket">
                    <img src={VIPTicket} alt="" className="tickets"/>
                    <img src={VIPTicketTitle} alt="" id="title2"/>
                    <img src={VIPTicketInfo} alt="" />
                    <img src={AddBtn} alt="" className="AddBtn2"/>
                    <img src={AddBtnPressedVIP} alt="" className="AddBtn2-pressed"/>
                </div>
            </div>
            <div className="ticket-map">
                <img src={TicketMap} alt="" />
            </div>
        </div>
    </div>
    </>
}

export default TicketPage