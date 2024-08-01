import React from "react";
import styled from "styled-components";
import CommentHeader from "./commentHeader";

const CommentModal = ({ show, handleClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CommentHeader handleClose={handleClose} />
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default CommentModal;

const ModalOverlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: transparent;
  box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px;
`;

const ModalContent = styled.div`
  background: white;
  padding: 10px 17px 0 17px;
  border-radius: 5px 5px 0 0;
  width: 56.25vh;
  min-height: 30vh;
  max-height: 70vh;
  position: relative;
`;
