import React from 'react';

const Stage = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '300px',
        backgroundColor: '#f5f5dc', // Cream white
        border: '2px solid #000',
      }}
    />
  );
};

export default Stage;