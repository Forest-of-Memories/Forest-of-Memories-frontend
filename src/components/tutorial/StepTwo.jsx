import React, { useState } from "react";
import "./StepTwo.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";
import { useNavigate } from "react-router-dom";
const StepTwo = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const onLogInClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    } finally {
      console.log(auth.currentUser?.displayName);
      console.log(auth.currentUser?.email);
      console.log(auth.currentUser?.uid);
      setLoginSuccess(true);
    }
  };
  const onLogOutClick = async () => {
    await auth.signOut();
    console.log("로그아웃");
  };
  return (
    <div className="step-container">
      <div className="step-header">
        <h2 className="step-title">로그인을 해주세요</h2>
        <img src="/imgs/trees.png" alt="trees" className="header-img" />
      </div>
      <div className="login-buttons">
        <button onClick={onLogInClick} className="kakao-login-button">
          {/* <img src="/imgs/kakao_login.png" alt="Kakao Login" /> */}
          <GoogleIcon />
          {loginSuccess ? (
            <span className="success">구글 로그인 완료</span>
          ) : (
            <span>구글로 로그인하기</span>
          )}
        </button>
      </div>
      <p className="tip">
        Tip: 로그인을 하지 않으면 서비스 사용이 어려울 수 있어요
      </p>
    </div>
  );
};

export default StepTwo;
