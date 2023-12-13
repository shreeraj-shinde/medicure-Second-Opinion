import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile";
import Diagnose from "../Pages/Diagnose";
import Results from "../Pages/Results";
const CreateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/v1/login" element={<Login />} />
        <Route path="/v1/signup" element={<SignUp />} />
        <Route path="/v1/dashboard" element={<Profile />} />
        <Route path="/v1/diagnose" element={<Diagnose />} />
        <Route path="/v1/results" element={<Results />} />
      </Routes>
    </>
  );
};

export default CreateRoutes;
