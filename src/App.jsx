import "./App.css";
import "../styles.css";
import Layout from "./Layout.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Managers from "./pages/Managers.jsx"
import ContactUs from "./pages/ContactUs.jsx";
import Price from "./pages/price.jsx";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/price" element={<Price />} />


        </Routes>
      </Layout>
    </Router>
  );
}
