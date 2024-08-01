// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./List.css";
// import styled from "styled-components";
// import "../../../styles/color.css";

// const List = ({ questions, onQuestionClick, showOnlyLiked }) => {
//   const [liked, setLiked] = useState(Array(questions.length).fill(false));
//   const navigate = useNavigate();

//   const handleHeartClick = (index) => {
//     const newLiked = [...liked];
//     newLiked[index] = !newLiked[index];
//     setLiked(newLiked);
//   };

//   const handleQuestionClick = (index) => {
//     const reverseIndex = questions.length - 1 - index;
//     navigate(`/question/detail/${reverseIndex}`);
//   };

//   const filteredQuestions = showOnlyLiked
//     ? questions
//         .map((question, index) => ({ question, index }))
//         .filter(({ index }) => liked[index])
//     : questions.map((question, index) => ({ question, index }));

//   return (
//     <ul id="question-list">
//       {filteredQuestions
//         .slice()
//         .reverse()
//         .map(({ question, index }) => (
//           <li key={index} onClick={() => handleQuestionClick(index)}>
//             <span className="question-number">#{index + 1}</span>
//             <span className="question-text">{question.text}</span>
//             <img
//               src={
//                 liked[index] ? "/imgs/like_full.png" : "/imgs/like_empty.png"
//               }
//               alt="heart icon"
//               className="heart-icon"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleHeartClick(index);
//               }}
//             />
//           </li>
//         ))}
//     </ul>
//   );
// };

// export default List;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./List.css";
import styled from "styled-components";
import "../../../styles/color.css";

const List = ({ questions, onQuestionClick, showOnlyLiked }) => {
  const [liked, setLiked] = useState(Array(questions.length).fill(false));
  const navigate = useNavigate();

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
    <ul id="question-list">
      {filteredQuestions
        .slice()
        .reverse()
        .map(({ question, index }) => (
          <li key={index} onClick={() => handleQuestionClick(index)}>
            <span className="question-number">#{index + 1}</span>
            <span className="question-text">{question.text}</span>
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
