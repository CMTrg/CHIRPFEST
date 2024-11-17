import React from "react";
import Contact1 from "../assets/Contact/Contact1.svg";
import Contact2 from "../assets/Contact/Contact2.svg";
import Contact3 from "../assets/Contact/Contact3.svg";

function ContactPage() {
  return (
    <>
      <div className="contact-page-container" id="CONTACTPAGE">
        <img src={Contact1} alt="" />
        <img src={Contact2} alt="" />
        <img src={Contact3} alt="" />
      </div>
    </>
  );
}

export default ContactPage;
