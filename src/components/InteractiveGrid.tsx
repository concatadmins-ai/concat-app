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

      // ── Draw Electric Currents ────────────────────────────────────
      if (mouseRef.current.x !== -1000) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const maxDist = 300; // Fades out completely past 300px
        
        // Horizontal currents radiating outward
        for (let gy = LINE_STEP; gy < height; gy += LINE_STEP) {
          let activePath = false;
          
          for (let gx = -LINE_STEP; gx <= width + LINE_STEP; gx += LINE_STEP / 2) {
            const dx = gx - mx;
            const dy = gy - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            // Outward propagating sine wave
            const waveVal = Math.sin(dist * 0.045 - Date.now() * 0.016);
            
            if (dist < maxDist && waveVal > 0.6) {
              const p = applyWarps(gx, gy);
              const fade = Math.max(0, (maxDist - dist) / maxDist);
              const waveFade = (waveVal - 0.6) / 0.4;
              const opacity = fade * waveFade * 0.55;
              
              if (!activePath) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                activePath = true;
              } else {
                ctx.lineTo(p.x, p.y);
              }
              
              ctx.strokeStyle = `rgba(15, 60, 220, ${opacity})`; // Dark lightning blue
              ctx.lineWidth = 1.8;
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
            } else {
              activePath = false;
            }
          }
        }

        // Vertical currents radiating outward
        for (let gx = LINE_STEP; gx < width; gx += LINE_STEP) {
          let activePath = false;
          
          for (let gy = -LINE_STEP; gy <= height + LINE_STEP; gy += LINE_STEP / 2) {
            const dx = gx - mx;
            const dy = gy - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            // Outward propagating sine wave
            const waveVal = Math.sin(dist * 0.045 - Date.now() * 0.016);
            
            if (dist < maxDist && waveVal > 0.6) {
              const p = applyWarps(gx, gy);
              const fade = Math.max(0, (maxDist - dist) / maxDist);
              const waveFade = (waveVal - 0.6) / 0.4;
              const opacity = fade * waveFade * 0.55;
              
              if (!activePath) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                activePath = true;
              } else {
                ctx.lineTo(p.x, p.y);
              }
              
              ctx.strokeStyle = `rgba(15, 60, 220, ${opacity})`; // Dark lightning blue
              ctx.lineWidth = 1.8;
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
            } else {
              activePath = false;
            }
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
