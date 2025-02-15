import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PerformanceBoard from './components/PerformanceBoard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/performance" element={<PerformanceBoard />} />
      </Routes>
    </Router>
  );
};

export default App;