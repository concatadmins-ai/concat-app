"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="h-[100vh] pt-[110px] pb-10 px-10 flex items-center justify-center relative z-10 snap-start snap-always"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative w-full h-[80vh] rounded-[36px] overflow-hidden shadow-2xl border border-white/20 bg-black/10 backdrop-blur-xl group"
      >
        {/* Ambient Campaign Image Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-[2s] group-hover:scale-105"
          style={{ backgroundImage: "url('/media__1784130067399.jpg')" }} 
        />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-10 lg:p-16 flex flex-col justify-end">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            
            <Link href="/floors">
              <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300">
                View Floors <ArrowRight size={16} />
              </button>
            </Link>

            <Link href="/stores">
              <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300">
                View Stores <ArrowRight size={16} />
              </button>
            </Link>

            <Link href="/shop">
              <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-medium uppercase tracking-wider text-sm hover:bg-white/90 hover:scale-105 transition-all duration-300">
                Full Collection <ArrowRight size={16} />
              </button>
            </Link>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
