import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Home from "./pages/home/home";
import QuestionList from "./pages/question/question-list";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuestionList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
