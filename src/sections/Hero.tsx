'use client';
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from 'next/image';
import headerPage from '@/assets/headerPage.png';

const TechLines = () => {
  const paths = [
    "M0,20 H30 V40 H50 V50",
    "M0,40 H20 V60 H40 V50 H50",
    "M0,60 H40 V40 H60 V50",
    "M0,80 H60 V60 H40 V50",
    "M20,0 V30 H40 V50",
    "M40,0 V20 H60 V40 H50",
    "M60,0 V40 H40 V60 H50",
    "M80,0 V60 H60 V40 H50",
    "M100,20 H70 V40 H50",
    "M100,40 H80 V60 H60 V50",
    "M100,60 H60 V40 H50",
    "M100,80 H80 V60 H60 V50",
    "M20,100 V70 H40 V50",
    "M40,100 V80 H60 V60 H50",
    "M60,100 V80 H40 V60 H50",
    "M80,100 V40 H60 V50",
    "M0,0 H20 V20 H40 V40 H50",
    "M100,0 H80 V20 H60 V40 H50",
    "M0,100 H20 V80 H40 V60 H50",
    "M100,100 H80 V80 H60 V60 H50",
    "M50,0 V20 H30 V40 H50",
    "M50,100 V80 H70 V60 H50",
    "M0,50 H20 V30 H40 V50",
    "M100,50 H80 V70 H60 V50",
    "M25,0 V25 H50 V50",
    "M75,0 V25 H50 V50",
    "M25,100 V75 H50 V50",
    "M75,100 V75 H50 V50",
    "M0,25 H25 V50 H50",
    "M0,75 H25 V50 H50",
    "M100,25 H75 V50 H50",
    "M100,75 H75 V50 H50"
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 120 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(140, 69, 255, 0)" />
            <stop offset="50%" stopColor="rgba(140, 69, 255, 1)" />
            <stop offset="100%" stopColor="rgba(140, 69, 255, 0)" />
          </linearGradient>
        </defs>
        {useMemo(() => paths.map((path, i) => (
          <g key={i}>
            <path
              d={path}
              fill="none"
              stroke="rgba(140, 69, 255, 0.05)"
              strokeWidth="0.1" // Aumentar el grosor de las líneas
            />
            <motion.path
              d={path}
              fill="none"
              stroke="url(#sparkGradient)"
              strokeWidth="0.1" // Aumentar el grosor de las líneas animadas
              strokeLinecap="round"
              initial={{ strokeDasharray: "1 99" }} // Ajustar para mayor visibilidad
              animate={{ strokeDashoffset: ["0%", "-100%"] }}
              transition={{
                duration: 10 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </g>
        )), [paths])}
      </svg>
    </div>
  );
};

export const Hero = () => {
  return (
    <motion.section
      className="h-[492px] md:h-[900px] flex flex-col items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
    >
      {useMemo(() => <TechLines />, [])}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(140,69,255,0.3)_15%,rgba(14,0,36,0.5)_78%,transparent)]"></div>
      
      {/* Container added here */}
      <div className="container relative z-10 flex flex-col items-center justify-center h-full">
        {/* Title and Button */}
        <div className="text-center mt-8">
          <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-purple-400 bg-[radial-gradient(100%_100%_at_top_left,#8c45ff,white,rgba(140,69,255,0.5))] text-transparent bg-clip-text">Jarvis</h1>
          <p className="text-lg md:text-xl text-purple-100/70 mt-5 max-w-xl mx-auto">Tu núcleo de confianza y crecimiento.</p>
          <div className="flex justify-center mt-5">
            <Button>Descubre Jarvis</Button>
          </div>
        </div>

        {/* Modern Web Image with Animated Gradient Border */}
        <div className="relative w-full max-w-[1200px] h-[300px] md:h-[500px] mt-10">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src={headerPage}
              alt="Modern web design"
              layout="fill"
              objectFit="contain" // Cambiado a "cover" para que la imagen ocupe todo el contenedor
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
