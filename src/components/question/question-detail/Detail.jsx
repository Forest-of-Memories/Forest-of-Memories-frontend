import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import questionData from "../question-list/questionData";
import Modal from "./Modal";
import "../../../styles/color.css";
import { ReactComponent as CommentIcon } from "../../../assets/icons/comentbtn.svg";
import { ReactComponent as PreviousIcon } from "../../../assets/icons/previous.svg";

const familyMembers = ["김엄마", "김아빠", "김동생", "김언니"];

const Detail = () => {
  const { index } = useParams();
  const questionIndex = parseInt(index, 10);
  const reverseIndex = questionData.length - 1 - questionIndex;
  const question = questionData[reverseIndex];
  const navigate = useNavigate();

  const [newAnswer, setNewAnswer] = useState("");
  const [selectedMember, setSelectedMember] = useState("");
  const [showAnswerInput, setShowAnswerInput] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteAnswerMember, setDeleteAnswerMember] = useState("");

  const handleAnswerChange = (e) => {
    setNewAnswer(e.target.value);
  };

  const handleAnswerKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAnswerSubmit();
    }
  };

  const handleAnswerSubmit = () => {
    if (newAnswer.trim()) {
      const newAnswerObject = {
        author: selectedMember,
        text: newAnswer.trim(),
      };

      const existingAnswerIndex = question.answers.findIndex(
        (answer) => answer.author === selectedMember
      );

      if (existingAnswerIndex !== -1) {
        question.answers[existingAnswerIndex] = newAnswerObject;
      } else {
        question.answers.push(newAnswerObject);
      }

      setNewAnswer("");
      setShowAnswerInput(false);
    }
  };

  const toggleAnswerInput = (member) => {
    setSelectedMember(member);
    setShowAnswerInput(true);
  };

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
      // setShowCommentInput(false);
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

  const handleDeleteAnswer = (member) => {
    setDeleteAnswerMember(member);
    setShowDeleteConfirmation(true);
  };

  const confirmDeleteAnswer = () => {
    const updatedAnswers = question.answers.filter(
      (answer) => answer.author !== deleteAnswerMember
    );
    question.answers = updatedAnswers;
    setShowDeleteConfirmation(false);
  };

  const cancelDeleteAnswer = () => {
    setShowDeleteConfirmation(false);
  };

  if (!question) {
    return (
      <Wrapper>
        <ErrorMessage>선택된 질문을 찾을 수 없습니다.</ErrorMessage>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header>
        <BackLink onClick={() => navigate(-1)}>
          <PreviousIcon />
        </BackLink>
        <CommentButton onClick={() => setShowCommentInput(true)}>
          <CommentIcon />
        </CommentButton>
      </Header>
      <Title>{question.text}</Title>
      <Image src="/imgs/watercolor.avif" alt="List Icon" />
      <AnswerSectionsWrapper>
        <AnswerSections>
          {familyMembers.map((member, idx) => (
            <AnswerSection key={idx}>
              <SectionTitle>{member}</SectionTitle>
              <AnswersContainer>
                {question.answers
                  .filter((answer) => answer.author === member)
                  .map((answer, idx) => (
                    <Answer key={idx}>
                      <AnswerText>{answer.text}</AnswerText>
                    </Answer>
                  ))}
              </AnswersContainer>
              {question.answers.some((answer) => answer.author === member) ? (
                <>
                  <EditAnswerButton onClick={() => toggleAnswerInput(member)}>
                    수정하기
                  </EditAnswerButton>
                  <DeleteAnswerButton
                    onClick={() => handleDeleteAnswer(member)}
                  >
                    답변 삭제하기
                  </DeleteAnswerButton>
                </>
              ) : (
                <AddAnswerButton onClick={() => toggleAnswerInput(member)}>
                  +
                </AddAnswerButton>
              )}
            </AnswerSection>
          ))}
        </AnswerSections>
      </AnswerSectionsWrapper>
      <Modal
        show={showAnswerInput}
        handleClose={() => setShowAnswerInput(false)}
      >
        <ModalTitle>{selectedMember}의 답변 달기</ModalTitle>
        <InputSection>
          <Input
            type="text"
            value={newAnswer}
            onChange={handleAnswerChange}
            onKeyDown={handleAnswerKeyDown}
            placeholder="답변을 입력하세요"
          />
          <SubmitButton onClick={handleAnswerSubmit}>답변 달기</SubmitButton>
        </InputSection>
      </Modal>
      <Modal
        show={showCommentInput}
        handleClose={() => setShowCommentInput(false)}
      >
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
      {showDeleteConfirmation && (
        <DeleteConfirmationModal>
          <p>답변을 삭제하시겠습니까?</p>
          <ButtonGroup>
            <ConfirmButton onClick={confirmDeleteAnswer}>예</ConfirmButton>
            <CancelButton onClick={cancelDeleteAnswer}>아니요</CancelButton>
          </ButtonGroup>
        </DeleteConfirmationModal>
      )}
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  padding: 20px;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: -1.5px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const BackLink = styled.div`
  display: inline-block;
  color: var(--green-main);
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;

const CommentButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;

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
  margin-top: 20px;
  font-size: 17px;
  letter-spacing: -1.5px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Image = styled.img`
  width: 90%;
  height: auto;
  margin-top: 10px;
  /* border-radius: 20px; */
  /* box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.7); */
`;

const AnswerSectionsWrapper = styled.div`
  max-height: 800px; /* Set the maximum height as needed */
  overflow-y: auto;
  width: 90%;
`;

const AnswerSections = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;
`;

const AnswerSection = styled.div`
  padding: 20px;
  /* background-color: rgba(250, 255, 250, 0.3); */
  /* background-color: white; */
  width: 100%;
  /* border-radius: 10px; */
  border-bottom: 1px solid var(--gray-color);
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); */
  position: relative;
`;

const SectionTitle = styled.h3`
  margin: 0 0 15px 0;
  font-size: 16px;
  /* color: var(--green-main); */
`;

const AnswersContainer = styled.div`
  max-height: 180px;
  overflow-y: auto;
`;

const Answer = styled.div`
  margin-bottom: 25px;
`;

const AnswerText = styled.p`
  font-size: 15px;
  color: #666;
`;

const AddAnswerButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  font-size: 20px;
  color: #fff;
  background-color: var(--green-main);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.4s;

  &:hover {
    background-color: #0a6847;
  }
`;

const EditAnswerButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 8px;
  font-size: 12px;
  color: #fff;
  background-color: var(--green-main);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.4s;

  &:hover {
    background-color: #0a6847;
  }
`;

const DeleteAnswerButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
  color: var(--green-main);
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;

const CommentsWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 20px;
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
  font-size: 15px;
`;

const CommentDate = styled.span`
  font-size: 12px;
  margin-left: 150px;
  color: #888;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: var(--green-main);
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

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
  color: #fff;
  background-color: var(--green-main);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0a6847;
  }
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

const DeleteConfirmationModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 1000;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  background-color: var(--green-main);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0a6847;
  }
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  background-color: #cccccc;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b3b3b3;
  }
`;
