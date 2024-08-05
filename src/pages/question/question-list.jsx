import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "../../styles/color.css";
import Header from "../../components/question/question-list/Header";
import List from "../../components/question/question-list/List";
import { instance } from "../../api/instance";
import questionData from "../../components/question/question-list/questionData";
const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [likedQuestions, setLikedQuestions] = useState([]);
  const [showOnlyLiked, setShowOnlyLiked] = useState(false);
  const user_id = 2;
  const family_id = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(`/memory/common-questions/${user_id}`);
        // console.log("API response: ", res.data);
        const fetchedQuestions = res.data.questions.map((q) => ({
          text: q.content,
        }));
        setQuestions(fetchedQuestions);
        setLikedQuestions(res.data.likes);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData();
  }, []);

  const handleShowOnlyLiked = () => {
    setShowOnlyLiked(!showOnlyLiked);
  };

  return (
    <Wrapper>
      <Header onShowOnlyLiked={handleShowOnlyLiked} />
      <List
        questions={questions}
        onQuestionClick={(index) =>
          console.log(`Question ${index + 1} clicked`)
        }
        showOnlyLiked={showOnlyLiked}
        likedQuestions={likedQuestions}
      />
    </Wrapper>
  );
};

export default QuestionList;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
