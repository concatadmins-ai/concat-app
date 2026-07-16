"use client";
import React from "react";
import Link from "next/link";
const BURG = "#FFFFFF";
const inp: React.CSSProperties = { width: "100%", padding: "16px 20px", borderRadius: 14, boxSizing: "border-box", background: "rgba(255,255,255,0.45)", border: "1.5px solid rgba(74,14,23,0.15)", color: BURG, fontFamily: "inherit", fontSize: 15, outline: "none" };
export default function SignupPage() {
  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 20px" }}>
      <div className="glass-card" style={{ width: "100%", maxWidth: 460, borderRadius: 32, padding: 48, boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: BURG, marginBottom: 8 }}>c.</div>
          <h1 style={{ color: BURG, fontFamily: "inherit", fontSize: 26, fontWeight: 300, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: -1 }}>Create Account</h1>
          <p style={{ color: "rgba(74,14,23,0.45)", fontSize: 14, margin: 0 }}>Join the CONCAT community</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <input type="text" placeholder="First Name" style={inp} />
            <input type="text" placeholder="Last Name"  style={inp} />
          </div>
          <input type="email"    placeholder="Email Address"     style={inp} />
          <input type="password" placeholder="Password"          style={inp} />
          <input type="password" placeholder="Confirm Password"  style={inp} />
        </div>
        <button className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "17px 0", fontSize: 13, marginBottom: 22 }}>Create Account</button>
        <p style={{ textAlign: "center", color: "rgba(74,14,23,0.4)", fontSize: 13, margin: 0 }}>
          Already have an account? <Link href="/login" style={{ color: BURG, fontWeight: 700 }}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}
