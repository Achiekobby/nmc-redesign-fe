import React from "react";
import { Routes, Route } from "react-router";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import Home from "@/pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faqs/:slug" element={<Faq />} />
    </Routes>
  );
};

export default AppRoutes;
