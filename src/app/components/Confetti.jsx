
"use client";
// components/Confetti.js
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'

const DynamicConfetti = dynamic(() => import('react-confetti'), { ssr: false }); // Dynamically import Confetti component

const ConfettiComponent = () => {
  const [confettiActive, setConfettiActive] = useState(true); // Initially set to true
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial window width
    window.addEventListener('resize', handleResize);

    const timeout = setTimeout(() => {
      setConfettiActive(false); // After 10 seconds, set confettiActive to false to stop the animation
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeout); // Clear timeout on component unmount
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 999 }}>
      {confettiActive && <DynamicConfetti width={windowWidth} height={typeof window !== 'undefined' ? window.innerHeight : 600} />}
    </div>
  );
};

export default ConfettiComponent;
