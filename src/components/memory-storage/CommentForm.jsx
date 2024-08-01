// src/components/CommentForm.jsx
import React from "react";
import styled from "styled-components";

const CommentForm = ({ newComment, onChange, onSubmit, onKeyDown }) => {
  return (
    <InputSection>
      <CommentInput
        type="text"
        value={newComment}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="댓글을 입력하세요"
      />
      <SubmitButton onClick={onSubmit}>등록</SubmitButton>
    </InputSection>
  );
};

export default CommentForm;

const InputSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 9px;
  font-size: 13px;
  border: 1px solid #cccccc;
  border-right: none;
  border-radius: 5px 0 0 5px;
`;

const SubmitButton = styled.button`
  padding: 9px 11px;
  font-size: 12px;
  color: #ffffff;
  background-color: var(--red-600);

  border-radius: 0 5px 5px 0;
  cursor: pointer;

  &:hover {
    background-color: #e08080;
  }
`;
