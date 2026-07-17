"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

const BURG  = "#111111";
const BURG_LIGHT = "#777777";
const CREAM = "#FFFFFF";

const CATEGORIES = ["All", "Modern Casuals", "Semi Formals", "Footwear", "Accessories", "Eyewear", "Formals"];

const MOCK_PRODUCTS = [
  { id: 1,  name: "Velvet Evening Gown",   brand: "CONCAT", price: 1200, image: "/media__1784131496078.png" },
  { id: 2,  name: "Silk Overcoat",         brand: "AURA",   price: 850,  image: "/media__1784131738979.png" },
  { id: 3,  name: "Leather Tote",          brand: "NOVA",   price: 450,  image: "/media__1784132058127.png" },
  { id: 4,  name: "Oversized Cashmere",    brand: "CONCAT", price: 600,  image: "/media__1784132250371.png" },
  { id: 5,  name: "Pleated Trousers",      brand: "AURA",   price: 400,  image: "/media__1784132288061.png" },
  { id: 6,  name: "Monolith Boots",        brand: "NOVA",   price: 890,  image: "/media__1784132530186.png" },
  { id: 7,  name: "Tailored Blazer",       brand: "CONCAT", price: 1100, image: "/media__1784132886336.png" },
  { id: 8,  name: "Mesh Corset",           brand: "AURA",   price: 350,  image: "/media__1784133094296.png" },
  { id: 9,  name: "Wide-Leg Linen",        brand: "KIRE",   price: 520,  image: "/media__1784133227077.png" },
  { id: 10, name: "Leather Bomber",        brand: "LUMIS",  price: 1350, image: "/media__1784133952584.png" },
  { id: 11, name: "Asymmetric Knit",       brand: "CONCAT", price: 680,  image: "/media__1784134008499.png" },
  { id: 12, name: "Crystal Heels",         brand: "NOVA",   price: 975,  image: "/media__1784145616978.png" },
];

export default function ShopPage() {
  const [selectedCat, setSelectedCat] = useState("All");

  return (
    <div className="page-scroll" style={{ padding: "110px 40px 60px", background: "#FAFAFA", color: "#111111" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "rgba(0,0,0,0.45)", margin: "0 0 10px" }}>
            The Collection
          </p>
          <h1 style={{ fontFamily: "inherit", fontSize: "clamp(36px,5vw,72px)", fontWeight: 900, letterSpacing: -3, color: BURG, margin: 0, lineHeight: 1 }}>
            Shop All
          </h1>
        </div>

        {/* Category Chips */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={selectedCat === cat ? "tag-chip active" : "tag-chip"}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 28 }}>
          {MOCK_PRODUCTS.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`} style={{ textDecoration: "none" }}>
              <div
                className="glass-card"
                style={{ borderRadius: 20, overflow: "hidden", cursor: "pointer" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform="translateY(-4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
              >
                {/* Image */}
                <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                  <img
                    src={product.image} alt={product.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 0.6s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform="scale(1.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform="scale(1)")}
                  />
                  <button
                    style={{
                      position: "absolute", top: 12, right: 12, width: 36, height: 36,
                      borderRadius: "50%", background: "rgba(255,255,255,0.5)",
                      backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)",
                      color: BURG, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Heart size={15} strokeWidth={2} />
                  </button>
                </div>

                {/* Info */}
                <div style={{ padding: "16px 18px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: BURG_LIGHT, margin: "0 0 4px" }}>{product.brand}</p>
                      <h3 style={{ fontSize: 14, fontWeight: 600, color: BURG, margin: 0 }}>{product.name}</h3>
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 800, color: BURG, whiteSpace: "nowrap", marginLeft: 10 }}>
                      ${product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
