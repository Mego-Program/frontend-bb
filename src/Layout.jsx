import React from 'react'
import Header from './Header';
import Footer from './Footer';
import ScrollUpButton from './ScrollUpButton'
import './App.css'
import { Outlet } from 'react-router-dom';



const Layout = ({ children }) => (
    <div className="app-container">
      <Header />
      {/* <Outlet /> */}
      {children}
      <ScrollUpButton/>
      <Footer />
    </div>
  );
  
  export default Layout;