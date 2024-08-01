import React from "react";
import "./StepTwo.css";
const StepTwo = () => {
  return (
    <div className="step-container">
      <div className="step-header">
        <h2 className="step-title">로그인을 해주세요</h2>
        <img src="/imgs/trees.png" alt="trees" className="header-img" />
      </div>
      <div className="login-buttons">
        <button className="kakao-login-button">
          <img src="/imgs/kakao_login.png" alt="Kakao Login" />
        </button>
      </div>
      <p className="tip">
        Tip: 로그인을 하지 않으면 서비스 사용이 어려울 수 있어요
      </p>
    </div>
  );
};

export default StepTwo;
