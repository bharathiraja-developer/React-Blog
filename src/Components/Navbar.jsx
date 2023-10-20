import React from "react";

function Navbar() {
  return (
    <nav className="mt-4 border-bottom border-2 fw-medium">
      <ul className="nav nav-underline justify-content-center">
        <li className="nav-item">
          <a className="nav-link active text-success">ALL</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-success">FULL STACK DEVELOPMENT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-success">DATA SCIENCE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-success">CYBER SECURITY</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-success">CAREER</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
