import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import MainLayout from "./components/common/main-layout";
import ProtectedRoute from "./components/common/protected-route";

import QuestionList from "./pages/question/question-list";

import StoreTree from "./pages/store/store-tree";
import StoreBackground from "./pages/store/store-background";
import StoreObject from "./pages/store/store-object";

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
        path: "/store-tree",
        element: <StoreTree />,
      },
      {
        path: "/store-background",
        element: <StoreBackground />,
      },
      {
        path: "/store-object",
        element: <StoreObject />,
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
