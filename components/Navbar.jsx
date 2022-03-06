import React from "react";

// import a list of links and map them to the list

import { MenuItems } from "../data/MenuItems";

function Navbar() {
  return (
    <nav className="nav-menu">
      <div className="menu-icon"></div>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <p className="navbar-logo">
        Powered by Python <i className="fab fa-python" /> + React{" "}
        <i className="fab fa-react" />
      </p>
    </nav>
  );
}
export default Navbar;
