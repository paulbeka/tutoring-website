import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import './css/BaseContentCss.css';


const BaseContent = () => {

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    setCurrentPage(path === '' ? 'home' : path);
  }, [location.pathname]);

  return (
    <div className="main-container">
      <div className="navbar-container">
        <NavBar selectedItem={currentPage} />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
      <div className="footer-container">
        
      </div>
    </div>
  )
}

export default BaseContent;