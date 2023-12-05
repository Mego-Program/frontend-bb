import React from 'react'
import Nav from './Nav';
import Footer from './Footer';
import ScrollUpButton from './ScrollUpButton'
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