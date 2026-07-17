"use client";

import React, { useState } from "react";
import Link from "next/link";

// Design Tokens (matching the homepage/about-us aesthetics)
const BURG = "#111111";
const BURG_LIGHT = "#777777";
const CREAM = "#FFFFFF";

const BRANDS = [
  { id: "A", brand: "", category: "", tagline: "", src: "", desc: "", isBlank: true },
  { id: "B", brand: "Main Character", category: "Modern Casuals", tagline: "Streetwear", src: "/real_ads/blueorng-advertisment.mp4", desc: "Aesthetic streetwear inspired by modern youth culture and bold expressions." },
  { id: "C", brand: "5feet11", category: "Semi Formals", tagline: "Linen & Casuals", src: "/real_ads/5feet11-advertisment.mp4", desc: "Premium fabrics and relaxed fits engineered for everyday elegance." },
  { id: "D", brand: "The Bombay Shirt Company", category: "Formals", tagline: "Bespoke Shirts", src: "/real_ads/bombay_shirt_company-advertisment.mp4", desc: "Custom-made luxury shirting designed by you, tailored for comfort." },
  { id: "E", brand: "Sand Marshal", category: "Eyewear", tagline: "Optics & Eyewear", src: "/real_ads/samandmarshall-advertisment.mp4", desc: "Visionary designer eyewear crafted to shield your sight and define your style." },
  { id: "F", brand: "Miso by Sonia", category: "Accessories", tagline: "Artisanal Jewelry", src: "/real_ads/misobysonia-advertisment.mp4", desc: "Handcrafted statement jewelry pieces made to last and elevate your identity." },
  { id: "G", brand: "Gully Labs", category: "Footwear", tagline: "Future Sneaker Culture", src: "/real_ads/gully_labs-advertisment.mp4", desc: "Sneakers that tell a story. Blending heritage craftsmanship with street sensibilities." },
  { id: "H", brand: "Vastramay", category: "Traditionals", tagline: "Modern Traditionals", src: "/real_ads/vastramay-advertisment.mp4", desc: "Ethnic fusion wear redefining modern Indian drapery and style." },
];

function LocalVideoCardBackground({ src, opacity = 1 }: { src: string; opacity?: number }) {
  if (!src) return null;
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", opacity, transition: "opacity 0.6s ease", backgroundColor: "#111" }}>
      <video src={src} autoPlay loop muted playsInline style={{ position: "absolute", top: "50%", left: "50%", width: "100%", height: "100%", transform: "translate(-50%, -50%) scale(1.05)", objectFit: "cover", zIndex: 0 }} />
    </div>
  );
}

export default function BrandsPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="page-scroll" style={{ background: "transparent", minHeight: "100vh", height: "100vh", overflowY: "auto", overflowX: "hidden", color: "#111111", paddingBottom: 100 }}>
      
      <div style={{ position: "relative", zIndex: 5, maxWidth: 1300, margin: "0 auto", padding: "130px 40px 40px" }}>
        
        {/* Header Block */}
        <div style={{ marginBottom: 60 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: BURG_LIGHT }}>THE CONCAT DIRECTORY</span>
          <h1 style={{ fontFamily: "inherit", fontSize: "clamp(48px, 8vw, 100px)", fontWeight: 950, color: BURG, margin: "10px 0 20px", letterSpacing: -4, lineHeight: 0.85, textTransform: "uppercase" }}>
            independent<br/>partners
          </h1>
          <p style={{ fontSize: 16, color: "rgba(0,0,0,0.65)", maxWidth: 500, lineHeight: 1.5, margin: 0 }}>
            Discover the independent brands disrupting the status quo. Curated styles, unique fabrics, and zero mass production.
          </p>
        </div>

        {/* Brands Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 32 }}>
          {BRANDS.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            
            // Render first glass panel completely blank
            if (item.isBlank) {
              return (
                <div
                  key={item.id}
                  style={{
                    position: "relative",
                    borderRadius: 24,
                    aspectRatio: "3/4",
                    background: "rgba(255, 255, 255, 0.25)",
                    border: "1.5px solid rgba(0, 0, 0, 0.08)",
                    backdropFilter: "blur(24px) saturate(180%)",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
                    pointerEvents: "none"
                  }}
                />
              );
            }

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  position: "relative",
                  borderRadius: 24,
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  // Premium Apple Liquid Glass Panel Design
                  background: "rgba(255, 255, 255, 0.28)",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  backdropFilter: "blur(30px) saturate(190%)",
                  WebkitBackdropFilter: "blur(30px) saturate(190%)",
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s, background-color 0.5s, box-shadow 0.5s",
                  transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                  boxShadow: isHovered ? "0 25px 50px rgba(0,0,0,0.08)" : "0 10px 40px rgba(0,0,0,0.03)",
                  borderColor: isHovered ? "rgba(0, 0, 0, 0.18)" : "rgba(0, 0, 0, 0.08)"
                }}
              >
                {/* Local Video embed in background */}
                <LocalVideoCardBackground src={item.src} opacity={1} />

                {/* Glass Bottom Overlay Gradient */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
                  zIndex: 2
                }} />

                {/* Card Content */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 24,
                  zIndex: 3
                }}>
                  {/* Top Category Badge */}
                  <div>
                    <span style={{
                      fontSize: 9,
                      fontWeight: 800,
                      letterSpacing: 2.5,
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      background: "rgba(0, 0, 0, 0.8)",
                      border: "1px solid rgba(0, 0, 0, 0.9)",
                      padding: "6px 12px",
                      borderRadius: 9999,
                      backdropFilter: "blur(8px)"
                    }}>
                      {item.category}
                    </span>
                  </div>

                  {/* Bottom Brand Info */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div>
                      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>{item.tagline}</span>
                      <h2 style={{ fontSize: 26, fontWeight: 900, textTransform: "uppercase", margin: "2px 0 0", color: CREAM, letterSpacing: -0.5 }}>
                        {item.brand}
                      </h2>
                    </div>

                    <p style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.45,
                      margin: 0,
                      opacity: isHovered ? 1 : 0,
                      height: isHovered ? "auto" : 0,
                      overflow: "hidden",
                      transition: "opacity 0.4s ease, height 0.4s ease"
                    }}>
                      {item.desc}
                    </p>

                    <Link href="/shop" style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      color: "#FFFFFF",
                      background: "#111111",
                      fontWeight: 800,
                      fontSize: 10,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      padding: "10px 16px",
                      borderRadius: 9999,
                      marginTop: 8,
                      opacity: isHovered ? 1 : 0.8,
                      transition: "opacity 0.3s"
                    }}>
                      ENTER STORE
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
