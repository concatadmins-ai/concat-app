"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
const BURG = "#FFFFFF"; const BURG_LIGHT = "#AAAAAA";
const FAQS = [
  { q: "How long does delivery take?", a: "Standard shipping takes 3–5 business days. Express shipping (1–2 days) is available at checkout. International orders typically take 7–14 business days." },
  { q: "What is your return policy?", a: "We offer free returns within 30 days of purchase for all unworn items in their original packaging. Simply use the prepaid return label in your order confirmation email." },
  { q: "How do I track my order?", a: "Once your order ships, you'll receive an email with a tracking number. You can also track your order in real time from your dashboard." },
  { q: "Do you offer gift wrapping?", a: "Yes! All CONCAT orders come in our signature packaging. For an additional premium gift wrapping experience, select the option at checkout." },
  { q: "Are the brands on CONCAT authentic?", a: "Absolutely. Every brand on CONCAT is vetted by our curation team. We work directly with brands and authorized retailers, guaranteeing 100% authenticity." },
  { q: "Can I cancel or modify my order?", a: "Orders can be cancelled or modified within 1 hour of placement. Contact our client services team immediately if you need to make changes." },
];
export default function SupportPage() {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <div className="page-scroll" style={{ padding: "110px 40px 60px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "rgba(74,14,23,0.4)", margin: "0 0 14px" }}>We're here to help</p>
        <h1 style={{ fontFamily: "inherit", fontSize: "clamp(40px,6vw,88px)", fontWeight: 900, color: BURG, margin: "0 0 72px", letterSpacing: -4, lineHeight: 0.9, textTransform: "uppercase" }}>Support</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 80 }}>
          {[{ icon: "✉", label: "Email Us", val: "hello@concat.in" }, { icon: "📞", label: "Call Us", val: "+91 22 6789 0000" }, { icon: "💬", label: "Live Chat", val: "Available 9am–9pm IST" }].map(({ icon, label, val }) => (
            <div key={label} className="glass-card" style={{ borderRadius: 18, padding: "26px 22px", textAlign: "center", cursor: "pointer" }}>
              <div style={{ fontSize: 26, marginBottom: 10 }}>{icon}</div>
              <p style={{ color: "rgba(74,14,23,0.4)", fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", margin: "0 0 5px" }}>{label}</p>
              <p style={{ color: BURG, fontSize: 14, fontWeight: 600, margin: 0 }}>{val}</p>
            </div>
          ))}
        </div>
        <h2 style={{ color: BURG, fontFamily: "inherit", fontSize: 22, fontWeight: 700, textTransform: "uppercase", letterSpacing: -0.5, margin: "0 0 28px" }}>Frequently Asked</h2>
        <div style={{ borderTop: "1px solid rgba(74,14,23,0.1)" }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(74,14,23,0.08)" }}>
              <button onClick={() => setOpen(open===i?null:i)} style={{ width: "100%", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", color: BURG, fontSize: 14, fontWeight: 600, cursor: "pointer", textAlign: "left" }}>
                {faq.q}
                <ChevronDown size={17} style={{ transform: open===i?"rotate(180deg)":"rotate(0)", transition: "transform 0.3s ease", color: BURG_LIGHT, flexShrink: 0, marginLeft: 16 }} />
              </button>
              {open === i && <p style={{ fontSize: 14, color: "rgba(74,14,23,0.6)", lineHeight: 1.8, paddingBottom: 22, margin: 0 }}>{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
