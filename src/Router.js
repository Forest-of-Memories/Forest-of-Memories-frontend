import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import StoreDecoration from "./pages/store/store-decoration";
import StoreTree from "./pages/store/store-tree";
import StorePoint from "./pages/store/store-point";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store-decoration" element={<StoreDecoration />} />
        <Route path="/store-tree" element={<StoreTree />} />
        <Route path="/store-point" element={<StorePoint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
