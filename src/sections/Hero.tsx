'use client';
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { useMemo, } from "react";

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
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(140, 69, 255, 0)" />
            <stop offset="50%" stopColor="rgba(140, 69, 255, 1)" />
            <stop offset="100%" stopColor="rgba(140, 69, 255, 0)" />
          </linearGradient>
        </defs>
        {paths.map((path, i) => (
          <g key={i}>
            <path
              d={path}
              fill="none"
              stroke="rgba(140, 69, 255, 0.05)"
              strokeWidth="0.1"
            />
            <motion.path
              d={path}
              fill="none"
              stroke="url(#sparkGradient)"
              strokeWidth="0.2"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0.5 99.5" }}
              animate={{ strokeDashoffset: ["0%", "-100%"] }}
              transition={{
                duration: 10 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export const Hero = () => {

  return (
    <motion.section
      className="h-[492px] md:h-[800px] flex flex-col items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
      {useMemo(() => <TechLines />, [])}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(140,69,255,0.3)_15%,rgba(14,0,36,0.5)_78%,transparent)]"></div>
      
      {/* Title, Subtitle and Button */}
      <div className="container relative mt-8 z-10">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-purple-400 bg-[radial-gradient(100%_100%_at_top_left,#8c45ff,white,rgba(140,69,255,0.5))] text-transparent bg-clip-text text-center">Jarvis</h1>
        <p className="text-lg md:text-xl text-purple-100/70 mt-5 text-center max-w-xl mx-auto">Tu núcleo de confianza y crecimiento.</p>
        <div className="flex justify-center mt-5">
          <Button>Descubre Jarvis</Button>
        </div>
      </div>
  
      {/* Start Arc Reactor */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full border border-purple-400/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_center,white,#8c45ff_37.7%,#1e0042)] shadow-[0_0_50px_rgb(140,69,255),0_0_100px_rgb(140,69,255)] mt-32">
  {/* Anillo exterior */}
  <div className="absolute inset-4 border-4 border-purple-400 rounded-full"></div>
  
  {/* Anillo giratorio con borde de color diferente */}
  <motion.div 
    className="absolute inset-8 flex items-center justify-center rounded-full"
    animate={{ rotate: 360 }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    <div className="w-full h-full border-2 border-white rounded-full relative">
      <div className="absolute inset-0 border-2 border-blue-400 opacity-75 rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }} />
    </div>
  </motion.div>
  
  {/* Núcleo central con sombra */}
  <div className="absolute inset-0 m-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-[0_0_20px_rgb(140,69,255)] flex items-center justify-center">
    <motion.div 
      className="w-8 h-8 bg-white rounded-full"
      animate={{ scale: [1, 1.1, 1] }} // Manteniendo la animación de pulso
      transition={{
        duration: 3, // Aumentar la duración para que sea más lento
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </div>
</div>
      {/* End Arc Reactor */}
    </motion.section>
  );
};