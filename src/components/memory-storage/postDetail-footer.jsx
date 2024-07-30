import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostDetailFooter = () => {
  const navigate = useNavigate();

  const handleCommentClick = () => {
    // 갤러리 앱으로 이동하는 로직 추가
    console.log("댓글 버튼 클릭");
  };

  return (
    <Footer>
      <CommentButton onClick={handleCommentClick}>💬</CommentButton>
    </Footer>
  );
};

export default PostDetailFooter;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  width: 56.25vh;
  height: 8vh;
  background-color: var(--gray-50);
  padding: 0 20px;
`;

const CommentButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;
