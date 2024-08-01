import React from "react";
import "../question/question-list/Footer.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../styles/color.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/question/list" className="footer-item">
        <img src="/imgs/footer_list.png" alt="List Icon" />
        <span>질문 리스트</span>
      </Link>
      <Link to="/storage-gallery" className="footer-item">
        <img src="/imgs/footer_storage.png" alt="Storage Icon" />
        <span>추억 저장소</span>
      </Link>
      <Link to="/" className="footer-item">
        <img src="/imgs/footer_home.png" alt="Home Icon" />
        <span>홈</span>
      </Link>
      <Link to="/store-tree" className="footer-item">
        <img src="/imgs/footer_cart.png" alt="Cart Icon" />
        <span>장바구니</span>
      </Link>
      <Link to="/mypage" className="footer-item">
        <img src="/imgs/footer_mypage.png" alt="My Page Icon" />
        <span>마이페이지</span>
      </Link>
    </footer>
  );
};

export default Footer;
