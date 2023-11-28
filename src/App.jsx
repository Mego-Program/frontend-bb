import "./App.css";
import Layout from "./Layout.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Test from "./pages/Test.jsx";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </Layout>
    </Router>
  );
}
