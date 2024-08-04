import React, { useEffect, useState } from "react";
import "./Header.css";
import styled from "styled-components";
import "../../../styles/color.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as BookMarkBtn } from "../../../assets/icons/bookmarkbtn.svg";
const Header = ({ onShowOnlyLiked }) => {
  const [isSystem, setIsSystem] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname.split("/")[1] === "my") setIsSystem(false);
    else if (location.pathname.split("/")[1] === "question") setIsSystem(true);
  }, [location]);
  return (
    <header className="header">
      <div className="header-icons">
        <div
          onClick={() => navigate("/question/list")}
          className={isSystem ? "header-item" : "header-item selected"}
        >
          <div>시스템 질문</div>
        </div>
        <div
          onClick={() => navigate("/my/list")}
          className={isSystem ? "header-item selected" : "header-item"}
        >
          <div>가족이 만든 질문</div>
        </div>
        <div className="bookmark" onClick={onShowOnlyLiked}>
          <BookMarkBtn />
          {/* <span>좋아요</span> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
