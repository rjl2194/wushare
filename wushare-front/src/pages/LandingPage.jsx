import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@blueprintjs/core';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Wushare</h1>
      <p>Click the button below to enter.</p>
      <Button intent="primary" onClick={() => navigate('/boards')}>Enter</Button>
    </div>
  );
};

export default LandingPage;
