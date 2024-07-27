import React from "react";
import styled from "styled-components";

const Modal = ({ show, handleClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>×</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative; /* 추가: CloseButton을 절대 위치로 설정하기 위함 */
`;

const CloseButton = styled.button`
  background: none;
  color: #333;
  border: none;
  font-size: 1.5rem;
  position: absolute; /* 추가: 모달 내용의 절대 위치 설정 */
  top: 10px; /* 모달 내용 상단에서 10px */
  right: 10px; /* 모달 내용 우측에서 10px */
  cursor: pointer;
`;
