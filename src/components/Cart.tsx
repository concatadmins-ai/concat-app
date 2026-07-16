"use client";

import React from "react";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "@/store/useStore";

const BURG  = "#FFFFFF";
const BURG_LIGHT = "#AAAAAA";
const CREAM = "#111111";

export default function Cart() {
  const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart } = useStore();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            style={{ position: "fixed", inset: 0, background: "rgba(74,14,23,0.25)", zIndex: 90, backdropFilter: "blur(6px)" }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed", top: 0, right: 0, bottom: 0, width: "100%", maxWidth: 430,
              background: "rgba(249,247,241,0.85)",
              backdropFilter: "blur(40px) saturate(180%)",
              borderLeft: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "-20px 0 60px rgba(74,14,23,0.15)",
              padding: 40, boxSizing: "border-box",
              display: "flex", flexDirection: "column",
              color: BURG, zIndex: 100,
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
              <h3 style={{ margin: 0, fontFamily: "inherit", fontSize: 22, fontWeight: 800, display: "flex", alignItems: "center", gap: 10, color: BURG }}>
                <ShoppingBag size={20} strokeWidth={2} /> Your Bag
              </h3>
              <button onClick={closeCart} style={{ background: "none", border: "none", cursor: "pointer", color: BURG, opacity: 0.6, transition: "opacity 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity="1")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity="0.6")}
              >
                <X size={22} />
              </button>
            </div>

            {/* Items */}
            <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 20 }} className="custom-scrollbar">
              {cartItems.length === 0 ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 14, opacity: 0.35 }}>
                  <ShoppingBag size={44} />
                  <p style={{ margin: 0, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Your bag is empty</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}`} style={{ display: "flex", gap: 14, paddingBottom: 20, borderBottom: "1px solid rgba(74,14,23,0.08)" }}>
                    <div style={{ width: 68, height: 86, borderRadius: 10, overflow: "hidden", flexShrink: 0, border: "1px solid rgba(74,14,23,0.1)" }}>
                      <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                        <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: BURG }}>{item.brand}</p>
                        <button onClick={() => removeFromCart(item.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(74,14,23,0.4)" }}>
                          <X size={15} />
                        </button>
                      </div>
                      <p style={{ margin: "0 0 3px", fontSize: 14, color: "rgba(74,14,23,0.75)", fontWeight: 500 }}>{item.name}</p>
                      <p style={{ margin: "0 0 12px", fontSize: 10, color: "rgba(74,14,23,0.4)", textTransform: "uppercase", letterSpacing: 1 }}>Size: {item.size}</p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, border: "1px solid rgba(74,14,23,0.15)", borderRadius: 9999, padding: "6px 14px" }}>
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ background: "none", border: "none", cursor: "pointer", color: BURG, display: "flex" }}>
                            <Minus size={13} />
                          </button>
                          <span style={{ fontSize: 13, minWidth: 14, textAlign: "center", color: BURG }}>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ background: "none", border: "none", cursor: "pointer", color: BURG, display: "flex" }}>
                            <Plus size={13} />
                          </button>
                        </div>
                        <span style={{ fontSize: 14, fontWeight: 700, color: BURG }}>${(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, fontWeight: 800, color: BURG }}>
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <Link href="/checkout" onClick={closeCart} style={{ width: "100%" }}>
                  <button className="btn-primary" style={{ width: "100%", fontSize: 13, letterSpacing: 2, justifyContent: "center", padding: "18px 0" }}>
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
