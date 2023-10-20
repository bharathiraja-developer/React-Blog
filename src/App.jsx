import React from "react";
import Home from "./Components/Home";
import FullStack from "./Components/FullStack";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DataScience from "./Components/DataScience";
import CyberSecurity from "./Components/CyberSecurity";
import Career from "./Components/Career";

function App() {
  return (
    <div>
      <Router>
        <nav className="mt-4 border-bottom border-2 fw-medium">
          <ul className="nav nav-underline justify-content-center">
            <li className="nav-item">
              <Link to="/" className="nav-link text-success">
                ALL
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/full-stack-development"
                className="nav-link text-success"
              >
                FULL STACK DEVELOPMENT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/data-science" className="nav-link text-success">
                DATA SCIENCE
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cyber-security" className="nav-link text-success">
                CYBER SECURITY
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/career" className="nav-link text-success">
                CAREER
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="full-stack-development" element={<FullStack />} />
          <Route path="data-science" element={<DataScience />} />
          <Route path="cyber-security" element={<CyberSecurity />} />
          <Route path="career" element={<Career />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
