"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = e.touches[0].clientX;
        mouseRef.current.targetY = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);

    // Configuration for grid and distortion mimicking the original CSS grid
    // Original: radial-gradient(rgba(0,0,0,0.14) 0.8px, transparent 0.9px), size: 8px 8px
    const GRID_SIZE = 8; 
    const DOT_RADIUS = 0.8;
    const WARP_RADIUS = 180; // Radius of cursor influence
    const WARP_FORCE = 25; // Max pixel displacement

    let animId: number;

    const draw = () => {
      animId = requestAnimationFrame(draw);

      // Smooth lerp mouse position for silky elastic response
      const m = mouseRef.current;
      if (m.x === -1000) {
        m.x = m.targetX;
        m.y = m.targetY;
      } else {
        m.x += (m.targetX - m.x) * 0.15;
        m.y += (m.targetY - m.y) * 0.15;
      }

      ctx.clearRect(0, 0, width, height);

      const mx = m.x;
      const my = m.y;
      const isMouseActive = mx > -500 && my > -500;

      // Draw Intersecting Grid Dots
      ctx.fillStyle = "rgba(0, 0, 0, 0.14)";
      ctx.beginPath();
      
      for (let gx = 0; gx <= width + GRID_SIZE; gx += GRID_SIZE) {
        for (let gy = 0; gy <= height + GRID_SIZE; gy += GRID_SIZE) {
          let px = gx;
          let py = gy;
          let r = DOT_RADIUS;

          if (isMouseActive) {
            const dx = gx - mx;
            const dy = gy - my;
            const distSq = dx * dx + dy * dy;
            const radiusSq = WARP_RADIUS * WARP_RADIUS;

            if (distSq < radiusSq && distSq > 0.1) {
              const dist = Math.sqrt(distSq);
              // Exponential decay force for magnetic push effect
              const factor = Math.pow((WARP_RADIUS - dist) / WARP_RADIUS, 1.8);
              const push = factor * WARP_FORCE;
              const angle = Math.atan2(dy, dx);
              
              px = gx + Math.cos(angle) * push;
              py = gy + Math.sin(angle) * push;
              
              // Slightly enlarge dots near the cursor for a subtle interactive feel
              r = DOT_RADIUS + factor * 0.5;
            }
          }

          // Use moveTo/arc for high performance single-path drawing
          ctx.moveTo(px, py);
          ctx.arc(px, py, r, 0, Math.PI * 2);
        }
      }
      ctx.fill();
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0, // Placed at the very bottom, right above the body background!
      }}
    />
  );
}

