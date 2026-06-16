import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      {/* Optional convenience */}
      <Route path="/" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
