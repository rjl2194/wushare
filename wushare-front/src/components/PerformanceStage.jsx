import React, { useState } from "react";
import GraphCanvas from "../components/GraphCanvas";
import CenterButton from "../components/CenterButton";
import PerformanceStage from "../components/PerformanceStage";
import Sidebar from "../components/Sidebar";

const PerformanceBoards = () => {
  const [stage, setStage] = useState(null);

  const handleAddStage = () => {
    setStage({ x: -100, y: -100, width: 400, height: 300 });
  };

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      {/* Main Content (Graph and Button) */}
      <div style={{ flex: 4, position: "relative" }}>
        <GraphCanvas />
        <CenterButton onClick={handleAddStage} />
        {stage && <PerformanceStage {...stage} />}
      </div>

      {/* Sidebar (1/5 width, fixed) */}
      <Sidebar />
    </div>
  );
};

export default PerformanceBoards;
