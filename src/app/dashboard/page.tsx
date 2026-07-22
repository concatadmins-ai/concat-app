"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"orders" | "drops" | "addresses">("orders");

  const orders = [
    {
      id: "CNC-48291",
      name: "Orng Tiger Fury Tee",
      brand: "Blueorng",
      date: "Jul 18, 2026",
      status: "In transit",
      dot: "#3B82F6",
      chipBg: "rgba(59,130,246,0.12)",
      chipFg: "#2563EB",
      total: "₹4,900",
      image: "/products/blu-tiger-tee.png",
      cta1: "Track package",
      cta2: "View invoice",
    },
    {
      id: "CNC-44102",
      name: "Natural Linen Trousers",
      brand: "5feet11",
      date: "Jul 11, 2026",
      status: "Delivered",
      dot: "#10B981",
      chipBg: "rgba(16,185,129,0.12)",
      chipFg: "#059669",
      total: "₹2,499",
      image: "/products/ft-linen-trousers.png",
      cta1: "Buy again",
      cta2: "Write review",
    },
    {
      id: "CNC-39820",
      name: "Koyar Black Sneakers",
      brand: "Gully Labs",
      date: "Jun 28, 2026",
      status: "Delivered",
      dot: "#10B981",
      chipBg: "rgba(16,185,129,0.12)",
      chipFg: "#059669",
      total: "₹4,490",
      image: "/products/gully-koyar.png",
      cta1: "Buy again",
      cta2: "View receipt",
    },
  ];

  const refundSteps = [
    { title: "Return requested", sub: "Approved by Miso by Sonia · Jul 15", dotBg: "#FFFFFF", dotBorder: "#FFFFFF", line: "#FFFFFF", fg: "#FFFFFF", tail: "18px" },
    { title: "Pickup scheduled", sub: "Courier partner assigned · Jul 16", dotBg: "#FFFFFF", dotBorder: "#FFFFFF", line: "#FFFFFF", fg: "#FFFFFF", tail: "18px" },
    { title: "Quality check at studio", sub: "Pending arrival at atelier", dotBg: "#333333", dotBorder: "rgba(255,255,255,0.4)", line: "rgba(255,255,255,0.2)", fg: "rgba(255,255,255,0.6)", tail: "18px" },
    { title: "Refund issued", sub: "Direct to original payment method", dotBg: "#333333", dotBorder: "rgba(255,255,255,0.4)", line: "transparent", fg: "rgba(255,255,255,0.4)", tail: "0px" },
  ];

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "linear-gradient(150deg,#FFFFFF 0%,#FAFAFA 25%,#F0F0F0 55%,#FAFAFA 78%,#F5F5F5 100%)", color: "#111111", overflow: "hidden", fontFamily: "'Geist', system-ui, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,0,0,0.14) 0.8px, transparent 0.9px)", backgroundSize: "8px 8px", pointerEvents: "none" }} />

      <div style={{ position: "relative", padding: "110px 72px 24px", zIndex: 5 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 22, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginBottom: 8 }}>Welcome back to the mall</div>
            <h1 style={{ margin: 0, fontSize: 44, fontWeight: 950, letterSpacing: "-2px", lineHeight: 1 }}>
              Rahul Sharma<span style={{ color: "#777777" }}>.</span>
            </h1>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: 9999, background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.12)", backdropFilter: "blur(10px)", fontSize: 10, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff3333", animation: "omPulse 1.5s infinite" }}></span>
              1 order in transit
            </span>
            <Link href="/login" style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.45)", textDecoration: "underline" }}>
              Sign out
            </Link>
          </div>
        </div>

        {/* Tab Controls */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
          <button
            onClick={() => setActiveTab("orders")}
            style={{
              padding: "9px 20px",
              borderRadius: 9999,
              border: activeTab === "orders" ? "1.5px solid #111111" : "1.5px solid rgba(0,0,0,0.12)",
              background: activeTab === "orders" ? "#111111" : "rgba(255,255,255,0.4)",
              color: activeTab === "orders" ? "#FFFFFF" : "#111111",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Orders (3)
          </button>
          <button
            onClick={() => setActiveTab("drops")}
            style={{
              padding: "9px 20px",
              borderRadius: 9999,
              border: activeTab === "drops" ? "1.5px solid #111111" : "1.5px solid rgba(0,0,0,0.12)",
              background: activeTab === "drops" ? "#111111" : "rgba(255,255,255,0.4)",
              color: activeTab === "drops" ? "#FFFFFF" : "#111111",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Saved Drops
          </button>
          <button
            onClick={() => setActiveTab("addresses")}
            style={{
              padding: "9px 20px",
              borderRadius: 9999,
              border: activeTab === "addresses" ? "1.5px solid #111111" : "1.5px solid rgba(0,0,0,0.12)",
              background: activeTab === "addresses" ? "#111111" : "rgba(255,255,255,0.4)",
              color: activeTab === "addresses" ? "#FFFFFF" : "#111111",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Saved Addresses
          </button>
        </div>

        <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Orders List */}
          <div style={{ flex: 1.5, minWidth: 480, display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>Your orders</div>
            {orders.map((od, i) => (
              <div key={i} style={{ padding: "18px 22px", borderRadius: 24, background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.1)", backdropFilter: "blur(14px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <div style={{ width: 56, height: 70, borderRadius: 12, overflow: "hidden", flex: "none" }}>
                    <img src={od.image} alt={od.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 3 }}>{od.name}</div>
                    <div style={{ fontSize: 11, color: "rgba(0,0,0,0.5)" }}>{od.id} · {od.date} · at {od.brand}</div>
                  </div>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "6px 16px", borderRadius: 9999, fontSize: 9, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", background: od.chipBg, color: od.chipFg, border: "1px solid rgba(0,0,0,0.08)", flex: "none" }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: od.dot }} />
                    {od.status}
                  </span>
                  <span style={{ fontSize: 15, fontWeight: 900, flex: "none" }}>{od.total}</span>
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 14, paddingTop: 12, borderTop: "1px solid rgba(0,0,0,0.07)", flexWrap: "wrap" }}>
                  <Link href="/support" style={{ display: "inline-flex", padding: "8px 18px", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 9, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>
                    {od.cta1}
                  </Link>
                  <Link href="/support" style={{ display: "inline-flex", padding: "8px 18px", borderRadius: 9999, border: "1.5px solid rgba(0,0,0,0.3)", color: "#111111", fontSize: 9, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>
                    {od.cta2}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Refund Tracker Card */}
          <div style={{ flex: 1, minWidth: 340, display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>Refund status</div>
            <div style={{ padding: 24, borderRadius: 24, background: "linear-gradient(160deg,rgba(32,32,37,0.9) 0%,rgba(12,12,14,0.94) 100%)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(28px) saturate(160%)", boxShadow: "0 20px 60px rgba(0,0,0,0.25)", color: "#FFFFFF" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 800 }}>Gilt Earring Set — ₹1,020</span>
                <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", color: "#FBBF24" }}>In progress</span>
              </div>
              <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>REF-2214 · raised Jul 15 · Miso by Sonia</div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {refundSteps.map((rs, i) => (
                  <div key={i} style={{ display: "flex", gap: 14 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span style={{ width: 14, height: 14, borderRadius: "50%", background: rs.dotBg, border: `2px solid ${rs.dotBorder}`, flex: "none" }} />
                      <span style={{ width: 2, flex: 1, background: rs.line, minHeight: rs.tail }} />
                    </div>
                    <div style={{ paddingBottom: 16 }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: rs.fg }}>{rs.title}</div>
                      <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{rs.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 14, fontSize: 11, color: "rgba(255,255,255,0.55)" }}>
                Handled by the <strong style={{ color: "#FFFFFF" }}>grievance desk</strong> — you're never in the grey.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
