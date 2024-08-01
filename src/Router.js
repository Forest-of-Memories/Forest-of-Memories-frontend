import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import MainLayout from "./components/common/main-layout";
import ProtectedRoute from "./components/common/protected-route";
import QuestionList from "./pages/question/question-list";
<<<<<<<<< Temporary merge branch 1
import QuestionDetail from "./pages/question/question-detail";
import MyPage from "./pages/mypage/mypage-setting";
import TutorialPage from "./pages/Tutorial/tutorial";
import StoreTree from "./pages/store/store-tree";
import StoreBackground from "./pages/store/store-background";
import StoreObject from "./pages/store/store-object";
=========
import QuestionCreate from "./pages/question/question-create";
import StoreTree from "./pages/store/store-tree";
import StorageGallery from "./pages/memory-storage/storage-gallery";
import StorageGalleryWrite from "./pages/memory-storage/storage-gallery-write";
import LocationSearch from "./pages/memory-storage/LocationSearch";
import PostDetail from "./pages/memory-storage/postDetail";
>>>>>>>>> Temporary merge branch 2

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
        path: "/store-tree",
        element: <StoreTree />,
      },
      {
        path: "/storage-gallery",
        element: <StorageGallery />,
      },
      {
        path: "/question/list",
        element: <QuestionList />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
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
<<<<<<<<< Temporary merge branch 1
    path: "/question/list",
    element: <QuestionList />,
  },
  {
    path: "/storage-gallery/write/location",
    element: <LocationSearch />,
  },
  {
    path: "/storage-gallery/PostDetail/:id",
    element: <PostDetail />,
  },

  {
    path: "/tutorial",
    element: <TutorialPage />,
=========

    path: "/question/create",
    element: (
      <ProtectedRoute>
        <QuestionCreate />
      </ProtectedRoute>
    ),

>>>>>>>>> Temporary merge branch 2
  },
]);
export default Router;
