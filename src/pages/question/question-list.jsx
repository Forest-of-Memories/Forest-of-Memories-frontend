import React, { useState } from "react";
import styled from "styled-components";
import "../../styles/color.css";
import Header from "../../components/question/question-list/Header";
import List from "../../components/question/question-list/List";
import questionData from "../../components/question/question-list/questionData";

const QuestionList = () => {
  const handleQuestionClick = (index) => {
    // console.log(`Question ${index + 1} clicked`);
  };

  const [showOnlyLiked, setShowOnlyLiked] = useState(false);

  const handleShowOnlyLiked = () => {
    setShowOnlyLiked(!showOnlyLiked);
  };

  return (
    <Wrapper>
      <Header onShowOnlyLiked={handleShowOnlyLiked} />
      <List
        questions={questionData}
        onQuestionClick={handleQuestionClick}
        showOnlyLiked={showOnlyLiked}
      />
    </Wrapper>
  );
};

export default QuestionList;

const Wrapper = styled.div`
  /* display: grid; */
  /* grid-template-rows: 2fr 8fr; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
`;
