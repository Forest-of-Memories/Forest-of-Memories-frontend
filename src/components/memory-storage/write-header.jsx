import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WriteHeader = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/storage");
  };

  const handleCheck = () => {
    // 체크 버튼 클릭 시의 동작 정의
    console.log("글 작성 완료");
  };

  return (
    <Header>
      <Button onClick={handleCancel}> ⬅️ </Button>
      <Title>글쓰기</Title>
      <Button onClick={handleCheck}>✔️</Button>
    </Header>
  );
};

export default WriteHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 56.25vh;
  height: 8vh;
  background-color: var(--gray-50);
  padding: 0 20px;
  margin: 0 auto;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0;
`;
