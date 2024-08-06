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
          <img src="/imgs/tree-basic-one.png" alt="icon1" />
          <span>질문을 통해 서로에 대해 알아가요!</span>
        </li>
        <li className="step-item">
          <img src="/imgs/tree-spring-one.png" alt="icon2" />
          <span>우리 가족만의 나무를 키워봐요!</span>
        </li>
        <li className="step-item">
          <img src="/imgs/tree-fall-one.png" alt="icon3" />
          <span>사진과 글로 추억을 기록해요!</span>
        </li>
        <li className="step-item">
          <img src="/imgs/tree-winter-one.png" alt="icon4" />
          <span>평소에 전하지 못했던 진심을 전해봐요!</span>
        </li>
      </ul>
    </div>
  );
};

export default StepOne;
