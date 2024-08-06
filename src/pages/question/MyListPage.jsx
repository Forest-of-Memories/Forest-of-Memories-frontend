import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { instance } from "../../api/instance";
import "../../styles/color.css";
import Header from "../../components/question/question-list/Header";
import MyList from "../../components/question/question-list/MyList";
import Footer from "../../components/common/footer";
import QuestionCreate from "../../components/question/question-create/QuestionCreate"; // Import QuestionCreate component

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [likedQuestions, setLikedQuestions] = useState([]);
  const [showOnlyLiked, setShowOnlyLiked] = useState(false);
  const user_id = 1; // 임시 사용자 ID

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(
          `/memory/personal-questions/?user_id=${user_id}`
        );
        console.log("API response:", res.data);

        const fetchedQuestions = res.data.questions.map((q) => ({
          text: q.content,
          index: q.index,
        }));

        setQuestions(fetchedQuestions);
        setLikedQuestions(res.data.likes);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData();
  }, [user_id]);

  const handleShowOnlyLiked = () => {
    setShowOnlyLiked(!showOnlyLiked);
  };

  const handleQuestionCreated = (newQuestion) => {
    setQuestions([
      ...questions,
      { text: newQuestion.content, index: questions.length },
    ]);
  };

  return (
    <Wrapper>
      <Header onShowOnlyLiked={handleShowOnlyLiked} />
      <QuestionCreate onQuestionCreated={handleQuestionCreated} />
      <MyList
        questions={questions}
        onQuestionClick={(index) =>
          console.log(`Question ${index + 1} clicked`)
        }
        showOnlyLiked={showOnlyLiked}
        likedQuestions={likedQuestions}
      />
      <Footer />
    </Wrapper>
  );
};

export default QuestionList;

const Wrapper = styled.div`
  background-color: var(--red-600);
  height: 100%;
`;
