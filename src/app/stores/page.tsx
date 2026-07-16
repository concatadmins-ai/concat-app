"use client";
import React, { useState } from "react";
const BURG = "#FFFFFF"; const BURG_LIGHT = "#AAAAAA"; const CREAM = "#111111";
const STORES = [
  { city: "Mumbai",   country: "India",  address: "Linking Road, Bandra West, Mumbai 400050", hours: "Mon–Sun: 10am–10pm", phone: "+91 22 6789 0000", tag: "FLAGSHIP" },
  { city: "Delhi",    country: "India",  address: "DLF Emporio, Nelson Mandela Road, Vasant Kunj, New Delhi 110070", hours: "Mon–Sun: 11am–9pm", phone: "+91 11 4567 8900", tag: "BOUTIQUE" },
  { city: "London",   country: "UK",     address: "27 Dover Street, Mayfair, London W1S 4LX", hours: "Mon–Sat: 10am–8pm, Sun: 12pm–6pm", phone: "+44 20 7123 4567", tag: "BOUTIQUE" },
  { city: "Tokyo",    country: "Japan",  address: "Omotesando Hills, 4-12-10 Jingumae, Shibuya, Tokyo", hours: "Mon–Sun: 11am–9pm", phone: "+81 3 3401 5678", tag: "BOUTIQUE" },
  { city: "New York", country: "USA",    address: "19 Greene Street, SoHo, New York, NY 10013", hours: "Mon–Sat: 11am–8pm, Sun: 12pm–7pm", phone: "+1 212 345 6789", tag: "FLAGSHIP" },
];
export default function StoresPage() {
  const [active, setActive] = useState(0);
  const s = STORES[active];
  return (
    <div className="page-scroll" style={{ padding: "110px 40px 60px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "rgba(74,14,23,0.4)", margin: "0 0 14px" }}>Find Us</p>
        <h1 style={{ fontFamily: "inherit", fontSize: "clamp(40px,6vw,88px)", fontWeight: 900, color: BURG, margin: "0 0 60px", letterSpacing: -4, lineHeight: 0.9, textTransform: "uppercase" }}>Our Boutiques</h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {STORES.map((store, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{ textAlign: "left", padding: "18px 22px", borderRadius: 16, border: "1.5px solid", borderColor: active===i ? BURG : "rgba(74,14,23,0.1)", background: active===i ? "rgba(74,14,23,0.06)" : "rgba(255,255,255,0.25)", cursor: "pointer", transition: "all 0.2s ease" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <h3 style={{ color: BURG, fontFamily: "inherit", fontSize: 17, fontWeight: 700, margin: 0, textTransform: "uppercase" }}>{store.city}</h3>
                  <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "4px 10px", borderRadius: 9999, background: store.tag==="FLAGSHIP" ? BURG : "rgba(74,14,23,0.1)", color: store.tag==="FLAGSHIP" ? CREAM : BURG }}>{store.tag}</span>
                </div>
                <p style={{ color: "rgba(74,14,23,0.45)", fontSize: 12, margin: 0 }}>{store.country} · {store.hours}</p>
              </button>
            ))}
          </div>
          <div style={{ position: "sticky", top: 120 }}>
            <div className="glass-card" style={{ borderRadius: 22, overflow: "hidden", marginBottom: 28, aspectRatio: "16/9", background: `linear-gradient(135deg, rgba(74,14,23,0.08), rgba(232,220,196,0.3))` }}>
              <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, opacity: 0.4 }}>🗺</div>
            </div>
            <h2 style={{ color: BURG, fontFamily: "inherit", fontSize: 34, fontWeight: 900, margin: "0 0 8px", textTransform: "uppercase" }}>{s.city}</h2>
            <p style={{ color: "rgba(74,14,23,0.55)", margin: "0 0 20px", lineHeight: 1.6, fontSize: 14 }}>{s.address}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {[["Hours", s.hours], ["Phone", s.phone]].map(([label, val]) => (
                <div key={label as string} style={{ display: "flex", gap: 14 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(74,14,23,0.3)", minWidth: 68 }}>{label}</span>
                  <span style={{ color: "rgba(74,14,23,0.7)", fontSize: 13 }}>{val}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary">Get Directions</button>
          </div>
        </div>
      </div>
    </div>
  );
}
