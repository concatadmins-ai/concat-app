"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
  const [items, setItems] = useState([
    { id: 1, name: "Orng Tiger Fury Tee", brand: "Blueorng", size: "M", store: "Blueorng", qty: 1, price: 4900, image: "/products/blu-tiger-tee.png" },
    { id: 2, name: "Natural Linen Trousers", brand: "5feet11", size: "32", store: "5feet11", qty: 1, price: 2499, image: "/products/ft-linen-trousers.png" },
    { id: 3, name: "Koyar Black Sneakers", brand: "Gully Labs", size: "42", store: "Gully Labs", qty: 1, price: 4490, image: "/products/gully-koyar.png" },
  ]);

  const [step, setStep] = useState<"bag" | "shipping" | "payment">("bag");

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = 500;
  const total = subtotal - discount;

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "transparent", color: "#111111", overflow: "hidden", fontFamily: "'Geist', system-ui, sans-serif" }}>
      

      <div style={{ position: "relative", padding: "110px 72px 40px", zIndex: 5 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 30, flexWrap: "wrap" }}>
          <h1 style={{ margin: 0, fontSize: 44, fontWeight: 950, letterSpacing: "-2px", textTransform: "uppercase", lineHeight: 1 }}>your bag</h1>
          <div style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 9, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}>
            <span onClick={() => setStep("bag")} style={{ padding: "4px 12px", borderRadius: 9999, background: step === "bag" ? "#111111" : "transparent", color: step === "bag" ? "#FFFFFF" : "#111111", border: "1px solid rgba(0,0,0,0.2)", cursor: "pointer" }}>1 Bag</span>
            <span>—</span>
            <span onClick={() => setStep("shipping")} style={{ padding: "4px 12px", borderRadius: 9999, background: step === "shipping" ? "#111111" : "transparent", color: step === "shipping" ? "#FFFFFF" : "#111111", border: "1px solid rgba(0,0,0,0.2)", cursor: "pointer" }}>2 Shipping</span>
            <span>—</span>
            <span onClick={() => setStep("payment")} style={{ padding: "4px 12px", borderRadius: 9999, background: step === "payment" ? "#111111" : "transparent", color: step === "payment" ? "#FFFFFF" : "#111111", border: "1px solid rgba(0,0,0,0.2)", cursor: "pointer" }}>3 Payment</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Main Bag Items List */}
          <div style={{ flex: 1.3, minWidth: 460, display: "flex", flexDirection: "column", gap: 14 }}>
            {items.map((bi) => (
              <div key={bi.id} style={{ display: "flex", gap: 18, padding: 16, borderRadius: 24, background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.1)", backdropFilter: "blur(14px)", alignItems: "center" }}>
                <div style={{ width: 76, height: 96, borderRadius: 14, overflow: "hidden", flex: "none" }}>
                  <img src={bi.image} alt={bi.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#777777", margin: "0 0 3px" }}>at {bi.brand}</p>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: "0 0 5px" }}>{bi.name}</h3>
                  <p style={{ fontSize: 11, color: "rgba(0,0,0,0.5)", margin: 0 }}>Size {bi.size} · ships from {bi.store}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 12px", borderRadius: 9999, border: "1px solid rgba(0,0,0,0.15)", fontSize: 13, fontWeight: 700 }}>
                  <span onClick={() => updateQty(bi.id, -1)} style={{ cursor: "pointer", opacity: 0.5 }}>−</span>
                  <span>{bi.qty}</span>
                  <span onClick={() => updateQty(bi.id, 1)} style={{ cursor: "pointer", opacity: 0.5 }}>+</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 900, width: 80, textAlign: "right" }}>₹{(bi.price * bi.qty).toLocaleString("en-IN")}</div>
                <span onClick={() => removeItem(bi.id)} style={{ cursor: "pointer", opacity: 0.35, fontSize: 16, marginLeft: 8 }}>✕</span>
              </div>
            ))}

            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", borderRadius: 20, border: "1.5px dashed rgba(0,0,0,0.18)", background: "rgba(255,255,255,0.3)" }}>
              <span style={{ fontSize: 12, color: "rgba(0,0,0,0.45)" }}>Gift code or store credit</span>
              <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", cursor: "pointer", textDecoration: "underline" }}>Apply</span>
            </div>
          </div>

          {/* Checkout Summary Box */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 400, padding: 30, borderRadius: 32, background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.1)", backdropFilter: "blur(20px)", boxShadow: "0 16px 50px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.3px", marginBottom: 4 }}>Summary</div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "rgba(0,0,0,0.6)" }}>
              <span>Subtotal · {items.length} pieces</span>
              <span style={{ fontWeight: 700, color: "#111111" }}>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "rgba(0,0,0,0.6)" }}>
              <span>Shipping</span>
              <span style={{ fontWeight: 700, color: "#111111" }}>Free</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "rgba(0,0,0,0.6)" }}>
              <span>Drop discount</span>
              <span style={{ fontWeight: 700, color: "#111111" }}>−₹{discount}</span>
            </div>
            <div style={{ height: 1, background: "rgba(0,0,0,0.1)", margin: "6px 0" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>Total</span>
              <span style={{ fontSize: 26, fontWeight: 900 }}>₹{total.toLocaleString("en-IN")}</span>
            </div>

            <button
              onClick={() => alert("Order Placed Successfully! CONCAT tracking # CNC-98421 generated.")}
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "16px 32px", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", boxShadow: "0 10px 28px rgba(0,0,0,0.15)", marginTop: 6, border: "none" }}
            >
              Continue to shipping →
            </button>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 10, color: "rgba(0,0,0,0.4)" }}>
              🔒 Secure checkout · each piece ships direct from its store
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
