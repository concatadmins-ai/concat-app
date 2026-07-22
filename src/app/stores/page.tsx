"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function StoresPage() {
  const stores = [
    { brand: "Blueorng", href: "/stores/blueorng", tagline: "Streetwear", floor: "Floor G · Casuals", src: "/real_ads/blueorng-advertisment.mp4" },
    { brand: "5feet11", href: "/stores/5feet11", tagline: "Linen & Casuals", floor: "Floor G · Casuals", src: "/real_ads/5feet11-advertisment.mp4" },
    { brand: "Bombay Shirt Co.", href: "/stores/bombay-shirt-co", tagline: "Bespoke Shirts", floor: "Floor 4 · Formals", src: "/real_ads/bombay_shirt_company-advertisment.mp4" },
    { brand: "Sand Marshal", href: "/stores/sand-marshal", tagline: "Eyewear", floor: "Floor 5 · Eyewear", src: "/real_ads/samandmarshall-advertisment.mp4" },
    { brand: "Miso by Sonia", href: "/stores/miso-by-sonia", tagline: "Artisanal Jewelry", floor: "Floor 2 · Accessories", src: "/real_ads/misobysonia-advertisment.mp4" },
    { brand: "Gully Labs", href: "/stores/gully-labs", tagline: "Footwear", floor: "Floor 3 · Footwear", src: "/real_ads/gully_labs-advertisment.mp4" },
    { brand: "Vastramay", href: "/stores/vastramay", tagline: "Traditionals", floor: "Floor 6 · Ethnic", src: "/real_ads/vastramay-advertisment.mp4" },
  ];

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "transparent", color: "#111111", overflow: "hidden", fontFamily: "'Geist', system-ui, sans-serif" }}>
      

      <div style={{ position: "relative", padding: "110px 72px 24px", zIndex: 5 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 26, flexWrap: "wrap", gap: 16 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 44, fontWeight: 950, letterSpacing: "-2px", textTransform: "uppercase", lineHeight: 1 }}>the stores</h1>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 8 }}>
              Independent labels only · every storefront hand-picked
            </div>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", padding: "6px 16px", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>All floors</span>
            <span style={{ display: "inline-flex", padding: "6px 16px", borderRadius: 9999, background: "rgba(255,255,255,0.3)", border: "1px solid rgba(0,0,0,0.15)", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>New this week</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {stores.map((st, idx) => (
            <Link key={idx} href={st.href} style={{ position: "relative", display: "block", height: 330, borderRadius: 26, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.1)", background: "#111", boxShadow: "0 12px 40px rgba(0,0,0,0.1)", color: "inherit", textDecoration: "none" }}>
              <video src={st.src} autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.3) 100%)" }} />
              <div style={{ position: "absolute", top: 14, left: 16, padding: "5px 12px", borderRadius: 9999, background: "rgba(255,255,255,0.18)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.25)", fontSize: 9, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "#FFFFFF" }}>{st.tagline}</div>
              <div style={{ position: "absolute", top: 17, right: 16, display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#ff3333", animation: "omPulse 1.5s infinite" }}></span>
                <span style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: 1.5, color: "#FFFFFF", textTransform: "uppercase" }}>Open</span>
              </div>
              <div style={{ position: "absolute", left: 20, right: 20, bottom: 18, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 12 }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "-0.5px", marginBottom: 3 }}>{st.brand}</div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>{st.floor}</div>
                </div>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, borderRadius: "50%", background: "#FFFFFF", color: "#111111", flex: "none" }}>→</span>
              </div>
            </Link>
          ))}

          <Link href="/sell" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, height: 330, borderRadius: 26, border: "1.5px dashed rgba(0,0,0,0.25)", background: "rgba(255,255,255,0.3)", color: "inherit", textAlign: "center", padding: "0 32px", textDecoration: "none" }}>
            <span style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-1px", color: "rgba(0,0,0,0.3)" }}>Your label here</span>
            <span style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(0,0,0,0.5)" }}>This mall has an empty storefront with your name on the glass. Verified, quality-checked, yours.</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 26px", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Partner up</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
