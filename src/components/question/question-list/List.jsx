import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./List.css";
import "../../../styles/color.css";
import { ReactComponent as BookMarkIcon } from "../../../assets/icons/bookmark.svg";
import styled from "styled-components";

const List = ({
  questions,
  onQuestionClick,
  showOnlyLiked,
  likedQuestions,
}) => {
  const [liked, setLiked] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const initialLikedState = questions.map((_, index) =>
      likedQuestions.includes(index)
    );
    setLiked(initialLikedState);
  }, [questions, likedQuestions]);

  const handleHeartClick = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const handleQuestionClick = (index) => {
    const reverseIndex = questions.length - 1 - index;
    navigate(`/question/detail/${reverseIndex}`);
  };

  const filteredQuestions = showOnlyLiked
    ? questions
        .map((question, index) => ({ question, index }))
        .filter(({ index }) => liked[index])
    : questions.map((question, index) => ({ question, index }));

  return (
    <ListWrapper id="question-list">
      {filteredQuestions
        .slice()
        .reverse()
        .map(({ question, index }) => (
          <div key={index} onClick={() => handleQuestionClick(index)}>
            <span className="question-number">#{index + 1}</span>
            <span className="question-text">{question.text}</span>
            {liked[index] ? (
              <BookMarkIcon
                className="heart-icon clicked"
                onClick={(e) => {
                  e.stopPropagation();
                  handleHeartClick(index);
                }}
              />
            ) : (
              <BookMarkIcon
                className="heart-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  handleHeartClick(index);
                }}
              />
            )}
          </div>
        ))}
    </ListWrapper>
  );
};

export default List;

const ListWrapper = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  overflow-y: auto;
`;
