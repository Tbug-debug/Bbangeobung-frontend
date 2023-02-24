import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpages from "../components/Mainpages";
import Login from "../pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpages />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
