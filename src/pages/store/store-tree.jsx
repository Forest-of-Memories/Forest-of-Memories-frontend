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
      <StoreHeader activeTab="tree" onTabClick={handleTabClick} />
      <div className="content">
        <div className="section">
          <h2 className="section-title">나무 씨앗</h2>
          <div className="card-list">
            <div className="card">
              <div className="card-text">크리스마스 트리</div>
            </div>
            <div className="card">
              <div className="card-text">벚꽃나무</div>
            </div>
            <div className="card">
              <div className="card-text">야자수</div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">나무 묘목</h2>
          <div className="card-list">
            <div className="card">
              <div className="card-text">크리스마스 트리</div>
            </div>
            <div className="card">
              <div className="card-text">벚꽃나무</div>
            </div>
            <div className="card">
              <div className="card-text">야자수</div>
            </div>
          </div>
        </div>
      </div>
      <StoreFooter />
    </div>
  );
};

export default StoreDecoration;
