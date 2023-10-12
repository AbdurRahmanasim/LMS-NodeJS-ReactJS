import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContent">
        <div className="nav-input-div">
          <span className="search-icon">
          <i class='bx bx-search'></i>
          </span>
          <div className="nav-input">
            <input type="text" placeholder="Quick Search [ctrl + D]" />
          </div>
        </div>
        <div className="nav-iconAndName-div">
        <div className="nav-icon-div">
        <i class='bx bx-bell'></i>        </div>
        <div className="nav-name-div">Anna De Armus</div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
