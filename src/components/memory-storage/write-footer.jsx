import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WriteFooter = () => {
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    // 갤러리 앱으로 이동하는 로직 추가
    console.log("갤러리 버튼 클릭");
  };

  return (
    <Footer>
      <GalleryButton onClick={handleGalleryClick}>🖼️</GalleryButton>
    </Footer>
  );
};

export default WriteFooter;

const Footer = styled.footer`
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

const GalleryButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;
