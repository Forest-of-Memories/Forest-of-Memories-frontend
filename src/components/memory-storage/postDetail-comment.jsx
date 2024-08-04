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
      <CommentModal show={showCommentInput} handleClose={toggleCommentInput}>
        <CommentList comments={comments} onDelete={handleCommentDelete} />
        <CommentForm
          newComment={newComment}
          onChange={handleCommentChange}
          onSubmit={handleCommentSubmit}
          onKeyDown={handleKeyDown}
        />
      </CommentModal>
      <PostDetailFooter>
        <CommentButton onClick={toggleCommentInput}>
          <img src={CommentIcon} alt="Comment Icon" />
          댓글
        </CommentButton>
      </PostDetailFooter>
    </Wrapper>
  );
};

export default PostDetailComment;

const Wrapper = styled.div`
  //background-color: beige;
  position: relative;
  padding-bottom: 6vh; /* PostDetailFooter 높이만큼 padding 추가 */
`;

const PostDetailFooter = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 56.25vh;
  height: 8vh;
  background-color: white;
  padding: 0 20px;
  //z-index: 1;
`;

const CommentButton = styled.button`
  background: var(--pink-main);
  color: white;
  border: none;
  padding: 7px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 15px;
  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  &:hover {
    background-color: #e08080;
  }
`;
