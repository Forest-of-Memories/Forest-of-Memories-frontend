import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../styles/color.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/footer_list.png" alt="List Icon" />
      <img src="/footer_storage.png" alt="Storage Icon" />
      <Link to="/home">
        <img src="/footer_home.png" alt="Home Icon" />
      </Link>
      <img src="/footer_cart.png" alt="Cart Icon" />
      <img src="/footer_mypage.png" alt="My Page Icon" />
    </footer>
  );
};

export default Footer;
