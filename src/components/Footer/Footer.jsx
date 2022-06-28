import React from "react";
import "./Footer.css";

const Footer = ({ name }) => {
  return (
    <footer>
      <label>Developer :</label>
      <span>{name}</span>
    </footer>
  );
};

export default Footer;
