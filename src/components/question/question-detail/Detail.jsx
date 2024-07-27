import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import "../../../styles/color.css";
import questionData from "../../question/question-list/questionData";
import Modal from "./Modal";
import "./Detail.css";

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
      <h2>{question.text}</h2>
      <img src="/imgs/watercolor.avif" alt="List Icon" />
      <div className="answers">
        {question.answers.map((answer, idx) => (
          <Answer key={idx}>
            <h3>{answer.author}</h3>
            <p>{answer.text}</p>
          </Answer>
        ))}
      </div>
      <Modal show={showCommentInput} handleClose={toggleCommentInput}>
        <h2>댓글 달기</h2>
        <InputSection>
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            onKeyDown={handleKeyDown}
            placeholder="댓글을 입력하세요"
          />
          <button onClick={handleCommentSubmit}>댓글 달기</button>
        </InputSection>
        <CommentsContainer>
          {comments.map((comment, idx) => (
            <Comment key={idx}>
              <CommentHeader>
                <h3>{comment.author}</h3>
                <CommentDate>{comment.date}</CommentDate>
                <DeleteButton onClick={() => handleCommentDelete(idx)}>
                  삭제
                </DeleteButton>
              </CommentHeader>
              <p>{comment.text}</p>
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
  background-color: #ffffff;
  height: 100vh;
  overflow-y: auto;
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

const Answer = styled.div`
  margin-bottom: 20px;

  h3 {
    margin: 0;
    font-size: 20px;
    color: #202020;
  }

  p {
    margin: 5px 0 0 0;
    font-size: 18px;
    color: #7c7c7c;
  }
`;

const CommentsContainer = styled.div`
  margin-top: 20px;

  .comment {
    margin-bottom: 20px;
  }
`;

const Comment = styled.div`
  margin-bottom: 20px;

  h3 {
    margin: 0;
    font-size: 20px;
  }

  p {
    margin: 5px 0 0 0;
    font-size: 16px;
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

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input {
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    border: 1px solid #cccccc;
    border-radius: 5px;
  }

  button {
    padding: 10px;
    font-size: 16px;
    color: #ffffff;
    background-color: #ff8b8b;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #f6f6f6;
  }
`;
