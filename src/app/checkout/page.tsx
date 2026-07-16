"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";

const BURG  = "#FFFFFF";
const BURG_LIGHT = "#AAAAAA";
const CREAM = "#111111";

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "15px 18px", borderRadius: 14, boxSizing: "border-box",
  background: "rgba(255,255,255,0.45)", border: "1.5px solid rgba(74,14,23,0.15)",
  color: BURG, fontFamily: "inherit", fontSize: 14, outline: "none",
  transition: "border-color 0.25s ease",
};

export default function CheckoutPage() {
  const { cartItems } = useStore();
  const subtotal = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const shipping = 25;
  const total = subtotal + shipping;
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  if (success) {
    return (
      <div className="page-scroll" style={{ padding: "110px 40px 60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="glass-card"
          style={{ borderRadius: 32, padding: 64, maxWidth: 480, width: "100%", textAlign: "center" }}
        >
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h1 style={{ fontFamily: "inherit", fontSize: 30, fontWeight: 300, color: BURG, textTransform: "uppercase", letterSpacing: -1, margin: "0 0 16px" }}>Order Confirmed</h1>
          <p style={{ color: "rgba(74,14,23,0.6)", lineHeight: 1.7, margin: "0 0 40px" }}>
            Thank you for your purchase. Your order <strong style={{ color: BURG }}>CON-84729</strong> is being prepared.
          </p>
          <Link href="/shop"><button className="btn-primary">Continue Shopping</button></Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="page-scroll" style={{ padding: "110px 40px 60px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Link href="/shop" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(74,14,23,0.45)", marginBottom: 48 }}>
          <ArrowLeft size={15} /> Return to Shop
        </Link>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 60, alignItems: "start" }}>
          {/* Form */}
          <div>
            {/* Steps */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 44, fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase" }}>
              {["Information", "Shipping", "Payment"].map((s, i) => (
                <React.Fragment key={s}>
                  <span style={{ color: step >= i + 1 ? BURG : "rgba(74,14,23,0.3)" }}>{s}</span>
                  {i < 2 && <ChevronRight size={13} style={{ color: "rgba(74,14,23,0.2)" }} />}
                </React.Fragment>
              ))}
            </div>

            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 style={{ color: BURG, fontFamily: "inherit", fontSize: 26, fontWeight: 300, textTransform: "uppercase", letterSpacing: -1, margin: "0 0 28px" }}>Contact</h2>
                <input type="email" placeholder="Email Address" style={{ ...inputStyle, marginBottom: 32 }} />
                <h2 style={{ color: BURG, fontFamily: "inherit", fontSize: 26, fontWeight: 300, textTransform: "uppercase", letterSpacing: -1, margin: "0 0 18px" }}>Shipping Address</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <input type="text" placeholder="First Name" style={inputStyle} />
                    <input type="text" placeholder="Last Name"  style={inputStyle} />
                  </div>
                  <input type="text" placeholder="Address" style={inputStyle} />
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 12 }}>
                    <input type="text" placeholder="City"   style={inputStyle} />
                    <input type="text" placeholder="State"  style={inputStyle} />
                    <input type="text" placeholder="Postal" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 36 }}>
                  <button onClick={() => setStep(2)} className="btn-primary">Continue to Shipping</button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 style={{ color: BURG, fontFamily: "inherit", fontSize: 26, fontWeight: 300, textTransform: "uppercase", letterSpacing: -1, margin: "0 0 28px" }}>Shipping Method</h2>
                <div className="glass-card" style={{ borderRadius: 16, overflow: "hidden" }}>
                  {[{ label: "Standard Shipping (3–5 Business Days)", price: "$25.00" }, { label: "Express Shipping (1–2 Business Days)", price: "$50.00" }].map((opt, i) => (
                    <label key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 22px", borderBottom: i === 0 ? "1px solid rgba(74,14,23,0.1)" : "none", cursor: "pointer" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <input type="radio" name="shipping" defaultChecked={i === 0} style={{ accentColor: BURG, width: 16, height: 16 }} />
                        <span style={{ fontSize: 14, fontWeight: 500, color: BURG }}>{opt.label}</span>
                      </div>
                      <span style={{ color: BURG_LIGHT, fontWeight: 700, fontSize: 14 }}>{opt.price}</span>
                    </label>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 36 }}>
                  <button onClick={() => setStep(1)} style={{ background: "none", border: "none", color: "rgba(74,14,23,0.5)", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer" }}>← Return</button>
                  <button onClick={() => setStep(3)} className="btn-primary">Continue to Payment</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 style={{ color: BURG, fontFamily: "inherit", fontSize: 26, fontWeight: 300, textTransform: "uppercase", letterSpacing: -1, margin: "0 0 8px" }}>Payment</h2>
                <p style={{ color: "rgba(74,14,23,0.4)", fontSize: 13, margin: "0 0 24px" }}>All transactions are secure and encrypted.</p>
                <div className="glass-card" style={{ borderRadius: 16, padding: 22, display: "flex", flexDirection: "column", gap: 12 }}>
                  <input type="text" placeholder="Card Number"    style={inputStyle} />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <input type="text" placeholder="MM / YY" style={inputStyle} />
                    <input type="text" placeholder="CVV"     style={inputStyle} />
                  </div>
                  <input type="text" placeholder="Name on Card" style={inputStyle} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 36 }}>
                  <button onClick={() => setStep(2)} style={{ background: "none", border: "none", color: "rgba(74,14,23,0.5)", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer" }}>← Return</button>
                  <button onClick={() => setSuccess(true)} className="btn-primary">Pay ${total.toLocaleString()}</button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <div className="glass-card" style={{ borderRadius: 24, padding: 28, position: "sticky", top: 120 }}>
            <h3 style={{ color: BURG, margin: "0 0 22px", fontSize: 13, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase" }}>Order Summary</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, maxHeight: 300, overflowY: "auto" }} className="custom-scrollbar">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 52, height: 65, borderRadius: 8, overflow: "hidden", flexShrink: 0, position: "relative", border: "1px solid rgba(74,14,23,0.1)" }}>
                    <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <span style={{ position: "absolute", top: -6, right: -6, background: BURG, color: CREAM, borderRadius: "50%", width: 18, height: 18, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{item.quantity}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: "0 0 2px", fontSize: 11, fontWeight: 700, color: BURG }}>{item.brand}</p>
                    <p style={{ margin: 0, fontSize: 12, color: "rgba(74,14,23,0.6)" }}>{item.name}</p>
                  </div>
                  <span style={{ color: BURG, fontWeight: 700, fontSize: 13 }}>${(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid rgba(74,14,23,0.1)", marginTop: 20, paddingTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {[["Subtotal", `$${subtotal.toLocaleString()}`], ["Shipping", "$25.00"], ["Taxes", "Calculated at payment"]].map(([label, val]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "rgba(74,14,23,0.55)" }}>
                  <span>{label}</span><span style={{ color: BURG, fontWeight: 600 }}>{val}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid rgba(74,14,23,0.1)" }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: BURG, textTransform: "uppercase", letterSpacing: 1 }}>Total</span>
                <span style={{ fontSize: 22, fontWeight: 900, color: BURG }}>${total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
