import React from 'react';
import { Button } from '@blueprintjs/core';

const CenterButton = ({ onClick }) => {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1000
    }}>
      <Button intent="primary" onClick={onClick}>Add Stage</Button>
    </div>
  );
};

export default CenterButton;
