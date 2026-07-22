"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Footer from "@/components/Footer";

export default function StoreDetailPage() {
  const params = useParams();
  const rawId = (params?.id as string) || "5feet11";
  const id = rawId.toLowerCase();

  const [following, setFollowing] = useState(false);

  const storeData: Record<string, any> = {
    "5feet11": {
      brand: "5feet11",
      tagline: "Linen & Casuals · Floor G, Casuals",
      desc: "Breathable linen and easy staples cut for Indian summers — relaxed silhouettes, natural fabric, zero fuss. Small batches, dyed and finished in-house.",
      video: "/real_ads/5feet11-advertisment.mp4",
      piecesCount: "5",
      followers: "8k",
      year: "'23",
      products: [
        { name: "Natural Linen Trousers", price: "₹2,499", image: "/products/ft-linen-trousers.png", fit: "cover" },
        { name: "Coffee Corduroy Shirt", price: "₹1,499", image: "/products/ft-corduroy-shirt.png", fit: "cover" },
        { name: "Striped Poplin Shirt", price: "₹1,699", image: "/products/ft-poplin-shirt.png", fit: "cover" },
        { name: "Green Gauze Holiday Shirt", price: "₹1,499", image: "/products/ft-gauze-shirt.png", fit: "cover" },
        { name: "Hot Pink Stripe Tee", price: "₹1,499", image: "/products/ft-pink-tee.png", fit: "cover" },
      ],
    },
    blueorng: {
      brand: "Blueorng",
      tagline: "Streetwear · Floor G, Casuals",
      desc: "Aesthetic streetwear inspired by modern youth culture, heavyweight cottons, and graphic expressions.",
      video: "/real_ads/blueorng-advertisment.mp4",
      piecesCount: "6",
      followers: "42k",
      year: "'22",
      products: [
        { name: "DRS Red Full Sleeve Jersey", price: "₹5,800", image: "/products/blu-drs-jersey.png", fit: "cover" },
        { name: "Orng Tiger Fury T-Shirt", price: "₹4,900", image: "/products/blu-tiger-tee.png", fit: "contain" },
        { name: "Grey Star Studded Hoodie", price: "₹17,000", image: "/products/blu-star-hoodie.png", fit: "cover" },
        { name: "Shenron Red Cap", price: "₹3,500", image: "/products/blu-shenron-cap.png", fit: "contain" },
      ],
    },
    "gully-labs": {
      brand: "Gully Labs",
      tagline: "Footwear · Floor 3, Footwear",
      desc: "Court sneakers that combine heritage Indian materials like hand-woven jute and raw suede with modern street sensibilities.",
      video: "/real_ads/gully_labs-advertisment.mp4",
      piecesCount: "4",
      followers: "19k",
      year: "'24",
      products: [
        { name: "Koyar Black Sneakers", price: "₹4,490", image: "/products/gully-koyar.png", fit: "contain" },
        { name: "Baaz Laakh Red", price: "₹5,490", image: "/products/gully-baaz-red.png", fit: "contain" },
        { name: "Aandhi Kobicha", price: "₹6,990", image: "/products/gully-aandhi.png", fit: "contain" },
        { name: "Baaz Kopal Green", price: "₹5,490", image: "/products/gully-baaz-green.png", fit: "contain" },
      ],
    },
    "sand-marshal": {
      brand: "Sand Marshal",
      tagline: "Eyewear · Floor 5, Eyewear",
      desc: "Designer frames, bio-acetate shades, and sculpted titanium eyewear crafted for distinction.",
      video: "/real_ads/samandmarshall-advertisment.mp4",
      piecesCount: "3",
      followers: "14k",
      year: "'23",
      products: [
        { name: "Procyon // Ocean", price: "₹4,250", image: "/products/sm-procyon-ocean.png", fit: "contain" },
        { name: "Procyon // Aqua", price: "₹4,250", image: "/products/sm-procyon-aqua.png", fit: "contain" },
        { name: "Atria // Magma", price: "₹5,250", image: "/products/sm-atria-magma.png", fit: "contain" },
      ],
    },
    vastramay: {
      brand: "Vastramay",
      tagline: "Traditionals · Floor 6, Ethnic",
      desc: "Modern Indian drapery, royal Jodhpuris, and silk kurta sets crafted for celebration.",
      video: "/real_ads/vastramay-advertisment.mp4",
      piecesCount: "3",
      followers: "31k",
      year: "'21",
      products: [
        { name: "Purple Silk Blend Jodhpuri", price: "₹3,649", image: "/products/vast-jodhpuri.png", fit: "cover" },
        { name: "Navy Zari Kurta Set", price: "₹3,899", image: "/products/vast-navy-kurta.png", fit: "cover" },
        { name: "Beige Nehru Jacket Set", price: "₹3,999", image: "/products/vast-nehru-set.png", fit: "cover" },
      ],
    },
    "bombay-shirt-co": {
      brand: "Bombay Shirt Co.",
      tagline: "Bespoke Shirts · Floor 4, Formals",
      desc: "Precision tailoring, corduroy blazers, and custom stretch dress pants built to last.",
      video: "/real_ads/bombay_shirt_company-advertisment.mp4",
      piecesCount: "3",
      followers: "85k",
      year: "'19",
      products: [
        { name: "Carlisle Corduroy Blazer", price: "₹10,990", image: "/products/bsc-carlisle.png", fit: "cover" },
        { name: "Avelis Stretch Dress Pants", price: "₹4,590", image: "/products/bsc-avelis.png", fit: "contain" },
        { name: "Johnny Polo — Coffee", price: "₹3,490", image: "/products/bsc-johnny-polo.png", fit: "cover" },
      ],
    },
    "miso-by-sonia": {
      brand: "Miso by Sonia",
      tagline: "Artisanal Jewelry · Floor 2, Accessories",
      desc: "Handmade sterling silver cuffs, gold-plated statement rings, and delicate croissant jewelry.",
      video: "/real_ads/misobysonia-advertisment.mp4",
      piecesCount: "3",
      followers: "11k",
      year: "'23",
      products: [
        { name: "Batman Ring", price: "₹1,020", image: "/products/miso-batman-ring.png", fit: "cover" },
        { name: "Weave Cuff", price: "₹1,020", image: "/products/miso-weave-cuff.png", fit: "cover" },
        { name: "Silver Croissant Cuff", price: "₹520", image: "/products/miso-croissant.png", fit: "cover" },
      ],
    },
  };

  const store = storeData[id] || storeData["5feet11"];

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "linear-gradient(150deg,#FFFFFF 0%,#FAFAFA 25%,#F0F0F0 55%,#FAFAFA 78%,#F5F5F5 100%)", color: "#111111", overflow: "hidden", fontFamily: "'Geist', system-ui, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,0,0,0.14) 0.8px, transparent 0.9px)", backgroundSize: "8px 8px", pointerEvents: "none" }} />

      <div style={{ position: "relative", padding: "96px 72px 24px", zIndex: 5 }}>
        {/* Store Header Video Banner */}
        <div style={{ position: "relative", height: 380, borderRadius: 36, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 30px 70px rgba(0,0,0,0.12)", background: "#111", marginBottom: 26 }}>
          <video src={store.video} autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.88) 0%,transparent 60%)" }} />
          <div style={{ position: "absolute", top: 22, right: 24, display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff3333", animation: "omPulse 1.5s infinite" }}></span>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: "#FFFFFF", textTransform: "uppercase" }}>Open now</span>
          </div>

          <div style={{ position: "absolute", left: 32, right: 32, bottom: 26, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 6 }}>{store.tagline}</div>
              <h1 style={{ margin: 0, fontSize: 54, fontWeight: 950, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "-2.5px", lineHeight: 1 }}>{store.brand}</h1>
              <div style={{ marginTop: 12 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", borderRadius: 9999, background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(12px)", color: "#FFFFFF", fontSize: 9, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 16, height: 16, borderRadius: "50%", background: "#FFFFFF", color: "#111111", fontSize: 10 }}>✓</span>
                  Verified & quality-checked by CONCAT
                </span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => setFollowing(!following)}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 26px", borderRadius: 9999, background: following ? "#ff3333" : "#FFFFFF", color: following ? "#FFFFFF" : "#111111", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", border: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
              >
                {following ? "✓ Following" : "+ Follow"}
              </button>
            </div>
          </div>
        </div>

        {/* Bio & Stats */}
        <div style={{ display: "flex", gap: 40, alignItems: "flex-start", marginBottom: 36, flexWrap: "wrap" }}>
          <p style={{ flex: 1.4, minWidth: 380, margin: 0, fontSize: 15, lineHeight: 1.7, color: "rgba(0,0,0,0.65)", textWrap: "pretty" }}>
            {store.desc}
          </p>
          <div style={{ display: "flex", gap: 32 }}>
            <div>
              <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-1px" }}>{store.piecesCount}</div>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 2 }}>Pieces</div>
            </div>
            <div style={{ width: 1, background: "rgba(0,0,0,0.12)" }} />
            <div>
              <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-1px" }}>{store.followers}</div>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 2 }}>Followers</div>
            </div>
            <div style={{ width: 1, background: "rgba(0,0,0,0.12)" }} />
            <div>
              <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-1px" }}>{store.year}</div>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 2 }}>On CONCAT</div>
            </div>
          </div>
        </div>

        {/* Store Catalogue Rack */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
          <h3 style={{ margin: 0, fontSize: 22, fontWeight: 900, letterSpacing: "-0.5px", textTransform: "uppercase" }}>In the window</h3>
          <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>All {store.piecesCount} pieces</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {store.products.map((pr: any, idx: number) => (
            <Link key={idx} href="/checkout" style={{ position: "relative", borderRadius: 22, overflow: "hidden", background: "#FFFFFF", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", color: "inherit", textDecoration: "none" }}>
              <div style={{ position: "relative", aspectRatio: "3/3.6", background: "#F6F5F3" }}>
                <img src={pr.image} alt={pr.name} style={{ width: "100%", height: "100%", objectFit: pr.fit as any, display: "block" }} />
                <div style={{ position: "absolute", top: 10, right: -6, padding: "5px 12px 5px 14px", background: "#111111", color: "#FFFFFF", fontSize: 11, fontWeight: 900, transform: "rotate(4deg)", borderRadius: 6, boxShadow: "0 6px 16px rgba(0,0,0,0.3)" }}>
                  {pr.price}
                </div>
              </div>
              <div style={{ padding: "13px 16px" }}>
                <span style={{ display: "block", fontSize: 13, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{pr.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
