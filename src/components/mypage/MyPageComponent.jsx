import React, { useState } from "react";
import "./MyPageComponent.css";
import { Link, useNavigate } from "react-router-dom";

const MyPageComponent = () => {
  const FAMILY_CODE = "Xhgdieu1564";

  const [name, setName] = useState("이세림");
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleFamilyCodeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCopyFamilyCode = () => {
    navigator.clipboard.writeText(FAMILY_CODE);
    alert("가족 코드가 복사되었습니다.");
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  return (
    <div className="mypage-wrapper">
      <div className="header">
        <h1>마이페이지</h1>
        <img
          src="/imgs/setting.png"
          alt="Settings"
          className="settings-icon"
          onClick={handleSettingsClick}
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
        <li className="section-title"> 내 정보</li>
        <li onClick={handleEditClick}>닉네임 변경</li>
        <li onClick={handleFamilyCodeClick}>가족 코드</li>
        {/* <li className="section-title">활동내역</li>
        <li>내가 작성한 질문</li>
        <li>내가 좋아한 질문</li>
        <li>내 테마</li> */}
        <li className="section-title">고객센터</li>
        <li>자주하는 질문</li>
      </ul>

      {isModalOpen && (
        <div>
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <div className="modal">
            <p>가족 코드: {FAMILY_CODE}</p>
            <div className="button-group">
              <button onClick={handleCopyFamilyCode} className="modal-copy">
                복사하기
              </button>
              <button onClick={handleCloseModal} className="modal-close">
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPageComponent;
