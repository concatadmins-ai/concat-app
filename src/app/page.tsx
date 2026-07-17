"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ─── Design Tokens ────────────────────────────────────────────────
const BURG      = "#111111";
const BURG_MID  = "#555555";
const BURG_LIGHT= "#777777";
const CREAM     = "#FFFFFF";
const CREAM_DARK= "#F5F5F5";

// ─── MEDIA MAPPINGS ───────────────────────────────────────────────
const HERO_VIDEO_SRCS = [
  "/real_ads/blueorng-advertisment.mp4",
  "/real_ads/gully_labs-advertisment.mp4",
  "/real_ads/5feet11-advertisment.mp4"
];

const AD_VIDEO_SRCS = [
  "/real_ads/vastramay-advertisment.mp4",
  "/real_ads/misobysonia-advertisment.mp4",
  "/real_ads/samandmarshall-advertisment.mp4"
];

function LocalVideoBackground({ src, opacity = 1 }: { src: string; opacity?: number }) {
  if (!src) return null;
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", opacity, transition: "opacity 1s ease", backgroundColor: "#111" }}>
      <video src={src} autoPlay loop muted playsInline style={{ position: "absolute", top: "50%", left: "50%", width: "100vw", height: "56.25vw", minHeight: "100vh", minWidth: "177.77vh", transform: "translate(-50%, -50%) scale(1.15)", objectFit: "cover", zIndex: 0 }} />
    </div>
  );
}

function LocalVideoCardBackground({ src, opacity = 1, scale = 1.05 }: { src: string; opacity?: number; scale?: number }) {
  if (!src) return null;
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", opacity, transition: "opacity 0.6s ease", backgroundColor: "#111" }}>
      <video src={src} autoPlay loop muted playsInline style={{ position: "absolute", top: "50%", left: "50%", width: "100%", height: "100%", transform: `translate(-50%, -50%) scale(${scale})`, objectFit: "cover", zIndex: 0 }} />
    </div>
  );
}



const FLOOR_IMAGES = [
  "/stock/hf_20260716_170918_8117694f-5cfb-4f2e-8081-6efa779dfc86.png",
  "/stock/hf_20260716_170924_df9ce8ea-ffec-4ce5-9372-6967b3068aa4.png",
  "/stock/hf_20260716_170930_fb120077-9502-4f6c-8cc4-c3b84fd5bd22.png",
  "/stock/hf_20260716_170936_4b1e50be-9830-4ea5-852f-125b625e55d8.png",
  "/stock/hf_20260716_170940_3f2a5b8b-b19d-487c-a7a0-1326b8509ddf.png",
  "/stock/hf_20260716_170945_f02782ca-48fb-4bd7-a7fc-c5fa4745f1d3.png",
  "/stock/hf_20260716_171353_17500f1a-037d-4b31-a7bd-869f029acd08.png"
];

const PRODUCT_IMAGES = [
  "/stock/hf_20260716_171358_f02d013b-66f0-4c44-a0a2-fcb8107b89a9.png",
  "/stock/hf_20260716_171403_bd14e7cd-f27b-4d9b-9ad8-30b9891c87b2 (1).png",
  "/stock/hf_20260716_171408_c7b21875-b648-412f-98e1-bb0c6a8b7c85.png",
  "/stock/hf_20260716_171413_d9f209ad-4baf-4502-acc9-cd477a8993e8.png",
  "/stock/hf_20260716_171420_7c7da42a-92b7-441e-9572-ee14edfb4819.png",
  "/stock/hf_20260716_171427_c5fca72f-8cc7-4385-a36b-71f6dea76f23.png",
  "/stock/hf_20260716_171434_94be5ab4-24e0-4e2e-b0fa-7dc5c6b19af6.png",
  "/stock/hf_20260716_171439_c41b8767-7905-444f-920e-9e56f8f4e920.png",
  "/stock/hf_20260716_171443_1894722d-98c6-4aa8-8827-0cc56a69ba7d.png",
  "/stock/hf_20260716_171449_28cd7c2c-c2db-4f4e-a616-38af99186804.png",
  "/stock/hf_20260716_171455_b1765adc-5e25-456b-b748-41d24200dc6b.png",
  "/stock/hf_20260716_171504_1c0920a8-ef61-4837-abdb-ea165072e097.png"
];

// ─── DATA ─────────────────────────────────────────────────────────
const CAROUSEL_CARDS = [
  { title: "BLUEORNG",                 btnText: "visit modern casuals floor", src: "/real_ads/blueorng-advertisment.mp4", href: "/floors" },
  { title: "5FEET11",                  btnText: "visit semi formals floor",   src: "/real_ads/5feet11-advertisment.mp4", href: "/floors" },
  { title: "MISO BY SONIA",            btnText: "visit accessories floor",    src: "/real_ads/misobysonia-advertisment.mp4", href: "/floors" },
  { title: "GULLY LABS",               btnText: "visit footwear floor",       src: "/real_ads/gully_labs-advertisment.mp4", href: "/floors" },
  { title: "THE BOMBAY SHIRT COMPANY", btnText: "visit formals floor",        src: "/real_ads/bombay_shirt_company-advertisment.mp4", href: "/floors" },
  { title: "SAM AND MARSHALL",         btnText: "visit eyewear floor",        src: "/real_ads/samandmarshall-advertisment.mp4", href: "/floors" },
  { title: "VASTRAMAY",                btnText: "visit traditionals floor",   src: "/real_ads/vastramay-advertisment.mp4", href: "/floors" },
];

const BRAND_CARDS = [
  { id: "A", brand: "", tagline: "", src: "", desc: "", isBlank: true },
  { id: "B", brand: "Blueorng", tagline: "Streetwear", src: "/real_ads/blueorng-advertisment.mp4", desc: "Aesthetic streetwear inspired by modern youth culture and bold expressions." },
  { id: "C", brand: "5feet11", tagline: "Linen & Casuals", src: "/real_ads/5feet11-advertisment.mp4", desc: "Premium fabrics and relaxed fits engineered for everyday elegance." },
  { id: "D", brand: "The Bombay Shirt Company", tagline: "Bespoke Shirts", src: "/real_ads/bombay_shirt_company-advertisment.mp4", desc: "Custom-made luxury shirting designed by you, tailored for comfort." },
  { id: "E", brand: "Sand Marshal", tagline: "Eyewear", src: "/real_ads/samandmarshall-advertisment.mp4", desc: "Visionary designer eyewear crafted to shield your sight and define your style." },
  { id: "F", brand: "Miso by Sonia", tagline: "Artisanal Jewelry", src: "/real_ads/misobysonia-advertisment.mp4", desc: "Handcrafted statement jewelry pieces made to last and elevate your identity." },
  { id: "G", brand: "Gully Labs", tagline: "Footwear", src: "/real_ads/gully_labs-advertisment.mp4", desc: "Sneakers that tell a story. Blending heritage craftsmanship with street sensibilities." },
  { id: "H", brand: "Vastramay", tagline: "Traditionals", src: "/real_ads/vastramay-advertisment.mp4", desc: "Ethnic fusion wear redefining modern Indian drapery and style." },
];

const TOP_PRODUCTS = [
  { id: 1, name: "Asymmetric Tech Jacket", brand: "MAY CHARACTER", price: 320, image: PRODUCT_IMAGES[0] },
  { id: 2, name: "Bold Graphic Tee",       brand: "ORANGE BLUE",   price: 85,  image: PRODUCT_IMAGES[1] },
  { id: 3, name: "Linen Wide Pants",       brand: "6'11\"",        price: 140,  image: PRODUCT_IMAGES[2] },
  { id: 4, name: "Bespoke Oxford",         brand: "MUMBAI SHIRT",  price: 200,  image: PRODUCT_IMAGES[3] },
  { id: 5, name: "Dune Aviators",          brand: "DUNE MARSHALS", price: 160,  image: PRODUCT_IMAGES[4] },
  { id: 6, name: "Urban Stompers",         brand: "STREET LABS",   price: 290,  image: PRODUCT_IMAGES[5] },
  { id: 7, name: "Silver Choker",          brand: "PISO BY SONIA", price: 410, image: PRODUCT_IMAGES[6] },
  { id: 8, name: "Embroidered Kurta",      brand: "HERITAGE",      price: 180,  image: PRODUCT_IMAGES[7] },
  { id: 9, name: "Cargo Noir",             brand: "MAY CHARACTER", price: 210,  image: PRODUCT_IMAGES[8] },
  { id: 10, name: "Oversized Hoodie",      brand: "ORANGE BLUE",   price: 120, image: PRODUCT_IMAGES[9] },
  { id: 11, name: "Linen Blazer",          brand: "6'11\"",        price: 350,  image: PRODUCT_IMAGES[10] },
  { id: 12, name: "Tailored Trousers",     brand: "MUMBAI SHIRT",  price: 175,  image: PRODUCT_IMAGES[11] },
];

// ─── REUSABLE SCROLL INDICATOR ────────────────────────────────────
function ScrollIndicator() {
  return (
    <div style={{
      position: "fixed", bottom: 16, left: "50%", transform: "translateX(-50%)",
      display: "flex", alignItems: "center", gap: 6,
      padding: "6px 14px", borderRadius: 9999,
      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
      color: "rgba(255,255,255,0.6)", opacity: 1, zIndex: 9999,
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
    }}>
      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>SCROLL</span>
      <svg className="animate-bounce" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </div>
  );
}

// ─── SECTION 1 : HERO ─────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="snap-section" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 36px 36px", boxSizing: "border-box", overflow: "hidden" }}>
      
      {/* Foreground Typographical Elements */}
      <div style={{ position: "absolute", top: "22%", left: "6%", zIndex: 2, pointerEvents: "none" }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ margin: 0, fontSize: "clamp(48px, 7vw, 110px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: -4, color: BURG, lineHeight: 0.85 }}
        >
          Aggregating <br/>
          <span style={{ color: BURG_LIGHT }}>The</span> <br/>
          Underground.
        </motion.h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: "100%", maxWidth: "1000px", aspectRatio: "16/9", borderRadius: 36,
          background: CREAM,
          border: "1.5px solid rgba(0,0,0,0.1)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.15)",
          position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between",
          padding: 40, boxSizing: "border-box", overflow: "hidden", zIndex: 5,
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <video src="/real_ads/first_section_web.mp4" autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Dynamic vignette */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)`, zIndex: 1 }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 30%)`, zIndex: 1 }} />

        {/* Top bar inside panel */}
        <div style={{ position: "relative", zIndex: 5, display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
          <div style={{ padding: "6px 14px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", borderRadius: 999, border: "1px solid rgba(255,255,255,0.2)" }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: CREAM, textTransform: "uppercase" }}>CONCAT.</span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff3333" }} />
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: CREAM, textTransform: "uppercase" }}>LIVE</span>
          </div>
        </div>

        {/* Inner Content overlay */}
        <div style={{ position: "relative", zIndex: 5, display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>
                Aesthetic Directives
              </div>
              <h2 style={{ margin: 0, fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 900, color: CREAM, textTransform: "uppercase", letterSpacing: -1.5, lineHeight: 1 }}>
                FALL '26
              </h2>
            </div>
            
            <div style={{ display: "flex", gap: 12 }}>
              <Link href="/floors" className="hero-btn">View Floors</Link>
              <Link href="/stores" className="hero-btn">View Stores</Link>
            </div>
          </div>

          <Link href="/shop" style={{ 
            display: "inline-flex", alignItems: "center", justifyContent: "center", 
            width: 64, height: 64, borderRadius: "50%", background: CREAM, color: BURG,
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
            textDecoration: "none"
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.15) rotate(15deg)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1) rotate(0deg)"; }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

// ─── SECTION 2 : HORIZONTAL ACCORDION BRAND COLLAGE ───────────────
function AccordionSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  const row1Cards = BRAND_CARDS.slice(0, 4);
  const row2Cards = BRAND_CARDS.slice(4, 8);

  const isRow1Hovered = row1Cards.some((c) => c.id === hovered);
  const isRow2Hovered = row2Cards.some((c) => c.id === hovered);

  return (
    <>
      {/* SCREEN 1: Featured Stores (First 4) */}
      <section id="featured-1" className="snap-section" style={{ padding: "80px 36px 20px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: "100%", display: "flex", flexDirection: "column", position: "relative" }}
        >
          <div style={{ marginBottom: 16, paddingLeft: 12 }}>
            <h2 style={{ margin: 0, fontFamily: "inherit", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 950, letterSpacing: -1.5, color: BURG, lineHeight: 1, textTransform: "uppercase" }}>
              featured stores
            </h2>
          </div>
          
          <div style={{ position: "relative", width: "100%", maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: 20, height: "74vh", maxHeight: "660px", width: "100%" }}>
              {row1Cards.map((card) => {
                const isHov = hovered === card.id;
                const flexVal = isRow1Hovered ? (isHov ? 5 : 1) : 1;
                const opacity = hovered ? (isHov ? 1 : 0) : 1;
                const translateY = hovered && !isHov ? 16 : 0;

                if (card.isBlank) {
                  return (
                    <div
                      key={card.id}
                      className="expand-card"
                      style={{ 
                        flex: flexVal,
                        height: "100%",
                        transition: "flex 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                        borderRadius: 24,
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1.5px solid rgba(0, 0, 0, 0.08)",
                        backdropFilter: "blur(20px)",
                      }}
                      onMouseEnter={() => setHovered(card.id)}
                      onMouseLeave={() => setHovered(null)}
                    />
                  );
                }

                return (
                  <Link
                    key={card.id}
                    href="/shop"
                    className="expand-card"
                    style={{ 
                      flex: flexVal,
                      height: "100%",
                      transition: "flex 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      borderRadius: 24,
                      overflow: "hidden"
                    }}
                    onMouseEnter={() => setHovered(card.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <LocalVideoCardBackground src={card.src} opacity={1} scale={(card as any).scale || 1.05} />
                    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)`, zIndex: 1 }} />

                    <div style={{
                      position: "absolute", left: 24, bottom: 24, right: 24, zIndex: 2, pointerEvents: "none",
                      transition: "opacity 0.4s ease, transform 0.45s ease",
                      opacity, transform: `translateY(${translateY}px)`,
                    }}>
                      <h3 style={{
                        fontFamily: "inherit", fontSize: "clamp(16px, 1.8vw, 21px)", fontWeight: 900,
                        color: CREAM, margin: 0, letterSpacing: -0.5, lineHeight: 1.1, textTransform: "uppercase",
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"
                      }}>
                        {card.brand}
                      </h3>
                      <p style={{ margin: "10px 0 0", fontSize: 13, color: "rgba(255,255,255,0.7)", maxWidth: 220, lineHeight: 1.4 }}>
                        {card.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* SCREEN 2: Featured Stores (Next 4) */}
      <section id="featured-2" className="snap-section" style={{ padding: "40px 36px 20px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: "100%", display: "flex", flexDirection: "column", position: "relative" }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: 20, height: "74vh", maxHeight: "660px", width: "100%" }}>
              {row2Cards.map((card) => {
                const isHov = hovered === card.id;
                const flexVal = isRow2Hovered ? (isHov ? 5 : 1) : 1;
                const opacity = hovered ? (isHov ? 1 : 0) : 1;
                const translateY = hovered && !isHov ? 16 : 0;

                if (card.isBlank) {
                  return (
                    <div
                      key={card.id}
                      className="expand-card"
                      style={{ 
                        flex: flexVal,
                        height: "100%",
                        transition: "flex 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                        borderRadius: 24,
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1.5px solid rgba(0, 0, 0, 0.08)",
                        backdropFilter: "blur(20px)",
                      }}
                      onMouseEnter={() => setHovered(card.id)}
                      onMouseLeave={() => setHovered(null)}
                    />
                  );
                }

                return (
                  <Link
                    key={card.id}
                    href="/shop"
                    className="expand-card"
                    style={{ 
                      flex: flexVal,
                      height: "100%",
                      transition: "flex 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      borderRadius: 24,
                      overflow: "hidden"
                    }}
                    onMouseEnter={() => setHovered(card.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <LocalVideoCardBackground src={card.src} opacity={1} scale={(card as any).scale || 1.05} />
                    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)`, zIndex: 1 }} />

                    <div style={{
                      position: "absolute", left: 24, bottom: 24, right: 24, zIndex: 2, pointerEvents: "none",
                      transition: "opacity 0.4s ease, transform 0.45s ease",
                      opacity, transform: `translateY(${translateY}px)`,
                    }}>
                      <h3 style={{
                        fontFamily: "inherit", fontSize: "clamp(16px, 1.8vw, 21px)", fontWeight: 900,
                        color: CREAM, margin: 0, letterSpacing: -0.5, lineHeight: 1.1, textTransform: "uppercase",
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"
                      }}>
                        {card.brand}
                      </h3>
                      <p style={{ margin: "10px 0 0", fontSize: 13, color: "rgba(255,255,255,0.7)", maxWidth: 220, lineHeight: 1.4 }}>
                        {card.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

// ─── SECTION 3 : 3D CAROUSEL (FLOORS) ────────────────────────────
function CarouselSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stateRef = useRef({ angle: 0, targetAngle: 0, hoveredIdx: -1 });
  const animRef  = useRef<number | null>(null);
  const N = CAROUSEL_CARDS.length;
  const rx = 550, rz = 200;

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
        
        // Hide cards that are in the back half of the cylinder
        const isVisible = z > 0;
        const op = isVisible ? 1 : 0;
        const pointerEvents = isVisible ? "auto" : "none";

        const vid = el.querySelector("video") as HTMLVideoElement;
        const isCenter = closestIdx === i;
        if (vid) {
          if (isCenter) {
            if (vid.paused) vid.play().catch(()=>{});
          } else {
            if (!vid.paused) {
              vid.pause();
              vid.currentTime = 0;
            }
          }
        }

        const scale = (0.6 + 0.4 * depth).toFixed(4);
        
        el.style.cssText = `position:absolute;width:225px;height:400px;left:-112.5px;top:-200px;transform:translateX(${x.toFixed(1)}px) translateZ(${z.toFixed(1)}px) scale(${scale});opacity:${op};pointer-events:${pointerEvents};filter:none;z-index:${Math.round(depth*200)};border-radius:18px;overflow:hidden;cursor:pointer;will-change:transform;box-sizing:border-box;border:1px solid rgba(255,255,255,0.35);box-shadow:0 12px 40px rgba(0,0,0,0.8);background-color:#111111;transition:transform 0.8s cubic-bezier(0.16,1,0.3,1),width 0.8s cubic-bezier(0.16,1,0.3,1),height 0.8s cubic-bezier(0.16,1,0.3,1),left 0.8s cubic-bezier(0.16,1,0.3,1),top 0.8s cubic-bezier(0.16,1,0.3,1),opacity 0.6s ease,filter 0.6s ease;`;

        if (hoverActive !== -1) {
          if (isHov) {
            if (btn) { btn.style.opacity="1"; btn.style.height="34px"; btn.style.padding="8px 22px"; btn.style.marginTop="14px"; }
          } else {
            if (btn) { btn.style.opacity="0"; btn.style.height="0"; btn.style.padding="0"; btn.style.marginTop="0"; }
          }
        } else {
          if (btn) { btn.style.opacity="0"; btn.style.height="0"; btn.style.padding="0"; btn.style.marginTop="0"; }
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
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
                style={{ backgroundColor: "#FFFFFF" }}
              >
                {/* Video removed from carousel as requested */}
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)`, zIndex: 1 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 55%)", pointerEvents: "none", zIndex: 1 }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 18px", zIndex: 2 }}>
                  <div className="card-title" style={{ fontSize: 14, fontWeight: 800, color: CREAM, textTransform: "uppercase", letterSpacing: 0.5, lineHeight: 1.2, textShadow: "0 2px 8px rgba(0,0,0,0.5)", transition: "font-size 0.5s ease" }}>
                    {card.title}
                  </div>
                  <Link href={card.href} className="visit-btn" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0, background: BURG, color: CREAM, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 9999, fontFamily: "inherit", fontSize: 9, fontWeight: 700, letterSpacing: 3, cursor: "pointer", opacity: 0, height: 0, marginTop: 0, overflow: "hidden", transition: "all 0.4s ease", boxSizing: "border-box" }}>
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
      </motion.div>
    </section>
  );
}

// ─── SECTION 4 : TOP SELLING (HORIZONTAL SCROLL) ──────────────────
function TopSellingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -350 : 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="snap-section" style={{ position: "relative", padding: "140px 36px 40px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: 1200, width: "100%", margin: "0 auto", position: "relative", transform: "translateY(-48px)" }}
      >
        {/* Heading Left Aligned & Cleared, Subheading removed, size reduced */}
        <div style={{ marginBottom: 28, paddingLeft: 12 }}>
          <h2 style={{ margin: 0, fontFamily: "inherit", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 950, letterSpacing: -1.5, color: BURG, textTransform: "uppercase" }}>hot right now</h2>
        </div>

        {/* Horizontal scroll container with relative positioning for side buttons and CSS mask fade edges */}
        <div style={{ position: "relative", width: "100%" }}>
          <div
            ref={scrollRef}
            className="hide-scrollbar"
            style={{ 
              display: "flex", gap: 24, overflowX: "auto", padding: "12px", 
              scrollBehavior: "smooth", WebkitOverflowScrolling: "touch",
              maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)"
            }}
          >
            {TOP_PRODUCTS.map((prod) => (
              <Link href={`/shop`} key={prod.id} style={{ textDecoration: "none", flexShrink: 0 }}>
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

          {/* Left/Right Center Edge Buttons */}
          <button 
            onClick={() => scroll('left')} 
            style={{ 
              position: "absolute", left: -24, top: "50%", transform: "translateY(-50%)",
              width: 48, height: 48, borderRadius: "50%", 
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)", 
              color: BURG, display: "flex", alignItems: "center", justifyContent: "center", 
              cursor: "pointer", transition: "all 0.3s ease", zIndex: 40,
              backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
            }} 
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.18)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-50%) scale(1.08)"; }} 
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-50%) scale(1)"; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button 
            onClick={() => scroll('right')} 
            style={{ 
              position: "absolute", right: -24, top: "50%", transform: "translateY(-50%)",
              width: 48, height: 48, borderRadius: "50%", 
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)", 
              color: BURG, display: "flex", alignItems: "center", justifyContent: "center", 
              cursor: "pointer", transition: "all 0.3s ease", zIndex: 40,
              backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
            }} 
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.18)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-50%) scale(1.08)"; }} 
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-50%) scale(1)"; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
}

// ─── SECTION 5 : AD CAMPAIGN PANEL ───────────────────────────────
function AdSection() {
  return (
    <section className="snap-section" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 36px 36px", boxSizing: "border-box" }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: "100%", maxWidth: "1000px", aspectRatio: "16/9", borderRadius: 36,
          background: CREAM,
          border: "1.5px solid rgba(0,0,0,0.1)",
          boxShadow: "0 30px 70px rgba(0,0,0,0.08)",
          position: "relative", overflow: "hidden"
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <video src="/real_ads/new_stores_web.mp4" autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)`, zIndex: 1 }} />

        {/* Campaign Info - Subheading removed, size reduced */}
        <div style={{ position: "absolute", left: 48, bottom: 48, zIndex: 5 }}>
          <h3 style={{ fontFamily: "inherit", fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 950, color: CREAM, margin: 0, textTransform: "uppercase", letterSpacing: -0.5 }}>NEW STORES</h3>
        </div>
      </motion.div>
    </section>
  );
}

// ─── SECTION 5.5 : INTRO TO CONCAT ────────────────────────────────
function IntroSection() {
  return (
    <section className="snap-section" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 36px", boxSizing: "border-box", position: "relative", zIndex: 10 }}>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: 820, textAlign: "center", position: "relative", zIndex: 2 }}
      >
        {/* We give this container an ID so the global InteractiveGrid knows where to form the massive gravity crater */}
        <div id="intro-gravity-text" style={{
          padding: "clamp(48px, 7vw, 72px) clamp(32px, 6vw, 64px)",
          position: "relative",
          overflow: "hidden",
          borderRadius: 40,
        }}>
          {/* We keep a subtle glow attached to the text so the crater doesn't feel entirely empty, but it won't block the grid */}
          <div style={{
            position: "absolute", inset: 0, zIndex: -1, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.02) 40%, transparent 100%)",
          }} />

          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase", color: BURG_LIGHT, marginBottom: 28, opacity: 0.8 }}>
            Why CONCAT exists
          </div>

          <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: BURG, margin: "0 0 28px", letterSpacing: -1.5, lineHeight: 1.05 }}>
            Beyond the algorithm.<br/>
            <span style={{ color: BURG_LIGHT }}>Beyond the mass market.</span>
          </h2>

          <p style={{ fontSize: "clamp(16px, 1.8vw, 19px)", fontWeight: 400, color: "rgba(0,0,0,0.72)", margin: "0 0 44px", lineHeight: 1.75, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
            You are not limited to the same commercial brands you see everywhere. There's an entire world of independent labels — crafting superior styles and fabrics, at the exact same price, for every age, taste, and niche.
            <br/><br/>
            We built CONCAT so you never have to rely on luck to discover them.
          </p>

          <Link href="/about-us" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.12)",
            padding: "14px 30px", borderRadius: 9999, color: BURG,
            fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5,
            textDecoration: "none", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
            backdropFilter: "blur(12px)"
          }}
          onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,0,0,0.08)"; el.style.transform = "scale(1.05) translateY(-2px)"; el.style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)"; }}
          onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,0,0,0.04)"; el.style.transform = "scale(1)"; el.style.boxShadow = "none"; }}
          >
            Our Story
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}


// ─── SECTION 6 : FINALE ──────────────────────────────────────────
function FinaleSection() {
  return (
    <section id="finale" className="snap-section" style={{ padding: "100px 36px 40px", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontFamily: "inherit", fontSize: "clamp(70px,14vw,200px)", fontWeight: 900, letterSpacing: -6, lineHeight: 0.88, color: BURG, textAlign: "center" }}>
            concat
            <span style={{ color: BURG_LIGHT }}>.</span>
          </div>
          <div style={{ marginTop: 20, fontSize: 11, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>
            Aggregating the aesthetic underground
          </div>
        </div>

      <footer style={{
        borderRadius: 22, padding: "22px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14,
        background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.08)",
        backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.05)", zIndex: 10
      }}>
        <span style={{ fontFamily: "inherit", fontSize: 18, fontWeight: 900, color: BURG }}>concat.</span>
        <nav style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {[["Shop","/shop"],["Stores","/stores"],["About Us","/about-us"],["Contact","/support"]].map(([name, href]) => (
            <Link key={name} href={href}
              style={{ fontSize: 12, fontWeight: 700, color: BURG_MID, letterSpacing: 0.5, transition: "color 0.2s", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color=BURG)}
              onMouseLeave={(e) => (e.currentTarget.style.color=BURG_MID)}
            >
              {name}
            </Link>
          ))}
        </nav>
        <span style={{ fontSize: 11, fontWeight: 400, color: "rgba(0,0,0,0.55)" }}>© 2026 CONCAT</span>
      </footer>
      </motion.div>
    </section>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="snap-container">
      <HeroSection />
      <AccordionSection />
      <TopSellingSection />
      <CarouselSection />
      <AdSection />
      <IntroSection />
      <FinaleSection />
      <ScrollIndicator />
    </div>
  );
}
