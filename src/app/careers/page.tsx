"use client";

import React from "react";
import Footer from "@/components/Footer";

export default function CareersPage() {
  const roles = [
    { title: "Senior Product Designer", team: "Design", loc: "Remote" },
    { title: "Full-stack Engineer", team: "Engineering", loc: "Mumbai" },
    { title: "Brand Partnerships Lead", team: "Growth", loc: "Mumbai" },
    { title: "Content & Campaign Producer", team: "Creative", loc: "Remote" },
    { title: "Operations Associate", team: "Ops", loc: "Mumbai" },
  ];

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "linear-gradient(150deg,#FFFFFF 0%,#FAFAFA 25%,#F0F0F0 55%,#FAFAFA 78%,#F5F5F5 100%)", color: "#111111", overflow: "hidden", fontFamily: "'Geist', system-ui, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,0,0,0.14) 0.8px, transparent 0.9px)", backgroundSize: "8px 8px", pointerEvents: "none" }} />

      <div style={{ position: "relative", padding: "120px 72px 24px", zIndex: 5 }}>
        <div style={{ maxWidth: 720, marginBottom: 44 }}>
          <h1 style={{ margin: "0 0 16px", fontSize: 56, fontWeight: 955, letterSpacing: "-2.5px", lineHeight: 1, textTransform: "uppercase" }}>
            Build the mall<br />
            <span style={{ color: "rgba(0,0,0,0.32)" }}>of the internet.</span>
          </h1>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "rgba(0,0,0,0.65)", textWrap: "pretty" }}>
            We're a small team giving independent fashion a fighting chance against the mass market. If that moves you, come work with us.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>Open roles · 5</div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}>Mumbai / Remote</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {roles.map((rl, idx) => (
            <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, padding: "22px 18px", borderRadius: 20, borderBottom: "1px solid rgba(0,0,0,0.08)", cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, minWidth: 0, flexWrap: "wrap" }}>
                <span style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.3px" }}>{rl.title}</span>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}>{rl.team}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flex: "none" }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}>{rl.loc}</span>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", background: "#111111", color: "#FFFFFF" }}>→</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28, fontSize: 12, color: "rgba(0,0,0,0.5)" }}>
          Don't see your role? Write to <strong style={{ color: "#111111" }}>careers@concat.shop</strong>
        </div>
      </div>

      <Footer />
    </div>
  );
}
