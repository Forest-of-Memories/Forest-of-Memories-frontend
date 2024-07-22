import React from "react";
import "./Header.css";
import styled from "styled-components";
import "../../../styles/color.css";

const Header = ({ onShowOnlyLiked }) => {
  return (
    <header className="header">
      <h1 className="title">List</h1>
      <div className="header-icons">
        <img src="/service_question.png" alt="Service Question icon" />
        <img src="/user_question.png" alt="User Question icon" />
        <img src="/saved.png" alt="Save icon" onClick={onShowOnlyLiked} />
      </div>
    </header>
  );
};

export default Header;
