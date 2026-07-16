"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    mouseRef.current = { x: width / 2, y: height / 2 };
    let easeMx = mouseRef.current.x;
    let easeMy = mouseRef.current.y;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      document.documentElement.style.setProperty("--mx", e.clientX + "px");
      document.documentElement.style.setProperty("--my", e.clientY + "px");
    };
    window.addEventListener("mousemove", onMouseMove);

    /** Push a grid point away from the cursor with a smooth falloff */
    const warpPoint = (
      x: number, y: number, mx: number, my: number,
      threshold = 150, maxPush = 24
    ) => {
      const dx = x - mx;
      const dy = y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < threshold) {
        const force = Math.pow((threshold - dist) / threshold, 2.2);
        const push  = force * maxPush;
        const angle = Math.atan2(dy, dx);
        return { x: x + Math.cos(angle) * push, y: y + Math.sin(angle) * push, dist, threshold };
      }
      return { x, y, dist, threshold };
    };

    let animId: number;
    const STEP = 65; // grid spacing

    const draw = () => {
      animId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, width, height);

      easeMx += (mouseRef.current.x - easeMx) * 0.075;
      easeMy += (mouseRef.current.y - easeMy) * 0.075;

      // ── Horizontal lines ──────────────────────────────────────────
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let gy = STEP; gy < height; gy += STEP) {
        let firstPoint = true;
        for (let gx = 0; gx <= width + STEP / 2; gx += STEP / 2) {
          const w = warpPoint(gx, gy, easeMx, easeMy);
          if (firstPoint) { ctx.moveTo(w.x, w.y); firstPoint = false; }
          else ctx.lineTo(w.x, w.y);
        }
      }
      ctx.stroke();

      // ── Vertical lines ────────────────────────────────────────────
      ctx.beginPath();
      for (let gx = STEP; gx < width; gx += STEP) {
        let firstPoint = true;
        for (let gy = 0; gy <= height + STEP / 2; gy += STEP / 2) {
          const w = warpPoint(gx, gy, easeMx, easeMy);
          if (firstPoint) { ctx.moveTo(w.x, w.y); firstPoint = false; }
          else ctx.lineTo(w.x, w.y);
        }
      }
      ctx.stroke();

      // ── Cursor spotlight ─────────────────────────────────────────
      const grd = ctx.createRadialGradient(easeMx, easeMy, 0, easeMx, easeMy, 100);
      grd.addColorStop(0, "rgba(255,255,255,0.1)");
      grd.addColorStop(0.5, "rgba(255,255,255,0.03)");
      grd.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(easeMx, easeMy, 100, 0, Math.PI * 2);
      ctx.fill();
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 2 }}
    />
  );
}
