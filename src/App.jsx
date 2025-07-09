import { useState } from "react";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router";
import PageNotFound from "./pages/PageNotFound.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
