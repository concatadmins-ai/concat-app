"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [orderInput, setOrderInput] = useState("");
  const [trackingResult, setTrackingResult] = useState<string | null>(null);

  const faqs = [
    { q: "Where do orders ship from?", a: "Each piece ships directly from the independent brand's verified atelier or studio. We handle the logistics and tracking." },
    { q: "How do returns work across different stores?", a: "Every piece on CONCAT features a unified 7-day hassle-free return policy backed by the CONCAT Grievance Desk." },
    { q: "How do I track my order?", a: "Enter your order number (e.g., CNC-48291) above, or view live tracking details under your customer account." },
    { q: "How are stores selected for CONCAT?", a: "We audit studio craftsmanship, fabric composition, stitch density, and customer fulfillment records before offering glass on a floor." },
    { q: "Can I sell my label on CONCAT?", a: "Yes! Apply through our Partner Up page. We review independent label applications on a rolling weekly basis." },
  ];

  const handleTrack = () => {
    if (orderInput.trim()) {
      setTrackingResult(`Order #${orderInput.toUpperCase()}: Dispatched from studio — Out for delivery.`);
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "linear-gradient(150deg,#FFFFFF 0%,#FAFAFA 25%,#F0F0F0 55%,#FAFAFA 78%,#F5F5F5 100%)", color: "#111111", overflow: "hidden", fontFamily: "'Geist', system-ui, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,0,0,0.14) 0.8px, transparent 0.9px)", backgroundSize: "8px 8px", pointerEvents: "none" }} />

      <div style={{ position: "relative", padding: "110px 72px 24px", zIndex: 5 }}>
        <div style={{ marginBottom: 26 }}>
          <h1 style={{ margin: 0, fontSize: 44, fontWeight: 950, letterSpacing: "-2px", textTransform: "uppercase", lineHeight: 1 }}>help desk</h1>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 8 }}>
            Ground floor, next to the elevators · replies within 24h
          </div>
        </div>

        {/* Order Tracker Bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", borderRadius: 24, background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.1)", backdropFilter: "blur(14px)", marginBottom: 32, flexWrap: "wrap" }}>
          <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", flex: "none" }}>Track order</span>
          <input
            type="text"
            placeholder="Order # e.g. CNC-48291"
            value={orderInput}
            onChange={(e) => setOrderInput(e.target.value)}
            style={{ flex: 1, minWidth: 220, padding: "12px 20px", borderRadius: 14, background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.15)", fontSize: 13, outline: "none" }}
          />
          <button onClick={handleTrack} style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", border: "none", cursor: "pointer" }}>
            Track
          </button>
        </div>

        {trackingResult && (
          <div style={{ padding: "14px 20px", borderRadius: 16, background: "#111111", color: "#FFFFFF", marginBottom: 28, fontSize: 13, fontWeight: 700 }}>
            {trackingResult}
          </div>
        )}

        <div style={{ display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* FAQ Accordion */}
          <div style={{ flex: 1.2, minWidth: 380, display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginBottom: 14 }}>Frequently asked</div>
            {faqs.map((fq, idx) => (
              <div key={idx} style={{ borderBottom: "1px solid rgba(0,0,0,0.09)" }}>
                <div
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "18px 4px", cursor: "pointer" }}
                >
                  <span style={{ fontSize: 14.5, fontWeight: 700 }}>{fq.q}</span>
                  <span style={{ fontSize: 16, fontWeight: 800 }}>{openFaq === idx ? "−" : "+"}</span>
                </div>
                {openFaq === idx && (
                  <div style={{ padding: "0 4px 18px", fontSize: 13.5, lineHeight: 1.6, color: "rgba(0,0,0,0.6)" }}>
                    {fq.a}
                  </div>
                )}
              </div>
            ))}

            <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", borderRadius: 9999, background: "rgba(255,255,255,0.3)", border: "1px solid rgba(0,0,0,0.15)", fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", cursor: "pointer" }}>
                Chat with us
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", borderRadius: 9999, background: "rgba(255,255,255,0.3)", border: "1px solid rgba(0,0,0,0.15)", fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", cursor: "pointer" }}>
                support@concat.shop
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ flex: 1, minWidth: 360, padding: 32, borderRadius: 32, background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.1)", backdropFilter: "blur(20px)", boxShadow: "0 16px 50px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.3px", marginBottom: 2 }}>Write to us</div>
            <input type="text" placeholder="Your name" style={{ padding: "15px 20px", borderRadius: 14, background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.15)", fontSize: 13, outline: "none" }} />
            <input type="email" placeholder="Email address" style={{ padding: "15px 20px", borderRadius: 14, background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.15)", fontSize: 13, outline: "none" }} />
            <textarea placeholder="How can we help?" style={{ padding: "15px 20px", borderRadius: 14, background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.15)", fontSize: 13, height: 110, outline: "none", resize: "none" }} />
            <button style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "14px 32px", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", border: "none", boxShadow: "0 10px 28px rgba(0,0,0,0.15)" }}>
              Send message
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
