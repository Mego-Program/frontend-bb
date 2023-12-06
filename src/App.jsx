import "./App.css";
import "../styles.css";
import Layout from "./Layout.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Managers from "./pages/Managers.jsx"
import ContactUs from "./pages/ContactUs.jsx";
import Price from "./pages/price.jsx";
import Careers from "./pages/Careers.jsx";

export default function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/managers" element={<Managers />} >
              <Route path="/managers/participants" element={<participants />} />
              <Route path="/managers/mentors" element={<mentors />} />
          </Route>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/price" element={<Price />} />
          <Route path="/careers" element={<Careers />} />



        </Routes>
      </Layout>
  );
}
