import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Managers from "./pages/Managers.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Price from "./pages/Price.jsx";
import Careers from "./pages/Careers.jsx";
import './styles.css';
import ScrollTop from "./components/scrollTop.jsx";
import Payments from "./pages/Payments.jsx";

export default function App() {

  return (
    <Layout>
      <ScrollTop />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/price" element={<Price />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/payments" element={<Payments />} />
      </Routes>
    </Layout>
  );
}

