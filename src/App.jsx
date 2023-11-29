import "./App.css";
import Layout from "./Layout.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Managers from "./pages/Managers.jsx"
import ContactUs from "./pages/ContactUs.jsx";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}
