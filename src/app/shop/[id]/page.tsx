"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Footer from "@/components/Footer";

export default function ProductDetailPage() {
  const params = useParams();
  const rawId = (params?.id as string) || "1";

  const [selectedSize, setSelectedSize] = useState("M");

  const product = {
    name: "Orng Tiger Fury T-Shirt",
    brand: "BLUEORNG",
    price: "₹4,900",
    wasPrice: "₹5,900",
    floor: "Floor G, Casuals",
    desc: "Heavyweight 280 GSM cotton graphic tee featuring custom high-density silk print and relaxed drop-shoulder cut. Pre-shrunk and garment-dyed in small batches.",
    image: "/products/blu-tiger-tee.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "280 GSM 100% combed cotton · machine wash cold",
    shipping: "Free express shipping · 2–4 days · direct from studio",
    returns: "7-day hassle-free returns via CONCAT Grievance Desk",
  };

  const related = [
    { name: "Natural Linen Trousers", brand: "5feet11", price: "₹2,499", image: "/products/ft-linen-trousers.png" },
    { name: "Koyar Black Sneakers", brand: "Gully Labs", price: "₹4,490", image: "/products/gully-koyar.png" },
    { name: "Procyon // Ocean", brand: "Sand Marshal", price: "₹4,250", image: "/products/sm-procyon-ocean.png" },
    { name: "Silver Croissant Cuff", brand: "Miso by Sonia", price: "₹520", image: "/products/miso-croissant.png" },
  ];

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "linear-gradient(150deg,#FFFFFF 0%,#FAFAFA 25%,#F0F0F0 55%,#FAFAFA 78%,#F5F5F5 100%)", color: "#111111", overflow: "hidden", fontFamily: "'Geist', system-ui, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,0,0,0.14) 0.8px, transparent 0.9px)", backgroundSize: "8px 8px", pointerEvents: "none" }} />

      <div style={{ position: "relative", padding: "104px 72px 40px", zIndex: 5 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginBottom: 20 }}>
          <Link href="/shop">The Rack</Link> / Casuals / <span style={{ color: "#111111" }}>{product.name}</span>
        </div>

        <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
          {/* Main Product Image */}
          <div style={{ flex: 1.1, minWidth: 420, position: "relative", borderRadius: 28, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 30px 70px rgba(0,0,0,0.12)", background: "#F6F5F3" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: 560, objectFit: "contain", display: "block" }} />
            <div style={{ position: "absolute", top: 18, left: 18, padding: "6px 14px", borderRadius: 9999, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)", fontSize: 9, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>
              Fresh off the rack
            </div>
            <div style={{ position: "absolute", top: 14, right: -8, padding: "8px 18px 8px 20px", background: "#111111", color: "#FFFFFF", fontSize: 16, fontWeight: 900, transform: "rotate(4deg)", borderRadius: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
              {product.price}
            </div>
          </div>

          {/* Product Info & Actions */}
          <div style={{ flex: 1, minWidth: 380, display: "flex", flexDirection: "column", gap: 22, paddingTop: 6 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "#777777" }}>{product.brand}</span>
                <Link href="/stores/blueorng" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 9999, background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)", fontSize: 9, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", textDecoration: "none" }}>
                  Step inside the store →
                </Link>
              </div>
              <h1 style={{ margin: "0 0 12px", fontSize: 40, fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.05 }}>{product.name}</h1>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontSize: 28, fontWeight: 900 }}>{product.price}</span>
                <span style={{ fontSize: 13, color: "rgba(0,0,0,0.4)", textDecoration: "line-through" }}>{product.wasPrice}</span>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6, background: "#111111", color: "#FFFFFF", padding: "3px 10px", borderRadius: 9999 }}>
                  ✓ CONCAT certified
                </span>
              </div>
            </div>

            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "rgba(0,0,0,0.65)" }}>
              {product.desc}
            </p>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>Size</span>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "rgba(0,0,0,0.45)", cursor: "pointer", textDecoration: "underline" }}>Size guide</span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {product.sizes.map((sz) => (
                  <span
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 52,
                      height: 46,
                      borderRadius: 12,
                      background: selectedSize === sz ? "#111111" : "rgba(255,255,255,0.4)",
                      color: selectedSize === sz ? "#FFFFFF" : "#111111",
                      border: "1.5px solid rgba(0,0,0,0.15)",
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    {sz}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <Link href="/checkout" style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "16px 32px", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", boxShadow: "0 10px 28px rgba(0,0,0,0.15)", textDecoration: "none" }}>
                Add to bag
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 2px", borderBottom: "1px solid rgba(0,0,0,0.08)", fontSize: 12 }}>
                <span style={{ fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", fontSize: 10 }}>Fabric & care</span>
                <span style={{ color: "rgba(0,0,0,0.5)" }}>{product.fabric}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 2px", borderBottom: "1px solid rgba(0,0,0,0.08)", fontSize: 12 }}>
                <span style={{ fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", fontSize: 10 }}>Shipping</span>
                <span style={{ color: "rgba(0,0,0,0.5)" }}>{product.shipping}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 2px", borderBottom: "1px solid rgba(0,0,0,0.08)", fontSize: 12 }}>
                <span style={{ fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", fontSize: 10 }}>Returns</span>
                <span style={{ color: "rgba(0,0,0,0.5)" }}>{product.returns}</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", borderRadius: 18, background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.1)", backdropFilter: "blur(14px)" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff3333", animation: "omPulse 1.5s infinite", flex: "none" }}></span>
              <span style={{ fontSize: 11, color: "rgba(0,0,0,0.6)" }}>
                Sold by <strong style={{ color: "#111111" }}>{product.brand}</strong> · {product.floor} · leaves the mall wearing <strong style={{ color: "#111111" }}>the CONCAT tag</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Complete the look */}
        <div style={{ marginTop: 48 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
            <h3 style={{ margin: 0, fontSize: 22, fontWeight: 900, letterSpacing: "-0.5px", textTransform: "uppercase" }}>Complete the look</h3>
            <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>Styled across the mall</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {related.map((pr, idx) => (
              <Link key={idx} href="/checkout" style={{ borderRadius: 22, overflow: "hidden", background: "#FFFFFF", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", color: "inherit", textDecoration: "none" }}>
                <div style={{ aspectRatio: "3/3.2", background: "#F6F5F3" }}>
                  <img src={pr.image} alt={pr.name} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                </div>
                <div style={{ padding: "12px 15px" }}>
                  <p style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#777777", margin: "0 0 3px" }}>at {pr.brand}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "baseline" }}>
                    <span style={{ fontSize: 12.5, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{pr.name}</span>
                    <span style={{ fontSize: 13, fontWeight: 900, flex: "none" }}>{pr.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
