import React from "react";
import "./Footer.css";
import LogoSesi from "../../assets/logoSesi.png";

function Footer() {
  return (
    <div class="footer">
        <p><strong>&copy; 2024 SESI - NexGen</strong></p>
        <img src={LogoSesi} alt="logo sesi"/>
    </div>
  );
}

export default Footer;
