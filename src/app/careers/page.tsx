"use client";
import React, { useState } from "react";
const BURG = "#FFFFFF"; const BURG_LIGHT = "#AAAAAA"; const CREAM = "#111111";
const JOBS = [
  { title: "Senior Fashion Buyer",        dept: "Curation",   loc: "Mumbai, India",  type: "Full-time" },
  { title: "Brand Partnerships Manager",  dept: "Growth",     loc: "Delhi, India",   type: "Full-time" },
  { title: "Lead Frontend Engineer",      dept: "Technology", loc: "Remote",         type: "Full-time" },
  { title: "Creative Director",           dept: "Creative",   loc: "London, UK",     type: "Full-time" },
  { title: "Logistics & Operations Lead", dept: "Operations", loc: "Mumbai, India",  type: "Full-time" },
  { title: "UX Research Lead",            dept: "Design",     loc: "Remote",         type: "Full-time" },
  { title: "Visual Merchandising Lead",   dept: "Retail",     loc: "New York, USA",  type: "Full-time" },
  { title: "Brand Content Strategist",    dept: "Marketing",  loc: "Tokyo, Japan",   type: "Full-time" },
];
export default function CareersPage() {
  const [hov, setHov] = useState<number|null>(null);
  return (
    <div className="page-scroll" style={{ padding: "110px 40px 60px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "rgba(74,14,23,0.4)", margin: "0 0 14px" }}>Join the Team</p>
        <h1 style={{ fontFamily: "inherit", fontSize: "clamp(40px,6vw,88px)", fontWeight: 900, color: BURG, margin: "0 0 22px", letterSpacing: -4, lineHeight: 0.9, textTransform: "uppercase" }}>Careers</h1>
        <p style={{ color: "rgba(74,14,23,0.55)", fontSize: 17, fontWeight: 300, maxWidth: 580, lineHeight: 1.75, margin: "0 0 72px" }}>
          We're building something rare. If you're drawn to the intersection of culture, technology, and fashion — you might belong here.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {JOBS.map((job, i) => (
            <div key={i}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 26px", borderRadius: 14, border: "1.5px solid", borderColor: hov===i ? BURG : "rgba(74,14,23,0.1)", background: hov===i ? "rgba(74,14,23,0.05)" : "rgba(255,255,255,0.25)", cursor: "pointer", transition: "all 0.2s ease" }}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
            >
              <div>
                <h3 style={{ color: BURG, fontSize: 16, fontWeight: 700, margin: "0 0 5px" }}>{job.title}</h3>
                <div style={{ display: "flex", gap: 14 }}>
                  <span style={{ fontSize: 11, color: BURG_LIGHT, fontWeight: 700 }}>{job.dept}</span>
                  <span style={{ fontSize: 11, color: "rgba(74,14,23,0.35)" }}>· {job.loc} · {job.type}</span>
                </div>
              </div>
              <button className="btn-primary" style={{ padding: "10px 22px", fontSize: 10, whiteSpace: "nowrap" }}>Apply</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
