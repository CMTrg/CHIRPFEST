import React, { useState, useRef } from 'react';

const MapBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mapRef = useRef(null);
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      const dx = e.clientX - startPos.current.x;
      const dy = e.clientY - startPos.current.y;
      setPosition((prev) => ({
        x: prev.x + dx,
        y: prev.y + dy,
      }));
      startPos.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      style={{
        width: '1039px',
        height: '464px',
        overflow: 'hidden',
        position: 'relative',
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        ref={mapRef}
        style={{
          width: '200%',
          height: '200%',
          backgroundImage: `url('./public/Map.png')`,
          backgroundSize: 'cover',
          backgroundPosition: ' -55vh 400%',
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: 'grab',
        }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default MapBackground;
