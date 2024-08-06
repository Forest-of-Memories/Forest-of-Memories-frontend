import React, { useEffect, useState } from "react";
// import "./TutorialPage.css";
import "./StepThree.css";
import { auth } from "../../firebase";

const StepThree = () => {
  const [name, setName] = useState(auth.currentUser?.displayName);
  const onInputChange = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);
  return (
    <div className="step-container">
      <h2 className="step-title">추억의 숲에서 사용할 닉네임을 정해볼까요?</h2>
      <p className="step-tip">
        Tip: 평소 가족끼리 사용하는 애칭이나 별명을 사용해보세요.
      </p>
      <p className="step-tip">
        닉네임은 나중에 마이페이지에서도 수정할 수 있어요!
      </p>
      <p className="step-instruction">
        {/* 먼저 추억의 숲에서 사용할 닉네임을 정해보아요 */}
      </p>
      <input
        value={name}
        onChange={onInputChange}
        className="nickname-input"
        placeholder="추억의 숲 팬 1호"
      />
      <p className="step-tip">이제 우리 가족만의 여정을 시작해볼까요?</p>
    </div>
  );
};

export default StepThree;
