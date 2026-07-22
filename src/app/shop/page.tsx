"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ShopPage() {
  const [activeMode, setActiveMode] = useState<"styles" | "everything">("styles");

  const looks = [
    {
      vibe: "Weekend Atelier · Look № 01",
      name: "The Goa Courtyard",
      total: "₹11,438",
      storeCount: 4,
      img1: "/products/blu-tiger-tee.png",
      fit1: "contain",
      img2: "/products/ft-linen-trousers.png",
      fit2: "cover",
      img3: "/products/sm-procyon-ocean.png",
      fit3: "contain",
      pieces: [
        { name: "Orng Tiger Fury Tee", store: "Blueorng", price: "₹4,900" },
        { name: "Natural Linen Trousers", store: "5feet11", price: "₹2,499" },
        { name: "Koyar Black Sneakers", store: "Gully Labs", price: "₹4,490" },
      ],
    },
    {
      vibe: "Evening Formals · Look № 02",
      name: "The Boardroom Silk",
      total: "₹18,488",
      storeCount: 3,
      img1: "/products/bsc-carlisle.png",
      fit1: "cover",
      img2: "/products/bsc-avelis.png",
      fit2: "contain",
      img3: "/products/miso-croissant.png",
      fit3: "cover",
      pieces: [
        { name: "Carlisle Corduroy Blazer", store: "Bombay Shirt Co.", price: "₹10,990" },
        { name: "Avelis Stretch Dress Pants", store: "Bombay Shirt Co.", price: "₹4,590" },
        { name: "Silver Croissant Cuff", store: "Miso by Sonia", price: "₹520" },
      ],
    },
    {
      vibe: "Heritage Fusion · Look № 03",
      name: "The Jaipur Solstice",
      total: "₹12,888",
      storeCount: 3,
      img1: "/products/vast-jodhpuri.png",
      fit1: "cover",
      img2: "/products/vast-navy-kurta.png",
      fit2: "cover",
      img3: "/products/miso-weave-cuff.png",
      fit3: "cover",
      pieces: [
        { name: "Purple Silk Blend Jodhpuri", store: "Vastramay", price: "₹3,649" },
        { name: "Navy Zari Kurta Set", store: "Vastramay", price: "₹3,899" },
        { name: "Weave Cuff", store: "Miso by Sonia", price: "₹1,020" },
      ],
    },
  ];

  const aisles = [
    { num: "6", href: "/floors/6", name: "Ethnic", src: "/real_ads/ethnic-carousel.mp4" },
    { num: "5", href: "/floors/5", name: "Eyewear", src: "/real_ads/eyewear-carousel.mp4" },
    { num: "4", href: "/floors/4", name: "Formals", src: "/real_ads/formals-carousel.mp4" },
    { num: "3", href: "/floors/3", name: "Footwear", src: "/real_ads/footwear-carousel.mp4" },
    { num: "2", href: "/floors/2", name: "Accessories", src: "/real_ads/accersories-carousel.mp4" },
    { num: "1", href: "/floors/1", name: "Semi Formals", src: "/real_ads/semi-formals-carousel.mp4" },
    { num: "G", href: "/floors/G", name: "Casuals", src: "/real_ads/casual_carousel.mp4" },
  ];

  const allProducts = [
    { name: "Koyar Black Sneakers", store: "Gully Labs", price: "₹4,490", cat: "Footwear", image: "/products/gully-koyar.png", fit: "contain" },
    { name: "Baaz Laakh Red", store: "Gully Labs", price: "₹5,490", cat: "Footwear", image: "/products/gully-baaz-red.png", fit: "contain" },
    { name: "Procyon // Aqua", store: "Sand Marshal", price: "₹4,250", cat: "Eyewear", image: "/products/sm-procyon-aqua.png", fit: "contain" },
    { name: "Regor // Rosewood", store: "Sand Marshal", price: "₹5,250", cat: "Eyewear", image: "/products/sm-regor-rosewood.png", fit: "contain" },
    { name: "Batman Ring", store: "Miso by Sonia", price: "₹1,020", cat: "Jewelry", image: "/products/miso-batman-ring.png", fit: "cover" },
    { name: "Weave Cuff", store: "Miso by Sonia", price: "₹1,020", cat: "Jewelry", image: "/products/miso-weave-cuff.png", fit: "cover" },
    { name: "Navy Zari Kurta", store: "Vastramay", price: "₹3,899", cat: "Ethnic", image: "/products/vast-navy-kurta.png", fit: "cover" },
    { name: "Carlisle Corduroy Blazer", store: "Bombay Shirt Co.", price: "₹10,990", cat: "Formals", image: "/products/bsc-carlisle.png", fit: "cover" },
    { name: "Johnny Polo — Coffee", store: "Bombay Shirt Co.", price: "₹3,490", cat: "Formals", image: "/products/bsc-johnny-polo.png", fit: "cover" },
    { name: "DRS Full Sleeve Jersey", store: "Blueorng", price: "₹5,800", cat: "Streetwear", image: "/products/blu-drs-jersey.png", fit: "cover" },
    { name: "Shenron Red Cap", store: "Blueorng", price: "₹3,500", cat: "Streetwear", image: "/products/blu-shenron-cap.png", fit: "contain" },
    { name: "Striped Poplin Shirt", store: "5feet11", price: "₹1,699", cat: "Casuals", image: "/products/ft-poplin-shirt.png", fit: "cover" },
  ];

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "linear-gradient(150deg,#FFFFFF 0%,#FAFAFA 25%,#F0F0F0 55%,#FAFAFA 78%,#F5F5F5 100%)", color: "#111111", overflow: "hidden", fontFamily: "'Geist', system-ui, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,0,0,0.14) 0.8px, transparent 0.9px)", backgroundSize: "8px 8px", pointerEvents: "none" }} />

      {/* HEADER */}
      <div style={{ position: "relative", padding: "110px 72px 8px", zIndex: 5 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 44, fontWeight: 950, letterSpacing: "-2px", textTransform: "uppercase", lineHeight: 1 }}>the rack</h1>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 8 }}>
              Every piece from every store — shop whole styles or dig the full catalogue
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: 5, padding: 5, borderRadius: 9999, background: "rgba(0,0,0,0.05)" }}>
              <button
                onClick={() => setActiveMode("styles")}
                style={{
                  padding: "9px 22px",
                  borderRadius: 9999,
                  border: "none",
                  cursor: "pointer",
                  background: activeMode === "styles" ? "#111111" : "transparent",
                  color: activeMode === "styles" ? "#FFFFFF" : "#111111",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "inherit",
                  transition: "all 0.2s ease",
                }}
              >
                Shop styles
              </button>

              <button
                onClick={() => setActiveMode("everything")}
                style={{
                  padding: "9px 22px",
                  borderRadius: 9999,
                  border: "none",
                  cursor: "pointer",
                  background: activeMode === "everything" ? "#111111" : "transparent",
                  color: activeMode === "everything" ? "#FFFFFF" : "#111111",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "inherit",
                  transition: "all 0.2s ease",
                }}
              >
                Everything
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeMode === "styles" ? (
        <>
          {/* P2 SHOP FULL STYLES */}
          <div style={{ position: "relative", padding: "16px 72px 40px", zIndex: 5 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
              <h2 style={{ margin: 0, fontSize: 28, fontWeight: 950, letterSpacing: "-1px", textTransform: "uppercase", lineHeight: 1 }}>shop whole styles</h2>
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>Full fits styled across the mall · one checkout</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {looks.map((lk, idx) => (
                <div key={idx} style={{ borderRadius: 28, overflow: "hidden", background: "#FFFFFF", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 16px 50px rgba(0,0,0,0.09)", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: 2, height: 230 }}>
                    <span style={{ flex: 1.6, overflow: "hidden" }}>
                      <img src={lk.img1} alt={lk.name} style={{ width: "100%", height: "100%", objectFit: lk.fit1 as any, display: "block", background: "#F6F5F3" }} />
                    </span>
                    <span style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                      <span style={{ flex: 1, overflow: "hidden" }}>
                        <img src={lk.img2} alt={lk.name} style={{ width: "100%", height: "100%", objectFit: lk.fit2 as any, display: "block", background: "#F6F5F3" }} />
                      </span>
                      <span style={{ flex: 1, overflow: "hidden" }}>
                        <img src={lk.img3} alt={lk.name} style={{ width: "100%", height: "100%", objectFit: lk.fit3 as any, display: "block", background: "#F6F5F3" }} />
                      </span>
                    </span>
                  </div>

                  <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 4 }}>{lk.vibe}</div>
                    <div style={{ fontSize: 21, fontWeight: 950, letterSpacing: "-0.8px", textTransform: "uppercase", lineHeight: 1, marginBottom: 12 }}>{lk.name}</div>
                    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                      {lk.pieces.map((pc, i) => (
                        <span key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, padding: "8px 0", borderTop: "1px solid rgba(0,0,0,0.07)", fontSize: 12 }}>
                          <span style={{ minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "rgba(0,0,0,0.7)" }}>
                            {pc.name}<span style={{ color: "rgba(0,0,0,0.35)" }}> · {pc.store}</span>
                          </span>
                          <span style={{ fontWeight: 800, flex: "none" }}>{pc.price}</span>
                        </span>
                      ))}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1.5px solid #111111", paddingTop: 14, marginTop: 6 }}>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.5px" }}>{lk.total}</span>
                        <span style={{ fontSize: 8.5, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}>whole style · {lk.storeCount} stores</span>
                      </span>
                      <Link href="/checkout" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 22px", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 10, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>
                        Bag the look
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* P3 THE AISLES */}
          <div style={{ position: "relative", padding: "8px 72px 40px", zIndex: 5 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
              <h2 style={{ margin: 0, fontSize: 28, fontWeight: 950, letterSpacing: "-1px", textTransform: "uppercase", lineHeight: 1 }}>the aisles</h2>
              <Link href="/floors" style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", textDecoration: "underline" }}>Walk the building</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 10 }}>
              {aisles.map((ai, idx) => (
                <Link key={idx} href={ai.href} style={{ position: "relative", display: "block", aspectRatio: "3/4", borderRadius: 18, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.12)", background: "#111", color: "inherit", textDecoration: "none" }}>
                  <video src={ai.src} autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 60%)" }} />
                  <div style={{ position: "absolute", left: 12, right: 12, bottom: 12 }}>
                    <div style={{ fontSize: 18, fontWeight: 950, letterSpacing: "-0.5px", color: "rgba(255,255,255,0.4)", lineHeight: 1 }}>{ai.num}</div>
                    <div style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5px", color: "#FFFFFF", marginTop: 2 }}>{ai.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* EVERYTHING CATALOGUE GRID */
        <div style={{ position: "relative", padding: "16px 72px 40px", zIndex: 5 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {allProducts.map((p, idx) => (
              <div key={idx} style={{ borderRadius: 20, overflow: "hidden", background: "#FFFFFF", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 12px 35px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>
                <div style={{ aspectRatio: "3/3.8", background: "#F6F5F3", position: "relative" }}>
                  <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: p.fit as any }} />
                  <span style={{ position: "absolute", top: 10, right: 10, padding: "4px 10px", background: "#111111", color: "#FFFFFF", fontSize: 9, fontWeight: 800, borderRadius: 6 }}>{p.price}</span>
                </div>
                <div style={{ padding: "14px 16px" }}>
                  <div style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}>at {p.store}</div>
                  <div style={{ fontSize: 14, fontWeight: 800, margin: "2px 0 10px" }}>{p.name}</div>
                  <Link href="/checkout" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px 0", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 10, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>
                    Add to bag
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
