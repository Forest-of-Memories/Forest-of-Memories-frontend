import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StoreFooter from "./store-footer";
import StoreHeader from "./store-header";
import "../../styles/color.css";
import "./store-decoration.css";

const StoreDecoration = () => {
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    switch (tab) {
      case "tree":
        navigate("/store-tree");
        break;
      case "point":
        navigate("/store-point");
        break;
      default:
        navigate("/store-decoration");
    }
  };

  return (
    <div className="wrapper">
      <StoreHeader activeTab="decoration" onTabClick={handleTabClick} />
      <div className="content">
        <div className="section">
          <h2 className="section-title">테마 세트</h2>
          <div className="card-list">
            <div className="card">
              <div className="card-text">크리스마스</div>
            </div>
            <div className="card">
              <div className="card-text">벚꽃나무</div>
            </div>
            <div className="card">
              <div className="card-text">하와이</div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">배경</h2>
          <div className="card-list">
            <div className="card">
              <div className="card-text">설경</div>
            </div>
            <div className="card">
              <div className="card-text">쨍쨍한 여름햇살</div>
            </div>
            <div className="card">
              <div className="card-text">노을</div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">오브제</h2>
          <div className="card-list">
            <div className="card">
              <div className="card-text">선물상자</div>
            </div>
            <div className="card">
              <div className="card-text">강아지</div>
            </div>
            <div className="card" Card>
              <div className="card-text">고양이</div>
            </div>
          </div>
        </div>
      </div>
      <StoreFooter />
    </div>
  );
};

export default StoreDecoration;
