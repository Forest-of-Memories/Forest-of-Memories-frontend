// import React from "react";
// import "./Header.css";
// import styled from "styled-components";
// import "../../../styles/color.css";

// const Header = ({ onServiceClick, onMyQuestionsClick, onShowOnlyLiked }) => {
//   return (
//     <header className="header">
//       <h1 className="title">List</h1>
//       <div className="header-icons">
//         <div className="header-item" onClick={onServiceClick}>
//           <img src="/imgs/service_question.png" alt="Service Question icon" />
//           <span>서비스 질문</span>
//         </div>
//         <div className="header-item" onClick={onMyQuestionsClick}>
//           <img src="/imgs/user_question.png" alt="User Question icon" />
//           <span>내 질문</span>
//         </div>
//         <div className="header-item" onClick={onShowOnlyLiked}>
//           <img src="/imgs/like_full.png" alt="Save icon" />
//           <span>좋아요</span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import "./Header.css";
import styled from "styled-components";
import "../../../styles/color.css";
import { Link } from "react-router-dom";
import QuestionList from "../../../pages/question/question-list";

const Header = ({ onServiceClick, onMyQuestionsClick, onShowOnlyLiked }) => {
  return (
    <header className="header">
      <h1 className="title">List</h1>
      <div className="header-icons">
        <div className="header-item" onClick={onServiceClick}>
          <img src="/imgs/service_question.png" alt="Service Question icon" />
          <span>서비스 질문</span>
        </div>
        <div className="header-item" onClick={onMyQuestionsClick}>
          <img src="/imgs/user_question.png" alt="User Question icon" />
          <span>내 질문</span>
        </div>
        /
        <div className="header-item" onClick={onShowOnlyLiked}>
          <img src="/imgs/like_full.png" alt="Save icon" />
          <span>좋아요</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
