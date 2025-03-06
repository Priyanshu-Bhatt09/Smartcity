import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import Issue from "./Components/Issue";
import Complaint from "./Components/Complaint";
import Feedback from "./Components/Feedback";
import LoginRegister from "./Components/LoginRegister";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/issue">Issue</Link></li>
            <li><Link to="/complaint">Complaint</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/login-register">Login/Register</Link></li>
          </ul>
        </nav>

        {/* Routes for Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issue" element={<Issue />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login-register" element={<LoginRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
