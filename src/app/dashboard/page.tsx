"use client";
import React, { useState } from "react";
import Link from "next/link";
const BURG = "#FFFFFF"; const CREAM = "#111111";
const TABS = ["Orders", "Wishlist", "Addresses", "Settings"];
export default function DashboardPage() {
  const [tab, setTab] = useState("Orders");
  return (
    <div className="page-scroll" style={{ padding: "110px 40px 60px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 60 }}>
          <div style={{ width: 76, height: 76, borderRadius: "50%", background: `linear-gradient(135deg, #8B3A4A, ${BURG})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 900, color: CREAM }}>G</div>
          <div>
            <h1 style={{ color: BURG, fontFamily: "inherit", fontSize: 30, fontWeight: 900, margin: "0 0 4px", textTransform: "uppercase" }}>Guest User</h1>
            <p style={{ color: "rgba(74,14,23,0.4)", margin: 0, fontSize: 14 }}>guest@concat.in</p>
          </div>
        </div>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 40, background: "rgba(255,255,255,0.3)", padding: 5, borderRadius: 14, border: "1px solid rgba(255,255,255,0.45)" }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ flex: 1, padding: "12px 0", borderRadius: 10, border: "none", background: tab===t ? BURG : "transparent", color: tab===t ? CREAM : "rgba(74,14,23,0.5)", fontFamily: "inherit", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s ease" }}
            >{t}</button>
          ))}
        </div>
        {tab === "Orders" && (
          <div style={{ textAlign: "center", padding: "80px 0", opacity: 0.4 }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>📦</div>
            <h3 style={{ color: BURG, fontFamily: "inherit", fontSize: 18, fontWeight: 700, textTransform: "uppercase", margin: "0 0 12px" }}>No Orders Yet</h3>
            <p style={{ color: "rgba(74,14,23,0.5)", margin: "0 0 28px" }}>Your order history will appear here.</p>
            <Link href="/shop"><button className="btn-primary">Start Shopping</button></Link>
          </div>
        )}
        {tab === "Wishlist" && (
          <div style={{ textAlign: "center", padding: "80px 0", opacity: 0.4 }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>♡</div>
            <h3 style={{ color: BURG, fontFamily: "inherit", fontSize: 18, fontWeight: 700, textTransform: "uppercase", margin: "0 0 12px" }}>Your Wishlist is Empty</h3>
            <p style={{ color: "rgba(74,14,23,0.5)", margin: 0 }}>Save items you love and they will appear here.</p>
          </div>
        )}
        {tab === "Addresses" && (
          <button style={{ padding: "14px 24px", borderRadius: 12, background: "rgba(74,14,23,0.06)", border: "1.5px dashed rgba(74,14,23,0.3)", color: BURG, fontFamily: "inherit", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer" }}>
            + Add New Address
          </button>
        )}
        {tab === "Settings" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[{ label: "Full Name", val: "Guest User" }, { label: "Email", val: "guest@concat.in" }, { label: "Phone", val: "Not set" }].map(({ label, val }) => (
              <div key={label} className="glass-card" style={{ borderRadius: 14, padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ color: "rgba(74,14,23,0.35)", fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", margin: "0 0 4px" }}>{label}</p>
                  <p style={{ color: BURG, fontSize: 15, margin: 0, fontWeight: 500 }}>{val}</p>
                </div>
                <button style={{ background: "none", border: "1.5px solid rgba(74,14,23,0.2)", color: BURG, padding: "8px 18px", borderRadius: 9999, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Edit</button>
              </div>
            ))}
            <button style={{ marginTop: 20, padding: "14px 32px", borderRadius: 9999, background: "transparent", border: "1.5px solid rgba(180,30,30,0.3)", color: "rgba(180,30,30,0.75)", fontFamily: "inherit", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer" }}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
