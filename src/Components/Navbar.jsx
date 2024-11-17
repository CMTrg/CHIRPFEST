import React from "react";
import { useState } from "react";

// ICONS IMPORT
import NavLogo from "../assets/NavLogo.svg?url";
import About from "../assets/About.svg?url";
import Lineup from "../assets/Line-Up.svg?url";
import BuyTicket from "../assets/Buy Ticket.svg?url";
import Shop from "../assets/Shop.svg?url";
import Location from "../assets/Location.svg?url";
import Contact from "../assets/Contact.svg?url";
import NavLogo2 from "../assets/NavLogo2.svg?url";
import { IoIosMenu } from "react-icons/io";
import {
  Box,
  Drawer,
 
} from "@mui/material";

// FUNCTION
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      title: "About",
      icon: (
        <a href="#ABOUTPAGE">
          <img src={About} alt="About" />
        </a>
      ),
    },
    {
      title: "Line-Up",
      icon: (
        <a href="#LINEUPPAGE">
          <img src={Lineup} alt="Line-Up" />
        </a>
      ),
    },
    {
      title: "Buy Ticket",
      icon: (
        <a href="#TICKETPAGE">
          <img src={BuyTicket} alt="Buy Ticket" />
        </a>
      ),
    },
    {
      title: "Shop",
      icon: (
        <a href="#SHOPPAGE">
          <img src={Shop} alt="Shop" />
        </a>
      ),
    },
    {
      title: "Location",
      icon: (
        <a href="#LOCATIONPAGE">
          <img src={Location} alt="Location" />
        </a>
      ),
    },
    {
      title: "Contact",
      icon: (
        <a href="">
          <img src={Contact} alt="Contact" />
        </a>
      ),
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={NavLogo} alt="Chirp Fest" />
      </div>
      <div className="navbar-links-container">
        <a href="#ABOUTPAGE">
          <img src={About} alt="About" />
        </a>
        <a href="#LINEUPPAGE">
          <img src={Lineup} alt="Line-Up" />
        </a>
        <a href="#TICKETPAGE">
          <img src={BuyTicket} alt="Buy Ticket" />
        </a>
        <a href="#SHOPPAGE">
          <img src={Shop} alt="Shop" />
        </a>
        <a href="#LOCATIONPAGE">
          <img src={Location} alt="Location" />
        </a>
        <a href="">
          <img src={Contact} alt="Contact" />
        </a>
      </div>
      <div className="nav-logo-container-2">
        <img src={NavLogo2} alt="Chirp Fest" />
      </div>
      <div className="navbar-menu-container">
        <IoIosMenu
          className="Menu"
          onClick={() => setOpenMenu(true)}
        ></IoIosMenu>
      </div>

      {/* For Mobile*/}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box sx={{width: 250}}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <ul className="nav-burger">
            {menuOptions.map((item) => (
              <div><li>{item.icon}</li></div>
            ))}
          </ul>
        </Box>
      </Drawer>
    </nav>
  );
}

export default Navbar;
