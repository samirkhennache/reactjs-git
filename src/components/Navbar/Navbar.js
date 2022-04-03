import React from "react";
import Header from "./Header";
import "./Navbar.css";
const Navbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <Header click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <p>Github Dashboard Sample</p>
        </div>
        <div className="spacer" />
      </nav>
    </header>
  );
};
export default Navbar;
