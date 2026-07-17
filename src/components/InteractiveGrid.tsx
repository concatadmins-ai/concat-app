"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 }); // Start off-screen
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let easeMx = width / 2;
    let easeMy = height / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      document.documentElement.style.setProperty("--mx", e.clientX + "px");
      document.documentElement.style.setProperty("--my", e.clientY + "px");
    };
    window.addEventListener("mousemove", onMouseMove);
    
    const onMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };
    document.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const LINE_STEP = 65;
    const DOT_STEP = 8;
    const DOT_RADIUS = 0.75;

    const warpPoint = (
      x: number, y: number,
      targetX: number, targetY: number,
      threshold: number, maxPush: number, pow = 2.2
    ) => {
      const dx = x - targetX;
      const dy = y - targetY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < threshold) {
        const force = Math.pow((threshold - dist) / threshold, pow);
        const push = force * maxPush;
        const angle = Math.atan2(dy, dx);
        return { x: Math.cos(angle) * push, y: Math.sin(angle) * push };
      }
      return { x: 0, y: 0 };
    };

    let animId: number;

    const draw = () => {
      animId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, width, height);

      // ── Global Gravity Target ──────────────────────────────────────
      const introTarget = document.getElementById("intro-gravity-text");
      let textCx = -1000, textCy = -1000;
      let craterActive = false;
      
      if (introTarget) {
        const rect = introTarget.getBoundingClientRect();
        // Check if visible vertically in viewport
        if (rect.bottom > -200 && rect.top < height + 200) {
          textCx = rect.left + rect.width / 2;
          textCy = rect.top + rect.height / 2;
          craterActive = true;
        }
      }
      
      const pulse = Math.sin(Date.now() * 0.002) * 15;
      const textThreshold = 550 + pulse; 
      const textPush = 160;

      const applyWarps = (ox: number, oy: number) => {
        let finalX = ox;
        let finalY = oy;
        
        // 1. Text Crater (massively pushes grid away from text)
        if (craterActive) {
          const wText = warpPoint(finalX, finalY, textCx, textCy, textThreshold, textPush, 2.2);
          finalX += wText.x;
          finalY += wText.y;
        }
        
        // 2. Mouse Crater (dynamic user interaction)
        if (mouseRef.current.x !== -1000) {
          const dx = finalX - mouseRef.current.x;
          const dy = finalY - mouseRef.current.y;
          const mouseDist = Math.sqrt(dx * dx + dy * dy);

          // Threshold reduced by half (from 150 to 75)
          const wMouse = warpPoint(finalX, finalY, mouseRef.current.x, mouseRef.current.y, 75, 14, 2.2);
          finalX += wMouse.x;
          finalY += wMouse.y;

          // Tight electric wiggle near crater
          if (mouseDist < 120) {
            const waveSpeed = 0.022;
            const waveFreq = 0.14;
            const waveValue = Math.sin(mouseDist * waveFreq - Date.now() * waveSpeed);
            const fade = Math.max(0, (120 - mouseDist) / 120);
            
            const angle = Math.atan2(dy, dx) + Math.PI / 2;
            const electricStrength = 1.8 * waveValue * fade;
            finalX += Math.cos(angle) * electricStrength;
            finalY += Math.sin(angle) * electricStrength;
          }
        }
        
        return { x: finalX, y: finalY };
      };

      // ── Draw Dots ─────────────────────────────────────────────────
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.beginPath();
      for (let cy = -DOT_STEP; cy < height + DOT_STEP; cy += DOT_STEP) {
        for (let cx = -DOT_STEP; cx < width + DOT_STEP; cx += DOT_STEP) {
           const p = applyWarps(cx, cy);
           ctx.moveTo(p.x, p.y);
           ctx.arc(p.x, p.y, DOT_RADIUS, 0, Math.PI * 2);
        }
      }
      ctx.fill();

      // ── Draw Lines ────────────────────────────────────────────────
      ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let gy = LINE_STEP; gy < height; gy += LINE_STEP) {
        let firstPoint = true;
        for (let gx = -LINE_STEP; gx <= width + LINE_STEP; gx += LINE_STEP / 2) {
          const p = applyWarps(gx, gy);
          if (firstPoint) { ctx.moveTo(p.x, p.y); firstPoint = false; }
          else ctx.lineTo(p.x, p.y);
        }
      }
      ctx.stroke();

      ctx.beginPath();
      for (let gx = LINE_STEP; gx < width; gx += LINE_STEP) {
        let firstPoint = true;
        for (let gy = -LINE_STEP; gy <= height + LINE_STEP; gy += LINE_STEP / 2) {
          const p = applyWarps(gx, gy);
          if (firstPoint) { ctx.moveTo(p.x, p.y); firstPoint = false; }
          else ctx.lineTo(p.x, p.y);
        }
      }
      ctx.stroke();

      // ── Draw Electric Currents (Radiating Sun Rays) ───────────────
      if (mouseRef.current.x !== -1000) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const numRays = 16;
        const maxDist = 300; // Rays fade out past 300px
        
        ctx.lineWidth = 1.6;
        
        for (let j = 0; j < numRays; j++) {
          // Angle of the ray with a slow wiggling path
          const angle = (j / numRays) * Math.PI * 2 + Math.sin(Date.now() * 0.0003 + j) * 0.08;
          
          // Phase of the pulse for this ray (offset by index to make them shoot at different times)
          const rayOffset = j * 85;
          const pulseCenter = ((Date.now() * 0.07) + rayOffset) % maxDist; // Slow propagation speed (0.07)
          
          const rStart = Math.max(10, pulseCenter - 50);
          const rEnd = Math.min(maxDist - 20, pulseCenter + 50);
          
          if (rEnd > rStart) {
            const fade = Math.max(0, (maxDist - pulseCenter) / maxDist);
            const opacity = fade * 0.5; // Fades as it moves out
            
            // Draw a jagged line segment for the electric current
            const steps = 4;
            const perpAngle = angle + Math.PI / 2;
            
            ctx.beginPath();
            const startX = mx + Math.cos(angle) * rStart;
            const startY = my + Math.sin(angle) * rStart;
            ctx.moveTo(startX, startY);
            
            for (let k = 1; k <= steps; k++) {
              const r = rStart + (rEnd - rStart) * (k / steps);
              const bx = mx + Math.cos(angle) * r;
              const by = my + Math.sin(angle) * r;
              
              // Jagged lightning flicker offset
              let offsetX = 0;
              let offsetY = 0;
              if (k < steps) {
                const wiggle = (Math.random() - 0.5) * 6 * fade;
                offsetX = Math.cos(perpAngle) * wiggle;
                offsetY = Math.sin(perpAngle) * wiggle;
              }
              
              ctx.lineTo(bx + offsetX, by + offsetY);
            }
            
            ctx.strokeStyle = `rgba(10, 50, 210, ${opacity})`; // Nice dark lightning blue
            ctx.stroke();
          }
        }
      }

      // ── Cursor Spotlight ──────────────────────────────────────────
      if (mouseRef.current.x !== -1000) {
        // Outer glow (nice dark sapphire blue)
        const grd = ctx.createRadialGradient(mouseRef.current.x, mouseRef.current.y, 0, mouseRef.current.x, mouseRef.current.y, 300);
        grd.addColorStop(0, "rgba(0, 25, 110, 0.2)");
        grd.addColorStop(0.5, "rgba(0, 15, 80, 0.06)");
        grd.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 300, 0, Math.PI * 2);
        ctx.fill();

        // Sharp electric inner core
        const coreGrd = ctx.createRadialGradient(mouseRef.current.x, mouseRef.current.y, 0, mouseRef.current.x, mouseRef.current.y, 60);
        coreGrd.addColorStop(0, "rgba(0, 50, 180, 0.22)");
        coreGrd.addColorStop(1, "rgba(0, 50, 180, 0)");
        ctx.fillStyle = coreGrd;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 60, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}
    />
  );
}
