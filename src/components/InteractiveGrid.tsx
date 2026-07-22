"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
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

    // Configuration for grid and distortion
    const GRID_SIZE = 50; // Distance between grid lines
    const SAMPLE_STEP = 6; // Step size for smooth line bending
    const WARP_RADIUS = 260; // Radius of cursor influence
    const WARP_FORCE = 68; // Max pixel displacement

    let animId: number;

    const draw = () => {
      animId = requestAnimationFrame(draw);

      // Smooth lerp mouse position for silky elastic response
      const m = mouseRef.current;
      if (m.x === -1000) {
        m.x = m.targetX;
        m.y = m.targetY;
      } else {
        m.x += (m.targetX - m.x) * 0.18;
        m.y += (m.targetY - m.y) * 0.18;
      }

      ctx.clearRect(0, 0, width, height);

      const mx = m.x;
      const my = m.y;
      const isMouseActive = mx > -500 && my > -500;

      // Function to calculate distorted position for any coordinate (x, y)
      const getWarpedPoint = (x: number, y: number) => {
        if (!isMouseActive) return { x, y, dist: 999 };

        const dx = x - mx;
        const dy = y - my;
        const distSq = dx * dx + dy * dy;
        const radiusSq = WARP_RADIUS * WARP_RADIUS;

        if (distSq < radiusSq && distSq > 0.1) {
          const dist = Math.sqrt(distSq);
          // Exponential decay force for magnetic push effect
          const factor = Math.pow((WARP_RADIUS - dist) / WARP_RADIUS, 1.8);
          const push = factor * WARP_FORCE;
          const angle = Math.atan2(dy, dx);

          return {
            x: x + Math.cos(angle) * push,
            y: y + Math.sin(angle) * push,
            dist,
          };
        }

        return { x, y, dist: Math.sqrt(distSq) };
      };

      // 1. Draw Spotlight Aura under Cursor
      if (isMouseActive) {
        const glowRadius = 280;
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, glowRadius);
        grad.addColorStop(0, "rgba(0, 0, 0, 0.08)");
        grad.addColorStop(0.4, "rgba(0, 0, 0, 0.03)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mx, my, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw Distorted Horizontal Lines
      ctx.lineWidth = 1;

      for (let gy = 0; gy <= height + GRID_SIZE; gy += GRID_SIZE) {
        ctx.beginPath();
        let first = true;
        let currentAlpha = 0.08;
        ctx.strokeStyle = `rgba(0, 0, 0, ${currentAlpha})`;

        for (let gx = 0; gx <= width + SAMPLE_STEP; gx += SAMPLE_STEP) {
          const p = getWarpedPoint(gx, gy);

          const targetAlpha = p.dist < WARP_RADIUS ? 0.08 + (1 - p.dist / WARP_RADIUS) * 0.35 : 0.08;

          if (Math.abs(targetAlpha - currentAlpha) > 0.05) {
            ctx.stroke();
            ctx.beginPath();
            currentAlpha = targetAlpha;
            ctx.strokeStyle = `rgba(0, 0, 0, ${currentAlpha})`;
            ctx.lineWidth = p.dist < WARP_RADIUS ? 1.4 : 1;
          }

          if (first) {
            ctx.moveTo(p.x, p.y);
            first = false;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.stroke();
      }

      // 3. Draw Distorted Vertical Lines
      for (let gx = 0; gx <= width + GRID_SIZE; gx += GRID_SIZE) {
        ctx.beginPath();
        let first = true;
        let currentAlpha = 0.08;
        ctx.strokeStyle = `rgba(0, 0, 0, ${currentAlpha})`;

        for (let gy = 0; gy <= height + SAMPLE_STEP; gy += SAMPLE_STEP) {
          const p = getWarpedPoint(gx, gy);

          const targetAlpha = p.dist < WARP_RADIUS ? 0.08 + (1 - p.dist / WARP_RADIUS) * 0.35 : 0.08;

          if (Math.abs(targetAlpha - currentAlpha) > 0.05) {
            ctx.stroke();
            ctx.beginPath();
            currentAlpha = targetAlpha;
            ctx.strokeStyle = `rgba(0, 0, 0, ${currentAlpha})`;
            ctx.lineWidth = p.dist < WARP_RADIUS ? 1.4 : 1;
          }

          if (first) {
            ctx.moveTo(p.x, p.y);
            first = false;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.stroke();
      }

      // 4. Draw Intersecting Grid Dots
      for (let gx = 0; gx <= width + GRID_SIZE; gx += GRID_SIZE) {
        for (let gy = 0; gy <= height + GRID_SIZE; gy += GRID_SIZE) {
          const p = getWarpedPoint(gx, gy);
          const isNear = p.dist < WARP_RADIUS;
          const r = isNear ? 1.5 + (1 - p.dist / WARP_RADIUS) * 2.2 : 1.2;
          const alpha = isNear ? 0.25 + (1 - p.dist / WARP_RADIUS) * 0.55 : 0.18;

          ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
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
        zIndex: 40, // High z-index to overlay over page backgrounds (zIndex: 10), below navbar (zIndex: 50+)
        mixBlendMode: "multiply",
      }}
    />
  );
}

