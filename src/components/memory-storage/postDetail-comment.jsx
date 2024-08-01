import React, { useState } from "react";
import CommentModal from "../../components/memory-storage/commentModal";
import CommentList from "../../components/memory-storage/CommentList";
import CommentForm from "../../components/memory-storage/CommentForm";
import styled from "styled-components";
import CommentIcon from "../../assets/imgs/comment.png";

const PostDetailComment = () => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showCommentInput, setShowCommentInput] = useState(false);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const newCommentObject = {
        author: "익명", // 예시
        text: newComment.trim(),
        date: new Date().toLocaleString(),
      };

      setComments([...comments, newCommentObject]);
      setNewComment("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommentSubmit(e);
    }
  };

  const handleCommentDelete = (index) => {
    const updatedComments = comments.filter((_, idx) => idx !== index);
    setComments(updatedComments);
  };

  const toggleCommentInput = () => {
    setShowCommentInput(!showCommentInput);
  };

  return (
    <Wrapper>
      <Footer>
        <CommentButton onClick={toggleCommentInput}>
          <img src={CommentIcon} alt="Comment Icon" />
          댓글
        </CommentButton>
      </Footer>
      <CommentModal show={showCommentInput} handleClose={toggleCommentInput}>
        <CommentForm
          newComment={newComment}
          onChange={handleCommentChange}
          onSubmit={handleCommentSubmit}
          onKeyDown={handleKeyDown}
        />
        <CommentList comments={comments} onDelete={handleCommentDelete} />
      </CommentModal>
    </Wrapper>
  );
};

export default PostDetailComment;

const Wrapper = styled.div`
  padding: 20px;
  background-color: #ffffff;
  height: 100vh;
  max-height: 100vh;
  //overflow-y: auto;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 56.25vh;
  height: 8vh;
  background-color: var(--gray-50);
`;

const CommentButton = styled.button`
  background: var(--red-600);
  color: white;
  border: none;
  padding: 7px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &:hover {
    background-color: #e08080;
  }
`;
