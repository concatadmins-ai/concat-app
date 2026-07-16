"use client";

import React from "react";
import Link from "next/link";

export default function RooftopFinale() {
  return (
    <section 
      id="finale" 
      className="h-[100vh] py-[110px] px-10 flex flex-col justify-between relative z-10 scroll-snap-align-start"
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="font-bold tracking-[-0.06em] leading-[0.9] text-black text-center text-[80px] md:text-[120px] lg:text-[220px] uppercase select-none">
          concat
          <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
            .
          </span>
        </div>
        <div className="mt-5 text-[13px] font-semibold tracking-[5px] uppercase text-white/60">
          Aggregating the aesthetic underground
        </div>
      </div>
      
      <div>
        <footer className="relative overflow-hidden rounded-[24px] py-6 px-9 flex items-center justify-between flex-wrap gap-4 bg-white/5 border border-white/15 backdrop-blur-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-20">
          <span className="font-bold text-lg text-white stroke-black select-none uppercase">
            concat.
          </span>
          <nav className="flex items-center gap-6 flex-wrap">
            <Link href="/shop" className="text-[13px] font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider">
              Shop
            </Link>
            <Link href="/stores" className="text-[13px] font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider">
              Stores
            </Link>
            <Link href="/our-story" className="text-[13px] font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider">
              About Us
            </Link>
            <Link href="/support" className="text-[13px] font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider">
              Contact
            </Link>
          </nav>
          <span className="text-xs font-light text-white/45 select-none">
            © 2026 concat
          </span>
        </footer>
      </div>
    </section>
  );
}
