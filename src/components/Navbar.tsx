"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";
import { useStore } from "@/store/useStore";

const NAV_LINKS = [
  { name: "Shop", href: "/shop" },
  { name: "Stores", href: "/stores" },
  { name: "Floors", href: "/floors" },
  { name: "About Us", href: "/about-us" },
  { name: "Support", href: "/support" },
  { name: "Partner Up", href: "/sell" },
];

export default function Navbar() {
  const { cartItems, toggleCart } = useStore();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 14,
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(960px, calc(100% - 32px))",
        zIndex: 100,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "6px 18px",
        borderRadius: 9999,
        background: scrolled ? "rgba(255, 255, 255, 0.92)" : "rgba(255, 255, 255, 0.75)",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
        backdropFilter: "blur(24px) saturate(200%)",
        WebkitBackdropFilter: "blur(24px) saturate(200%)",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Left: Logo */}
      <Link
        href="/"
        style={{
          fontFamily: "'Geist', system-ui, sans-serif",
          fontWeight: 950,
          fontSize: 20,
          color: "#111111",
          letterSpacing: "-1px",
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        c<span style={{ color: "#ff3333" }}>.</span>
      </Link>

      {/* Center: Nav Links */}
      <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            style={{
              padding: "7px 13px",
              fontSize: 11,
              fontWeight: 700,
              color: "#111111",
              borderRadius: 9999,
              letterSpacing: "0.5px",
              whiteSpace: "nowrap",
              textDecoration: "none",
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0, 0, 0, 0.06)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
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

      {/* Right: Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <Link
          href="/shop"
          style={{
            width: 34,
            height: 34,
            borderRadius: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#111111",
            textDecoration: "none",
          }}
        >
          <Search size={15} strokeWidth={2.5} />
        </Link>

        <Link
          href="/login"
          style={{
            width: 34,
            height: 34,
            borderRadius: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#111111",
            textDecoration: "none",
          }}
        >
          <User size={15} strokeWidth={2.5} />
        </Link>

        <button
          onClick={toggleCart}
          style={{
            height: 34,
            padding: "0 14px",
            borderRadius: 9999,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "#111111",
            color: "#FFFFFF",
            boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            fontFamily: "inherit",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "0.5px",
            transition: "transform 0.2s ease, background 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          }}
        >
          <ShoppingBag size={13} strokeWidth={2.5} />
          <span>Bag</span>
          <span
            style={{
              background: "#FFFFFF",
              color: "#111111",
              width: 17,
              height: 17,
              borderRadius: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              fontWeight: 800,
            }}
          >
            {cartCount > 0 ? cartCount : 3}
          </span>
        </button>
      </div>
    </header>
  );
}
