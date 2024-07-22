import React from "react";
import "../question/question-list/Footer.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../styles/color.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/imgs/footer_list.png" alt="List Icon" />
      <img src="/imgs/footer_storage.png" alt="Storage Icon" />
      <Link to="/">
        <img src="/imgs/footer_home.png" alt="Home Icon" />
      </Link>
      <img src="/imgs/footer_cart.png" alt="Cart Icon" />
      <img src="/imgs/footer_mypage.png" alt="My Page Icon" />
    </footer>
  );
};

export default Footer;
