import React from 'react';
import Canvas from './Canvas';
import Sidebar from './Sidebar';
import { Button } from '@blueprintjs/core';

const PerformanceBoard = () => {
  const [stageVisible, setStageVisible] = React.useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 4, position: 'relative' }}>
        <Canvas />
        {stageVisible && <Stage />}
        <Button
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          intent="primary"
          onClick={() => setStageVisible(!stageVisible)}
        >
          Toggle Stage
        </Button>
      </div>
      <Sidebar />
    </div>
  );
};

export default PerformanceBoard;