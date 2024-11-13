import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import { isMobile } from 'react-device-detect';

const NavBar = ({ selectedItem, isOpen, toggleSidebar  }) => {
  const navbarItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services"},
    { name: "Blog", path: "/blog"},
    { name: "Newsletter", path: "/newsletter"}
  ]

  return (<>
    {!isMobile ? 
    <div className="nav-root">
      <div className="logo-container">
        <img className="img-container" src="https://acniowa.com/wp-content/uploads/2016/03/test-image.png"/>
      </div>
      <div className="nav-links">
        {navbarItems.map((item, index) => 
          <div key={index}>
            <div className="nav-item">
              <Link to={item.path}>
                <span className={selectedItem === item.name.toLowerCase() ? "selected-text" : "nav-text"}>
                  {item.name}
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div> :
    <div className={`nav-root-mobile ${isOpen ? '' : 'open'}`}>
      <div className="nav-content-mobile">
        {navbarItems.map((item, index) => 
          <div key={index}>
            <Link to={item.path} onClick={() => toggleSidebar(false)}>
              <span className={selectedItem === item.name.toLowerCase() ? "nav-text-mobile-selected" : "nav-text-mobile"}>
                {item.name}
              </span>
            </Link>
          </div>  
        )}
      </div>
    </div>
    }
  </>)
}

export default NavBar;