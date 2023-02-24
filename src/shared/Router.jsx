import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpages from "../components/Mainpages";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Detail from "../pages/Detail";
import Review from "../pages/Review";
import Signup from "../pages/Signup";
import User from "../pages/User";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/review" element={<Review />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
