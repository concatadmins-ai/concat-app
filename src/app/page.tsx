"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ─── Design Tokens ────────────────────────────────────────────────
const BURG      = "#FFFFFF";
const BURG_MID  = "#CCCCCC";
const BURG_LIGHT= "#AAAAAA";
const CREAM     = "#111111";
const CREAM_DARK= "#333333";

// ─── DATA ─────────────────────────────────────────────────────────
const CAROUSEL_CARDS = [
  { title: "MODERN CASUALS", btnText: "visit modern casuals floor", img: "/modern_casuals_1784145387264.png", href: "/floors" },
  { title: "SEMI FORMALS",   btnText: "visit semi formals floor",   img: "/semi_formals_1784145407787.png",  href: "/floors" },
  { title: "ACCESSORIES",    btnText: "visit accessories floor",    img: "/accessories_1784145426818.png",   href: "/floors" },
  { title: "FOOTWEAR",       btnText: "visit footwear floor",       img: "/footwear_1784145445750.png",      href: "/floors" },
  { title: "FORMALS",        btnText: "visit formals floor",        img: "/formals_1784145500501.png",       href: "/floors" },
  { title: "EYEWEAR",        btnText: "visit eyewear floor",        img: "/eyewear_1784145482095.png",       href: "/floors" },
];

const BRAND_CARDS = [
  { id: "A", brand: "maicharacter", tagline: "Techwear", accent: BURG, desc: "Cyberpunk and functional techwear engineered for the modern nomad.", type: "video", src: "https://d8j0ntlcm91z4.cloudfront.net/user_35rW7NAdtcMtzpF5bPgujmS1f0L/hf_20260715_124221_9ebebe94-0bc0-4d10-9c3d-93099331c307.mp4", href: "/shop" },
  { id: "B", brand: "orangblue",    tagline: "Bold",     accent: BURG_MID,  desc: "Bold silhouettes and hyper-minimal fashion forward essentials.", type: "video", src: "https://d8j0ntlcm91z4.cloudfront.net/user_35rW7NAdtcMtzpF5bPgujmS1f0L/hf_20260715_124255_5698b73d-6520-4094-9000-8770e6015b3f.mp4", href: "/shop" },
  { id: "C", brand: "spoocy",       tagline: "Neo-Grunge",accent: BURG_LIGHT,desc: "Atmospheric neo-grunge and reworked street apparel.", type: "image", src: "https://d8j0ntlcm91z4.cloudfront.net/user_35rW7NAdtcMtzpF5bPgujmS1f0L/hf_20260715_124258_931a7f4e-5230-41e1-a2de-5b9c47060d4d.png", href: "/shop" },
  { id: "D", brand: "crewdogcrep",  tagline: "Utility",  accent: BURG,  desc: "Distressed canvas footwear and industrial utility accessories.", type: "video", src: "https://d8j0ntlcm91z4.cloudfront.net/user_35rW7NAdtcMtzpF5bPgujmS1f0L/hf_20260715_124217_a8f407dc-4235-40e2-af60-843970a65926.mp4", href: "/shop" },
];

const TOP_PRODUCTS = [
  { id: 1, name: "Velvet Evening Gown", brand: "CONCAT", price: 1200, image: "/media__1784131496078.png" },
  { id: 2, name: "Silk Overcoat",       brand: "AURA",   price: 850,  image: "/media__1784131738979.png" },
  { id: 3, name: "Leather Tote",        brand: "NOVA",   price: 450,  image: "/media__1784132058127.png" },
  { id: 6, name: "Monolith Boots",      brand: "NOVA",   price: 890,  image: "/media__1784132530186.png" },
  { id: 7, name: "Tailored Blazer",     brand: "CONCAT", price: 1100, image: "/media__1784132886336.png" },
];

// ─── REUSABLE SCROLL INDICATOR ────────────────────────────────────
function ScrollIndicator({ light = false }: { light?: boolean }) {
  const color = light ? CREAM : BURG;
  return (
    <div style={{
      position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
      display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
      color, opacity: 0.6, fontSize: 10, fontWeight: 700, letterSpacing: 2,
      textTransform: "uppercase", pointerEvents: "none", zIndex: 20
    }}>
      <span className="animate-pulse">Scroll</span>
      <svg className="animate-bounce" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </div>
  );
}

// ─── SECTION 1 : HERO ─────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="snap-section" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 36px 36px", boxSizing: "border-box" }}>
      <div style={{
        width: "100%", height: "82vh", borderRadius: 36,
        background: "#F9F7F1", // Opaque
        border: "1.5px solid rgba(74,14,23,0.15)",
        boxShadow: "0 30px 70px rgba(74,14,23,0.12)",
        position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: 48, boxSizing: "border-box", overflow: "hidden", zIndex: 5,
      }}>
        {/* Campaign image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/media__1784130067399.jpg')",
          backgroundSize: "cover", backgroundPosition: "center 30%",
          opacity: 0.45,
        }} />
        {/* Vignette to bottom so buttons are readable */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${BURG}cc 0%, transparent 55%)` }} />

        {/* CONCAT wordmark watermark */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          fontFamily: "inherit", fontSize: "clamp(60px,12vw,170px)",
          fontWeight: 900, letterSpacing: -6, color: "rgba(255,255,255,0.04)",
          pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap", zIndex: 1,
        }}>
          CONCAT
        </div>

        {/* Buttons */}
        <div style={{ position: "relative", zIndex: 5, display: "flex", gap: 14, alignItems: "center" }}>
          <Link href="/floors" className="hero-btn">
            View Floors
          </Link>
          <Link href="/stores" className="hero-btn">
            View Stores
          </Link>
          <Link href="/shop" className="hero-btn">
            Full Collection
          </Link>
        </div>

        <ScrollIndicator light />
      </div>
    </section>
  );
}

// ─── SECTION 2 : ACCORDION BRAND COLLAGE ─────────────────────────
function AccordionSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="featured" className="snap-section" style={{ padding: "100px 36px 40px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ height: "84vh", width: "100%", display: "flex", gap: 20 }}>
        {BRAND_CARDS.map((card) => {
          const isHov    = hovered === card.id;
          const flexVal  = hovered ? (isHov ? 2.4 : 0.55) : 1;
          const opacity  = hovered ? (isHov ? 1 : 0) : 1;
          const translateY = hovered && !isHov ? 16 : 0;

          return (
            <Link
              key={card.id}
              href={card.href}
              className="expand-card"
              style={{ flex: flexVal }}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Media */}
              {card.type === "video"
                ? <video src={card.src} autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                : <img src={card.src} alt={card.brand} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              }
              {/* Overlay */}
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${BURG}dd 0%, rgba(74,14,23,0.1) 55%, transparent 100%)`, zIndex: 1 }} />

              {/* Text - Subheading removed, Brand Title smaller */}
              <div style={{
                position: "absolute", left: 28, bottom: 28, zIndex: 2, pointerEvents: "none",
                transition: "opacity 0.4s ease, transform 0.45s ease",
                opacity, transform: `translateY(${translateY}px)`,
              }}>
                <h3 style={{
                  fontFamily: "inherit", fontSize: "clamp(18px,2vw,24px)", fontWeight: 900,
                  color: CREAM, margin: 0, letterSpacing: -0.5, lineHeight: 1, textTransform: "uppercase"
                }}>
                  {card.brand}
                </h3>
                <p style={{ margin: "10px 0 0", fontSize: 13, color: "rgba(249,247,241,0.7)", maxWidth: 300, lineHeight: 1.5 }}>
                  {card.desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <ScrollIndicator light />
    </section>
  );
}

// ─── SECTION 3 : 3D CAROUSEL (FLOORS) ────────────────────────────
function CarouselSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stateRef = useRef({ angle: 0, targetAngle: 0, hoveredIdx: -1 });
  const animRef  = useRef<number>();
  const N = CAROUSEL_CARDS.length;
  const rx = 380, rz = 130;

  useEffect(() => {
    const tick = () => {
      const s = stateRef.current;
      const cardEls = cardsRef.current;

      let closestIdx = -1, maxZ = -Infinity;
      for (let j = 0; j < N; j++) {
        const zj = Math.cos(s.angle + (j / N) * Math.PI * 2) * rz;
        if (zj > maxZ) { maxZ = zj; closestIdx = j; }
      }

      const hoverActive = s.hoveredIdx === closestIdx ? s.hoveredIdx : -1;
      if (hoverActive === -1) s.angle += (s.targetAngle - s.angle) * 0.08;

      for (let i = 0; i < N; i++) {
        const el  = cardEls[i];
        if (!el) continue;
        const theta = s.angle + (i / N) * Math.PI * 2;
        const x     = Math.sin(theta) * rx;
        const z     = Math.cos(theta) * rz;
        const depth = (z / rz + 1) / 2;
        const isHov = hoverActive === i;
        const btn   = el.querySelector(".visit-btn") as HTMLElement;
        const title = el.querySelector(".card-title") as HTMLElement;

        if (hoverActive !== -1) {
          if (isHov) {
            el.style.cssText = `position:absolute;width:560px;height:315px;left:-280px;top:-157.5px;transform:translateX(0) translateZ(350px) scale(1);opacity:1;filter:none;z-index:999;box-shadow:0 0 60px rgba(74,14,23,0.4),0 0 0 2.5px rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.7);border-radius:18px;overflow:hidden;cursor:pointer;will-change:transform;box-sizing:border-box;border:1px solid rgba(255,255,255,0.35);transition:transform 0.8s cubic-bezier(0.16,1,0.3,1),width 0.8s cubic-bezier(0.16,1,0.3,1),height 0.8s cubic-bezier(0.16,1,0.3,1),left 0.8s cubic-bezier(0.16,1,0.3,1),top 0.8s cubic-bezier(0.16,1,0.3,1),opacity 0.6s ease,filter 0.6s ease;`;
            if (btn) { btn.style.opacity="1"; btn.style.height="34px"; btn.style.padding="8px 22px"; btn.style.marginTop="14px"; }
            if (title) title.style.fontSize="22px";
          } else {
            const sc = ((0.6 + 0.4 * depth) * 0.65).toFixed(4);
            el.style.cssText = `position:absolute;width:230px;height:380px;left:-115px;top:-190px;transform:translateX(${(x*1.2).toFixed(1)}px) translateZ(${z.toFixed(1)}px) scale(${sc});opacity:0.2;filter:blur(2px);z-index:${Math.round(depth*100)};border-radius:18px;overflow:hidden;cursor:pointer;will-change:transform;box-sizing:border-box;border:1px solid rgba(255,255,255,0.25);box-shadow:0 8px 32px rgba(0,0,0,0.2);transition:transform 0.8s cubic-bezier(0.16,1,0.3,1),width 0.8s cubic-bezier(0.16,1,0.3,1),height 0.8s cubic-bezier(0.16,1,0.3,1),left 0.8s cubic-bezier(0.16,1,0.3,1),top 0.8s cubic-bezier(0.16,1,0.3,1),opacity 0.6s ease,filter 0.6s ease;`;
            if (btn) { btn.style.opacity="0"; btn.style.height="0"; btn.style.padding="0"; btn.style.marginTop="0"; }
            if (title) title.style.fontSize="14px";
          }
        } else {
          const scale = (0.6 + 0.4 * depth).toFixed(4);
          const op    = (0.8 + 0.2 * depth).toFixed(3);
          const blur  = (1 - depth) * 2;
          el.style.cssText = `position:absolute;width:230px;height:380px;left:-115px;top:-190px;transform:translateX(${x.toFixed(1)}px) translateZ(${z.toFixed(1)}px) scale(${scale});opacity:${op};${blur>0.2?`filter:blur(${blur.toFixed(1)}px);`:""}z-index:${Math.round(depth*200)};border-radius:18px;overflow:hidden;cursor:pointer;will-change:transform;box-sizing:border-box;border:1px solid rgba(255,255,255,0.35);box-shadow:0 12px 40px rgba(0,0,0,0.25);transition:transform 0.8s cubic-bezier(0.16,1,0.3,1),width 0.8s cubic-bezier(0.16,1,0.3,1),height 0.8s cubic-bezier(0.16,1,0.3,1),left 0.8s cubic-bezier(0.16,1,0.3,1),top 0.8s cubic-bezier(0.16,1,0.3,1),opacity 0.6s ease,filter 0.6s ease;`;
          if (btn) { btn.style.opacity="0"; btn.style.height="0"; btn.style.padding="0"; btn.style.marginTop="0"; }
          if (title) title.style.fontSize="14px";
        }
      }
      animRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  const navBtnStyle: React.CSSProperties = {
    position: "absolute", top: "58%", width: 52, height: 52, borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.45)",
    background: "rgba(255,255,255,0.28)", color: BURG,
    backdropFilter: "blur(20px)", cursor: "pointer",
    display: "flex", alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 20px rgba(74,14,23,0.12)", transition: "all 0.3s ease", zIndex: 30,
  };

  return (
    <section id="all-brands" className="snap-section" style={{ overflow: "hidden" }}>
      {/* Heading Left Aligned & Pushed Down to clear navbar, Subheading removed, size reduced */}
      <div style={{ position: "absolute", top: 110, left: 48, zIndex: 20, textAlign: "left", pointerEvents: "none" }}>
        <h2 style={{ margin: 0, fontFamily: "inherit", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 950, letterSpacing: -1.5, color: BURG, lineHeight: 1, textTransform: "uppercase" }}>
          floors
        </h2>
      </div>

      {/* 3D Stage */}
      <div style={{ position: "absolute", inset: 0, perspective: 1200, transformStyle: "preserve-3d" }}>
        <div style={{ position: "absolute", left: "50%", top: "58%", width: 0, height: 0, transformStyle: "preserve-3d" }}>
          {CAROUSEL_CARDS.map((card, idx) => (
            <div
              key={idx}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="carousel-card"
              onMouseEnter={() => { stateRef.current.hoveredIdx = idx; }}
              onMouseLeave={() => { stateRef.current.hoveredIdx = -1; }}
            >
              <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${card.img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${BURG}cc 0%, rgba(74,14,23,0.08) 50%, transparent 100%)` }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 18px" }}>
                <div className="card-title" style={{ fontSize: 14, fontWeight: 800, color: CREAM, textTransform: "uppercase", letterSpacing: 0.5, lineHeight: 1.2, textShadow: "0 2px 8px rgba(0,0,0,0.5)", transition: "font-size 0.5s ease" }}>
                  {card.title}
                </div>
                <Link href={card.href} className="visit-btn" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0, background: BURG, color: CREAM, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 9999, fontFamily: "inherit", fontSize: 9, fontWeight: 700, letterSpacing: 3, cursor: "pointer", opacity: 0, height: 0, marginTop: 0, overflow: "hidden", transition: "all 0.4s ease", boxSizing: "border-box" }}>
                  {card.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nav buttons */}
      <button style={{ ...navBtnStyle, left: 36, transform: "translateY(-50%)" }}
        onClick={() => { if (stateRef.current.hoveredIdx === -1) stateRef.current.targetAngle += Math.PI * 2 / N; }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.5)"; (e.currentTarget as HTMLElement).style.transform="translateY(-50%) scale(1.15)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.28)"; (e.currentTarget as HTMLElement).style.transform="translateY(-50%) scale(1)"; }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button style={{ ...navBtnStyle, right: 36, transform: "translateY(-50%)" }}
        onClick={() => { if (stateRef.current.hoveredIdx === -1) stateRef.current.targetAngle -= Math.PI * 2 / N; }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.5)"; (e.currentTarget as HTMLElement).style.transform="translateY(-50%) scale(1.15)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.28)"; (e.currentTarget as HTMLElement).style.transform="translateY(-50%) scale(1)"; }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      <ScrollIndicator />
    </section>
  );
}

// ─── SECTION 4 : TOP SELLING (HORIZONTAL SCROLL) ──────────────────
function TopSellingSection() {
  return (
    <section className="snap-section" style={{ padding: "140px 36px 40px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}>
        {/* Heading Left Aligned & Cleared, Subheading removed, size reduced */}
        <div style={{ marginBottom: 28, paddingLeft: 12 }}>
          <h2 style={{ margin: 0, fontFamily: "inherit", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 950, letterSpacing: -1.5, color: BURG, textTransform: "uppercase" }}>top selling</h2>
        </div>

        {/* Horizontal scroll container */}
        <div
          className="hide-scrollbar"
          style={{ display: "flex", gap: 24, overflowX: "auto", padding: "12px", scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
        >
          {TOP_PRODUCTS.map((prod) => (
            <Link href={`/shop/${prod.id}`} key={prod.id} style={{ textDecoration: "none", flexShrink: 0 }}>
              <div className="glass-card" style={{ width: 260, borderRadius: 24, overflow: "hidden", cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ position: "relative", aspectRatio: "3/4" }}>
                  <img src={prod.image} alt={prod.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: BURG_LIGHT, margin: "0 0 4px" }}>{prod.brand}</p>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: BURG, margin: "0 0 8px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{prod.name}</h3>
                  <p style={{ fontSize: 15, fontWeight: 800, color: BURG, margin: 0 }}>${prod.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

// ─── SECTION 5 : AD CAMPAIGN PANEL ───────────────────────────────
function AdSection() {
  return (
    <section className="snap-section" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 36px 36px", boxSizing: "border-box" }}>
      <div style={{
        width: "100%", height: "82vh", borderRadius: 36,
        background: "#F9F7F1", // Completely opaque
        border: "1.5px solid rgba(74,14,23,0.15)",
        boxShadow: "0 30px 70px rgba(74,14,23,0.12)",
        position: "relative", overflow: "hidden"
      }}>
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_35rW7NAdtcMtzpF5bPgujmS1f0L/hf_20260715_124217_a8f407dc-4235-40e2-af60-843970a65926.mp4"
          autoPlay loop muted playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${BURG}bb 0%, transparent 60%)` }} />

        {/* Campaign Info - Subheading removed, size reduced */}
        <div style={{ position: "absolute", left: 48, bottom: 48, zIndex: 5 }}>
          <h3 style={{ fontFamily: "inherit", fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 950, color: CREAM, margin: 0, textTransform: "uppercase", letterSpacing: -0.5 }}>CREWDOG CREP</h3>
        </div>

        <ScrollIndicator light />
      </div>
    </section>
  );
}

// ─── SECTION 6 : FINALE ──────────────────────────────────────────
function FinaleSection() {
  return (
    <section id="finale" className="snap-section" style={{ padding: "100px 36px 40px", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: "inherit", fontSize: "clamp(70px,14vw,200px)", fontWeight: 900, letterSpacing: -6, lineHeight: 0.88, color: BURG, textAlign: "center" }}>
          concat
          <span style={{ color: BURG_LIGHT }}>.</span>
        </div>
        <div style={{ marginTop: 20, fontSize: 11, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase", color: "rgba(74,14,23,0.45)" }}>
          Aggregating the aesthetic underground
        </div>
      </div>

      <footer style={{
        borderRadius: 22, padding: "22px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14,
        background: "#F9F7F1", border: "1.5px solid rgba(74,14,23,0.15)",
        boxShadow: "0 10px 40px rgba(74,14,23,0.06)", zIndex: 10
      }}>
        <span style={{ fontFamily: "inherit", fontSize: 18, fontWeight: 900, color: BURG }}>concat.</span>
        <nav style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {[["Shop","/shop"],["Stores","/stores"],["About Us","/our-story"],["Contact","/support"]].map(([name, href]) => (
            <Link key={name} href={href}
              style={{ fontSize: 12, fontWeight: 700, color: BURG_MID, letterSpacing: 0.5, transition: "color 0.2s", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color=BURG)}
              onMouseLeave={(e) => (e.currentTarget.style.color=BURG_MID)}
            >
              {name}
            </Link>
          ))}
        </nav>
        <span style={{ fontSize: 11, fontWeight: 400, color: "rgba(74,14,23,0.4)" }}>© 2026 CONCAT</span>
      </footer>
    </section>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="snap-container">
      <HeroSection />
      <AccordionSection />
      <CarouselSection />
      <TopSellingSection />
      <AdSection />
      <FinaleSection />
    </div>
  );
}
