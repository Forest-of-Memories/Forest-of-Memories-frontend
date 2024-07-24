import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import MainLayout from "./components/common/main-layout";
import ProtectedRoute from "./components/common/protected-route";

import QuestionList from "./pages/question/question-list";

import StoreDecoration from "./pages/store/store-decoration";
import StoreTree from "./pages/store/store-tree";
import StorePoint from "./pages/store/store-point";

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
      {
        path: "/question/list",
        element: <QuestionList />,
      },
      {
        path: "/store-decoration",
        element: <StoreDecoration />,
      },
      {
        path: "/store-tree",
        element: <StoreTree />,
      },
      {
        path: "/store-point",
        element: <StorePoint />,
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
]);
export default Router;
