"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronDown, Heart, ArrowLeft, ShoppingBag } from "lucide-react";
import { useStore } from "@/store/useStore";

const BURG  = "#111111";
const BURG_LIGHT = "#777777";
const CREAM = "#FFFFFF";

const MOCK_PRODUCTS = [
  { id: 1,  name: "Velvet Evening Gown",   brand: "CONCAT", price: 1200, image: "/media__1784131496078.png",  desc: "A luxurious velvet evening gown crafted from Italian silk-velvet blend. Features a dramatic floor-length silhouette with subtle train." },
  { id: 2,  name: "Silk Overcoat",         brand: "AURA",   price: 850,  image: "/media__1784131738979.png",  desc: "Fluid silk overcoat with a relaxed silhouette and clean, modern lines. Perfect layering piece for any season." },
  { id: 3,  name: "Leather Tote",          brand: "NOVA",   price: 450,  image: "/media__1784132058127.png",  desc: "Structured full-grain leather tote with brass hardware. Spacious interior with suede lining." },
  { id: 4,  name: "Oversized Cashmere",    brand: "CONCAT", price: 600,  image: "/media__1784132250371.png",  desc: "100% Grade A Mongolian cashmere in an oversized cut. Incredibly soft with a lived-in luxury feel." },
  { id: 5,  name: "Pleated Trousers",      brand: "AURA",   price: 400,  image: "/media__1784132288061.png",  desc: "High-waisted pleated trousers in a wool-blend fabric. A modern take on tailored classics." },
  { id: 6,  name: "Monolith Boots",        brand: "NOVA",   price: 890,  image: "/media__1784132530186.png",  desc: "Architectural platform boots in burnished leather. A statement piece that commands attention." },
  { id: 7,  name: "Tailored Blazer",       brand: "CONCAT", price: 1100, image: "/media__1784132886336.png",  desc: "Single-breasted blazer in a heritage wool fabric. Impeccably constructed with hand-stitched lapels." },
  { id: 8,  name: "Mesh Corset",           brand: "AURA",   price: 350,  image: "/media__1784133094296.png",  desc: "Structured mesh corset with boning detail. An avant-garde statement piece for the bold individual." },
  { id: 9,  name: "Wide-Leg Linen",        brand: "KIRE",   price: 520,  image: "/media__1784133227077.png",  desc: "Relaxed wide-leg trousers in stone-washed linen. Effortlessly elegant and breathable." },
  { id: 10, name: "Leather Bomber",        brand: "LUMIS",  price: 1350, image: "/media__1784133952584.png",  desc: "Supple lambskin leather bomber with rib-knit cuffs. A timeless investment piece." },
  { id: 11, name: "Asymmetric Knit",       brand: "CONCAT", price: 680,  image: "/media__1784134008499.png",  desc: "Hand-knitted asymmetric top in merino wool. Artisanal craft meets contemporary design." },
  { id: 12, name: "Crystal Heels",         brand: "NOVA",   price: 975,  image: "/media__1784145616978.png",  desc: "Slingback heels adorned with hand-set crystals. For the nights that demand to be remembered." },
];
const SIZES = ["XS", "S", "M", "L", "XL"];

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const product = MOCK_PRODUCTS.find((p) => p.id === id) || MOCK_PRODUCTS[0];
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const { addToCart, openCart } = useStore();

  const handleAdd = () => {
    if (!selectedSize) { alert("Please select a size."); return; }
    addToCart({ id: product.id, name: product.name, brand: product.brand, price: product.price, image: product.image, quantity: 1, size: selectedSize });
    openCart();
  };

  return (
    <div className="page-scroll" style={{ padding: "110px 40px 60px", background: "#FAFAFA", color: "#111111" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Back */}
        <Link href="/shop" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(0,0,0,0.55)", marginBottom: 40, transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color=BURG)}
          onMouseLeave={(e) => (e.currentTarget.style.color="rgba(0,0,0,0.55)")}
        >
          <ArrowLeft size={15} /> Back to Shop
        </Link>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          {/* Image */}
          <div className="glass-card" style={{ aspectRatio: "3/4", borderRadius: 28, overflow: "hidden", position: "sticky", top: 120 }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          </div>

          {/* Details */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: BURG_LIGHT, margin: "0 0 12px" }}>{product.brand}</p>
            <h1 style={{ fontFamily: "inherit", fontSize: "clamp(26px,3vw,44px)", fontWeight: 300, color: BURG, margin: "0 0 16px", letterSpacing: -1, textTransform: "uppercase", lineHeight: 1.1 }}>
              {product.name}
            </h1>
            <p style={{ fontSize: 28, fontWeight: 800, color: BURG, margin: "0 0 32px" }}>${product.price.toLocaleString()}</p>
            <p style={{ fontSize: 15, color: "rgba(0,0,0,0.65)", lineHeight: 1.75, margin: "0 0 40px" }}>{product.desc}</p>

            {/* Sizes */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.55)" }}>Select Size</span>
                <button style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: BURG_LIGHT, background: "none", border: "none", cursor: "pointer" }}>Size Guide</button>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {SIZES.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)}
                    style={{
                      flex: 1, padding: "14px 0", borderRadius: 12, border: "1.5px solid",
                      borderColor: selectedSize === size ? BURG : "rgba(0,0,0,0.15)",
                      background: selectedSize === size ? BURG : "rgba(255,255,255,0.35)",
                      color: selectedSize === size ? CREAM : BURG,
                      fontSize: 13, fontWeight: 700, cursor: "pointer", transition: "all 0.2s ease",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: "flex", gap: 12, marginBottom: 48 }}>
              <button onClick={handleAdd} className="btn-primary" style={{ flex: 1, padding: "18px 0", justifyContent: "center", fontSize: 13 }}>
                <ShoppingBag size={16} /> Add to Bag
              </button>
              <button style={{ width: 56, height: 56, borderRadius: "50%", border: `1.5px solid rgba(0,0,0,0.15)`, background: "rgba(255,255,255,0.35)", color: BURG, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Heart size={19} strokeWidth={2} />
              </button>
            </div>

            {/* Accordions */}
            {[
              { key: "details",   label: "Product Details",    body: product.desc },
              { key: "materials", label: "Materials & Care",   body: "Premium fabric blend. Dry clean recommended. Store in a cool, dry place away from direct sunlight." },
              { key: "shipping",  label: "Shipping & Returns", body: "Complimentary standard shipping on all orders. Express available at checkout. Free returns within 30 days." },
            ].map(({ key, label, body }) => (
              <div key={key} style={{ borderTop: `1px solid rgba(0,0,0,0.08)` }}>
                <button onClick={() => setOpenAccordion(openAccordion === key ? null : key)}
                  style={{ width: "100%", padding: "18px 0", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", color: BURG, fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer" }}
                >
                  {label}
                  <ChevronDown size={17} style={{ transform: openAccordion === key ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s ease" }} />
                </button>
                {openAccordion === key && (
                  <p style={{ fontSize: 14, color: "rgba(0,0,0,0.65)", lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{body}</p>
                )}
              </div>
            ))}
            <div style={{ borderTop: `1px solid rgba(0,0,0,0.08)` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
