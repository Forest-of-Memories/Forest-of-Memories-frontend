import React from "react";
// import "./TutorialPage.css";
import "./StepOne.css";

const StepOne = () => {
  return (
    <div className="step-container">
      <h2 className="step-title">추억의 숲에 오신 것을 환영해요</h2>
      <h5>오늘은 가족과 얼마나 소통하셨나요?</h5>
      <h5>추억의 숲이 도와드릴게요!</h5>

      <ul className="step-list">
        <li className="step-item">
          <img src="/imgs/pink_tree.png" alt="icon1" /> 질문을 통해 서로에 대해
          알아가요!
        </li>
        <li className="step-item">
          <img src="/imgs/yellow_tree.png" alt="icon2" /> 우리 가족만의 나무를
          키워봐요!
        </li>
        <li className="step-item">
          <img src="/imgs/green_tree.png" alt="icon3" /> 사진과 글로 추억을
          기록해요!
        </li>
        <li className="step-item">
          <img src="/imgs/blue_tree.png" alt="icon4" /> 평소에 전하지 못했던
          진심을 전해봐요!
        </li>
      </ul>
    </div>
  );
};

export default StepOne;
