"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function FloorsPage() {
  const floorSlabs = [
    { num: "6", href: "/floors/6", name: "Ethnic", desc: "Modern Indian drapery & fusion wear", count: "5 stores", width: "58%", src: "/real_ads/ethnic-carousel.mp4" },
    { num: "5", href: "/floors/5", name: "Eyewear", desc: "Designer frames & shades", count: "3 stores", width: "65%", src: "/real_ads/eyewear-carousel.mp4" },
    { num: "4", href: "/floors/4", name: "Formals", desc: "Tailoring, shirting & occasionwear", count: "4 stores", width: "72%", src: "/real_ads/formals-carousel.mp4" },
    { num: "3", href: "/floors/3", name: "Footwear", desc: "Sneakers to hand-made leather", count: "5 stores", width: "79%", src: "/real_ads/footwear-carousel.mp4" },
    { num: "2", href: "/floors/2", name: "Accessories", desc: "Jewelry, bags & finishing touches", count: "7 stores", width: "86%", src: "/real_ads/accersories-carousel.mp4" },
    { num: "1", href: "/floors/1", name: "Semi Formals", desc: "Smart layers for work and after", count: "6 stores", width: "93%", src: "/real_ads/semi-formals-carousel.mp4" },
    { num: "G", href: "/floors/G", name: "Casuals", desc: "Streetwear, tees, denim & everyday staples", count: "12 stores", width: "100%", src: "/real_ads/casual_carousel.mp4" },
  ];

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "transparent", color: "#111111", overflow: "hidden", fontFamily: "'Geist', system-ui, sans-serif" }}>
      

      <div style={{ position: "relative", padding: "110px 72px 40px", zIndex: 5 }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h1 style={{ margin: 0, fontSize: 44, fontWeight: 950, letterSpacing: "-2px", textTransform: "uppercase", lineHeight: 1 }}>the building</h1>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 8 }}>
            Seven floors, top to ground — pick where you get off
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, maxWidth: 1040, margin: "0 auto" }}>
          {floorSlabs.map((fs, idx) => (
            <Link key={idx} href={fs.href} style={{ position: "relative", display: "block", height: 104, width: fs.width, borderRadius: 20, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.12)", background: "#111", boxShadow: "0 14px 40px rgba(0,0,0,0.14)", color: "inherit", textDecoration: "none" }}>
              <video src={fs.src} autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.15) 100%)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", gap: 22, padding: "0 28px" }}>
                <span style={{ fontSize: 36, fontWeight: 950, letterSpacing: "-2px", color: "rgba(255,255,255,0.35)", width: 48, flex: "none" }}>{fs.num}</span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: 20, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.5px", color: "#FFFFFF", lineHeight: 1.1 }}>{fs.name}</span>
                  <span style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{fs.desc}</span>
                </span>
                <span style={{ marginLeft: "auto", fontSize: 9, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.55)", flex: "none" }}>{fs.count}</span>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 42, height: 42, borderRadius: "50%", background: "#FFFFFF", color: "#111111", flex: "none", boxShadow: "0 8px 24px rgba(0,0,0,0.35)" }}>→</span>
              </div>
            </Link>
          ))}
          <div style={{ width: "100%", height: 14, borderRadius: "0 0 18px 18px", background: "#111111", marginTop: 2 }} />
          <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginTop: 10 }}>Ground level · CONCAT mall</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
