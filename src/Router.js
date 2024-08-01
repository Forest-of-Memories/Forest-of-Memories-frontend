import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import MainLayout from "./components/common/main-layout";
import ProtectedRoute from "./components/common/protected-route";

import QuestionList from "./pages/question/question-list";
import QuestionCreate from "./pages/question/question-create";

import StoreTree from "./pages/store/store-tree";
import StorageGallery from "./pages/memory-storage/storage-gallery";
import StorageGalleryWrite from "./pages/memory-storage/storage-gallery-write";
import LocationSearch from "./pages/memory-storage/LocationSearch";
import PostDetail from "./pages/memory-storage/postDetail";

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
        path: "/storage-gallery",
        element: <StorageGallery />,
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
]);
export default Router;
