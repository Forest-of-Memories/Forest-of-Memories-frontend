import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostDetailHeader = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <Header>
      <Button onClick={handleCancel}>⬅️</Button>
      <Title>이건 post detail</Title>
    </Header>
  );
};

export default PostDetailHeader;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56.25vh;
  height: 6vh;
  background-color: var(--gray-50);
  padding: 0 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  left: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  text-align: center;
`;
