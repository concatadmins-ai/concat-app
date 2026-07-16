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
    <div ref={containerRef} className="page-scroll" style={{ background: "#0A0A0A", height: "100vh", overflowY: "auto", overflowX: "hidden", color: "#FFFFFF" }}>
      <Navbar />

      {/* BACKGROUND TEXTURE */}
      <div className="screen-texture" style={{ opacity: 0.4 }} />

      {/* HERO SECTION */}
      <section style={{ 
        minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", padding: "120px 24px 80px", boxSizing: "border-box"
      }}>
        <motion.div 
          style={{ y: backgroundY, position: "absolute", inset: 0, zIndex: 0, 
            background: "radial-gradient(circle at 50% 40%, rgba(74,14,23,0.4) 0%, rgba(74,14,23,0.1) 40%, transparent 70%)" 
          }} 
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 900 }}
        >
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: BURG_LIGHT, marginBottom: 24 }}>
            Our Vision
          </div>
          <h1 style={{ fontSize: "clamp(48px, 8vw, 90px)", fontWeight: 900, letterSpacing: -2, lineHeight: 0.95, margin: "0 0 32px" }}>
            To become the world's most trusted destination for discovering exceptional brands.
          </h1>
          <p style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 400, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, margin: 0, maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
            Your clothes are like first words. Make them count. <br/>
            We want customers to visit our platform with complete confidence, knowing that every brand has been carefully selected for its quality, authenticity, craftsmanship, and unique identity.
          </p>
        </motion.div>
      </section>

      {/* MISSION & THE PROBLEM */}
      <section style={{ padding: "120px 24px", boxSizing: "border-box", display: "flex", justifyContent: "center", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 1000, width: "100%" }}
        >
          <div className="glass-card" style={{ padding: "clamp(40px, 8vw, 80px)", borderRadius: 32 }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, letterSpacing: -1, color: "#FFF", margin: "0 0 24px" }}>
              The Mission: Breaking the illusion of choice.
            </h2>
            <p style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: "0 0 40px" }}>
              Customers often settle for mass-produced sameness, unaware that incredible independent fashion labels are crafting far superior styles and fabrics at the exact same price—serving every age and niche. Finding these brands used to be luck, not a process.
              <br/><br/>
              Our mission is to bring together exceptional brands on one trusted platform, making it easier for customers to discover products that are thoughtfully designed, well-crafted, and built to last.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32 }}>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: 32, borderRadius: 24, border: "1px solid rgba(255,255,255,0.05)" }}>
                <h3 style={{ color: BURG_LIGHT, fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Difficult Discovery</h3>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>
                  There's no reliable way to browse or search by niche or style across independent brands. We fix discovery.
                </p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: 32, borderRadius: 24, border: "1px solid rgba(255,255,255,0.05)" }}>
                <h3 style={{ color: BURG_LIGHT, fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Lack of Trust</h3>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>
                  New brands raise doubts regarding quality. We solve this by strictly vetting every single brand on our platform.
                </p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: 32, borderRadius: 24, border: "1px solid rgba(255,255,255,0.05)" }}>
                <h3 style={{ color: BURG_LIGHT, fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Fragmented Ordering</h3>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>
                  Buying from independent brands meant separate accounts and checkouts. Not anymore. One roof, one checkout.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* THE SOLUTION, TECH & PHILOSOPHY */}
      <section style={{ padding: "120px 24px", boxSizing: "border-box", display: "flex", justifyContent: "center", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ maxWidth: 1000, width: "100%", display: "flex", flexDirection: "column", gap: 80 }}
        >
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(40px, 6vw, 70px)", fontWeight: 900, letterSpacing: -2, color: BURG, margin: "0 0 24px" }}>
              The Store-in-Store Model.
            </h2>
            <p style={{ fontSize: "clamp(18px, 2.2vw, 24px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: "0 auto", maxWidth: 800 }}>
              CONCAT isn't a flat marketplace. It's a curated ecosystem where independent brands maintain their distinct identities—like a well-run, multi-brand department store for the digital age. Every brand has a personality, and we believe they deserve a space that reflects their unique creative vision.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
            <div className="glass-card" style={{ padding: "50px 40px", borderRadius: 32, background: "linear-gradient(135deg, rgba(74,14,23,0.15) 0%, rgba(17,17,17,1) 100%)", borderColor: "rgba(226,164,174,0.2)" }}>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#FFF", marginBottom: 20 }}>Curated, not just listed.</h3>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: 0 }}>
                Every brand on CONCAT is evaluated on product quality, craftsmanship, and brand identity. We ensure you get something well-made and worth keeping. Our goal is not to build the largest marketplace, but the most respected one.
              </p>
            </div>
            
            <div className="glass-card" style={{ padding: "50px 40px", borderRadius: 32 }}>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#FFF", marginBottom: 20 }}>AI at the core.</h3>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: 0 }}>
                Our LLM-powered styling assistant provides hyper-personalized recommendations based on your existing wardrobe. Discovering, styling, and buying feel like one connected experience, all while brands retain full control of their distinct storefronts.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "50px 40px", borderRadius: 32 }}>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#FFF", marginBottom: 20 }}>Brand Philosophy</h3>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: 0 }}>
                We believe quality should always be easy to discover. Today’s marketplaces prioritize volume and discounts. We believe customers deserve better—a place where every brand earns its spot through exceptional products and values.
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
