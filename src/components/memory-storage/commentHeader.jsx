import React from "react";
import styled from "styled-components";

const CommentHeader = ({ handleClose }) => {
  return (
    <Header>
      <Title>댓글</Title>
      <CloseButton onClick={handleClose}>X</CloseButton>
    </Header>
  );
};

export default CommentHeader;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 7px;
  border-bottom: 1px solid var(--gray-400);
`;

const Title = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  font-size: 19px;
  cursor: pointer;
`;
