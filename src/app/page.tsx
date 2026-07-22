"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function HomePage() {
  // Night Window State
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false, false, false]);
  const [nmStatus, setNmStatus] = useState<string>("");

  // Countdown timer for Night Window
  useEffect(() => {
    const updateTimer = () => {
      const nowD = new Date();
      const openD = new Date(nowD);
      openD.setHours(23, 0, 0, 0);
      const closeD = new Date(nowD);
      closeD.setHours(23, 15, 0, 0);

      if (nowD >= openD && nowD <= closeD) {
        setNmStatus("OPEN — CLOSES 11:15 PM");
      } else {
        const target = nowD > closeD ? new Date(openD.getTime() + 86400000) : openD;
        const diff = Math.max(0, Math.floor((target.getTime() - nowD.getTime()) / 1000));
        const pad = (x: number) => String(x).padStart(2, "0");
        setNmStatus(
          "OPENS IN " +
            pad(Math.floor(diff / 3600)) +
            ":" +
            pad(Math.floor((diff % 3600) / 60)) +
            ":" +
            pad(diff % 60)
        );
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  // Night Window Cards Data
  const nightCardsData = [
    { n: "01", name: "Koyar Black", store: "Gully Labs", was: "₹4,490", now: "₹2,690", off: "-40%", cat: "Footwear", image: "/products/gully-koyar.png", fit: "contain" },
    { n: "02", name: "Procyon // Aqua", store: "Sand Marshal", was: "₹4,250", now: "₹2,550", off: "-40%", cat: "Eyewear", image: "/products/sm-procyon-aqua.png", fit: "contain" },
    { n: "03", name: "Batman Ring", store: "Miso by Sonia", was: "₹1,020", now: "₹510", off: "-50%", cat: "Jewelry", image: "/products/miso-batman-ring.png", fit: "cover" },
    { n: "04", name: "Carlisle Corduroy Blazer", store: "Bombay Shirt Co.", was: "₹10,990", now: "₹6,590", off: "-40%", cat: "Formals", image: "/products/bsc-carlisle.png", fit: "cover" },
    { n: "05", name: "DRS Full Sleeve Jersey", store: "Blueorng", was: "₹5,800", now: "₹3,480", off: "-40%", cat: "Streetwear", image: "/products/blu-drs-jersey.png", fit: "cover" },
  ];

  const handleFlipCard = (index: number) => {
    const next = [...flippedCards];
    next[index] = true;
    setFlippedCards(next);
  };

  // Data Arrays
  const shopfronts = [
    {
      brand: "Vastramay",
      href: "/stores/vastramay",
      tagline: "Traditionals · Floor 6",
      src: "/real_ads/vastramay-advertisment.mp4",
      p1name: "Purple Silk Jodhpuri",
      p1price: "₹3,649",
      p1img: "/products/vast-jodhpuri.png",
      p2name: "Navy Zari Kurta",
      p2price: "₹3,899",
      p2img: "/products/vast-navy-kurta.png",
    },
    {
      brand: "5feet11",
      href: "/stores/5feet11",
      tagline: "Linen & Casuals · Floor G",
      src: "/real_ads/5feet11-advertisment.mp4",
      p1name: "Natural Linen Trousers",
      p1price: "₹2,499",
      p1img: "/products/ft-linen-trousers.png",
      p2name: "Striped Poplin Shirt",
      p2price: "₹1,699",
      p2img: "/products/ft-poplin-shirt.png",
    },
    {
      brand: "Sand Marshal",
      href: "/stores/sand-marshal",
      tagline: "Eyewear · Floor 5",
      src: "/real_ads/samandmarshall-advertisment.mp4",
      p1name: "Procyon // Ocean",
      p1price: "₹4,250",
      p1img: "/products/sm-procyon-ocean.png",
      p2name: "Atria // Magma",
      p2price: "₹5,250",
      p2img: "/products/sm-atria-magma.png",
    },
  ];

  const receiptsLoop = [
    { item: "Koyar Black", price: "₹4,490", store: "Gully Labs", who: "Mira, Goa", time: "2 min ago", image: "/products/gully-koyar.png" },
    { item: "Procyon // Ocean", price: "₹4,250", store: "Sand Marshal", who: "Kabir, Delhi", time: "6 min ago", image: "/products/sm-procyon-ocean.png" },
    { item: "Criss Cross Cuff", price: "₹699", store: "Miso by Sonia", who: "Zara, Bengaluru", time: "11 min ago", image: "/products/miso-crisscross.png" },
    { item: "Natural Linen Trousers", price: "₹2,499", store: "5feet11", who: "Ishaan, Pune", time: "14 min ago", image: "/products/ft-linen-trousers.png" },
    { item: "Orng Tiger Fury Tee", price: "₹4,900", store: "Blueorng", who: "Ananya, Mumbai", time: "19 min ago", image: "/products/blu-tiger-tee.png" },
    { item: "Navy Zari Kurta", price: "₹3,899", store: "Vastramay", who: "Advait, Jaipur", time: "23 min ago", image: "/products/vast-navy-kurta.png" },
  ];

  const fit = [
    { n: "01", lift: "-14px", name: "Orng Tiger Fury Tee", store: "Blueorng", price: "₹4,900", fit: "contain", image: "/products/blu-tiger-tee.png" },
    { n: "02", lift: "18px", name: "Natural Linen Trousers", store: "5feet11", price: "₹2,499", fit: "cover", image: "/products/ft-linen-trousers.png" },
    { n: "03", lift: "-6px", name: "Koyar Black", store: "Gully Labs", price: "₹4,490", fit: "contain", image: "/products/gully-koyar.png" },
    { n: "04", lift: "24px", name: "Procyon // Ocean", store: "Sand Marshal", price: "₹4,250", fit: "contain", image: "/products/sm-procyon-ocean.png" },
  ];

  const rack = [
    { name: "Gauze Holiday Shirt", brand: "5feet11", price: "₹1,499", tilt: "-2.5deg", drop: "22px", fit: "cover", image: "/products/ft-gauze-shirt.png" },
    { name: "Grey Star Studded Hoodie", brand: "Blueorng", price: "₹17,000", tilt: "2deg", drop: "34px", fit: "cover", image: "/products/blu-star-hoodie.png" },
    { name: "Beige Nehru Jacket Set", brand: "Vastramay", price: "₹3,999", tilt: "-1.5deg", drop: "18px", fit: "cover", image: "/products/vast-nehru-set.png" },
    { name: "Ashton Dobby Shacket", brand: "Bombay Shirt Co.", price: "₹5,990", tilt: "2.5deg", drop: "30px", fit: "cover", image: "/products/bsc-ashton.png" },
    { name: "Silver Croissant Cuff", brand: "Miso by Sonia", price: "₹520", tilt: "-2deg", drop: "24px", fit: "cover", image: "/products/miso-croissant.png" },
    { name: "Baaz Kopal Green", brand: "Gully Labs", price: "₹5,490", tilt: "1.5deg", drop: "36px", fit: "contain", image: "/products/gully-baaz-green.png" },
  ];

  const drops = [
    { day: "Live", date: "18", piece: "DRS Full Sleeve Jersey", store: "Blueorng", run: "Run of 80 · 41 left", price: "₹5,800", cta: "Shop now", href: "/shop", bg: "linear-gradient(160deg,rgba(32,32,37,0.92),rgba(12,12,14,0.95))", fg: "#FFFFFF", subFg: "rgba(255,255,255,0.5)", rule: "rgba(255,255,255,0.15)", btnBg: "#FFFFFF", btnFg: "#111111", btnBorder: "#FFFFFF", image: "/products/blu-drs-jersey.png" },
    { day: "Tue", date: "21", piece: "Light Green Gauze Holiday Shirt", store: "5feet11", run: "Run of 120", price: "₹1,499", cta: "Notify me", href: "/login", bg: "rgba(255,255,255,0.55)", fg: "#111111", subFg: "rgba(0,0,0,0.45)", rule: "rgba(0,0,0,0.12)", btnBg: "transparent", btnFg: "#111111", btnBorder: "rgba(0,0,0,0.4)", image: "/products/ft-gauze-shirt.png" },
    { day: "Thu", date: "23", piece: "Purple Silk Blend Jodhpuri", store: "Vastramay", run: "Run of 60", price: "₹3,649", cta: "Notify me", href: "/login", bg: "rgba(255,255,255,0.55)", fg: "#111111", subFg: "rgba(0,0,0,0.45)", rule: "rgba(0,0,0,0.12)", btnBg: "transparent", btnFg: "#111111", btnBorder: "rgba(0,0,0,0.4)", image: "/products/vast-jodhpuri.png" },
    { day: "Sat", date: "25", piece: "Aandhi Kobicha", store: "Gully Labs", run: "Run of 90", price: "₹6,990", cta: "Notify me", href: "/login", bg: "rgba(255,255,255,0.55)", fg: "#111111", subFg: "rgba(0,0,0,0.45)", rule: "rgba(0,0,0,0.12)", btnBg: "transparent", btnFg: "#111111", btnBorder: "rgba(0,0,0,0.4)", image: "/products/gully-aandhi.png" },
  ];

  const floorSlabs = [
    { num: "6", href: "/floors/6", name: "Ethnic", desc: "Modern Indian drapery & fusion wear", width: "58%", src: "/real_ads/ethnic-carousel.mp4" },
    { num: "5", href: "/floors/5", name: "Eyewear", desc: "Designer frames & shades", width: "65%", src: "/real_ads/eyewear-carousel.mp4" },
    { num: "4", href: "/floors/4", name: "Formals", desc: "Tailoring, shirting & occasionwear", width: "72%", src: "/real_ads/formals-carousel.mp4" },
    { num: "3", href: "/floors/3", name: "Footwear", desc: "Sneakers to hand-made leather", width: "79%", src: "/real_ads/footwear-carousel.mp4" },
    { num: "2", href: "/floors/2", name: "Accessories", desc: "Jewelry, bags & finishing touches", width: "86%", src: "/real_ads/accersories-carousel.mp4" },
    { num: "1", href: "/floors/1", name: "Semi Formals", desc: "Smart layers for work and after", width: "93%", src: "/real_ads/semi-formals-carousel.mp4" },
    { num: "G", href: "/floors/G", name: "Casuals", desc: "Streetwear, tees, denim & everyday staples", width: "100%", src: "/real_ads/casual_carousel.mp4" },
  ];

  const tier2 = [
    { brand: "Blueorng", href: "/stores/blueorng", tagline: "Streetwear · Floor G", desc: "Aesthetic streetwear inspired by modern youth culture and bold expressions.", src: "/real_ads/blueorng-advertisment.mp4" },
    { brand: "Vastramay", href: "/stores/vastramay", tagline: "Traditionals · Floor 6", desc: "Ethnic fusion wear redefining modern Indian drapery and style.", src: "/real_ads/vastramay-advertisment.mp4" },
  ];

  const tier3 = [
    { brand: "5feet11", href: "/stores/5feet11", tagline: "Linen & Casuals", src: "/real_ads/5feet11-advertisment.mp4" },
    { brand: "Bombay Shirt Co.", href: "/stores/bombay-shirt-co", tagline: "Bespoke Shirts", src: "/real_ads/bombay_shirt_company-advertisment.mp4" },
    { brand: "Sand Marshal", href: "/stores/sand-marshal", tagline: "Eyewear", src: "/real_ads/samandmarshall-advertisment.mp4" },
    { brand: "Miso by Sonia", href: "/stores/miso-by-sonia", tagline: "Artisanal Jewelry", src: "/real_ads/misobysonia-advertisment.mp4" },
  ];

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "transparent", fontFamily: "'Geist', system-ui, sans-serif", color: "#111111", overflow: "hidden" }}>
      

      {/* S1 HERO */}
      <section style={{ position: "relative", minHeight: "820px" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ display: "flex", whiteSpace: "nowrap", animation: "omMarquee 24s linear infinite", paddingBottom: "8px" }}>
            <span style={{ fontSize: "230px", fontWeight: 950, color: "rgba(0,0,0,0.035)", textTransform: "uppercase", letterSpacing: "-0.04em", paddingRight: "100px" }}>CONCAT CONCAT</span>
            <span style={{ fontSize: "230px", fontWeight: 950, color: "rgba(0,0,0,0.035)", textTransform: "uppercase", letterSpacing: "-0.04em", paddingRight: "100px" }}>CONCAT CONCAT</span>
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 5, padding: "104px 72px 0", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 18 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 9999, background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.12)", backdropFilter: "blur(12px)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff3333", animation: "omPulse 1.5s infinite" }}></span>
            <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase" }}>India's online fashion mall</span>
          </div>

          <h1 style={{ margin: 0, fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 955, lineHeight: 0.98, letterSpacing: "-0.045em", textTransform: "uppercase" }}>
            Every independent label.<br />
            <span style={{ color: "rgba(0,0,0,0.32)" }}>ONE MALL. ZERO GENERICITY.</span>
          </h1>

          <p style={{ margin: 0, maxWidth: 560, fontSize: 16, lineHeight: 1.55, color: "rgba(0,0,0,0.6)", textWrap: "pretty" }}>
            We don't make clothes — we're building the mall where India's independent labels get the storefront they deserve, and you get to walk it from your screen.
          </p>

          <div style={{ display: "flex", gap: 12 }}>
            <Link href="/shop" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", boxShadow: "0 10px 28px rgba(0,0,0,0.15)", textDecoration: "none" }}>
              Enter the mall →
            </Link>
            <Link href="/stores" style={{ display: "inline-flex", alignItems: "center", padding: "14px 28px", borderRadius: 9999, background: "rgba(255,255,255,0.4)", color: "#111111", border: "1.5px solid rgba(0,0,0,0.4)", fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", backdropFilter: "blur(12px)", textDecoration: "none" }}>
              Browse stores
            </Link>
          </div>
        </div>

        {/* Hero Video Banner */}
        <div style={{ position: "relative", margin: "34px 72px 54px", height: 330, borderRadius: 36, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 40px 100px rgba(0,0,0,0.18)", background: "#111", zIndex: 5 }}>
          <video src="/real_ads/first_section_web.mp4" autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 55%)" }} />
          <div style={{ position: "absolute", top: 18, left: 20, padding: "6px 14px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", borderRadius: 999, border: "1px solid rgba(255,255,255,0.2)" }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "#FFFFFF", textTransform: "uppercase" }}>CONCAT.</span>
          </div>
          <div style={{ position: "absolute", top: 22, right: 22, display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff3333", animation: "omPulse 1.5s infinite" }}></span>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: "#FFFFFF", textTransform: "uppercase" }}>LIVE</span>
          </div>
          <div style={{ position: "absolute", left: 26, bottom: 22, right: 26, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>Campaign of the week</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "-1px", lineHeight: 1 }}>Fall '26 — Aesthetic Directives</div>
            </div>
            <Link href="/stores" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 26px", borderRadius: 9999, background: "#FFFFFF", color: "#111111", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", textDecoration: "none" }}>
              Watch →
            </Link>
          </div>
        </div>

        {/* Hero Marquee Ticker */}
        <div style={{ position: "relative", borderTop: "1px solid rgba(0,0,0,0.08)", borderBottom: "1px solid rgba(0,0,0,0.08)", background: "rgba(255,255,255,0.45)", backdropFilter: "blur(12px)", overflow: "hidden", zIndex: 8 }}>
          <div style={{ display: "flex", whiteSpace: "nowrap", animation: "omMarquee 26s linear infinite", padding: "9px 0" }}>
            {Array(4).fill("Independent labels only ✦ Curated, never algorithmic ✦ Verified & quality-checked ✦ Direct from the maker ✦ New stores every week ✦ ").map((item, idx) => (
              <span key={idx} style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "rgba(0,0,0,0.55)", paddingRight: 48 }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* S2 WINDOW SHOPPING */}
      <section style={{ position: "relative", padding: "64px 72px 48px", zIndex: 5 }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h2 style={{ margin: 0, fontSize: 40, fontWeight: 950, letterSpacing: "-2px", textTransform: "uppercase", lineHeight: 1 }}>window shopping</h2>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 8 }}>
            Peek through the storefronts — step inside the ones that pull you
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {shopfronts.map((sf, idx) => (
            <div key={idx} style={{ borderRadius: 28, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.12)", background: "#FFFFFF", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
              <Link href={sf.href} style={{ position: "relative", display: "block", height: 250, background: "#111", color: "inherit", textDecoration: "none" }}>
                <video src={sf.src} autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.35) 100%)" }} />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>{sf.tagline}</span>
                  <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#ff3333", animation: "omPulse 1.5s infinite" }}></span>
                    <span style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: 1.5, color: "#FFFFFF", textTransform: "uppercase" }}>Open</span>
                  </span>
                </div>
                <div style={{ position: "absolute", left: 18, bottom: 16, fontSize: 24, fontWeight: 950, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "-1px", lineHeight: 1 }}>{sf.brand}</div>
              </Link>

              <div style={{ padding: "14px 14px 16px", borderTop: "1.5px solid rgba(0,0,0,0.08)" }}>
                <div style={{ fontSize: 8.5, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 10, paddingLeft: 4 }}>In the window</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
                  <Link href="/shop" style={{ display: "flex", alignItems: "center", gap: 12, padding: 8, borderRadius: 14, background: "rgba(0,0,0,0.025)", border: "1px solid rgba(0,0,0,0.07)", color: "inherit", textDecoration: "none" }}>
                    <span style={{ width: 44, height: 54, borderRadius: 10, overflow: "hidden", flex: "none", background: "#F2F1EF" }}>
                      <img src={sf.p1img} alt={sf.p1name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </span>
                    <span style={{ flex: 1, minWidth: 0, fontSize: 12.5, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{sf.p1name}</span>
                    <span style={{ fontSize: 13, fontWeight: 900, flex: "none" }}>{sf.p1price}</span>
                  </Link>

                  <Link href="/shop" style={{ display: "flex", alignItems: "center", gap: 12, padding: 8, borderRadius: 14, background: "rgba(0,0,0,0.025)", border: "1px solid rgba(0,0,0,0.07)", color: "inherit", textDecoration: "none" }}>
                    <span style={{ width: 44, height: 54, borderRadius: 10, overflow: "hidden", flex: "none", background: "#F2F1EF" }}>
                      <img src={sf.p2img} alt={sf.p2name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </span>
                    <span style={{ flex: 1, minWidth: 0, fontSize: 12.5, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{sf.p2name}</span>
                    <span style={{ fontSize: 13, fontWeight: 900, flex: "none" }}>{sf.p2price}</span>
                  </Link>
                </div>

                <Link href={sf.href} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 0", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", textDecoration: "none" }}>
                  Step inside →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* S2.5 JUST BAGGED RECEIPT TICKER */}
      <section style={{ position: "relative", padding: "20px 0 44px", zIndex: 5, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 72px", marginBottom: 18 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff3333", animation: "omPulse 1.5s infinite" }}></span>
          <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>
            Just bagged — live from the checkout counters
          </span>
        </div>

        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "omMarquee 38s linear infinite" }}>
          {receiptsLoop.concat(receiptsLoop).map((rc, idx) => (
            <Link key={idx} href="/shop" style={{ display: "inline-flex", alignItems: "center", gap: 14, marginRight: 16, padding: "12px 18px 12px 12px", background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.12)", borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.08)", color: "inherit", flex: "none", textDecoration: "none" }}>
              <span style={{ width: 44, height: 54, borderRadius: 10, overflow: "hidden", flex: "none", background: "#F2F1EF" }}>
                <img src={rc.image} alt={rc.item} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </span>
              <span style={{ fontFamily: "ui-monospace, Menlo, monospace" }}>
                <span style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#111111" }}>{rc.item} · {rc.price}</span>
                <span style={{ display: "block", fontSize: 9.5, color: "rgba(0,0,0,0.45)", marginTop: 2 }}>at {rc.store} — {rc.who}</span>
              </span>
              <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", color: "rgba(0,0,0,0.35)", borderLeft: "1px dashed rgba(0,0,0,0.2)", paddingLeft: 12, flex: "none" }}>{rc.time}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* S3 STORE OF THE WEEK */}
      <section style={{ position: "relative", padding: "24px 72px 40px", zIndex: 5 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>Store of the week</div>
          <span style={{ padding: "3px 10px", border: "1px dashed rgba(0,0,0,0.3)", borderRadius: 6, font: "600 8.5px ui-monospace, Menlo, monospace", letterSpacing: 1, color: "rgba(0,0,0,0.45)" }}>AD SLOT 02 · 1 SPOT</span>
        </div>

        <Link href="/stores/gully-labs" style={{ position: "relative", display: "block", height: 420, borderRadius: 36, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 30px 70px rgba(0,0,0,0.14)", background: "#111", color: "inherit", textDecoration: "none" }}>
          <video src="/real_ads/gully_labs-advertisment.mp4" autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)" }} />
          <div style={{ position: "absolute", top: 22, right: 24, display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff3333", animation: "omPulse 1.5s infinite" }}></span>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: "#FFFFFF", textTransform: "uppercase" }}>LIVE</span>
          </div>
          <div style={{ position: "absolute", left: 32, right: 32, bottom: 28, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 6 }}>Footwear · Floor 3</div>
              <div style={{ fontSize: 44, fontWeight: 950, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "-2px", lineHeight: 1, marginBottom: 8 }}>Gully Labs</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", maxWidth: 460, lineHeight: 1.5 }}>Sneakers that tell a story — heritage craftsmanship meets street sensibility.</div>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 9999, background: "#FFFFFF", color: "#111111", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", flex: "none" }}>Visit store →</span>
          </div>
        </Link>
      </section>

      {/* S3.5 ONE LOOK FOUR STORES */}
      <section style={{ position: "relative", padding: "56px 72px 48px", zIndex: 5 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44, flexWrap: "wrap", gap: 14 }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginBottom: 8 }}>Styled by the mall · Look № 27</div>
            <h2 style={{ margin: 0, fontSize: 44, fontWeight: 950, letterSpacing: "-2px", textTransform: "uppercase", lineHeight: 0.98 }}>
              one look. four stores.<br />
              <span style={{ color: "rgba(0,0,0,0.3)" }}>one bag.</span>
            </h2>
          </div>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.4)", textAlign: "right" }}>
            New look every week<br />
            <span style={{ color: "rgba(0,0,0,0.25)" }}>Curated by the CONCAT floor team</span>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "2%", right: "2%", top: "54%", borderTop: "1px dashed rgba(0,0,0,0.22)" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 26 }}>
            {fit.map((ft, idx) => (
              <div key={idx} style={{ position: "relative", transform: `translateY(${ft.lift})` }}>
                <div style={{ position: "absolute", top: -52, left: -8, fontSize: 110, fontWeight: 950, letterSpacing: "-6px", color: "rgba(0,0,0,0.06)", lineHeight: 1, pointerEvents: "none" }}>{ft.n}</div>
                <Link href="/shop" style={{ position: "relative", display: "block", borderRadius: 24, overflow: "hidden", background: "#FFFFFF", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 24px 60px rgba(0,0,0,0.12)", color: "inherit", textDecoration: "none" }}>
                  <span style={{ display: "block", aspectRatio: "3/3.2", background: "#F6F5F3" }}>
                    <img src={ft.image} alt={ft.name} style={{ width: "100%", height: "100%", objectFit: ft.fit as any, display: "block" }} />
                  </span>
                  <span style={{ display: "block", padding: "14px 16px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <span style={{ display: "block", fontSize: 13, fontWeight: 800, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{ft.name}</span>
                    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 4 }}>
                      <span style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}>{ft.store}</span>
                      <span style={{ fontSize: 14, fontWeight: 900 }}>{ft.price}</span>
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Styling Receipt Bar */}
        <div style={{ marginTop: 46, borderRadius: 24, background: "linear-gradient(160deg, rgba(32,32,37,0.92) 0%, rgba(12,12,14,0.95) 100%)", border: "1px solid rgba(255,255,255,0.14)", boxShadow: "0 24px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.16)", padding: "18px 18px 18px 30px", display: "flex", alignItems: "center", gap: 24, color: "#FFFFFF", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10, letterSpacing: 2, color: "rgba(255,255,255,0.5)" }}>STYLING RECEIPT · №27</span>
          <span style={{ flex: 1, minWidth: 220, borderTop: "1px dashed rgba(255,255,255,0.25)" }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>4 pieces · 4 stores</span>
          <span style={{ fontSize: 26, fontWeight: 950, letterSpacing: "-1px" }}>₹16,139</span>
          <Link href="/checkout" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 9999, background: "#FFFFFF", color: "#111111", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", textDecoration: "none" }}>
            Bag the whole look →
          </Link>
        </div>
      </section>

      {/* S3.7 THE TROUSER QUESTION (SPLIT EDITORIAL) */}
      <section style={{ position: "relative", padding: "32px 72px 48px", zIndex: 5 }}>
        <div style={{ position: "relative", borderRadius: 36, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.12)", boxShadow: "0 30px 80px rgba(0,0,0,0.14)", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <Link href="/shop" style={{ position: "relative", display: "flex", flexDirection: "column", background: "#F7F6F3", color: "inherit", padding: "40px 44px 36px", minHeight: 520, textDecoration: "none" }}>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}>The Sunday cut</div>
            <div style={{ marginTop: 8, fontSize: 30, fontWeight: 950, letterSpacing: "-1.5px", textTransform: "uppercase", lineHeight: 1 }}>Natural Linen<br />Trousers</div>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "18px 0" }}>
              <img src="/products/ft-linen-trousers.png" alt="Natural Linen Trousers — 5feet11" style={{ maxHeight: 290, maxWidth: "100%", objectFit: "contain", filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.18))" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
              <div>
                <div style={{ fontSize: 8.5, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 4 }}>at 5feet11 · Floor G</div>
                <div style={{ fontSize: 12.5, lineHeight: 1.55, color: "rgba(0,0,0,0.55)", maxWidth: 300 }}>Pressed, breathable, unhurried — cut for long lunches and longer afternoons.</div>
              </div>
              <div style={{ fontSize: 24, fontWeight: 950, flex: "none" }}>₹2,499</div>
            </div>
          </Link>

          <Link href="/shop" style={{ position: "relative", display: "flex", flexDirection: "column", background: "transparent", color: "#FFFFFF", padding: "40px 44px 36px", minHeight: 520, textDecoration: "none" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(115deg,rgba(255,255,255,0.08) 0%,transparent 30%)", pointerEvents: "none" }} />
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.45)", textAlign: "right" }}>The boardroom cut</div>
            <div style={{ marginTop: 8, fontSize: 30, fontWeight: 950, letterSpacing: "-1.5px", textTransform: "uppercase", lineHeight: 1, textAlign: "right" }}>Avelis Stretch<br />Dress Pants</div>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "18px 0" }}>
              <img src="/products/bsc-avelis.png" alt="Avelis Dress Pants — Bombay Shirt Company" style={{ maxHeight: 290, maxWidth: "100%", objectFit: "contain", borderRadius: 16, boxShadow: "0 24px 50px rgba(0,0,0,0.5)" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16, flexDirection: "row-reverse" }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 8.5, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 4 }}>at Bombay Shirt Co. · Floor 4</div>
                <div style={{ fontSize: 12.5, lineHeight: 1.55, color: "rgba(255,255,255,0.6)", maxWidth: 300 }}>Self-striped, stretch-tailored, sharp — cut to survive the 9 AM and the 9 PM.</div>
              </div>
              <div style={{ fontSize: 24, fontWeight: 950, flex: "none" }}>₹4,590</div>
            </div>
          </Link>

          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1.5, background: "rgba(0,0,0,0.15)", transform: "translateX(-50%)" }} />
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 62, height: 62, borderRadius: "50%", background: "#FFFFFF", border: "1.5px solid rgba(0,0,0,0.15)", boxShadow: "0 12px 35px rgba(0,0,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 950, letterSpacing: "-0.5px", zIndex: 3, color: "#111111" }}>VS</div>
          <div style={{ position: "absolute", left: 0, right: 0, top: 0, textAlign: "center", padding: "16px 0", pointerEvents: "none" }}>
            <span style={{ display: "inline-block", padding: "6px 16px", borderRadius: 9999, background: "rgba(255,255,255,0.8)", border: "1px solid rgba(0,0,0,0.12)", backdropFilter: "blur(10px)", fontSize: 9, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.55)" }}>The trouser question · same brief, two philosophies</span>
          </div>
        </div>
      </section>

      {/* S4 FEATURED & RISING STORES */}
      <section style={{ position: "relative", padding: "24px 72px 40px", zIndex: 5 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
          <h2 style={{ margin: 0, fontSize: 32, fontWeight: 950, letterSpacing: "-1.5px", textTransform: "uppercase", lineHeight: 1 }}>featured stores</h2>
          <span style={{ padding: "3px 10px", border: "1px dashed rgba(0,0,0,0.3)", borderRadius: 6, font: "600 8.5px ui-monospace, Menlo, monospace", letterSpacing: 1, color: "rgba(0,0,0,0.45)" }}>AD SLOT 03 · 2 SPOTS</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 36 }}>
          {tier2.map((st, idx) => (
            <Link key={idx} href={st.href} style={{ position: "relative", display: "block", height: 340, borderRadius: 28, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 16px 50px rgba(0,0,0,0.12)", background: "#111", color: "inherit", textDecoration: "none" }}>
              <video src={st.src} autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)" }} />
              <div style={{ position: "absolute", left: 24, right: 24, bottom: 22, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: 4 }}>{st.tagline}</div>
                  <div style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "-1px", lineHeight: 1.05, marginBottom: 6 }}>{st.brand}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.45 }}>{st.desc}</div>
                </div>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: "50%", background: "#FFFFFF", color: "#111111", flex: "none", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>→</span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
          <h2 style={{ margin: 0, fontSize: 32, fontWeight: 950, letterSpacing: "-1.5px", textTransform: "uppercase", lineHeight: 1 }}>rising stores</h2>
          <span style={{ padding: "3px 10px", border: "1px dashed rgba(0,0,0,0.3)", borderRadius: 6, font: "600 8.5px ui-monospace, Menlo, monospace", letterSpacing: 1, color: "rgba(0,0,0,0.45)" }}>AD SLOT 04 · 4 SPOTS</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {tier3.map((st, idx) => (
            <Link key={idx} href={st.href} style={{ position: "relative", display: "block", height: 300, borderRadius: 24, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 12px 40px rgba(0,0,0,0.1)", background: "#111", color: "inherit", textDecoration: "none" }}>
              <video src={st.src} autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)" }} />
              <div style={{ position: "absolute", left: 16, right: 16, bottom: 16 }}>
                <div style={{ fontSize: 8.5, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: 3 }}>{st.tagline}</div>
                <div style={{ fontSize: 16, fontWeight: 900, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "-0.5px", lineHeight: 1.15 }}>{st.brand}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* S4.5 FRESH OFF THE RACK */}
      <section style={{ position: "relative", padding: "48px 72px 56px", zIndex: 5, overflow: "hidden" }}>
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <h2 style={{ margin: 0, fontSize: 40, fontWeight: 950, letterSpacing: "-2px", textTransform: "uppercase", lineHeight: 1 }}>fresh off the rack</h2>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 8 }}>
            New pieces, hung this week — straight from the stores
          </div>
        </div>

        <div style={{ position: "relative", paddingTop: 26 }}>
          <div style={{ position: "relative", height: 10, borderRadius: 9999, background: "transparent", boxShadow: "0 6px 16px rgba(0,0,0,0.3)", margin: "0 8px" }}>
            <span style={{ position: "absolute", left: -8, top: -4, width: 18, height: 18, borderRadius: "50%", background: "#111111" }}></span>
            <span style={{ position: "absolute", right: -8, top: -4, width: 18, height: 18, borderRadius: "50%", background: "#111111" }}></span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 14, padding: "0 8px" }}>
            {rack.map((rk, idx) => (
              <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ width: 2.5, height: rk.drop, background: "#111111", marginTop: -2 }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", border: "2.5px solid #111111", marginTop: -2, marginBottom: -4, background: "transparent", zIndex: 2 }} />
                <Link href="/shop" style={{ display: "block", width: "100%", borderRadius: 18, overflow: "hidden", background: "#FFFFFF", border: "1.5px solid rgba(0,0,0,0.12)", boxShadow: "0 16px 45px rgba(0,0,0,0.14)", transform: `rotate(${rk.tilt})`, transformOrigin: "top center", color: "inherit", marginTop: 6, position: "relative", textDecoration: "none" }}>
                  <div style={{ aspectRatio: "3/3.8", background: "#F6F5F3" }}>
                    <img src={rk.image} alt={rk.name} style={{ width: "100%", height: "100%", objectFit: rk.fit as any, display: "block" }} />
                  </div>
                  <div style={{ position: "absolute", top: 8, right: -6, padding: "5px 12px 5px 14px", background: "#111111", color: "#FFFFFF", fontSize: 10, fontWeight: 900, transform: "rotate(4deg)", borderRadius: 6, boxShadow: "0 6px 16px rgba(0,0,0,0.3)" }}>
                    {rk.price}
                  </div>
                  <div style={{ padding: "10px 12px" }}>
                    <p style={{ fontSize: 8, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#777777", margin: "0 0 2px" }}>at {rk.brand}</p>
                    <span style={{ display: "block", fontSize: 11.5, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{rk.name}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
          <Link href="/shop" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 9999, border: "1.5px solid rgba(0,0,0,0.4)", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#111111", textDecoration: "none" }}>
            Browse the whole rack →
          </Link>
        </div>
      </section>

      {/* S5 UNDER THE LOUPE */}
      <section style={{ position: "relative", padding: "40px 72px 56px", zIndex: 5 }}>
        <div style={{ borderRadius: 40, background: "#FFFFFF", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 30px 80px rgba(0,0,0,0.12)", padding: "52px 56px", display: "flex", gap: 56, alignItems: "center", flexWrap: "wrap", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", right: -40, top: -30, fontSize: 200, fontWeight: 950, letterSpacing: "-12px", color: "rgba(0,0,0,0.03)", lineHeight: 1, pointerEvents: "none" }}>08</div>
          <div style={{ flex: 1, minWidth: 360 }}>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginBottom: 12 }}>Under the loupe · Study № 08</div>
            <h2 style={{ margin: "0 0 14px", fontSize: 40, fontWeight: 950, letterSpacing: "-2px", textTransform: "uppercase", lineHeight: 1 }}>Aandhi<br />Kobicha</h2>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 18 }}>Gully Labs × Raga · Floor 3</div>
            <p style={{ margin: "0 0 26px", fontSize: 14.5, lineHeight: 1.65, color: "rgba(0,0,0,0.6)", maxWidth: 400, textWrap: "pretty" }}>
              Every week, one piece from the mall goes under the glass. This week: a court sneaker that swaps tech fabrics for hand-woven jute — proof that street can be craft.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <span style={{ fontSize: 30, fontWeight: 950, letterSpacing: "-1px" }}>₹6,990</span>
              <Link href="/shop" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", textDecoration: "none" }}>
                Study it closer →
              </Link>
            </div>
          </div>

          {/* Shoe Image Callout Diagram */}
          <div style={{ position: "relative", flex: 1.2, minWidth: 460, height: 420 }}>
            <img src="/products/gully-aandhi.png" alt="Aandhi Kobicha — Gully Labs x Raga" style={{ position: "absolute", left: "50%", top: "56%", transform: "translate(-50%,-50%)", width: "78%", objectFit: "contain", filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.2))" }} />
            <div style={{ position: "absolute", left: "6%", top: "6%", maxWidth: 170 }}>
              <div style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10, fontWeight: 700, letterSpacing: 1, color: "#111111" }}>01 · JUTE MESH</div>
              <div style={{ fontSize: 10.5, color: "rgba(0,0,0,0.5)", marginTop: 3, lineHeight: 1.45 }}>Hand-woven side panel, breathable and raw</div>
              <div style={{ width: 56, borderTop: "1px solid rgba(0,0,0,0.35)", transform: "rotate(28deg)", transformOrigin: "left", marginTop: 8 }} />
            </div>

            <div style={{ position: "absolute", right: "2%", top: "12%", maxWidth: 170, textAlign: "right" }}>
              <div style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10, fontWeight: 700, letterSpacing: 1, color: "#111111" }}>02 · RAW SUEDE</div>
              <div style={{ fontSize: 10.5, color: "rgba(0,0,0,0.5)", marginTop: 3, lineHeight: 1.45 }}>Twin-tone overlays, uncoated and unpolished</div>
              <div style={{ width: 56, borderTop: "1px solid rgba(0,0,0,0.35)", transform: "rotate(-28deg)", transformOrigin: "right", marginTop: 8, marginLeft: "auto" }} />
            </div>

            <div style={{ position: "absolute", left: "8%", bottom: "4%", maxWidth: 170 }}>
              <div style={{ width: 56, borderTop: "1px solid rgba(0,0,0,0.35)", transform: "rotate(-24deg)", transformOrigin: "left", marginBottom: 8 }} />
              <div style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10, fontWeight: 700, letterSpacing: 1, color: "#111111" }}>03 · CREAM CUPSOLE</div>
              <div style={{ fontSize: 10.5, color: "rgba(0,0,0,0.5)", marginTop: 3, lineHeight: 1.45 }}>Natural rubber, stitched — not glued</div>
            </div>

            <div style={{ position: "absolute", right: "6%", bottom: "8%", maxWidth: 170, textAlign: "right" }}>
              <div style={{ width: 56, borderTop: "1px solid rgba(0,0,0,0.35)", transform: "rotate(24deg)", transformOrigin: "right", marginBottom: 8, marginLeft: "auto" }} />
              <div style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10, fontWeight: 700, letterSpacing: 1, color: "#111111" }}>04 · BRAIDED LACES</div>
              <div style={{ fontSize: 10.5, color: "rgba(0,0,0,0.5)", marginTop: 3, lineHeight: 1.45 }}>Cotton rope, braided by hand in Jodhpur</div>
            </div>
          </div>
        </div>
      </section>

      {/* S4.7 THE NIGHT WINDOW */}
      <section style={{ position: "relative", padding: "32px 72px 48px", zIndex: 5 }}>
        <div style={{ position: "relative", borderRadius: 40, background: "radial-gradient(120% 130% at 50% 0%,#191921 0%,#0a0a0d 55%,#060608 100%)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.14)", padding: "48px 52px 36px", color: "#FFFFFF", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "50%", top: -140, transform: "translateX(-50%)", width: "70%", height: 280, background: "radial-gradient(50% 50% at 50% 50%,rgba(255,255,255,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 30 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 10 }}>
              <span style={{ width: 22, borderTop: "1px solid rgba(255,255,255,0.25)" }} />
              Every night · 11:00–11:15 PM only
              <span style={{ width: 22, borderTop: "1px solid rgba(255,255,255,0.25)" }} />
            </div>
            <h2 style={{ margin: "0 0 14px", fontSize: 46, fontWeight: 950, letterSpacing: "-2px", textTransform: "uppercase", lineHeight: 1, color: "#FFFFFF", textShadow: "0 0 40px rgba(255,255,255,0.25)" }}>
              the night window
            </h2>
            <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)", maxWidth: 520, lineHeight: 1.6 }}>
              Five panes, dealt fresh for you. Behind each: a real piece from the mall, cut <strong style={{ color: "#FFFFFF" }}>25% to 75%</strong>. Flip them before the window shuts.
            </div>
            <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 9, padding: "10px 22px", borderRadius: 9999, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(10px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff3333", animation: "omPulse 1.5s infinite" }}></span>
              <span style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12, fontWeight: 700, letterSpacing: 3, color: "#FFFFFF" }}>{nmStatus}</span>
            </div>
          </div>

          {/* Interactive Flip Cards Grid */}
          <div style={{ position: "relative", borderRadius: 26, border: "1.5px solid rgba(255,255,255,0.14)", background: "linear-gradient(180deg,rgba(255,255,255,0.045) 0%,rgba(255,255,255,0.015) 100%)", padding: 22, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
              {nightCardsData.map((cd, i) => {
                const isFlipped = flippedCards[i];
                return (
                  <div key={i} onClick={() => handleFlipCard(i)} style={{ cursor: "pointer", perspective: 1400 }}>
                    <div style={{ position: "relative", width: "100%", aspectRatio: "3/4.5", transformStyle: "preserve-3d", transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)", transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
                      {/* Card Front */}
                      <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", borderRadius: 18, background: "transparent", border: "1px solid rgba(255,255,255,0.16)", boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.22)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                        <span style={{ position: "absolute", top: 14, left: 16, fontFamily: "ui-monospace, Menlo, monospace", fontSize: 9, letterSpacing: 2, color: "rgba(255,255,255,0.35)" }}>PANE {cd.n}</span>
                        <span style={{ position: "absolute", top: 14, right: 16, fontFamily: "ui-monospace, Menlo, monospace", fontSize: 9, letterSpacing: 2, color: "rgba(255,255,255,0.35)" }}>?</span>
                        <span style={{ fontSize: 54, fontWeight: 950, letterSpacing: "-3px", color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>c.</span>
                        <span style={{ marginTop: 10, fontFamily: "ui-monospace, Menlo, monospace", fontSize: 9, letterSpacing: 2, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>{cd.cat}</span>
                        <span style={{ position: "absolute", bottom: 16, fontSize: 8.5, fontWeight: 800, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Tap to reveal</span>
                      </div>

                      {/* Card Back */}
                      <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", borderRadius: 18, background: "#FFFFFF", color: "#111111", border: "1px solid rgba(0,0,0,0.1)", boxShadow: "0 20px 50px rgba(0,0,0,0.35)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                        <span style={{ position: "relative", display: "block", flex: 1, minHeight: 0, background: "#F6F5F3" }}>
                          <img src={cd.image} alt={cd.name} style={{ width: "100%", height: "100%", objectFit: cd.fit as any, display: "block" }} />
                          <span style={{ position: "absolute", top: 10, right: -7, padding: "6px 13px 6px 15px", background: "#111111", color: "#FFFFFF", fontSize: 13, fontWeight: 950, transform: "rotate(4deg)", borderRadius: 6, boxShadow: "0 8px 20px rgba(0,0,0,0.4)" }}>{cd.off}</span>
                        </span>
                        <span style={{ display: "block", padding: "11px 13px 13px" }}>
                          <span style={{ display: "block", fontSize: 11.5, fontWeight: 800, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{cd.name}</span>
                          <span style={{ display: "block", fontSize: 8, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(0,0,0,0.4)", margin: "2px 0 6px" }}>at {cd.store}</span>
                          <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                            <span style={{ fontSize: 15, fontWeight: 950 }}>{cd.now}</span>
                            <span style={{ fontSize: 10.5, color: "rgba(0,0,0,0.35)", textDecoration: "line-through" }}>{cd.was}</span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ position: "relative", marginTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>A new hand every night · different panes for every customer</span>
            <Link href="/shop" style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "#FFFFFF", textDecoration: "underline" }}>
              Missed it? The rack never closes
            </Link>
          </div>
        </div>
      </section>

      {/* S5.5 THIS WEEK'S DROPS */}
      <section style={{ position: "relative", padding: "32px 72px 48px", zIndex: 5 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 18 }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 32, fontWeight: 950, letterSpacing: "-1.5px", textTransform: "uppercase", lineHeight: 1 }}>this week's drops</h2>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 6 }}>
              Limited runs land on a schedule — miss it, it's gone
            </div>
          </div>
          <Link href="/shop" style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", textDecoration: "underline", color: "inherit" }}>
            Full calendar
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {drops.map((dp, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: 22, padding: "14px 22px", borderRadius: 20, background: dp.bg, border: "1px solid rgba(0,0,0,0.1)", backdropFilter: "blur(10px)" }}>
              <span style={{ width: 64, flex: "none", textAlign: "center" }}>
                <span style={{ display: "block", fontSize: 9, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: dp.subFg }}>{dp.day}</span>
                <span style={{ display: "block", fontSize: 22, fontWeight: 950, letterSpacing: "-1px", color: dp.fg }}>{dp.date}</span>
              </span>
              <span style={{ width: 1, height: 44, background: dp.rule, flex: "none" }} />
              <span style={{ width: 52, height: 64, borderRadius: 12, overflow: "hidden", flex: "none", background: "#F2F1EF" }}>
                <img src={dp.image} alt={dp.piece} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: "block", fontSize: 15, fontWeight: 800, color: dp.fg }}>{dp.piece}</span>
                <span style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: dp.subFg, marginTop: 2 }}>at {dp.store} · {dp.run}</span>
              </span>
              <span style={{ fontSize: 16, fontWeight: 900, color: dp.fg, flex: "none" }}>{dp.price}</span>
              <Link href={dp.href} style={{ display: "inline-flex", alignItems: "center", padding: "11px 22px", borderRadius: 9999, background: dp.btnBg, color: dp.btnFg, fontSize: 9.5, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", flex: "none", border: `1.5px solid ${dp.btnBorder}`, textDecoration: "none" }}>
                {dp.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* S5.7 THE TAG — TRUST GUARANTEE */}
      <section style={{ position: "relative", padding: "32px 72px 48px", zIndex: 5 }}>
        <div style={{ borderRadius: 28, background: "linear-gradient(160deg,rgba(32,32,37,0.92) 0%,rgba(12,12,14,0.95) 100%)", border: "1px solid rgba(255,255,255,0.14)", boxShadow: "0 24px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.16)", padding: "26px 34px", display: "flex", alignItems: "center", gap: 32, color: "#FFFFFF", flexWrap: "wrap" }}>
          <div style={{ flex: 1.3, minWidth: 300 }}>
            <div style={{ fontSize: 16, fontWeight: 900, letterSpacing: "-0.3px", lineHeight: 1.35 }}>Found a great label on Instagram, but didn't trust it enough to order?</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>That's the gap this mall closes. Nothing hangs here until we've checked it ourselves.</div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 16px", borderRadius: 9999, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.07)", fontSize: 9.5, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 15, height: 15, borderRadius: "50%", background: "#FFFFFF", color: "#111111", fontSize: 9 }}>✓</span>Label verified
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 16px", borderRadius: 9999, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.07)", fontSize: 9.5, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 15, height: 15, borderRadius: "50%", background: "#FFFFFF", color: "#111111", fontSize: 9 }}>✓</span>Quality checked
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 16px", borderRadius: 9999, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.07)", fontSize: 9.5, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 15, height: 15, borderRadius: "50%", background: "#FFFFFF", color: "#111111", fontSize: 9 }}>✓</span>Grievance covered
            </span>
          </div>

          <Link href="/about-us" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "#FFFFFF", textDecoration: "underline", flex: "none" }}>
            Every piece wears The Tag →
          </Link>
        </div>
      </section>

      {/* S6 FLOORS TOWER */}
      <section style={{ position: "relative", padding: "32px 72px 56px", zIndex: 5 }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h2 style={{ margin: 0, fontSize: 40, fontWeight: 950, letterSpacing: "-2px", textTransform: "uppercase", lineHeight: 1 }}>the building</h2>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 8 }}>
            Seven floors, top to ground — pick where you get off
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          {floorSlabs.map((fs, idx) => (
            <Link key={idx} href={fs.href} style={{ position: "relative", display: "block", height: 92, width: fs.width, borderRadius: 20, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.12)", background: "#111", boxShadow: "0 14px 40px rgba(0,0,0,0.14)", color: "inherit", textDecoration: "none" }}>
              <video src={fs.src} autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.15) 100%)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", gap: 22, padding: "0 28px" }}>
                <span style={{ fontSize: 34, fontWeight: 950, letterSpacing: "-2px", color: "rgba(255,255,255,0.35)", width: 44, flex: "none" }}>{fs.num}</span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: 19, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.5px", color: "#FFFFFF", lineHeight: 1.1 }}>{fs.name}</span>
                  <span style={{ display: "block", fontSize: 10.5, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{fs.desc}</span>
                </span>
                <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", background: "#FFFFFF", color: "#111111", flex: "none", boxShadow: "0 8px 24px rgba(0,0,0,0.35)" }}>→</span>
              </div>
            </Link>
          ))}
          <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginTop: 10 }}>Ground level · CONCAT mall</div>
        </div>
      </section>

      {/* S7 WHY CONCAT */}
      <section style={{ position: "relative", padding: "56px 72px 48px", zIndex: 5, textAlign: "center" }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase", color: "#777777", marginBottom: 28 }}>Why CONCAT exists</div>
        <h2 style={{ margin: "0 auto", maxWidth: 980, fontSize: 56, fontWeight: 900, letterSpacing: "-2.5px", lineHeight: 1.18 }}>
          The best clothes in India<br />
          aren't made by
          <span style={{ display: "inline-flex", verticalAlign: "middle", width: 110, height: 62, borderRadius: 9999, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.12)", margin: "0 8px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
            <video src="/real_ads/first_section_web.mp4" autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)" }} />
          </span>
          the brands you see everywhere.<br />
          They're made by
          <span style={{ display: "inline-flex", verticalAlign: "middle", width: 110, height: 62, borderRadius: 9999, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.12)", margin: "0 8px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", background: "#111" }}>
            <video src="/real_ads/misobysonia-advertisment.mp4" autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </span>
          <span style={{ color: "#777777" }}>independent labels you've never heard of.</span>
        </h2>
        <p style={{ margin: "28px auto 26px", fontSize: 16, lineHeight: 1.7, color: "rgba(0,0,0,0.65)", maxWidth: 540, textWrap: "pretty" }}>
          Same price. Better fabric. Actual character. We built CONCAT so finding them stops being luck.
        </p>
        <Link href="/about-us" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#111111", color: "#FFFFFF", padding: "14px 30px", borderRadius: 9999, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, boxShadow: "0 10px 28px rgba(0,0,0,0.15)", textDecoration: "none" }}>
          Our story →
        </Link>
      </section>

      {/* S8 FINALE */}
      <section style={{ position: "relative", padding: "24px 72px 36px", zIndex: 5 }}>
        <div style={{ textAlign: "center", paddingBottom: 36 }}>
          <div style={{ fontSize: 140, fontWeight: 900, letterSpacing: "-8px", lineHeight: 0.88, color: "#111111" }}>
            concat<span style={{ color: "#777777" }}>.</span>
          </div>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 4, textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginTop: 16 }}>Where brands meet culture</div>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(0,0,0,0.3)", marginTop: 10 }}>Every label verified · every piece quality-checked · grievance desk on call</div>
        </div>

        <Footer />
      </section>
    </div>
  );
}
