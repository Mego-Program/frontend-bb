import React from 'react'
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollUpButton from './components/ScrollUpButton';
import './App.css'
import Section from './section';




const Layout = ({ children }) => (
    <div className="app-container">
      <Nav />
      {children}
      <ScrollUpButton/>
      <Section />
      <Footer />
    </div>
  );
  
  export default Layout;