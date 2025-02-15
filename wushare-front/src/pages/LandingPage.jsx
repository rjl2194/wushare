import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@blueprintjs/core";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#282c34",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>Welcome to the Performance Stage</h1>
      <p>Click below to enter the main experience.</p>
      <Button intent="primary" text="Enter" onClick={() => navigate("/boards")} />
    </div>
  );
};

export default LandingPage;
