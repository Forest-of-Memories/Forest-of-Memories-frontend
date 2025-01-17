import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import MainLayout from "./components/common/main-layout";
import ProtectedRoute from "./components/common/protected-route";
import QuestionList from "./pages/question/question-list";
import QuestionDetail from "./pages/question/question-detail";
import MyPage from "./pages/mypage/mypage-setting";
import TutorialPage from "./pages/Tutorial/tutorial";
import StoreTree from "./pages/store/store-tree";
import QuestionCreate from "./pages/question/question-create";
import StorageGallery from "./pages/memory-storage/storage-gallery";
import StorageGalleryWrite from "./pages/memory-storage/storage-gallery-write";
import LocationSearch from "./pages/memory-storage/LocationSearch";
import PostDetail from "./pages/memory-storage/postDetail";
import NoLayout from "./components/common/no-layout";
import PostImage from "./pages/memory-storage/post-image";
import SettingsPage from "./pages/mypage/SettingPage";

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
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/question/list",
        element: <QuestionList />,
      },
      {
        path: "/my/list",
        element: <QuestionList />,
      },

      {
        path: "/storage",
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
    path: "/tutorial",
    element: <TutorialPage />,
  },
  {
    path: "",
    element: (
      <ProtectedRoute>
        <NoLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/store",
        element: <StoreTree />,
      },
      {
        path: "/question/create",
        element: <QuestionCreate />,
      },
      {
        path: "/storage/post/write",
        element: <StorageGalleryWrite />,
      },
      {
        path: "/storage/post/image",
        element: <PostImage />,
      },
      {
        path: "/storage/write/location",
        element: <LocationSearch />,
      },
      {
        path: "/storage/post-detail/:id",
        element: <PostDetail />,
      },
      {
        path: "/question/detail/:index",
        element: <QuestionDetail />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
export default Router;
