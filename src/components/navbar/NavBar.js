import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';


const NavBar = ({ selectedItem }) => {
  const navbarItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services"},
    { name: "Blog", path: "/blog"},
    { name: "Newsletter", path: "/newsletter"}
  ]

  return (
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
    </div>  
  )
}

export default NavBar;