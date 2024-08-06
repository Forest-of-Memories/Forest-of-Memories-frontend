import React, { useState } from "react";
import "./SettingPage.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "logout" or "delete"

  const handleLogout = async () => {
    setModalType("logout");
    setIsModalOpen(true);
  };

  // const handleDeleteAccount = () => {
  //   setModalType("delete");
  //   setIsModalOpen(true);
  // };

  const handleConfirm = async () => {
    if (modalType === "logout") {
      await auth.signOut();
      console.log("로그아웃");
    } else if (modalType === "delete") {
      // 회원탈퇴 기능 구현
      console.log("회원탈퇴");
    }
    navigate("/tutorial");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="settings-page">
      <h1>설정</h1>
      <ul className="settings-options">
        <li onClick={handleLogout}>로그아웃</li>
        {/* <li onClick={handleDeleteAccount}>회원탈퇴</li> */}
      </ul>

      {isModalOpen && (
        <div>
          <div className="modal-overlay" onClick={handleCancel}></div>
          <div className="modal">
            <p>
              {modalType === "logout"
                ? "로그아웃하시겠습니까?"
                : "탈퇴하시겠습니까?"}
            </p>
            <div className="button-group">
              <button onClick={handleConfirm} className="modal-button">
                예
              </button>
              <button onClick={handleCancel} className="modal-button">
                아니요
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
