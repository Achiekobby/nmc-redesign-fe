import React from "react";
import { Routes, Route } from "react-router";
import Home from "@/pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
