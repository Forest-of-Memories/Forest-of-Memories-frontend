import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuestionList from "./pages/question-list";
import MyQuestionList from "./pages/my-question-list";

const MainComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/questions" element={<QuestionList />} />
        <Route path="/my-questions" element={<MyQuestionList />} />
      </Routes>
    </Router>
  );
};

export default MainComponent;
