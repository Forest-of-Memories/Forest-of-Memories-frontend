import React, { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import "../../../styles/color.css";
import questionData from "../question-list/serviceQuestions";
import Modal from "./Modal";

const Detail = () => {
  const { index } = useParams();
  const questionIndex = parseInt(index, 10);
  const reverseIndex = questionData.length - 1 - questionIndex;
  const question = questionData[reverseIndex];

  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showCommentInput, setShowCommentInput] = useState(false);

  if (!question) {
    return (
      <Wrapper>
        <ErrorMessage>선택된 질문을 찾을 수 없습니다.</ErrorMessage>
      </Wrapper>
    );
  }

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
      // setShowCommentInput(false); //
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
      <Header>
        <BackLink to="/question/list">← 돌아가기</BackLink>
        <CommentButton onClick={toggleCommentInput}>
          <img src="/imgs/comment.png" alt="Comment Icon" />
          댓글 달기
        </CommentButton>
      </Header>
      <Title>{question.text}</Title>
      <Image src="/imgs/watercolor.avif" alt="List Icon" />
      <Answers>
        {question.answers.map((answer, idx) => (
          <Answer key={idx}>
            <AnswerAuthor>{answer.author}</AnswerAuthor>
            <AnswerText>{answer.text}</AnswerText>
          </Answer>
        ))}
      </Answers>
      <Modal show={showCommentInput} handleClose={toggleCommentInput}>
        <ModalTitle>댓글 달기</ModalTitle>
        <InputSection>
          <Input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            onKeyDown={handleKeyDown}
            placeholder="댓글을 입력하세요"
          />
          <SubmitButton onClick={handleCommentSubmit}>댓글 달기</SubmitButton>
        </InputSection>
        <CommentsContainer>
          {comments.map((comment, idx) => (
            <Comment key={idx}>
              <CommentHeader>
                <CommentAuthor>{comment.author}</CommentAuthor>
                <CommentDate>{comment.date}</CommentDate>
                <DeleteButton onClick={() => handleCommentDelete(idx)}>
                  삭제
                </DeleteButton>
              </CommentHeader>
              <CommentText>{comment.text}</CommentText>
            </Comment>
          ))}
        </CommentsContainer>
      </Modal>
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  // font-family: "Nanum Pen Script", cursive;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: #ff8b8b;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;

const CommentButton = styled.button`
  background: #ff8b8b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 18px;
`;

const Title = styled.h2`
  margin-top: 30px;
  font-size: 18px;
  margin-bottom: 30px;
  color: #333;
`;

const Image = styled.img`
  width: 410px;
  height: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const Answers = styled.div`
  margin-top: 30px;
`;

const Answer = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AnswerAuthor = styled.h3`
  margin: 0 0 15px 0;
  font-size: 20px;
  color: #ff8a80;
`;

const AnswerText = styled.p`
  margin: 0;
  font-size: 15px;
  color: #666;
`;

const CommentsContainer = styled.div`
  margin-top: 20px;
`;

const Comment = styled.div`
  margin-bottom: 20px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentAuthor = styled.h3`
  margin: 0;
  font-size: 20px;
`;

const CommentDate = styled.span`
  font-size: 12px;
  color: #888;
  margin-left: 220px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ff8b8b;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const CommentText = styled.p`
  margin: 5px 0 0 0;
  font-size: 16px;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-size: 16px;
  color: #ffffff;
  background-color: #ff8b8b;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
  }
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;
