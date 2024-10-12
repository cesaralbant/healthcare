"use client"

import React, { useEffect, useRef } from 'react';

const Ripple: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const ripples: any[] = [];
    let animationFrameId: number;

    const createRipple = (x: number, y: number) => {
      ripples.push({ x, y, radius: 0, alpha: 1 });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.forEach((ripple, index) => {
        ripple.radius += 2;
        ripple.alpha -= 0.01;

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.alpha})`;
        ctx.stroke();

        if (ripple.alpha <= 0) {
          ripples.splice(index, 1);
        }
      });

      if (Math.random() < 0.1) {
        createRipple(Math.random() * canvas.width, Math.random() * canvas.height);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'overlay' }}
    />
  );
};

export default Ripple;