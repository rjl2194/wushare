import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PerformanceBoards from "./pages/PerformanceBoards";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/boards" element={<PerformanceBoards />} />
      </Routes>
    </Router>
  );
};

export default App;
