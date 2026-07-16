"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";

const BURG = "#4A0E17";
const BURG_MID = "#8A2A3B";
const BURG_LIGHT = "#E2A4AE";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} style={{ background: "transparent", minHeight: "100vh", color: "#FFFFFF", overflow: "hidden" }}>
      <Navbar />

      {/* BACKGROUND EFFECTS */}
      <motion.div 
        style={{ 
          y: backgroundY, position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          background: "radial-gradient(circle at 50% -10%, rgba(74,14,23,0.3) 0%, rgba(74,14,23,0.05) 50%, transparent 80%)" 
        }} 
      />

      {/* HERO SECTION */}
      <section style={{ 
        minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", padding: "120px 24px 80px", boxSizing: "border-box"
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 1000 }}
        >
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: BURG_LIGHT, marginBottom: 24 }}>
            Vision & Core Belief
          </div>
          <h1 style={{ fontSize: "clamp(48px, 8vw, 90px)", fontWeight: 900, letterSpacing: -2, lineHeight: 0.95, margin: "0 0 40px" }}>
            Your clothes are like first words. <br/>
            <span style={{ color: BURG_LIGHT }}>Make them count.</span>
          </h1>
          <p style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 400, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, margin: 0, maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
            For the same money spent on a mass-produced basic, you should own something with real identity, craftsmanship, and a story. The option exists, scattered across a hundred hidden Instagram pages. We're here to make it visible, trustworthy, and effortless.
          </p>
        </motion.div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section style={{ padding: "80px 24px 140px", boxSizing: "border-box", display: "flex", justifyContent: "center", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 1200, width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, letterSpacing: -1, color: "#FFF", margin: "0 0 16px" }}>
              The Structural Gap
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", margin: 0 }}>Both sides lose to the same broken system.</p>
          </motion.div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
            {/* Customer Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card"
              style={{ flex: "1 1 400px", padding: "40px", borderRadius: 32, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: BURG_LIGHT, marginBottom: 24 }}>The Customer's Reality</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 24 }}>
                <li>
                  <strong style={{ display: "block", color: "#FFF", fontSize: 20, marginBottom: 6 }}>Difficult Discovery</strong>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.5 }}>There's no reliable way to search by niche or style. Finding an independent brand is pure luck.</span>
                </li>
                <li>
                  <strong style={{ display: "block", color: "#FFF", fontSize: 20, marginBottom: 6 }}>Lack of Trust</strong>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.5 }}>New-to-you brands raise real doubts about quality, customer service, and return policies.</span>
                </li>
                <li>
                  <strong style={{ display: "block", color: "#FFF", fontSize: 20, marginBottom: 6 }}>Fragmented Ordering</strong>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.5 }}>Buying from five independent labels means five checkouts and five tracking numbers to manage.</span>
                </li>
              </ul>
            </motion.div>

            {/* Brand Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card"
              style={{ flex: "1 1 400px", padding: "40px", borderRadius: 32, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: BURG_LIGHT, marginBottom: 24 }}>The Brand's Reality</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 24 }}>
                <li>
                  <strong style={{ display: "block", color: "#FFF", fontSize: 20, marginBottom: 6 }}>Low Visibility</strong>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.5 }}>Homegrown brands compete for attention against thousands of listings and massive ad budgets.</span>
                </li>
                <li>
                  <strong style={{ display: "block", color: "#FFF", fontSize: 20, marginBottom: 6 }}>Algorithm Dependence</strong>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.5 }}>Discovery rides on social reach, making growth unpredictable and largely out of the brand's control.</span>
                </li>
                <li>
                  <strong style={{ display: "block", color: "#FFF", fontSize: 20, marginBottom: 6 }}>No Trusted Home</strong>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.5 }}>Big marketplaces are built for price competition, not for communicating story, quality, or originality.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION: SIS MODEL */}
      <section style={{ padding: "0 24px 140px", boxSizing: "border-box", display: "flex", justifyContent: "center", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card"
          style={{ maxWidth: 1000, width: "100%", padding: "clamp(50px, 8vw, 80px)", borderRadius: 40, background: "linear-gradient(135deg, rgba(74,14,23,0.15) 0%, rgba(17,17,17,0.8) 100%)", borderColor: "rgba(226,164,174,0.1)" }}
        >
          <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, letterSpacing: -1, color: "#FFF", margin: "0 0 24px" }}>
            The Solution: Store-in-Store (SIS) Commerce
          </h2>
          <p style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: "0 0 40px" }}>
            This is not a regular flat e-commerce marketplace. CONCAT is built like a well-run, multi-brand department store. 
            <br/><br/>
            Instead of individual brand identities getting diluted into an anonymous grid of near-identical tiles, every brand keeps its own "store"—its own look, storytelling, and identity—inside CONCAT.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            <div style={{ background: "rgba(0,0,0,0.3)", padding: 24, borderRadius: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: BURG, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4 style={{ fontSize: 18, color: "#FFF", margin: "0 0 8px" }}>Built-in Trust</h4>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.5 }}>A brand operating inside a curated "store" inherits trust immediately, with consistent return and service policies.</p>
            </div>
            <div style={{ background: "rgba(0,0,0,0.3)", padding: 24, borderRadius: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: BURG, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              </div>
              <h4 style={{ fontSize: 18, color: "#FFF", margin: "0 0 8px" }}>One-Stop Organization</h4>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.5 }}>One place to browse every curated brand across every category. One cart, one checkout, one place to track orders.</p>
            </div>
            <div style={{ background: "rgba(0,0,0,0.3)", padding: 24, borderRadius: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: BURG, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <h4 style={{ fontSize: 18, color: "#FFF", margin: "0 0 8px" }}>Brand Independence</h4>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.5 }}>Partner brands maintain complete autonomy through a powerful Brand Dashboard to manage their store and inventory.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CURATION & PHILOSOPHY */}
      <section style={{ padding: "0 24px 140px", boxSizing: "border-box", display: "flex", justifyContent: "center", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 1200, width: "100%", display: "flex", flexWrap: "wrap", gap: 60 }}
        >
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "clamp(40px, 6vw, 70px)", fontWeight: 900, letterSpacing: -2, color: BURG, margin: "0 0 24px" }}>
              Curated. <br/>Not just listed.
            </h2>
            <p style={{ fontSize: "clamp(18px, 2.2vw, 22px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: "0 0 32px" }}>
              Every brand has a personality. We believe the best brands are more than the products they sell—they have their own creative vision, values, and story. 
              <br/><br/>
              The bar is deliberately selective, and most brands that apply won't make it in. That's the point—CONCAT's real value to a customer is that someone has already done this filtering for them.
            </p>
          </div>
          
          <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column", gap: 24, justifyContent: "center" }}>
            <div className="glass-card" style={{ padding: "24px 32px", borderRadius: 20, display: "flex", alignItems: "center", gap: 20 }}>
               <div style={{ color: BURG_LIGHT, fontSize: 24, fontWeight: 900 }}>01</div>
               <div>
                 <h4 style={{ fontSize: 18, color: "#FFF", margin: "0 0 4px" }}>Design Originality</h4>
                 <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>An actual point of view, not a copy of whatever's trending.</div>
               </div>
            </div>
            <div className="glass-card" style={{ padding: "24px 32px", borderRadius: 20, display: "flex", alignItems: "center", gap: 20 }}>
               <div style={{ color: BURG_LIGHT, fontSize: 24, fontWeight: 900 }}>02</div>
               <div>
                 <h4 style={{ fontSize: 18, color: "#FFF", margin: "0 0 4px" }}>Product Quality</h4>
                 <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>Fabric and craftsmanship that holds up, not just looks good in a photo.</div>
               </div>
            </div>
            <div className="glass-card" style={{ padding: "24px 32px", borderRadius: 20, display: "flex", alignItems: "center", gap: 20 }}>
               <div style={{ color: BURG_LIGHT, fontSize: 24, fontWeight: 900 }}>03</div>
               <div>
                 <h4 style={{ fontSize: 18, color: "#FFF", margin: "0 0 4px" }}>A Real Story</h4>
                 <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>Some authentic reason the brand exists, beyond just seeking margin.</div>
               </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* WHO WE SERVE */}
      <section style={{ padding: "0 24px 140px", boxSizing: "border-box", display: "flex", justifyContent: "center", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 1000, width: "100%" }}
        >
          <h2 style={{ textAlign: "center", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, letterSpacing: -1, color: "#FFF", margin: "0 0 60px" }}>
            Who We Serve
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
             <div className="glass-card" style={{ padding: "32px", borderRadius: 24, textAlign: "center" }}>
               <h3 style={{ fontSize: 20, color: "#FFF", marginBottom: 12 }}>Quality Seekers</h3>
               <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.5 }}>Burned by mass-market quality, looking for brands that are already vetted to buy with confidence.</p>
             </div>
             <div className="glass-card" style={{ padding: "32px", borderRadius: 24, textAlign: "center" }}>
               <h3 style={{ fontSize: 20, color: "#FFF", marginBottom: 12 }}>Discovery-Driven</h3>
               <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.5 }}>Happy to explore beyond the mainstream, but tired of hunting across endless social media pages.</p>
             </div>
             <div className="glass-card" style={{ padding: "32px", borderRadius: 24, textAlign: "center" }}>
               <h3 style={{ fontSize: 20, color: "#FFF", marginBottom: 12 }}>Considered Shoppers</h3>
               <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.5 }}>Those who would rather own fewer, better things with real craft and story than keep up with fast fashion.</p>
             </div>
          </div>
        </motion.div>
      </section>

      {/* THE TECHNOLOGY / AI */}
      <section style={{ padding: "0 24px 140px", boxSizing: "border-box", display: "flex", justifyContent: "center", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card"
          style={{ maxWidth: 1000, width: "100%", padding: "clamp(40px, 6vw, 60px)", borderRadius: 40, border: `1px solid ${BURG_LIGHT}33` }}
        >
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, letterSpacing: -1, color: "#FFF", margin: "0 0 16px" }}>
              Technology-First, Not Just a Storefront
            </h2>
          </div>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center" }}>
            <div style={{ flex: "1 1 300px" }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: BURG_LIGHT, marginBottom: 16 }}>AI-Powered Styling</h3>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>
                An in-house, LLM-based style assistant gives personalized recommendations, helping customers dress with confidence. The <strong>Wardrobe Feature</strong> builds on what a customer already owns to recommend complete outfits—not just individual products across different brands. Discovering, styling, and buying feel like one connected experience rather than three separate chores.
              </p>
            </div>
            <div style={{ flex: "1 1 300px" }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: BURG_LIGHT, marginBottom: 16 }}>Brand Partner Dashboard</h3>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>
                A dedicated portal enabling partner brands to independently manage their digital storefront. It provides complete control over their store layout, products, inventory, order fulfillment, and advanced analytics—empowering every partner to grow their presence while delivering a consistent, high-quality experience for customers.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* FOOTER */}
      <footer style={{ padding: "80px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 10 }}>
        <div style={{ fontFamily: "inherit", fontSize: 40, fontWeight: 900, color: BURG }}>concat.</div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginTop: 12 }}>© 2026 CONCAT. All rights reserved.</div>
      </footer>
    </div>
  );
}
