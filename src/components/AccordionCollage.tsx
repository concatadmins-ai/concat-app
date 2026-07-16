"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CARDS = [
  {
    id: "A",
    brand: "maicharacter",
    type: "video",
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_35rW7NAdtcMtzpF5bPgujmS1f0L/hf_20260715_124221_9ebebe94-0bc0-4d10-9c3d-93099331c307.mp4",
    accent: "#06b6d4",
    tagline: "16:9 Cinematic",
    description: "Cyberpunk and functional techwear engineered for the modern nomad.",
    link: "/shop?brand=maicharacter"
  },
  {
    id: "B",
    brand: "orangblue",
    type: "video",
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_35rW7NAdtcMtzpF5bPgujmS1f0L/hf_20260715_124255_5698b73d-6520-4094-9000-8770e6015b3f.mp4",
    accent: "#8b5cf6",
    tagline: "9:16 Portrait",
    description: "Bold silhouettes and hyper-minimal fashion forward essentials.",
    link: "/shop?brand=orangblue"
  },
  {
    id: "C",
    brand: "spoocy",
    type: "image",
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_35rW7NAdtcMtzpF5bPgujmS1f0L/hf_20260715_124258_931a7f4e-5230-41e1-a2de-5b9c47060d4d.png",
    accent: "#391c7a",
    tagline: "9:16 Portrait",
    description: "Atmospheric neo-grunge and reworked street apparel.",
    link: "/shop?brand=spoocy"
  },
  {
    id: "D",
    brand: "crewdogcrep",
    type: "video",
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_35rW7NAdtcMtzpF5bPgujmS1f0L/hf_20260715_124217_a8f407dc-4235-40e2-af60-843970a65926.mp4",
    accent: "#06b6d4",
    tagline: "16:9 Cinematic",
    description: "Distressed canvas footwear and industrial utility accessories.",
    link: "/shop?brand=crewdogcrep"
  }
];

export default function AccordionCollage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section 
      id="featured" 
      className="h-[100vh] py-[110px] px-10 flex flex-col justify-center relative z-10 scroll-snap-align-start"
    >
      <div className="h-[82vh] w-full flex gap-6 items-stretch">
        {CARDS.map((card) => {
          const isHovered = hoveredCard === card.id;
          const flexValue = hoveredCard 
            ? (isHovered ? 2.2 : 0.6) 
            : 1.0;

          return (
            <Link
              key={card.id}
              href={card.link}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative rounded-[32px] overflow-hidden bg-white/5 border border-white/15 backdrop-blur-[25px] shadow-2xl flex flex-col justify-end transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#8b5cf6]/50 hover:shadow-[#8b5cf6]/20"
              style={{ flex: flexValue }}
            >
              {/* Media Layer */}
              {card.type === "video" ? (
                <video
                  src={card.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <img
                  src={card.src}
                  alt={card.brand}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              )}

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#391c7a]/85 via-transparent to-transparent z-10" />

              {/* Text Content */}
              <div 
                className="absolute left-8 bottom-8 z-20 pointer-events-none transition-all duration-500"
                style={{
                  opacity: hoveredCard ? (isHovered ? 1 : 0) : 1,
                  transform: hoveredCard ? (isHovered ? "translateY(0)" : "translateY(20px)") : "translateY(0)"
                }}
              >
                <span 
                  className="text-[10px] font-bold uppercase tracking-[2px]"
                  style={{ color: card.accent }}
                >
                  {card.tagline}
                </span>
                <h3 className="font-bold text-3xl lg:text-4xl text-white mt-1.5 mb-2.5 tracking-tighter uppercase stroke-black">
                  {card.brand}
                </h3>
                <p className="text-sm text-white/70 max-w-[320px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
