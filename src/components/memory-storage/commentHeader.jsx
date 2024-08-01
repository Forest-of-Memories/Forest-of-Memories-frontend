import React from "react";
import styled from "styled-components";

const CommentHeader = ({ handleClose }) => {
  return (
    <Header>
      <Title>댓글</Title>
      <CloseButton onClick={handleClose}>×</CloseButton>
    </Header>
  );
};

export default CommentHeader;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 15px;
`;

const CloseButton = styled.button`
  background: none;
  color: #333;
  border: none;
  font-size: 19px;
  cursor: pointer;
`;
