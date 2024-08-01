// src/components/CommentList.jsx
import React from "react";
import styled from "styled-components";

const CommentList = ({ comments, onDelete }) => {
  return (
    <CommentsContainer>
      {comments.map((comment, index) => (
        <Comment key={index}>
          <CommentHeader>
            <h3>{comment.author}</h3>
            <CommentDate>{comment.date}</CommentDate>
            <DeleteButton onClick={() => onDelete(index)}>삭제</DeleteButton>
          </CommentHeader>
          <p>{comment.text}</p>
        </Comment>
      ))}
    </CommentsContainer>
  );
};

export default CommentList;

const CommentsContainer = styled.div`
  max-height: 50vh;
  overflow-y: auto;
  margin-top: 15px;
`;

const Comment = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid var(--gray-200);
  padding-bottom: 3px;

  h3 {
    margin: 0;
    font-size: 15px;
    font-weight: bold;
  }

  p {
    margin: 5px 0 0 0;
    font-size: 15px;
  }
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentDate = styled.span`
  font-size: 12px;
  color: #888;
  margin-left: 20px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ff8b8b;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;
