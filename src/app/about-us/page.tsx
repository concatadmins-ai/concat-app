"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const BURG = "#111111";
const BURG_LIGHT = "#777777";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="page-scroll" style={{ background: "#FAFAFA", height: "100vh", overflowY: "auto", overflowX: "hidden", color: "#111111" }}>
      <Navbar />

      {/* BACKGROUND TEXTURE */}
      <div className="screen-texture" style={{ opacity: 0.05 }} />

      {/* SECTION 1: THE DROP (HERO) */}
      <section style={{ 
        minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", boxSizing: "border-box", overflow: "hidden"
      }}>
        {/* Background Image / Texture */}
        <motion.div 
          style={{ y: y1, position: "absolute", inset: 0, zIndex: 0, 
            backgroundImage: "url('/media__1784131496078.png')",
            backgroundSize: "cover", backgroundPosition: "center 20%",
            filter: "grayscale(100%) brightness(0.7) contrast(1.2)"
          }} 
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, #FAFAFA 100%)", zIndex: 1 }} />

        <motion.div
          style={{ opacity: opacityFade, position: "relative", zIndex: 10, textAlign: "center", padding: "0 20px" }}
        >
          <h1 style={{ 
            fontSize: "clamp(60px, 15vw, 180px)", 
            fontWeight: 900, 
            letterSpacing: -4, 
            lineHeight: 0.85, 
            margin: 0,
            color: "#000",
            textTransform: "uppercase"
          }}>
            WE DON'T<br/>DO BASIC.
          </h1>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 20px)", 
            fontWeight: 700, 
            letterSpacing: 4, 
            textTransform: "uppercase", 
            color: BURG_LIGHT, 
            marginTop: 40 
          }}>
            The illusion of choice is over.
          </p>
        </motion.div>
      </section>

      {/* SECTION 2: MARQUEE */}
      <div style={{ width: "100%", overflow: "hidden", background: "#111111", padding: "20px 0", borderTop: "1px solid #111111", borderBottom: "1px solid #111111", position: "relative", zIndex: 20 }}>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          style={{ display: "flex", width: "200%", whiteSpace: "nowrap" }}
        >
          {Array(10).fill("NO MASS PRODUCTION // ONLY EXCEPTIONAL BRANDS // ").map((text, i) => (
            <span key={i} style={{ fontSize: 24, fontWeight: 900, letterSpacing: 2, color: "#FFF", paddingRight: 40 }}>
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* SECTION 3: THE ANTI-MARKETPLACE (STREETWEAR GRID) */}
      <section style={{ padding: "120px 24px", boxSizing: "border-box", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40, alignItems: "center" }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 900, letterSpacing: -2, lineHeight: 1, margin: "0 0 32px", textTransform: "uppercase" }}>
              NOT ANOTHER<br/>MARKETPLACE.
            </h2>
            <p style={{ fontSize: 18, color: "rgba(0,0,0,0.7)", lineHeight: 1.6, marginBottom: 40, maxWidth: 500 }}>
              You settle for mass-produced sameness because it's what the algorithm feeds you. Finding independent labels used to be pure luck. 
              <br/><br/>
              We fixed discovery. One roof. One checkout. The Store-in-Store model giving real brands their own space.
            </p>
            <Link href="/shop" style={{
              display: "inline-block", padding: "16px 32px", background: "#000", color: "#FFF",
              fontSize: 14, fontWeight: 900, letterSpacing: 2, textTransform: "uppercase",
              textDecoration: "none", borderRadius: 0, transition: "all 0.3s ease",
              border: "1px solid #000"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#FFF"; e.currentTarget.style.color = "#000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#000"; e.currentTarget.style.color = "#FFF"; }}
            >
              Enter The Shop
            </Link>
          </motion.div>

          <motion.div 
            style={{ position: "relative", height: "80vh", minHeight: 600, y: y2 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img src="/media__1784132886336.png" alt="Streetwear Look" style={{ position: "absolute", top: 0, right: "10%", width: "70%", height: "60%", objectFit: "cover", zIndex: 2, border: "2px solid #000", boxShadow: "20px 20px 0px rgba(0,0,0,0.1)" }} />
            <img src="/accessories_1784145426818.png" alt="Accessory Look" style={{ position: "absolute", bottom: 0, left: 0, width: "60%", height: "50%", objectFit: "cover", zIndex: 3, border: "2px solid #000" }} />
            <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "140px", fontWeight: 900, color: "transparent", WebkitTextStroke: "2px rgba(0,0,0,0.06)", zIndex: 1, pointerEvents: "none" }}>
              RAW.
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 4: THE VIBE / TECH */}
      <section style={{ padding: "120px 24px", background: "#FFFFFF", boxSizing: "border-box", position: "relative", zIndex: 10, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}
        >
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 4, color: BURG_LIGHT, marginBottom: 20, textTransform: "uppercase" }}>
            Tech Meets Culture
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: -1, margin: "0 0 60px" }}>
            Curated by culture.<br/>Powered by AI.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, textAlign: "left" }}>
            <div style={{ background: "#F9F9F9", padding: 40, border: "1px solid rgba(0,0,0,0.08)", borderRadius: 16 }}>
              <div style={{ fontSize: 40, fontWeight: 900, color: BURG, marginBottom: 20 }}>01</div>
              <h3 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16, textTransform: "uppercase" }}>Vetted Quality</h3>
              <p style={{ color: "rgba(0,0,0,0.65)", fontSize: 16, lineHeight: 1.6 }}>
                If it's on CONCAT, it's worth wearing. No drop-shipped garbage. Only strictly vetted, high-quality independent brands.
              </p>
            </div>
            <div style={{ background: "#F9F9F9", padding: 40, border: "1px solid rgba(0,0,0,0.08)", borderRadius: 16 }}>
              <div style={{ fontSize: 40, fontWeight: 900, color: BURG, marginBottom: 20 }}>02</div>
              <h3 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16, textTransform: "uppercase" }}>AI Stylist</h3>
              <p style={{ color: "rgba(0,0,0,0.65)", fontSize: 16, lineHeight: 1.6 }}>
                Hyper-personalized recommendations that map to your existing wardrobe. AI isn't just a buzzword; it's your personal stylist.
              </p>
            </div>
            <div style={{ background: "#F9F9F9", padding: 40, border: "1px solid rgba(0,0,0,0.08)", borderRadius: 16 }}>
              <div style={{ fontSize: 40, fontWeight: 900, color: BURG, marginBottom: 20 }}>03</div>
              <h3 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16, textTransform: "uppercase" }}>One Checkout</h3>
              <p style={{ color: "rgba(0,0,0,0.65)", fontSize: 16, lineHeight: 1.6 }}>
                Discover 50 different independent brands. Add them all to one cart. Pay once. That's the ecosystem.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* FOOTER */}
      <footer style={{ padding: "80px 24px", textAlign: "center", borderTop: "1px solid rgba(0,0,0,0.05)", position: "relative", zIndex: 10, background: "#FAFAFA" }}>
        <div style={{ fontFamily: "inherit", fontSize: "clamp(50px, 10vw, 120px)", fontWeight: 900, color: "#EEEEEE", letterSpacing: -4, lineHeight: 0.8 }}>
          concat.
        </div>
        <div style={{ fontSize: 12, color: "rgba(0,0,0,0.4)", marginTop: 24, letterSpacing: 2, textTransform: "uppercase" }}>
          © 2026 CONCAT. AESTHETIC UNDERGROUND.
        </div>
      </footer>
    </div>
  );
}
