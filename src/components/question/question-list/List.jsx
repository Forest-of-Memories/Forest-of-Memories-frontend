import React, { useState } from "react";
import "./List.css";
import styled from "styled-components";
import "../../../styles/color.css";

const List = ({ questions, onQuestionClick, showOnlyLiked }) => {
  const [liked, setLiked] = useState(Array(questions.length).fill(false));

  const handleHeartClick = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  //   const filteredQuestions = showOnlyLiked
  //     ? questions.filter((_, index) => liked[index])
  //     : questions;

  const filteredQuestions = showOnlyLiked
    ? questions
        .map((question, index) => ({ question, index }))
        .filter(({ index }) => liked[index])
    : questions.map((question, index) => ({ question, index }));

  return (
    <ul id="question-list">
      {filteredQuestions
        .slice()
        .reverse()
        .map(({ question, index }) => (
          <li key={index} onClick={() => onQuestionClick(index)}>
            <span className="question-number">#{questions.length - index}</span>
            <span className="question-text">{question}</span>
            <img
              src={
                liked[index] ? "/imgs/like_full.png" : "/imgs/like_empty.png"
              }
              alt="heart icon"
              className="heart-icon"
              onClick={(e) => {
                e.stopPropagation();
                handleHeartClick(index);
              }}
            />
          </li>
        ))}
    </ul>
  );
};

export default List;
