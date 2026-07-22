"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [mode, setMode] = useState<"signin" | "join">("signin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === "abc" && password === "abc") {
      router.push("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "transparent", color: "#111111", overflow: "hidden", fontFamily: "'Geist', system-ui, sans-serif" }}>
      

      <div style={{ position: "relative", padding: "104px 72px 48px", display: "flex", gap: 48, alignItems: "stretch", zIndex: 5, minHeight: "calc(100vh - 152px)" }}>
        {/* Left Side Video Card */}
        <div style={{ flex: 1, position: "relative", borderRadius: 36, overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 30px 70px rgba(0,0,0,0.12)", background: "#111", minHeight: 560 }}>
          <video src="/real_ads/misobysonia-advertisment.mp4" autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.85) 0%,transparent 55%)" }} />
          <div style={{ position: "absolute", left: 28, bottom: 26 }}>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 6 }}>Members get</div>
            <div style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "-1px", lineHeight: 1.1 }}>
              The night window<br />& every drop, early
            </div>
          </div>
        </div>

        {/* Right Side Form Box */}
        <form onSubmit={handleSubmit} style={{ flex: 1, maxWidth: 440, alignSelf: "center", padding: 40, borderRadius: 32, background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.1)", backdropFilter: "blur(24px)", boxShadow: "0 16px 50px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", gap: 6, padding: 5, borderRadius: 9999, background: "rgba(0,0,0,0.05)", alignSelf: "flex-start" }}>
            <span onClick={() => setMode("signin")} style={{ padding: "8px 22px", borderRadius: 9999, background: mode === "signin" ? "#111111" : "transparent", color: mode === "signin" ? "#FFFFFF" : "#111111", fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer" }}>
              Sign in
            </span>
            <span onClick={() => setMode("join")} style={{ padding: "8px 22px", borderRadius: 9999, background: mode === "join" ? "#111111" : "transparent", color: mode === "join" ? "#FFFFFF" : "#111111", fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer" }}>
              Join
            </span>
          </div>

          <h1 style={{ margin: "6px 0 0", fontSize: 30, fontWeight: 900, letterSpacing: "-1px" }}>
            Welcome back<span style={{ color: "#777777" }}>.</span>
          </h1>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => { setUsername(e.target.value); setError(false); }}
            style={{ padding: "15px 20px", borderRadius: 14, background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.15)", fontSize: 13, color: "#111111", outline: "none", width: "100%", boxSizing: "border-box" }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            style={{ padding: "15px 20px", borderRadius: 14, background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.15)", fontSize: 13, color: "#111111", outline: "none", width: "100%", boxSizing: "border-box" }}
          />

          {error && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 16px", borderRadius: 12, background: "rgba(255,51,51,0.08)", border: "1px solid rgba(255,51,51,0.3)", fontSize: 12, color: "#c02020" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff3333", flex: "none" }} />
              That's not on the guest list. Try abc / abc.
            </div>
          )}

          <button type="submit" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "15px 32px", borderRadius: 9999, background: "#111111", color: "#FFFFFF", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", boxShadow: "0 10px 28px rgba(0,0,0,0.15)", border: "none", cursor: "pointer" }}>
            Enter the mall
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(0,0,0,0.3)" }}>
            <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.12)" }} />
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>or</span>
            <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.12)" }} />
          </div>

          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 28px", borderRadius: 9999, border: "1.5px solid rgba(0,0,0,0.3)", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer" }}>
            Continue with Google
          </div>

          <div style={{ fontSize: 11, color: "rgba(0,0,0,0.45)", textAlign: "center" }}>
            Demo account — username <strong style={{ color: "#111111" }}>abc</strong> · password <strong style={{ color: "#111111" }}>abc</strong>
          </div>
        </form>
      </div>
    </div>
  );
}
