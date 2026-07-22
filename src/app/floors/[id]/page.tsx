"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Footer from "@/components/Footer";

export default function FloorDetailPage() {
  const params = useParams();
  const rawId = (params?.id as string) || "G";
  const id = rawId.toUpperCase();

  const floorData: Record<string, any> = {
    G: {
      name: "Casuals",
      desc: "Streetwear, tees, denim & everyday staples.",
      video: "/real_ads/casual_carousel.mp4",
      stores: [
        {
          brand: "Blueorng",
          href: "/stores/blueorng",
          tag: "Streetwear",
          video: "/real_ads/blueorng-advertisment.mp4",
          products: [
            { name: "DRS Red Full Sleeve Jersey", price: "₹5,800", image: "/products/blu-drs-jersey.png", fit: "cover" },
            { name: "Orng Tiger Fury T-Shirt", price: "₹4,900", image: "/products/blu-tiger-tee.png", fit: "contain" },
            { name: "Grey Star Studded Hoodie", price: "₹17,000", image: "/products/blu-star-hoodie.png", fit: "cover" },
            { name: "Shenron Red Cap", price: "₹3,500", image: "/products/blu-shenron-cap.png", fit: "contain" },
          ],
        },
        {
          brand: "5feet11",
          href: "/stores/5feet11",
          tag: "Linen & Casuals",
          video: "/real_ads/5feet11-advertisment.mp4",
          products: [
            { name: "Natural Linen Trousers", price: "₹2,499", image: "/products/ft-linen-trousers.png", fit: "cover" },
            { name: "Coffee Corduroy Shirt", price: "₹1,499", image: "/products/ft-corduroy-shirt.png", fit: "cover" },
            { name: "Striped Poplin Shirt", price: "₹1,699", image: "/products/ft-poplin-shirt.png", fit: "cover" },
            { name: "Green Gauze Holiday Shirt", price: "₹1,499", image: "/products/ft-gauze-shirt.png", fit: "cover" },
          ],
        },
      ],
    },
    "1": {
      name: "Semi Formals",
      desc: "Smart layers for work and after.",
      video: "/real_ads/semi-formals-carousel.mp4",
      stores: [
        {
          brand: "5feet11",
          href: "/stores/5feet11",
          tag: "Casual & Semi Formal",
          video: "/real_ads/5feet11-advertisment.mp4",
          products: [
            { name: "Striped Poplin Shirt", price: "₹1,699", image: "/products/ft-poplin-shirt.png", fit: "cover" },
            { name: "Coffee Corduroy Shirt", price: "₹1,499", image: "/products/ft-corduroy-shirt.png", fit: "cover" },
          ],
        },
      ],
    },
    "2": {
      name: "Accessories",
      desc: "Jewelry, bags & finishing touches.",
      video: "/real_ads/accersories-carousel.mp4",
      stores: [
        {
          brand: "Miso by Sonia",
          href: "/stores/miso-by-sonia",
          tag: "Artisanal Jewelry",
          video: "/real_ads/misobysonia-advertisment.mp4",
          products: [
            { name: "Batman Ring", price: "₹1,020", image: "/products/miso-batman-ring.png", fit: "cover" },
            { name: "Weave Cuff", price: "₹1,020", image: "/products/miso-weave-cuff.png", fit: "cover" },
            { name: "Silver Croissant Cuff", price: "₹520", image: "/products/miso-croissant.png", fit: "cover" },
          ],
        },
      ],
    },
    "3": {
      name: "Footwear",
      desc: "Sneakers to hand-made leather.",
      video: "/real_ads/footwear-carousel.mp4",
      stores: [
        {
          brand: "Gully Labs",
          href: "/stores/gully-labs",
          tag: "Footwear",
          video: "/real_ads/gully_labs-advertisment.mp4",
          products: [
            { name: "Koyar Black Sneakers", price: "₹4,490", image: "/products/gully-koyar.png", fit: "contain" },
            { name: "Baaz Laakh Red", price: "₹5,490", image: "/products/gully-baaz-red.png", fit: "contain" },
            { name: "Aandhi Kobicha", price: "₹6,990", image: "/products/gully-aandhi.png", fit: "contain" },
          ],
        },
      ],
    },
    "4": {
      name: "Formals",
      desc: "Tailoring, shirting & occasionwear.",
      video: "/real_ads/formals-carousel.mp4",
      stores: [
        {
          brand: "Bombay Shirt Co.",
          href: "/stores/bombay-shirt-co",
          tag: "Bespoke Shirts & Suits",
          video: "/real_ads/bombay_shirt_company-advertisment.mp4",
          products: [
            { name: "Carlisle Corduroy Blazer", price: "₹10,990", image: "/products/bsc-carlisle.png", fit: "cover" },
            { name: "Avelis Stretch Dress Pants", price: "₹4,590", image: "/products/bsc-avelis.png", fit: "contain" },
            { name: "Johnny Polo — Coffee", price: "₹3,490", image: "/products/bsc-johnny-polo.png", fit: "cover" },
          ],
        },
      ],
    },
    "5": {
      name: "Eyewear",
      desc: "Designer frames & shades.",
      video: "/real_ads/eyewear-carousel.mp4",
      stores: [
        {
          brand: "Sand Marshal",
          href: "/stores/sand-marshal",
          tag: "Eyewear Atelier",
          video: "/real_ads/samandmarshall-advertisment.mp4",
          products: [
            { name: "Procyon // Ocean", price: "₹4,250", image: "/products/sm-procyon-ocean.png", fit: "contain" },
            { name: "Procyon // Aqua", price: "₹4,250", image: "/products/sm-procyon-aqua.png", fit: "contain" },
            { name: "Atria // Magma", price: "₹5,250", image: "/products/sm-atria-magma.png", fit: "contain" },
          ],
        },
      ],
    },
    "6": {
      name: "Ethnic",
      desc: "Modern Indian drapery & fusion wear.",
      video: "/real_ads/ethnic-carousel.mp4",
      stores: [
        {
          brand: "Vastramay",
          href: "/stores/vastramay",
          tag: "Traditionals",
          video: "/real_ads/vastramay-advertisment.mp4",
          products: [
            { name: "Purple Silk Blend Jodhpuri", price: "₹3,649", image: "/products/vast-jodhpuri.png", fit: "cover" },
            { name: "Navy Zari Kurta Set", price: "₹3,899", image: "/products/vast-navy-kurta.png", fit: "cover" },
            { name: "Beige Nehru Jacket Set", price: "₹3,999", image: "/products/vast-nehru-set.png", fit: "cover" },
          ],
        },
      ],
    },
  };

  const floor = floorData[id] || floorData["G"];
  const allFloors = [
    { num: "6", name: "Ethnic" },
    { num: "5", name: "Eyewear" },
    { num: "4", name: "Formals" },
    { num: "3", name: "Footwear" },
    { num: "2", name: "Accessories" },
    { num: "1", name: "Semi Formals" },
    { num: "G", name: "Casuals" },
  ];

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "transparent", color: "#111111", overflow: "hidden", fontFamily: "'Geist', system-ui, sans-serif" }}>
      

      <div style={{ position: "relative", padding: "96px 72px 24px", zIndex: 5 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginBottom: 18 }}>
          <Link href="/floors">The Building</Link> / <span style={{ color: "#111111" }}>Floor {id} · {floor.name}</span>
        </div>

        {/* Floor Video Header Banner */}
        <div style={{ position: "relative", borderRadius: 40, overflow: "hidden", border: "1px solid rgba(255,255,255,0.14)", boxShadow: "0 30px 80px rgba(0,0,0,0.35)", marginBottom: 28, background: "#0e0e10", color: "#FFFFFF" }}>
          <video src={floor.video} autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg,rgba(8,8,10,0.95) 0%,rgba(8,8,10,0.82) 40%,rgba(8,8,10,0.2) 72%,rgba(8,8,10,0.5) 100%)" }} />
          <div style={{ position: "absolute", right: 90, top: "50%", transform: "translateY(-58%)", fontSize: 330, fontWeight: 950, letterSpacing: "-16px", lineHeight: 1, color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.22)", pointerEvents: "none" }}>
            {id}
          </div>

          <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 36, padding: "48px 48px 40px", minHeight: 300 }}>
            <div style={{ minWidth: 0, maxWidth: 560 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 9999, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff3333", animation: "omPulse 1.5s infinite" }}></span>
                  <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>{floor.stores.length} stores open</span>
                </span>
                <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>Floor {id} · CONCAT mall</span>
              </div>
              <h1 style={{ margin: "0 0 12px", fontSize: 60, fontWeight: 950, letterSpacing: "-3px", textTransform: "uppercase", lineHeight: 0.95, color: "#FFFFFF" }}>{floor.name}</h1>
              <p style={{ margin: "0 0 22px", fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.65)" }}>{floor.desc}</p>
            </div>

            {/* Elevator Lift */}
            <div style={{ flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 8, fontWeight: 800, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Lift</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: 10, borderRadius: 16, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(14px)" }}>
                {allFloors.map((fl) => (
                  <Link
                    key={fl.num}
                    href={`/floors/${fl.num}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      background: fl.num === id ? "#FFFFFF" : "rgba(255,255,255,0.08)",
                      color: fl.num === id ? "#111111" : "rgba(255,255,255,0.45)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      fontSize: 12,
                      fontWeight: 950,
                      textDecoration: "none",
                    }}
                  >
                    {fl.num}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stores on this Floor */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
          <h2 style={{ margin: 0, fontSize: 26, fontWeight: 950, letterSpacing: "-1px", textTransform: "uppercase", lineHeight: 1 }}>on this floor</h2>
          <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>Every rack ships direct from its store</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
          {floor.stores.map((st: any, idx: number) => (
            <div key={idx} style={{ display: "flex", borderRadius: 28, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.12)", background: "#FFFFFF", boxShadow: "0 16px 50px rgba(0,0,0,0.09)" }}>
              <Link href={st.href} style={{ position: "relative", width: 250, flex: "none", background: "#111", color: "#FFFFFF", display: "block", textDecoration: "none" }}>
                <video src={st.video} autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.25) 60%)" }} />
                <div style={{ position: "absolute", left: 18, right: 18, bottom: 16 }}>
                  <div style={{ fontSize: 8.5, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 3 }}>{st.tag}</div>
                  <div style={{ fontSize: 20, fontWeight: 950, textTransform: "uppercase", letterSpacing: "-0.5px", lineHeight: 1.05 }}>{st.brand}</div>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, padding: "8px 16px", borderRadius: 9999, background: "#FFFFFF", color: "#111111", fontSize: 9, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
                    Step inside
                  </span>
                </div>
              </Link>
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 12, padding: 16 }}>
                {st.products.map((p: any, pIdx: number) => (
                  <Link key={pIdx} href="/shop" style={{ position: "relative", borderRadius: 18, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)", color: "inherit", textDecoration: "none" }}>
                    <span style={{ display: "block", aspectRatio: "3/3", background: "#F6F5F3" }}>
                      <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: p.fit as any, display: "block" }} />
                    </span>
                    <span style={{ position: "absolute", top: 8, right: -5, padding: "4px 10px 4px 12px", background: "#111111", color: "#FFFFFF", fontSize: 10, fontWeight: 900, transform: "rotate(4deg)", borderRadius: 5 }}>{p.price}</span>
                    <span style={{ display: "block", padding: "9px 12px", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
