import React from "react";
import "./Header.css";
import styled from "styled-components";
import "../../../styles/color.css";
import { Link } from "react-router-dom";

const Header = ({ onShowOnlyLiked }) => {
  return (
    <header className="header">
      <h1 className="title">List</h1>
      <div className="header-icons">
        <div className="header-item">
          <img src="/imgs/service_question.png" alt="Service Question icon" />
          <Link to="/question/list">서비스 질문</Link>
        </div>
        <div className="header-item">
          <img src="/imgs/user_question.png" alt="User Question icon" />
          <Link to="/my/list">내 질문</Link>
        </div>
        <div className="header-item" onClick={onShowOnlyLiked}>
          <img src="/imgs/like_full.png" alt="Save icon" />
          <span>좋아요</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
