import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile";
import Diagnose from "../Pages/Diagnose";
import Results from "../Pages/Results";
import MedicinePrescribtion from "../Pages/MedicinePrescribtion";

const CreateRoutes = () => {
  const [disease, setDisease] = useState("");
  const [medicine, setMedicine] = useState("");
  return (
    <>
      <Routes>
        <Route path="/v1/login" element={<Login />} />
        <Route path="/v1/signup" element={<SignUp />} />
        <Route path="/v1/dashboard" element={<Profile />} />
        <Route
          path="/v1/diagnose"
          element={<Diagnose disease={disease} setDisease={setDisease} />}
        />
        <Route
          path="/v1/results"
          element={<Results disease={disease} setMedicine={setMedicine} />}
        />
        <Route
          path="/v1/medicine_prescribtion"
          element={<MedicinePrescribtion medicine={medicine} />}
        />
      </Routes>
    </>
  );
};

export default CreateRoutes;
