"use client";
import React, { useEffect, useState } from "react";
export default function SplashScreen() {
  const [show, setShow]       = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (sessionStorage.getItem("concat-splash-seen")) return;
    setShow(true);
    const t = setTimeout(dismiss, 4200);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setOpacity(0);
    setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("concat-splash-seen", "true");
    }, 800);
  };

  if (!show) return null;

  return (
    <div style={{
      position: "fixed", inset: 0,
      background: "linear-gradient(150deg, #F9F7F1 0%, #EFE5CF 25%, #C0737F 55%, #6B1E2C 78%, #2C0609 100%)",
      zIndex: 99999,
      display: "flex", alignItems: "center", justifyContent: "center",
      opacity, transition: "opacity 0.8s cubic-bezier(0.25,1,0.3,1)",
      pointerEvents: opacity === 0 ? "none" : "auto",
    }}>
      <video
        autoPlay muted playsInline
        onEnded={dismiss}
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
      >
        <source src="/Concat Logo Reveal.mp4" type="video/mp4" />
      </video>
      <button
        onClick={dismiss}
        style={{
          position: "absolute", bottom: 40, right: 40,
          background: "rgba(249,247,241,0.15)", border: "1px solid rgba(249,247,241,0.3)",
          color: "#F9F7F1", padding: "10px 24px", borderRadius: 9999,
          fontFamily: "inherit", fontSize: 10, fontWeight: 700, letterSpacing: 3,
          cursor: "pointer", backdropFilter: "blur(10px)", zIndex: 100000,
          textTransform: "uppercase",
        }}
      >
        Skip Intro
      </button>
    </div>
  );
}
