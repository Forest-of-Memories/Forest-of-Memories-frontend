import React, { useState } from "react";
import "./MyPageComponent.css";
import { Link } from "react-router-dom";

const MyPageComponent = () => {
  const [name, setName] = useState("이세림");
  const [email, setEmail] = useState("reems0815@sogang.ac.kr");
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveClick();
    }
  };

  return (
    <div className="mypage-wrapper">
      <div className="header">
        <h1>마이페이지</h1>
        <img
          src="/imgs/footer_mypage.png"
          alt="Settings"
          className="settings-icon"
        />
      </div>

      <div className="profile">
        <img src="/tree.png" alt="Profile" className="profile-icon" />
        <div className="profile-info">
          <div className="name-edit-container">
            {isEditing ? (
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                onKeyDown={handleKeyDown}
                className="name-input"
              />
            ) : (
              <h2>{name}</h2>
            )}
            {isEditing ? (
              <button onClick={handleSaveClick} className="save-button">
                저장
              </button>
            ) : (
              <button onClick={handleEditClick} className="edit-button">
                수정
              </button>
            )}
          </div>
          <p>{email}</p>
          <div className="profile-stats">
            <span>P🌞</span>
            <span>0</span>
          </div>
        </div>
      </div>
      <ul className="options">
        <li onClick={handleEditClick}>닉네임 변경</li>
        <li>가족 코드</li>
        <li className="section-title">활동내역</li>
        <li>내가 작성한 질문</li>
        <li>내가 좋아한 질문</li>
        <li>내 테마</li>
        <li className="section-title">고객센터</li>
        <li>자주하는 질문</li>
      </ul>
    </div>
  );
};

export default MyPageComponent;
