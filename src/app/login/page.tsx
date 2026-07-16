"use client";
import React from "react";
import Link from "next/link";
const BURG = "#FFFFFF"; const CREAM = "#111111";
const inp: React.CSSProperties = { width: "100%", padding: "16px 20px", borderRadius: 14, boxSizing: "border-box", background: "rgba(255,255,255,0.45)", border: "1.5px solid rgba(74,14,23,0.15)", color: BURG, fontFamily: "inherit", fontSize: 15, outline: "none" };
export default function LoginPage() {
  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 20px" }}>
      <div className="glass-card" style={{ width: "100%", maxWidth: 420, borderRadius: 32, padding: 48, boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: BURG, marginBottom: 8 }}>c.</div>
          <h1 style={{ color: BURG, fontFamily: "inherit", fontSize: 26, fontWeight: 300, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: -1 }}>Welcome Back</h1>
          <p style={{ color: "rgba(74,14,23,0.45)", fontSize: 14, margin: 0 }}>Sign in to your CONCAT account</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
          <input type="email" placeholder="Email Address" style={inp} />
          <input type="password" placeholder="Password" style={inp} />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 28 }}>
          <button style={{ background: "none", border: "none", color: BURG, fontSize: 12, cursor: "pointer", fontWeight: 700, letterSpacing: 1 }}>Forgot Password?</button>
        </div>
        <button className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "17px 0", fontSize: 13, marginBottom: 22 }}>Sign In</button>
        <p style={{ textAlign: "center", color: "rgba(74,14,23,0.4)", fontSize: 13, margin: 0 }}>
          Don't have an account? <Link href="/signup" style={{ color: BURG, fontWeight: 700 }}>Create one</Link>
        </p>
      </div>
    </div>
  );
}
