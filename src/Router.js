import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import MainLayout from "./components/common/main-layout";
import ProtectedRoute from "./components/common/protected-route";
import QuestionList from "./pages/question/question-list";
import QuestionCreate from "./pages/question/question-create";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/question/create",
    element: (
      <ProtectedRoute>
        <QuestionCreate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/question/list",
    element: <QuestionList />,
  },
]);
export default Router;
