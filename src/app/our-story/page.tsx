"use client";
import React from "react";
const BURG = "#FFFFFF";
export default function OurStoryPage() {
  return (
    <div className="page-scroll" style={{ padding: "110px 40px 60px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "rgba(74,14,23,0.4)", margin: "0 0 14px" }}>Est. 2019</p>
        <h1 style={{ fontFamily: "inherit", fontSize: "clamp(40px,6vw,88px)", fontWeight: 900, color: BURG, margin: "0 0 80px", letterSpacing: -4, lineHeight: 0.9, textTransform: "uppercase" }}>Our Story</h1>
        {[
          { heading: "The Beginning", body: "CONCAT was born in a cramped Mumbai studio, where three friends with a shared obsession for underground fashion decided to build something different. Not a brand. A bridge. A place where independent designers from the fringes of fashion could find a home alongside the players who were rewriting the rulebook." },
          { heading: "The Philosophy", body: "We believe fashion is communication. The clothes you wear tell the story of who you are, who you aspire to be, and the world you want to live in. CONCAT exists to amplify that voice — to give every human being access to the full spectrum of global fashion culture, from the hype-driven to the handcrafted." },
          { heading: "The Future", body: "We are building not just a marketplace, but a cultural institution. A place where the next generation of designers finds their audience, where the next generation of consumers discovers what fashion can truly be. Artful, radical, and inclusive." },
        ].map(({ heading, body }) => (
          <div key={heading} style={{ marginBottom: 60, display: "grid", gridTemplateColumns: "180px 1fr", gap: 44 }}>
            <h2 style={{ color: "rgba(74,14,23,0.3)", fontFamily: "inherit", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", margin: 0, paddingTop: 6 }}>{heading}</h2>
            <p style={{ color: "rgba(74,14,23,0.75)", fontSize: "clamp(15px,1.4vw,20px)", lineHeight: 1.85, margin: 0, fontWeight: 300 }}>{body}</p>
          </div>
        ))}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, marginTop: 80 }}>
          {[["180+","Brands Hosted"],["24K","Products"],["5","Global Cities"],["2019","Founded"]].map(([num, label]) => (
            <div key={label} className="glass-card" style={{ borderRadius: 18, padding: "28px 22px", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(28px,3.5vw,50px)", fontWeight: 900, color: BURG, letterSpacing: -2, lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(74,14,23,0.4)", marginTop: 8 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
