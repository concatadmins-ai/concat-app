"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import { useStore } from "@/store/useStore";

const NAV_LINKS = [
  { name: "Shop",      href: "/shop" },
  { name: "Stores",    href: "/stores" },
  { name: "Floor",     href: "/floors" },
  { name: "Our Story", href: "/our-story" },
  { name: "Support",   href: "/support" },
  { name: "Careers",   href: "/careers" },
];

const BURG = "#FFFFFF";
const CREAM = "#111111";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const { cartItems, toggleCart } = useStore();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.classList?.contains("snap-container") ||
          target.classList?.contains("page-scroll") ||
          target.id === "main-scroll" ||
          target.style.overflowY === "auto" ||
          target.style.overflowY === "scroll")
      ) {
        setScrollPos(target.scrollTop);
      }
    };
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  const isScrolled = scrollPos > 40;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 14,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: "calc(100% - 48px)",
          maxWidth: 960, // Slimmer and more compact
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 20px", // Reduced padding
          borderRadius: 9999,
          // Premium Apple Liquid Glass Design
          background: isScrolled ? "rgba(255, 255, 255, 0.75)" : "rgba(255, 255, 255, 0.2)",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: isScrolled ? "0 4px 24px rgba(0, 0, 0, 0.04)" : "none",
          backdropFilter: "blur(24px) saturate(200%)",
          WebkitBackdropFilter: "blur(24px) saturate(200%)",
          transition: "all 0.4s cubic-bezier(0.25, 1, 0.3, 1)",
        }}
      >
        {/* Left: Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "inherit",
            fontWeight: 900,
            fontSize: 18, // Reduced font size
            color: BURG,
            letterSpacing: "-1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          c.
        </Link>

        {/* Center: Navigation Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                padding: "8px 14px", // Reduced padding
                fontSize: 11, // Reduced font size
                fontWeight: 700,
                color: BURG,
                borderRadius: 9999,
                transition: "background 0.25s ease, color 0.25s ease",
                letterSpacing: 0.5,
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0, 0, 0, 0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <button
            style={{
              width: 36, // Reduced size
              height: 36,
              borderRadius: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: BURG,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Search size={15} strokeWidth={2.5} />
          </button>

          <Link
            href="/login"
            style={{
              width: 36, // Reduced size
              height: 36,
              borderRadius: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: BURG,
              textDecoration: "none",
            }}
          >
            <User size={15} strokeWidth={2.5} />
          </Link>

          <button
            onClick={toggleCart}
            style={{
              height: 36, // Reduced height
              padding: "0 16px", // Reduced padding
              borderRadius: 9999,
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: BURG,
              color: CREAM,
              boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
              fontFamily: "inherit",
              fontWeight: 700,
              fontSize: 11, // Reduced font size
              transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "scale(1.03)";
              el.style.background = "#000000";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "scale(1)";
              el.style.background = BURG;
            }}
          >
            <ShoppingBag size={14} />
            Bag
            <span
              style={{
                background: CREAM,
                color: BURG,
                width: 18, // Smaller bubble
                height: 18,
                borderRadius: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 800,
              }}
            >
              {cartCount}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: CREAM,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 24px",
                borderBottom: `1px solid rgba(74,14,23,0.1)`,
              }}
            >
              <span style={{ fontWeight: 900, fontSize: 22, color: BURG }}>concat.</span>
              <button
                onClick={() => setIsMobileOpen(false)}
                style={{ background: "none", border: "none", color: BURG, cursor: "pointer" }}
              >
                <X size={22} />
              </button>
            </div>
            <div style={{ flex: 1, padding: "24px", display: "flex", flexDirection: "column", gap: 20 }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: 24,
                    fontWeight: 300,
                    color: BURG,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                  }}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
