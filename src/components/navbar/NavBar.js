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
  )
}

export default NavBar;