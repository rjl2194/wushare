import React from 'react';

const Sidebar = () => {
  return (
    <div style={{
      width: '20vw',
      height: '100vh',
      backgroundColor: '#333',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      <h2>Sidebar</h2>
      <p>Tools and settings go here.</p>
    </div>
  );
};

export default Sidebar;
