import React from "react";
import { useNavigate } from "react-router-dom";
import "./TutorialPage.css";
import "./StepFour.css";

const StepFour = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="step-container">
      <h2 className="step-title">씨앗을 하나 드릴게요</h2>
      <p className="step-subtitle">
        <p>과연 어떤 나무가 자라날까요?</p>
        <p>매일 가족과 질문에 답하며 소중하게 키워주세요!</p>
      </p>

      <div className="image-container">
        <img src="/imgs/tutorial_seed.png" alt="Seed" className="seed-image" />
        <img
          src="/imgs/waterpot.png"
          alt="Watering Can"
          className="watering-can-image"
          onClick={goToHome}
        />
      </div>
      <p className="step-instruction">
        물뿌리개를 눌러 <br />
        홈화면으로 이동해보세요!
      </p>
      <p className="step-sub">여러분의 여정을 응원합니다!</p>
    </div>
  );
};

export default StepFour;
