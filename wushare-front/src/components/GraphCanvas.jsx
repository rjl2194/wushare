import React, { useRef, useEffect, useState } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";
import { useGesture } from "@use-gesture/react";

const GraphCanvas = ({ onAddStage }) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const stageRef = useRef(null);

  const bind = useGesture({
    onWheel: (event) => {
      event.preventDefault();
      let scale = zoom - event.deltaY * 0.001;
      scale = Math.max(0.5, Math.min(3, scale)); // Limits zoom
      setZoom(scale);
    },
    onDrag: ({ offset: [dx, dy] }) => {
      setPosition({ x: dx, y: dy });
    },
  });

  return (
    <div {...bind()} style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        scaleX={zoom}
        scaleY={zoom}
        draggable
        ref={stageRef}
      >
        <Layer>
          {/* Background with small grid dots */}
          {[...Array(100)].map((_, i) =>
            [...Array(100)].map((_, j) => (
              <Circle
                key={`${i}-${j}`}
                x={i * 50 - 2500}
                y={j * 50 - 2500}
                radius={1}
                fill="gray"
                opacity={0.3}
              />
            ))
          )}

          {/* Center Indicator */}
          <Circle x={0} y={0} radius={10} fill="red" />

          {/* Performance Stage Placeholder */}
          <Rect
            x={-100}
            y={-100}
            width={200}
            height={200}
            fill="transparent"
            stroke="white"
            strokeWidth={2}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default GraphCanvas;
