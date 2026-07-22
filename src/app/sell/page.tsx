"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function SellPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const perks = [
    { num: "01", title: "Dedicated Storefront", desc: "No listing grids. You get your own video storefront, brand bio, and floor location." },
    { num: "02", title: "Instant Customer Trust", desc: "Every order is backed by the CONCAT Verification Badge and Grievance Desk, converting hesitant visitors." },
    { num: "03", title: "Unified Checkout", desc: "Customers can pair your piece with products from other floors in a single cart, boosting order values." },
    { num: "04", title: "The Night Window", desc: "Participate in secret nightly 15-minute drops to clear excess stock without discounting publicly." },
    { num: "05", title: "Full Direct Relationship", desc: "Keep your brand identity, pricing autonomy, and customer relationships intact." },
    { num: "06", title: "Zero Setup Fee", desc: "We take care of the floor placement, media encoding, and buyer verification setup." },
  ];

  const shields = [
    { title: "Verified Atelier Badge", desc: "Proves studio craftsmanship to first-time visitors" },
    { title: "Universal Return Desk", desc: "We manage exchanges & returns across all 7 floors" },
    { title: "Unified Checkout Cart", desc: "Higher conversion through multi-brand basket building" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "linear-gradient(150deg,#FFFFFF 0%,#FAFAFA 25%,#F0F0F0 55%,#FAFAFA 78%,#F5F5F5 100%)", color: "#111111", overflow: "hidden", fontFamily: "'Geist', system-ui, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,0,0,0.14) 0.8px, transparent 0.9px)", backgroundSize: "8px 8px", pointerEvents: "none" }} />

      <div style={{ position: "relative", padding: "120px 72px 24px", zIndex: 5 }}>
        {/* Hero Banner */}
        <div style={{ display: "flex", gap: 48, alignItems: "center", marginBottom: 56, flexWrap: "wrap" }}>
          <div style={{ flex: 1.2, minWidth: 420 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 9999, background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.12)", backdropFilter: "blur(12px)", marginBottom: 20 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff3333", animation: "omPulse 1.5s infinite" }}></span>
              <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase" }}>For independent labels</span>
            </div>
            <h1 style={{ margin: "0 0 16px", fontSize: 58, fontWeight: 955, letterSpacing: "-2.5px", lineHeight: 0.98, textTransform: "uppercase" }}>
              Partner up<span style={{ color: "rgba(0,0,0,0.32)" }}>.</span><br />
              <span style={{ color: "rgba(0,0,0,0.32)" }}>Your label. Our floor.<br />Their trust.</span>
            </h1>
            <p style={{ margin: "0 0 24px", fontSize: 16, lineHeight: 1.65, color: "rgba(0,0,0,0.65)", maxWidth: 520, textWrap: "pretty" }}>
              You already make clothes people should be wearing. What you're missing is a street they walk down every day — and a reason for strangers to trust you on the first visit. That's what we build.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#apply" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", boxShadow: "0 10px 28px rgba(0,0,0,0.15)", textDecoration: "none" }}>
                Apply to partner →
              </a>
              <Link href="/stores" style={{ display: "inline-flex", alignItems: "center", padding: "14px 28px", borderRadius: 9999, border: "1.5px solid rgba(0,0,0,0.4)", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#111111", backdropFilter: "blur(12px)", textDecoration: "none" }}>
                See who's already in
              </Link>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 380, position: "relative", height: 420, borderRadius: 36, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 30px 70px rgba(0,0,0,0.15)", background: "#111" }}>
            <video src="/real_ads/gully_labs-advertisment.mp4" autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.85) 0%,transparent 55%)" }} />
            <div style={{ position: "absolute", left: 24, bottom: 22, right: 24 }}>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>Your storefront could look like this</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "-0.5px", lineHeight: 1.1 }}>
                A campaign film.<br />Not a listing row.
              </div>
            </div>
          </div>
        </div>

        {/* Perks Grid */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
            <h2 style={{ margin: 0, fontSize: 32, fontWeight: 950, letterSpacing: "-1.5px", textTransform: "uppercase", lineHeight: 1 }}>what a floor gets you</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {perks.map((pk, idx) => (
              <div key={idx} style={{ padding: 28, borderRadius: 28, background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.1)", backdropFilter: "blur(14px)" }}>
                <div style={{ fontSize: 26, fontWeight: 950, letterSpacing: "-1px", color: "rgba(0,0,0,0.16)", marginBottom: 12 }}>{pk.num}</div>
                <div style={{ fontSize: 15.5, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.3px", marginBottom: 7 }}>{pk.title}</div>
                <div style={{ fontSize: 12.5, lineHeight: 1.6, color: "rgba(0,0,0,0.55)" }}>{pk.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <div style={{ position: "relative", borderRadius: 40, background: "linear-gradient(160deg,rgba(32,32,37,0.9) 0%,rgba(12,12,14,0.94) 100%)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(28px) saturate(160%)", boxShadow: "0 30px 80px rgba(0,0,0,0.35)", color: "#FFFFFF", padding: "48px 52px", overflow: "hidden", marginBottom: 56 }}>
          <div style={{ position: "relative", display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: 1.2, minWidth: 400 }}>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>The real reason to be here</div>
              <h2 style={{ margin: "0 0 14px", fontSize: 36, fontWeight: 950, letterSpacing: "-1.5px", lineHeight: 1.05, textTransform: "uppercase", color: "#FFFFFF" }}>
                Your biggest blocker<br />isn't price. <span style={{ color: "rgba(255,255,255,0.5)" }}>It's trust.</span>
              </h2>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: 520, textWrap: "pretty" }}>
                People find your label, love your pieces, and still close the tab — because they don't know you yet. On CONCAT they don't have to. Our verification badge, quality checks, and grievance desk stand behind every order, so a first-time visitor buys like a regular.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 320, display: "flex", flexDirection: "column", gap: 12 }}>
              {shields.map((sh, idx) => (
                <div key={idx} style={{ display: "flex", gap: 16, alignItems: "center", padding: "18px 22px", borderRadius: 20, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: "50%", border: "2px solid #FFFFFF", fontSize: 15, fontWeight: 950, flex: "none" }}>✓</span>
                  <span>
                    <span style={{ display: "block", fontSize: 14, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.2px" }}>{sh.title}</span>
                    <span style={{ display: "block", fontSize: 11.5, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>{sh.desc}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div id="apply" style={{ padding: 48, borderRadius: 36, background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.1)", backdropFilter: "blur(20px)", boxShadow: "0 16px 50px rgba(0,0,0,0.08)", maxWidth: 720, margin: "0 auto 40px" }}>
          <h2 style={{ margin: "0 0 8px", fontSize: 32, fontWeight: 950, letterSpacing: "-1.5px", textTransform: "uppercase", lineHeight: 1 }}>Apply for a storefront</h2>
          <div style={{ fontSize: 13, color: "rgba(0,0,0,0.55)", marginBottom: 24 }}>Tell us about your label. We review applications every Tuesday and Thursday.</div>

          {formSubmitted ? (
            <div style={{ padding: 24, borderRadius: 20, background: "#111111", color: "#FFFFFF", textAlign: "center", fontSize: 14, fontWeight: 800 }}>
              ✓ Application Received! Our floor curation team will reach out via email within 48 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <input required type="text" placeholder="Label Name" style={{ padding: "15px 20px", borderRadius: 14, background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.15)", fontSize: 13, outline: "none" }} />
                <input required type="text" placeholder="Instagram / Website URL" style={{ padding: "15px 20px", borderRadius: 14, background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.15)", fontSize: 13, outline: "none" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <input required type="text" placeholder="Founder Name" style={{ padding: "15px 20px", borderRadius: 14, background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.15)", fontSize: 13, outline: "none" }} />
                <input required type="email" placeholder="Email Address" style={{ padding: "15px 20px", borderRadius: 14, background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.15)", fontSize: 13, outline: "none" }} />
              </div>
              <textarea placeholder="Describe your product line & craft story..." style={{ padding: "15px 20px", borderRadius: 14, background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.15)", fontSize: 13, height: 110, outline: "none", resize: "none" }} />
              <button type="submit" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "16px 32px", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", border: "none", boxShadow: "0 10px 28px rgba(0,0,0,0.15)" }}>
                Submit Application →
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
