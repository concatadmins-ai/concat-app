"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ShopPage() {
  const [activeMode, setActiveMode] = useState<"styles" | "everything">("styles");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const looks = [
    {
      name: "The Street Uniform",
      vibe: "Streetwear · everyday",
      storeCount: 2,
      total: "₹12,890",
      img1: "/products/blu-tiger-tee.png",
      fit1: "cover",
      img2: "/products/blu-shenron-cap.png",
      fit2: "contain",
      img3: "/products/gully-koyar.png",
      fit3: "contain",
      pieces: [
        { name: "Orng Tiger Fury Tee", store: "Blueorng", price: "₹4,900" },
        { name: "Shenron Red Cap", store: "Blueorng", price: "₹3,500" },
        { name: "Koyar Black", store: "Gully Labs", price: "₹4,490" },
      ],
    },
    {
      name: "The Sunday Linen",
      vibe: "Easy · off-duty",
      storeCount: 2,
      total: "₹8,248",
      img1: "/products/ft-gauze-shirt.png",
      fit1: "cover",
      img2: "/products/ft-linen-trousers.png",
      fit2: "cover",
      img3: "/products/sm-procyon-ocean.png",
      fit3: "contain",
      pieces: [
        { name: "Green Gauze Holiday Shirt", store: "5feet11", price: "₹1,499" },
        { name: "Natural Linen Trousers", store: "5feet11", price: "₹2,499" },
        { name: "Procyon // Ocean", store: "Sand Marshal", price: "₹4,250" },
      ],
    },
    {
      name: "The Wedding Guest",
      vibe: "Ethnic · occasion",
      storeCount: 2,
      total: "₹8,568",
      img1: "/products/vast-navy-kurta.png",
      fit1: "cover",
      img2: "/products/vast-jodhpuri.png",
      fit2: "cover",
      img3: "/products/miso-weave-cuff.png",
      fit3: "cover",
      pieces: [
        { name: "Navy Zari Sequin Kurta", store: "Vastramay", price: "₹3,899" },
        { name: "Purple Silk Jodhpuri", store: "Vastramay", price: "₹3,649" },
        { name: "Weave Cuff", store: "Miso by Sonia", price: "₹1,020" },
      ],
    },
  ];

  const aisles = [
    { num: "G", href: "/floors/G", name: "Casuals", src: "/real_ads/casual_carousel.mp4" },
    { num: "1", href: "/floors/1", name: "Semi Formals", src: "/real_ads/semi-formals-carousel.mp4" },
    { num: "2", href: "/floors/2", name: "Accessories", src: "/real_ads/accersories-carousel.mp4" },
    { num: "3", href: "/floors/3", name: "Footwear", src: "/real_ads/footwear-carousel.mp4" },
    { num: "4", href: "/floors/4", name: "Formals", src: "/real_ads/formals-carousel.mp4" },
    { num: "5", href: "/floors/5", name: "Eyewear", src: "/real_ads/eyewear-carousel.mp4" },
    { num: "6", href: "/floors/6", name: "Ethnic", src: "/real_ads/ethnic-carousel.mp4" },
  ];

  const storeRacks = [
    {
      brand: "Blueorng",
      href: "/stores/blueorng",
      tagline: "Streetwear · Floor G",
      src: "/real_ads/blueorng-advertisment.mp4",
      pieces: [
        { name: "Orng Tiger Fury Tee", price: "₹4,900", fit: "contain", image: "/products/blu-tiger-tee.png" },
        { name: "DRS Full Sleeve Jersey", price: "₹5,800", fit: "cover", image: "/products/blu-drs-jersey.png" },
        { name: "Shenron Red Cap", price: "₹3,500", fit: "contain", image: "/products/blu-shenron-cap.png" },
      ],
    },
    {
      brand: "Vastramay",
      href: "/stores/vastramay",
      tagline: "Traditionals · Floor 6",
      src: "/real_ads/vastramay-advertisment.mp4",
      pieces: [
        { name: "Purple Silk Jodhpuri", price: "₹3,649", fit: "cover", image: "/products/vast-jodhpuri.png" },
        { name: "Beige Nehru Jacket Set", price: "₹3,999", fit: "cover", image: "/products/vast-nehru-set.png" },
        { name: "Blue Patola Kurta", price: "₹1,259", fit: "cover", image: "/products/vast-patola.png" },
      ],
    },
    {
      brand: "Sand Marshal",
      href: "/stores/sand-marshal",
      tagline: "Eyewear · Floor 5",
      src: "/real_ads/samandmarshall-advertisment.mp4",
      pieces: [
        { name: "Procyon // Ocean", price: "₹4,250", fit: "contain", image: "/products/sm-procyon-ocean.png" },
        { name: "Atria // Magma", price: "₹5,250", fit: "contain", image: "/products/sm-atria-magma.png" },
        { name: "Regor // Rosewood", price: "₹5,250", fit: "contain", image: "/products/sm-regor-rosewood.png" },
      ],
    },
  ];

  const ranked = [
    { rank: "1", name: "Koyar Black", store: "Gully Labs", sold: "214", price: "₹4,490", fit: "contain", image: "/products/gully-koyar.png" },
    { rank: "2", name: "Orng Tiger Fury Tee", store: "Blueorng", sold: "187", price: "₹4,900", fit: "contain", image: "/products/blu-tiger-tee.png" },
    { rank: "3", name: "Navy Zari Sequin Kurta", store: "Vastramay", sold: "141", price: "₹3,899", fit: "cover", image: "/products/vast-navy-kurta.png" },
    { rank: "4", name: "Criss Cross Cuff", store: "Miso by Sonia", sold: "98", price: "₹699", fit: "cover", image: "/products/miso-crisscross.png" },
  ];

  const chips = ["All", "Casuals", "Semi Formals", "Accessories", "Footwear", "Formals", "Eyewear", "Ethnic"];

  const catalogue = [
    { name: "DRS Full Sleeve Jersey", brand: "Blueorng", cat: "Casuals", price: "₹5,800", fit: "cover", image: "/products/blu-drs-jersey.png" },
    { name: "Natural Linen Trousers", brand: "5feet11", cat: "Casuals", price: "₹2,499", fit: "cover", image: "/products/ft-linen-trousers.png" },
    { name: "Navy Zari Sequin Kurta", brand: "Vastramay", cat: "Ethnic", price: "₹3,899", fit: "cover", image: "/products/vast-navy-kurta.png" },
    { name: "Shenron Red Cap", brand: "Blueorng", cat: "Casuals", price: "₹3,500", fit: "contain", image: "/products/blu-shenron-cap.png" },
    { name: "Procyon // Ocean", brand: "Sand Marshal", cat: "Eyewear", price: "₹4,250", fit: "contain", image: "/products/sm-procyon-ocean.png" },
    { name: "Orng Tiger Fury T-Shirt", brand: "Blueorng", cat: "Casuals", price: "₹4,900", fit: "contain", image: "/products/blu-tiger-tee.png" },
    { name: "Green Gauze Holiday Shirt", brand: "5feet11", cat: "Casuals", price: "₹1,499", fit: "cover", image: "/products/ft-gauze-shirt.png" },
    { name: "Carlisle Corduroy Blazer", brand: "Bombay Shirt Co.", cat: "Formals", price: "₹10,990", fit: "cover", image: "/products/bsc-carlisle.png" },
    { name: "Purple Silk Jodhpuri", brand: "Vastramay", cat: "Ethnic", price: "₹3,649", fit: "cover", image: "/products/vast-jodhpuri.png" },
    { name: "Atria // Magma", brand: "Sand Marshal", cat: "Eyewear", price: "₹5,250", fit: "contain", image: "/products/sm-atria-magma.png" },
    { name: "Weave Cuff", brand: "Miso by Sonia", cat: "Accessories", price: "₹1,020", fit: "cover", image: "/products/miso-weave-cuff.png" },
    { name: "Aandhi Kobicha", brand: "Gully Labs", cat: "Footwear", price: "₹6,990", fit: "contain", image: "/products/gully-aandhi.png" },
  ];

  const filteredCatalogue = catalogue.filter((item) => {
    const matchesCat = selectedCategory === "All" || item.cat === selectedCategory;
    const matchesSearch = searchQuery === "" || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "linear-gradient(150deg,#FFFFFF 0%,#FAFAFA 25%,#F0F0F0 55%,#FAFAFA 78%,#F5F5F5 100%)", color: "#111111", overflow: "hidden", fontFamily: "'Geist', system-ui, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,0,0,0.14) 0.8px, transparent 0.9px)", backgroundSize: "8px 8px", pointerEvents: "none" }} />

      {/* P1 HEADER + MODE TOGGLE */}
      <div style={{ position: "relative", padding: "110px 72px 8px", zIndex: 5 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 44, fontWeight: 950, letterSpacing: "-2px", textTransform: "uppercase", lineHeight: 1 }}>the rack</h1>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 8 }}>
              Every piece from every store — shop whole styles or dig the full catalogue
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            {/* Search input */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 18px", borderRadius: 9999, background: "rgba(255,255,255,0.4)", border: "1px solid rgba(0,0,0,0.15)", backdropFilter: "blur(10px)", width: 230 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search labels, pieces…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ background: "transparent", border: "none", outline: "none", fontSize: 12, color: "#111111", width: "100%", fontFamily: "inherit" }}
              />
            </div>

            {/* Mode switch */}
            <div style={{ display: "flex", gap: 5, padding: 5, borderRadius: 9999, background: "rgba(0,0,0,0.05)" }}>
              <button
                onClick={() => setActiveMode("styles")}
                style={{
                  padding: "9px 22px",
                  borderRadius: 9999,
                  border: "none",
                  cursor: "pointer",
                  background: activeMode === "styles" ? "#111111" : "transparent",
                  color: activeMode === "styles" ? "#FFFFFF" : "rgba(0,0,0,0.55)",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "inherit",
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
                  color: activeMode === "everything" ? "#FFFFFF" : "rgba(0,0,0,0.55)",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "inherit",
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
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>
                Full fits styled across the mall · one checkout
              </span>
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
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.15) 60%)" }} />
                  <div style={{ position: "absolute", left: 12, right: 12, bottom: 12 }}>
                    <div style={{ fontSize: 18, fontWeight: 950, letterSpacing: "-0.5px", color: "rgba(255,255,255,0.4)", lineHeight: 1 }}>{ai.num}</div>
                    <div style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5px", color: "#FFFFFF", marginTop: 2 }}>{ai.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* P4 RACKS BY STORE */}
          <div style={{ position: "relative", padding: "8px 72px 40px", zIndex: 5 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
              <h2 style={{ margin: 0, fontSize: 28, fontWeight: 950, letterSpacing: "-1px", textTransform: "uppercase", lineHeight: 1 }}>racks by store</h2>
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>Each store hangs its own rail</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {storeRacks.map((sr, idx) => (
                <div key={idx} style={{ display: "flex", borderRadius: 28, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.12)", background: "#FFFFFF", boxShadow: "0 16px 50px rgba(0,0,0,0.09)" }}>
                  <Link href={sr.href} style={{ position: "relative", width: 250, flex: "none", background: "#111", color: "#FFFFFF", display: "block", textDecoration: "none" }}>
                    <video src={sr.src} autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.25) 60%)" }} />
                    <div style={{ position: "absolute", left: 18, right: 18, bottom: 16 }}>
                      <div style={{ fontSize: 8.5, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 3 }}>{sr.tagline}</div>
                      <div style={{ fontSize: 20, fontWeight: 950, textTransform: "uppercase", letterSpacing: "-0.5px", lineHeight: 1.05 }}>{sr.brand}</div>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, padding: "8px 16px", borderRadius: 9999, background: "#FFFFFF", color: "#111111", fontSize: 9, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
                        Step inside
                      </span>
                    </div>
                  </Link>
                  <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, padding: 16 }}>
                    {sr.pieces.map((pc, pIdx) => (
                      <Link key={pIdx} href="/shop/1" style={{ position: "relative", borderRadius: 18, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)", color: "inherit", textDecoration: "none" }}>
                        <span style={{ display: "block", aspectRatio: "3/3", background: "#F6F5F3" }}>
                          <img src={pc.image} alt={pc.name} style={{ width: "100%", height: "100%", objectFit: pc.fit as any, display: "block" }} />
                        </span>
                        <span style={{ position: "absolute", top: 8, right: -5, padding: "4px 10px 4px 12px", background: "#111111", color: "#FFFFFF", fontSize: 10, fontWeight: 900, transform: "rotate(4deg)", borderRadius: 5 }}>{pc.price}</span>
                        <span style={{ display: "block", padding: "9px 12px", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{pc.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* P5 MOST BAGGED THIS WEEK */}
          <div style={{ position: "relative", padding: "8px 72px 40px", zIndex: 5 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
              <h2 style={{ margin: 0, fontSize: 28, fontWeight: 950, letterSpacing: "-1px", textTransform: "uppercase", lineHeight: 1 }}>most bagged this week</h2>
              <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#ff3333", animation: "omPulse 1.5s infinite" }} />
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>Ranked live</span>
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
              {ranked.map((rk, idx) => (
                <Link key={idx} href="/shop/1" style={{ position: "relative", borderRadius: 22, overflow: "hidden", background: "#FFFFFF", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", color: "inherit", textDecoration: "none" }}>
                  <span style={{ display: "block", position: "relative", aspectRatio: "3/3.2", background: "#F6F5F3" }}>
                    <img src={rk.image} alt={rk.name} style={{ width: "100%", height: "100%", objectFit: rk.fit as any, display: "block" }} />
                    <span style={{ position: "absolute", left: 8, top: -12, fontSize: 72, fontWeight: 950, letterSpacing: "-5px", lineHeight: 1, color: "rgba(255,255,255,0.92)", textShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>
                      {rk.rank}
                    </span>
                  </span>
                  <span style={{ display: "block", padding: "13px 16px" }}>
                    <span style={{ display: "block", fontSize: 8.5, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#777777", marginBottom: 3 }}>
                      at {rk.store} · {rk.sold} bagged
                    </span>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "baseline" }}>
                      <span style={{ fontSize: 12.5, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{rk.name}</span>
                      <span style={{ fontSize: 13, fontWeight: 900, flex: "none" }}>{rk.price}</span>
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : null}

      {/* P6 EVERYTHING (Full Catalogue Grid) */}
      <div style={{ position: "relative", padding: "8px 72px 24px", zIndex: 5 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 950, letterSpacing: "-1px", textTransform: "uppercase", lineHeight: 1 }}>everything</h2>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {chips.map((ch) => (
              <span
                key={ch}
                onClick={() => setSelectedCategory(ch)}
                style={{
                  display: "inline-flex",
                  padding: "6px 16px",
                  borderRadius: 9999,
                  background: selectedCategory === ch ? "#111111" : "rgba(255,255,255,0.3)",
                  border: "1px solid rgba(0,0,0,0.15)",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: selectedCategory === ch ? "#FFFFFF" : "#111111",
                  backdropFilter: "blur(8px)",
                  cursor: "pointer",
                }}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {filteredCatalogue.map((pr, idx) => (
            <Link key={idx} href="/shop/1" style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "#FFFFFF", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", color: "inherit", textDecoration: "none" }}>
              <span style={{ display: "block", position: "relative", aspectRatio: "3/3.8", background: "#F6F5F3" }}>
                <img src={pr.image} alt={pr.name} style={{ width: "100%", height: "100%", objectFit: pr.fit as any, display: "block" }} />
                <span style={{ position: "absolute", top: 10, right: -6, padding: "5px 12px 5px 14px", background: "#111111", color: "#FFFFFF", fontSize: 11, fontWeight: 900, transform: "rotate(4deg)", borderRadius: 6, boxShadow: "0 6px 16px rgba(0,0,0,0.3)" }}>
                  {pr.price}
                </span>
              </span>
              <span style={{ display: "block", padding: "14px 17px" }}>
                <span style={{ display: "block", fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#777777", marginBottom: 4 }}>at {pr.brand}</span>
                <span style={{ display: "block", fontSize: 13.5, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{pr.name}</span>
              </span>
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <span style={{ display: "inline-flex", alignItems: "center", padding: "14px 32px", borderRadius: 9999, border: "1.5px solid rgba(0,0,0,0.45)", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer" }}>
            Load more
          </span>
        </div>
      </div>

      {/* P7 DARK CTA */}
      <div style={{ position: "relative", padding: "24px 72px 32px", zIndex: 5 }}>
        <div style={{ position: "relative", borderRadius: 36, background: "linear-gradient(160deg,rgba(32,32,37,0.9) 0%,rgba(12,12,14,0.94) 100%)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(28px) saturate(160%)", boxShadow: "0 30px 80px rgba(0,0,0,0.35)", color: "#FFFFFF", padding: "40px 48px", overflow: "hidden", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.15 }}>
              Can't decide?<br />
              <span style={{ color: "rgba(255,255,255,0.5)" }}>Walk the mall floor by floor instead.</span>
            </div>
          </div>
          <Link href="/floors" style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 32px", borderRadius: 9999, background: "#FFFFFF", color: "#111111", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", textDecoration: "none" }}>
            Take the elevator →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
