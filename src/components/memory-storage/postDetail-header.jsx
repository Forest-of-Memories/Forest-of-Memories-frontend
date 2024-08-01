import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const PostDetailHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCancel = () => {
    if (location.state && location.state.treeIndex !== undefined) {
      navigate("/storage", {
        state: { treeIndex: location.state.treeIndex },
      });
      console.log("if절이다");
    } else {
      navigate("/storage");
      console.log("else절이다.");
    }
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
  justify-content: center; /* 중앙 정렬 */
  align-items: center;
  margin: 0 auto;
  width: 56.25vh;
  height: 8vh;
  background-color: var(--gray-50);
  padding: 0 20px;
  position: relative; /* 위치 조정 */
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  position: absolute; /* 절대 위치 */
  left: 20px; /* 왼쪽에 위치 */
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  text-align: center;
`;
