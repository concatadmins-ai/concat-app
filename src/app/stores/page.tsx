"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

// Design Tokens (matching the homepage/about-us aesthetics)
const BURG = "#FFFFFF";
const BURG_LIGHT = "#AAAAAA";
const CREAM = "#111111";

const BRANDS = [
  { id: "A", brand: "May Character", category: "Modern Casuals", tagline: "Techwear", src: "/stock/hf_20260716_170814_196b8582-4782-4688-84cd-1cc5042c639b.mp4", desc: "Cyberpunk and functional techwear engineered for the modern nomad. Merging tactical gear utility with futuristic streetwear silhouettes." },
  { id: "B", brand: "Orange Blue",   category: "Modern Casuals", tagline: "Bold Essentials", src: "/stock/hf_20260716_170822_3222bd46-685c-40ec-8816-fbdf2b769010.mp4", desc: "Bold graphics, vibrant oversized fits, and hyper-minimalist streetwear essentials that refuse to blend into the crowd." },
  { id: "C", brand: "6'11\"",        category: "Semi Formals", tagline: "Poplin & Linen", src: "/stock/hf_20260716_170830_44f9ea45-4cfd-44ef-a4e0-a531204ac330.mp4", desc: "Premium poplin and linen clothing offering relaxed luxury and elegant drapery. Clean silhouettes designed for effortless transitioning." },
  { id: "D", brand: "Mumbai Shirt Company", category: "Formals", tagline: "Bespoke Shirts", src: "/stock/hf_20260716_170838_38b5090a-a2b9-44f9-a807-e8215a7d197e.mp4", desc: "Tailored luxury formalwear and bespoke shirting. Meticulously engineered cuffs, collars, and fabrics prioritizing comfort." },
  { id: "E", brand: "Dune Marshals", category: "Eyewear", tagline: "Optics & Armor", src: "/stock/hf_20260716_170846_4744c2b3-2340-41a8-8ab0-ea6a0745aba3.mp4", desc: "Futuristic eyewear and protective optics. Raw frame designs built to withstand extreme elements without compromising style." },
  { id: "F", brand: "Street Labs",   category: "Footwear", tagline: "Future Sneaker culture", src: "/stock/hf_20260716_170855_1352c018-a624-45c1-a700-05cba4fedecd.mp4", desc: "Innovative footwear fusing street aesthetics with ergonomic design. Every pair is a curated, non-mass-produced statement." },
  { id: "G", brand: "Piso by Sonia", category: "Accessories", tagline: "Artisanal Metals", src: "/stock/hf_20260716_170904_64415aa0-49a3-48d8-bc1b-cc1b5541f949.mp4", desc: "Bespoke jewelry, heavy silver chains, and intricate metallic accessories. Handcrafted statement pieces to complete the uniform." },
  { id: "H", brand: "Heritage",      category: "Traditionals", tagline: "Modern Traditionals", src: "/stock/hf_20260716_170912_a9673eab-8a70-4684-acb5-3600eae39f5a.mp4", desc: "Authentic traditional wear and cultural craftsmanship reborn. Bold Indian ethnic wear redesigned with modern cuts and drapes." },
];

export default function BrandsPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="page-scroll" style={{ background: "#0A0A0A", minHeight: "100vh", height: "100vh", overflowY: "auto", overflowX: "hidden", color: "#FFFFFF", paddingBottom: 100 }}>
      {/* Decorative background grid elements */}
      <div style={{ position: "fixed", inset: 0, opacity: 0.05, pointerEvents: "none", zIndex: 1, backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div style={{ position: "relative", zIndex: 5, maxWidth: 1300, margin: "0 auto", padding: "130px 40px 40px" }}>
        
        {/* Header Block */}
        <div style={{ marginBottom: 60 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: BURG_LIGHT }}>THE CONCAT DIRECTORY</span>
          <h1 style={{ fontFamily: "inherit", fontSize: "clamp(48px, 8vw, 100px)", fontWeight: 950, color: BURG, margin: "10px 0 20px", letterSpacing: -4, lineHeight: 0.85, textTransform: "uppercase" }}>
            independent<br/>partners
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 500, lineHeight: 1.5, margin: 0 }}>
            Discover the independent brands disrupting the status quo. Curated styles, unique fabrics, and zero mass production.
          </p>
        </div>

        {/* Brands Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 32 }}>
          {BRANDS.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
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
                  background: "#121212",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s",
                  transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                  boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.6)" : "none",
                  borderColor: isHovered ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.15)"
                }}
              >
                {/* Loop Video in background */}
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: isHovered ? 0.65 : 0.35,
                    transition: "opacity 0.5s"
                  }}
                />

                {/* Dark Overlay Gradient */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)",
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
                      color: BURG_LIGHT,
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
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
                      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{item.tagline}</span>
                      <h2 style={{ fontSize: 26, fontWeight: 900, textTransform: "uppercase", margin: "2px 0 0", color: BURG, letterSpacing: -0.5 }}>
                        {item.brand}
                      </h2>
                    </div>

                    <p style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.65)",
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
                      color: CREAM,
                      background: BURG,
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
