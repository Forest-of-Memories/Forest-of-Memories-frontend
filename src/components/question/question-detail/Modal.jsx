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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: transparent;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px 10px 10px 10px;
  max-width: 500px;
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  background: none;
  color: #333;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
