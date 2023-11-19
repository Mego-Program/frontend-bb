import React from 'react'
import Header from './Header';
import Footer from './Footer';
import ScrollUpButton from './ScrollUpButton'
import './App.css'



const Layout = ({ children }) => (
    <div className="app-container">
      <Header />
      {children}
      <ScrollUpButton/>
      <Footer />
    </div>
  );
  
  export default Layout;