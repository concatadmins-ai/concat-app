import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import InteractiveGrid from "@/components/InteractiveGrid";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";
import Cart from "@/components/Cart";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CONCAT | Premium Fashion Marketplace",
  description: "Experience the ultimate luxury fashion destination — where brands meet culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ height: "100%", overflow: "hidden" }}
    >
      <body style={{ height: "100%", overflow: "hidden", margin: 0, padding: 0 }}>
        {/* Splash Screen - highest z-index */}
        <SplashScreen />

        {/* Fixed background effects */}
        <div className="screen-texture" />
        <div className="cursor-glow" />
        <InteractiveGrid />

        {/* Fixed Navbar - always on top */}
        <Navbar />

        {/* Global Cart Drawer */}
        <Cart />

        {/* Page Content */}
        <div id="main-scroll" style={{ height: "100%", position: "relative", zIndex: 10 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
