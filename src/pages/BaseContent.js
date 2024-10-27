import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import './css/BaseContentCss.css';
import Footer from "../components/footer/Footer";
import { IoIosArrowDropupCircle } from "react-icons/io";

const BaseContent = () => {

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('home');
  const [isVisibleUpArrow, setIsVisibleUpArrow] = useState(false);

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    setCurrentPage(path === '' ? 'home' : path);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisibleUpArrow(true);
      } else {
        setIsVisibleUpArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="navbar-container">
        <NavBar selectedItem={currentPage} />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
      <div className="footer-root">
        <Footer />
      </div>
      <div
        className={`up-arrow ${isVisibleUpArrow ? "show" : "hide"}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IoIosArrowDropupCircle size={40} />
      </div>
    </div>
  );
};

export default BaseContent;
