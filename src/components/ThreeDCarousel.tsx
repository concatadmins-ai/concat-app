"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CAROUSEL_CARDS = [
  { title: 'MODERN CASUALS', btnText: 'visit modern casuals floor', img: '/modern_casuals_1784145387264.png', href: '/floors' },
  { title: 'SEMI FORMALS', btnText: 'visit semi formals floor', img: '/semi_formals_1784145407787.png', href: '/floors' },
  { title: 'ACCESSORIES', btnText: 'visit accessories floor', img: '/accessories_1784145426818.png', href: '/floors' },
  { title: 'FOOTWEAR', btnText: 'visit footwear floor', img: '/footwear_1784145445750.png', href: '/floors' },
  { title: 'FORMALS', btnText: 'visit formals floor', img: '/formals_1784145500501.png', href: '/floors' },
  { title: 'EYEWEAR', btnText: 'visit eyewear floor', img: '/eyewear_1784145482095.png', href: '/floors' }
];

export default function ThreeDCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stateRef = useRef({
    angle: 0,
    targetAngle: 0,
    hoveredIdx: -1,
  });

  useEffect(() => {
    const N = CAROUSEL_CARDS.length;
    const rx = 380;
    const rz = 130;
    let animationFrameId: number;

    const tick = () => {
      const state = stateRef.current;
      const cardEls = cardsRef.current;

      // Find the card index currently closest to the front (maximum Z)
      let closestIdx = -1;
      let maxZ = -Infinity;
      for (let j = 0; j < N; j++) {
        const theta_j = state.angle + (j / N) * Math.PI * 2;
        const z_j = Math.cos(theta_j) * rz;
        if (z_j > maxZ) {
          maxZ = z_j;
          closestIdx = j;
        }
      }

      // Only allow hover expansion for the card that is currently in the center front
      const activeHoverIdx = state.hoveredIdx === closestIdx ? state.hoveredIdx : -1;

      if (activeHoverIdx === -1) {
        state.angle += (state.targetAngle - state.angle) * 0.08;
      }

      for (let i = 0; i < N; i++) {
        const el = cardEls[i];
        if (!el) continue;

        const theta = state.angle + (i / N) * Math.PI * 2;
        const x = Math.sin(theta) * rx;
        const z = Math.cos(theta) * rz;
        const zNorm = z / rz;
        const isHov = activeHoverIdx === i;
        const depth = (zNorm + 1) / 2; // 0=back, 1=front

        const btn = el.querySelector(".visit-btn") as HTMLElement;
        const title = el.querySelector(".card-title") as HTMLElement;

        if (activeHoverIdx !== -1) {
          if (isHov) {
            el.style.width = "560px";
            el.style.height = "315px";
            el.style.left = "-280px";
            el.style.top = "-157.5px";
            el.style.transform =
              "translateX(0px) translateZ(350px) translateY(0px) scale(1.0)";
            el.style.opacity = "1.0";
            el.style.filter = "";
            el.style.zIndex = "999";
            el.style.boxShadow =
              "0 0 80px rgba(139,92,246,0.55), 0 0 0 2.5px rgba(255,255,255,0.7)";
            el.style.borderColor = "rgba(255,255,255,0.8)";
            if (btn) {
              btn.style.opacity = "1";
              btn.style.height = "34px";
              btn.style.padding = "8px 24px";
              btn.style.marginTop = "14px";
            }
            if (title) {
              title.style.fontSize = "24px";
            }
          } else {
            el.style.width = "230px";
            el.style.height = "380px";
            el.style.left = "-115px";
            el.style.top = "-190px";
            el.style.transform = `translateX(${(x * 1.2).toFixed(1)}px) translateZ(${z.toFixed(
              1
            )}px) translateY(0px) scale(${((0.6 + 0.4 * depth) * 0.65).toFixed(4)})`;
            el.style.opacity = "0.22";
            el.style.filter = "blur(2.5px)";
            el.style.zIndex = String(Math.round(depth * 100));
            el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.5)";
            el.style.borderColor = "rgba(255,255,255,0.22)";
            if (btn) {
              btn.style.opacity = "0";
              btn.style.height = "0px";
              btn.style.padding = "0px";
              btn.style.marginTop = "0px";
            }
            if (title) {
              title.style.fontSize = "15px";
            }
          }
        } else {
          const scale = 0.6 + 0.4 * depth;
          const op = 0.8 + 0.2 * depth;
          const blur = (1 - depth) * 2;

          el.style.width = "230px";
          el.style.height = "380px";
          el.style.left = "-115px";
          el.style.top = "-190px";
          el.style.transform = `translateX(${x.toFixed(1)}px) translateZ(${z.toFixed(
            1
          )}px) translateY(0px) scale(${scale.toFixed(4)})`;
          el.style.opacity = op.toFixed(3);
          el.style.filter = blur > 0.2 ? `blur(${blur.toFixed(1)}px)` : "";
          el.style.zIndex = String(Math.round(depth * 200));
          el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.5)";
          el.style.borderColor = "rgba(255,255,255,0.22)";
          if (btn) {
            btn.style.opacity = "0";
            btn.style.height = "0px";
            btn.style.padding = "0px";
            btn.style.marginTop = "0px";
          }
          if (title) {
            title.style.fontSize = "15px";
          }
        }
      }
      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (stateRef.current.hoveredIdx === -1) {
      stateRef.current.targetAngle += (Math.PI * 2) / CAROUSEL_CARDS.length;
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (stateRef.current.hoveredIdx === -1) {
      stateRef.current.targetAngle -= (Math.PI * 2) / CAROUSEL_CARDS.length;
    }
  };

  return (
    <section 
      id="all-brands" 
      className="h-[100vh] w-full relative z-10 overflow-hidden select-none scroll-snap-align-start"
    >
      {/* Heading */}
      <div className="absolute top-[50px] left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
        <div className="text-[11px] font-bold tracking-[4px] uppercase text-[#391c7a]/45 mb-2">
          Curated Showcase
        </div>
        <h2 className="m-0 font-bold text-4xl md:text-5xl lg:text-6xl tracking-tighter text-[#391c7a] leading-none uppercase">
          Our Collection
        </h2>
      </div>

      {/* 3D Carousel Stage */}
      <div 
        ref={containerRef}
        className="absolute inset-0 z-10"
        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      >
        <div 
          id="carousel-scene" 
          className="absolute left-1/2 top-[58%] w-0 h-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {CAROUSEL_CARDS.map((card, idx) => (
            <div
              key={idx}
              ref={(el) => { cardsRef.current[idx] = el; }}
              data-index={idx}
              onMouseEnter={() => { stateRef.current.hoveredIdx = idx; }}
              onMouseLeave={() => { stateRef.current.hoveredIdx = -1; }}
              className="absolute bg-[#F9F7F1]/10 rounded-2xl overflow-hidden border border-white/30 shadow-2xl cursor-pointer select-none"
              style={{
                width: "230px",
                height: "380px",
                left: "-115px",
                top: "-190px",
                willChange: "transform, opacity, width, height, left, top",
                transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), width 0.8s cubic-bezier(0.16, 1, 0.3, 1), height 0.8s cubic-bezier(0.16, 1, 0.3, 1), left 0.8s cubic-bezier(0.16, 1, 0.3, 1), top 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease, border-color 0.4s ease, box-shadow 0.4s ease, filter 0.6s ease"
              }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#391c7a]/65 via-[#391c7a]/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <div 
                  className="card-title font-bold text-white uppercase tracking-wider text-sm lg:text-base leading-tight stroke-black transition-all duration-500"
                >
                  {card.title}
                </div>
                <Link 
                  href={card.href}
                  className="visit-btn inline-flex items-center justify-center bg-black/85 text-white border border-white/30 rounded-full font-bold uppercase tracking-[3px] text-[10px] opacity-0 h-0 mt-0 overflow-hidden transition-all duration-300 hover:bg-white hover:text-black"
                >
                  {card.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nav Controls */}
      <button 
        onClick={handlePrev}
        className="absolute left-10 top-[58%] -translate-y-1/2 z-30 w-14 h-14 rounded-full border border-white/40 bg-white/20 hover:bg-white/40 text-[#391c7a] hover:text-[#8b5cf6] backdrop-blur-md flex items-center justify-center shadow-lg transition-all hover:scale-110"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-10 top-[58%] -translate-y-1/2 z-30 w-14 h-14 rounded-full border border-white/40 bg-white/20 hover:bg-white/40 text-[#391c7a] hover:text-[#8b5cf6] backdrop-blur-md flex items-center justify-center shadow-lg transition-all hover:scale-110"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" strokeLinecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      {/* Blend reflection floor overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[38%] pointer-events-none z-[6] bg-gradient-to-b from-transparent via-[#a8a2cc]/10 to-[#391c7a]/12" />
    </section>
  );
}
