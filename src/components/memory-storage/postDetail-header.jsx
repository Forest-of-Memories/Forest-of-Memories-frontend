import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as PreviousIcon } from "../../assets/icons/previous.svg";

const PostDetailHeader = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <Header>
      <Button onClick={handleCancel}>
        <PreviousIcon />
      </Button>
      {/* <Title>이건 post detail</Title> */}
    </Header>
  );
};

export default PostDetailHeader;

const Header = styled.header`
  letter-spacing: -1.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vh;
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
