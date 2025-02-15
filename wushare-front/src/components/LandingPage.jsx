import React from 'react';
import { Button } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Wushare</h1>
      <p>Click below to enter the performance board.</p>
      <Button intent="primary" onClick={() => navigate('/performance')}>
        Enter
      </Button>
    </div>
  );
};

export default LandingPage;