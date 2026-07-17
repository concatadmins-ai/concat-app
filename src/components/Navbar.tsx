"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import { useStore } from "@/store/useStore";

const NAV_LINKS = [
  { name: "Shop",      href: "/shop" },
  { name: "Stores",    href: "/stores" },
  { name: "Floor",     href: "/floors" },
  { name: "About Us", href: "/about-us" },
  { name: "Support",   href: "/support" },
  { name: "Careers",   href: "/careers" },
];

const BURG = "#111111";
const CREAM = "#FFFFFF";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollPosRef = useRef(0);
  const hideTimeoutRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      let currentScrollPos = 0;
      
      if ((target as any) === document || target === (window as any)) {
        currentScrollPos = window.scrollY || document.documentElement.scrollTop;
      } else if (target && typeof target.scrollTop === "number") {
        currentScrollPos = target.scrollTop;
      } else {
        return;
      }

      // Check if this scroll was triggered by a link/button click
      if ((window as any).__programmaticScrollUntil && Date.now() < (window as any).__programmaticScrollUntil) {
        lastScrollPosRef.current = currentScrollPos;
        return;
      }

      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      const lastScrollPos = lastScrollPosRef.current;

      // Hide when scrolling down past a threshold, show when scrolling up
      if (currentScrollPos > lastScrollPos && currentScrollPos > 80) {
        setIsVisible(false);
      } else if (currentScrollPos < lastScrollPos) {
        setIsVisible(true);
        // If we scroll up and pause, hide it again (only if not at the very top)
        if (currentScrollPos > 80) {
          hideTimeoutRef.current = setTimeout(() => {
            setIsVisible(false);
          }, 2500);
        }
      }

      // ── TOP LOCK: Always visible at the very top of the page ──
      if (currentScrollPos <= 80) {
        setIsVisible(true);
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
        }
      }

      lastScrollPosRef.current = currentScrollPos;
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest("[role='button']")) {
        // Set programmatic scroll lock for 1200ms
        (window as any).__programmaticScrollUntil = Date.now() + 1200;
        // Make sure it hides the navbar on click if they clicked to go down, unless we are at top
        if (lastScrollPosRef.current > 80) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("click", handleClick, true);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("click", handleClick, true);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const { cartItems, toggleCart } = useStore();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      {/* Top Announcement Ticker */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 24,
        background: "#4A0E17",
        zIndex: 110,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        pointerEvents: "none"
      }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 16 }}
          style={{ display: "flex", whiteSpace: "nowrap", width: "fit-content" }}
        >
          {Array(8).fill("Discover New Brands — Beyond the Mass Market").map((text, idx) => (
            <span key={idx} style={{
              fontFamily: "inherit",
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: 1.5,
              color: "#FFFFFF",
              textTransform: "uppercase",
              paddingRight: "80px",
              display: "inline-block"
            }}>
              {text} &nbsp;&nbsp;•&nbsp;&nbsp;
            </span>
          ))}
        </motion.div>
      </div>

      <header
        style={{
          position: "fixed",
          top: isVisible ? 38 : -80,
          left: "50%",
          transform: isVisible ? "translateX(-50%) translateY(0) scale(1)" : "translateX(-50%) translateY(-120%) scale(0.95)",
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "auto" : "none",
          zIndex: 100,
          width: "calc(100% - 48px)",
          maxWidth: 960, // Slimmer and more compact
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 20px", // Reduced padding
          borderRadius: 9999,
          background: "rgba(255, 255, 255, 0.8)",
          border: "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          transition: "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1)",
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
                transition: "background 0.25s ease, color 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                letterSpacing: 0.5,
                whiteSpace: "nowrap",
                textDecoration: "none",
                transform: "translateY(0)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0, 0, 0, 0.05)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
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
              el.style.background = "#FFFFFF";
              el.style.color = "#000000";
              el.style.border = "1px solid rgba(0,0,0,0.15)";
              const span = el.querySelector("span");
              if (span) {
                span.style.background = "#000000";
                span.style.color = "#FFFFFF";
              }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "scale(1)";
              el.style.background = BURG;
              el.style.color = CREAM;
              el.style.border = "none";
              const span = el.querySelector("span");
              if (span) {
                span.style.background = CREAM;
                span.style.color = BURG;
              }
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
