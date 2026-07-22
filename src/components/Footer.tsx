"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ padding: "24px 72px 36px", fontFamily: "'Geist', system-ui, sans-serif", color: "#111111" }}>
      <div style={{
        borderRadius: 22,
        padding: "20px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 14,
        background: "rgba(0,0,0,0.03)",
        border: "1px solid rgba(0,0,0,0.08)",
        backdropFilter: "blur(30px)"
      }}>
        <Link href="/" style={{ fontWeight: 900, fontSize: 15, letterSpacing: "-0.5px", color: "#111111", textDecoration: "none" }}>
          concat<span style={{ color: "#ff3333" }}>.</span>
        </Link>
        <div style={{ display: "flex", gap: 22, fontSize: 10.5, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "rgba(0,0,0,0.6)" }}>
          <Link href="/shop" style={{ color: "inherit", textDecoration: "none" }}>Shop</Link>
          <Link href="/stores" style={{ color: "inherit", textDecoration: "none" }}>Stores</Link>
          <Link href="/floors" style={{ color: "inherit", textDecoration: "none" }}>Floors</Link>
          <Link href="/about-us" style={{ color: "inherit", textDecoration: "none" }}>About</Link>
          <Link href="/careers" style={{ color: "inherit", textDecoration: "none" }}>Careers</Link>
          <Link href="/sell" style={{ color: "inherit", textDecoration: "none" }}>Partner Up</Link>
        </div>
        <span style={{ fontSize: 11, color: "rgba(0,0,0,0.4)" }}>© 2026 CONCAT</span>
      </div>
    </footer>
  );
}
