// components/Cursor.js
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const BallCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    document.addEventListener('mousemove', setFromEvent);
    return () => {
      document.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  const cursorSpring = useSpring({
    from: { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 },
    to: { transform: `translate(${position.x}px, ${position.y}px) scale(1.5)`, opacity: 1 },
  });

  return (
    <animated.div
      className="cursor"
      style={{
        ...cursorSpring,
        position: 'fixed',
        borderRadius: '50%',
        width: 20,
        height: 20,
        backgroundColor: 'rgba(255, 0, 0, 0.5)', // Adjust color and opacity as needed
        pointerEvents: 'none', // Ensure cursor doesn't interfere with interactions
        zIndex: 9999, // Ensure it's above other elements
      }}
    />
  );
};

export default BallCursor;
