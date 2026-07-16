"use client";
import React from "react";
import Link from "next/link";

const BURG = "#FFFFFF"; const BURG_MID = "#CCCCCC"; const BURG_LIGHT = "#AAAAAA";
const FLOORS = [
  { title: "Modern Casuals", slug: "modern-casuals", img: "/modern_casuals_1784145387264.png", desc: "Effortless everyday wear with a fashion-forward edge. Structured loungewear, relaxed fits, and everyday luxuries.", count: "48 Pieces" },
  { title: "Semi Formals",   slug: "semi-formals",   img: "/semi_formals_1784145407787.png",  desc: "The bridge between corporate and creative. Sharp tailoring softened with modern silhouettes and premium fabrics.", count: "36 Pieces" },
  { title: "Accessories",    slug: "accessories",    img: "/accessories_1784145426818.png",    desc: "The finishing touch. Curated bags, belts, jewelry, and adornments from independent artisan houses.", count: "62 Pieces" },
  { title: "Footwear",       slug: "footwear",       img: "/footwear_1784145445750.png",       desc: "From architectural boots to hand-stitched sneakers. Every step is a statement.", count: "29 Pieces" },
  { title: "Formals",        slug: "formals",        img: "/formals_1784145500501.png",        desc: "Precision-cut suits, gowns, and occasion wear. Crafted for moments that demand perfection.", count: "41 Pieces" },
  { title: "Eyewear",        slug: "eyewear",        img: "/eyewear_1784145482095.png",        desc: "Vision-led luxury frames. Each pair is a collaboration between optical science and artistic design.", count: "18 Pieces" },
];
export default function FloorsPage() {
  return (
    <div className="page-scroll" style={{ padding: "110px 40px 60px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "rgba(74,14,23,0.4)", margin: "0 0 14px" }}>Our Building</p>
        <h1 style={{ fontFamily: "inherit", fontSize: "clamp(40px,6vw,88px)", fontWeight: 900, color: BURG, margin: "0 0 72px", letterSpacing: -4, lineHeight: 0.9, textTransform: "uppercase" }}>The Floors</h1>
        <div>
          {FLOORS.map((floor, i) => (
            <Link key={floor.slug} href={`/shop?floor=${floor.slug}`}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "26px 0", borderBottom: "1px solid rgba(74,14,23,0.08)", cursor: "pointer", gap: 28, transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft="20px"; (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.2)"; (e.currentTarget as HTMLElement).style.borderRadius="12px"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft="0"; (e.currentTarget as HTMLElement).style.background="transparent"; (e.currentTarget as HTMLElement).style.borderRadius="0"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 28, flex: 1 }}>
                  <div style={{ width: 76, height: 76, borderRadius: 12, overflow: "hidden", flexShrink: 0, border: "1px solid rgba(74,14,23,0.1)" }}>
                    <img src={floor.img} alt={floor.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 6 }}>
                      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "rgba(74,14,23,0.3)" }}>Floor {String(i+1).padStart(2,"0")}</span>
                      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: BURG_LIGHT }}>{floor.count}</span>
                    </div>
                    <h2 style={{ color: BURG, fontSize: "clamp(17px,2.2vw,26px)", fontWeight: 700, margin: "0 0 5px", textTransform: "uppercase" }}>{floor.title}</h2>
                    <p style={{ color: "rgba(74,14,23,0.5)", fontSize: 13, margin: 0, maxWidth: 460, lineHeight: 1.5 }}>{floor.desc}</p>
                  </div>
                </div>
                <div style={{ color: "rgba(74,14,23,0.3)", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
