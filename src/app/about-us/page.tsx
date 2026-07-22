"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const doubts = [
    "Is the sizing standard, or will it fit like a doll shirt?",
    "If it arrives damaged, will anyone reply to my DMs?",
    "Is this a real atelier or a drop-shipping ghost?",
    "Can I return it if the fabric feels like sandpaper?",
  ];

  const fixes = [
    "Verified atelier — real studio, real craft, real team",
    "Standardized sizing & quality check on every dispatch",
    "CONCAT Grievance Guarantee on every single order",
    "One bag, one checkout, unified support desk",
  ];

  const howSteps = [
    { num: "01", title: "Curation & Verification", desc: "We hand-select independent labels across India. We check their studio, sample their fabrics, and audit their stitch quality before giving them glass on a floor." },
    { num: "02", title: "Floor Walk Experience", desc: "Browse by floor vibe — Casuals, Semi Formals, Accessories, Footwear, Formals, Eyewear, Ethnic — or step directly inside individual brand storefronts." },
    { num: "03", title: "Unified Mall Cart", desc: "Add a linen trouser from Floor G, a sterling cuff from Floor 2, and sneakers from Floor 3 into a single bag with one single checkout." },
  ];

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "linear-gradient(150deg,#FFFFFF 0%,#FAFAFA 25%,#F0F0F0 55%,#FAFAFA 78%,#F5F5F5 100%)", color: "#111111", overflow: "hidden", fontFamily: "'Geist', system-ui, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,0,0,0.14) 0.8px, transparent 0.9px)", backgroundSize: "8px 8px", pointerEvents: "none" }} />

      <div style={{ position: "relative", padding: "130px 72px 24px", zIndex: 5 }}>
        {/* Header Story */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase", color: "#777777", marginBottom: 26 }}>Why CONCAT exists</div>
          <h1 style={{ margin: "0 auto", maxWidth: 980, fontSize: 54, fontWeight: 900, letterSpacing: "-2.5px", lineHeight: 1.18 }}>
            The best clothes in India<br />
            aren't made by
            <span style={{ display: "inline-flex", verticalAlign: "middle", width: 104, height: 58, borderRadius: 9999, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.12)", margin: "0 8px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
              <video src="/real_ads/first_section_web.mp4" autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)" }} />
            </span>
            the brands you see everywhere.<br />
            They're made by
            <span style={{ display: "inline-flex", verticalAlign: "middle", width: 104, height: 58, borderRadius: 9999, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.12)", margin: "0 8px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", background: "#111" }}>
              <video src="/real_ads/misobysonia-advertisment.mp4" autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </span>
            <span style={{ color: "#777777" }}>independent labels you've never heard of.</span>
          </h1>
          <p style={{ margin: "26px auto 0", fontSize: 16, lineHeight: 1.7, color: "rgba(0,0,0,0.65)", maxWidth: 560, textWrap: "pretty" }}>
            Same price. Better fabric. Actual character. The only thing they were missing was a storefront on a street you actually walk down. So we built the street.
          </p>
        </div>

        {/* Comparison Section */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 style={{ margin: 0, fontSize: 32, fontWeight: 950, letterSpacing: "-1.5px", textTransform: "uppercase", lineHeight: 1 }}>the lucky find, fixed</h2>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 8 }}>You know this feeling</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, alignItems: "stretch" }}>
            <div style={{ borderRadius: 32, background: "rgba(255,255,255,0.5)", border: "1.5px dashed rgba(0,0,0,0.2)", padding: "34px 36px" }}>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 10 }}>Somewhere on your feed · 1:20 AM</div>
              <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.7px", lineHeight: 1.2, marginBottom: 18, color: "rgba(0,0,0,0.75)" }}>
                You find a label with insanely good pieces.<br />
                <span style={{ color: "rgba(0,0,0,0.4)" }}>And then you hesitate.</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {doubts.map((d, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 13, color: "rgba(0,0,0,0.55)" }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 22, height: 22, borderRadius: "50%", border: "1.5px solid rgba(0,0,0,0.25)", fontSize: 11, fontWeight: 900, color: "rgba(0,0,0,0.4)", flex: "none" }}>✕</span>
                    {d}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, fontSize: 12, color: "rgba(0,0,0,0.4)", fontStyle: "italic" }}>…so you close the tab. The label loses a customer. You lose the piece.</div>
            </div>

            <div style={{ position: "relative", borderRadius: 32, background: "linear-gradient(160deg,rgba(32,32,37,0.9) 0%,rgba(12,12,14,0.94) 100%)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(28px) saturate(160%)", boxShadow: "0 30px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18)", color: "#FFFFFF", padding: "34px 36px", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 45% at 50% 0%,rgba(255,255,255,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>
                <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 10 }}>The same label · on CONCAT</div>
                <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.7px", lineHeight: 1.2, marginBottom: 18 }}>
                  You find it here instead.<br />
                  <span style={{ color: "rgba(255,255,255,0.45)" }}>And you just buy it.</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {fixes.map((f, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 22, height: 22, borderRadius: "50%", background: "#FFFFFF", color: "#111111", fontSize: 11, fontWeight: 900, flex: "none" }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 20, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>That's the whole company, in one scroll.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mall Atrium Banner */}
        <div style={{ position: "relative", height: 300, borderRadius: 36, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 30px 70px rgba(0,0,0,0.12)", marginBottom: 56 }}>
          <img src="/mall_atrium.jpg" alt="CONCAT mall atrium" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.6) 0%,transparent 50%)" }} />
          <div style={{ position: "absolute", left: 32, bottom: 24, color: "#FFFFFF" }}>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", opacity: 0.7, marginBottom: 4 }}>The idea</div>
            <div style={{ fontSize: 24, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.5px" }}>A mall, rebuilt for the internet</div>
          </div>
          <div style={{ position: "absolute", top: 20, right: 22, display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff3333", animation: "omPulse 1.5s infinite" }}></span>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: "#FFFFFF", textTransform: "uppercase" }}>Floors G–6 · open</span>
          </div>
        </div>

        {/* How The Mall Works */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 style={{ margin: 0, fontSize: 32, fontWeight: 950, letterSpacing: "-1.5px", textTransform: "uppercase", lineHeight: 1 }}>how the mall works</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {howSteps.map((hs, i) => (
              <div key={i} style={{ padding: 30, borderRadius: 28, background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.1)", backdropFilter: "blur(14px)" }}>
                <div style={{ fontSize: 34, fontWeight: 950, letterSpacing: "-1.5px", color: "rgba(0,0,0,0.18)", marginBottom: 14 }}>{hs.num}</div>
                <div style={{ fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.3px", marginBottom: 8 }}>{hs.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(0,0,0,0.65)" }}>{hs.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div style={{ position: "relative", borderRadius: 36, background: "linear-gradient(160deg,rgba(32,32,37,0.9) 0%,rgba(12,12,14,0.94) 100%)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(28px) saturate(160%)", boxShadow: "0 30px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18)", color: "#FFFFFF", padding: "44px 48px", overflow: "hidden", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
          <div style={{ position: "relative", maxWidth: 560 }}>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 10 }}>The other half of the story</div>
            <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.15, marginBottom: 10 }}>
              Great labels die in silence.<br />
              <span style={{ color: "rgba(255,255,255,0.5)" }}>We're the megaphone.</span>
            </div>
            <div style={{ fontSize: 13.5, lineHeight: 1.65, color: "rgba(255,255,255,0.65)" }}>
              Marketplaces bury small labels under ad-ranked noise. A mall gives them a storefront, a floor, footfall — and our verification badge, so their customers stop hesitating.
            </div>
          </div>
          <div style={{ position: "relative", display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/stores" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 9999, background: "#FFFFFF", color: "#111111", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", textDecoration: "none" }}>
              Meet the stores
            </Link>
            <Link href="/sell" style={{ display: "inline-flex", alignItems: "center", padding: "14px 28px", borderRadius: 9999, border: "1.5px solid rgba(255,255,255,0.4)", color: "#FFFFFF", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", textDecoration: "none" }}>
              Partner up
            </Link>
          </div>
        </div>
      </div>
      
      <div style={{ position: "relative", padding: "0 72px 28px", zIndex: 5 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap", padding: "16px 24px", borderRadius: 9999, background: "rgba(255,255,255,0.4)", border: "1px solid rgba(0,0,0,0.08)", backdropFilter: "blur(12px)", fontSize: 9.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>
          <span>Every label verified</span>
          <span style={{ color: "rgba(0,0,0,0.2)" }}>✦</span>
          <span>Every piece quality-checked</span>
          <span style={{ color: "rgba(0,0,0,0.2)" }}>✦</span>
          <span>Grievance desk on call</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
