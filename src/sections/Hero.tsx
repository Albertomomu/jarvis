'use client';
import { Button } from "@/components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

// Nuevo componente para las líneas tecnológicas
const TechLines = () => {
  const createPath = (startX, startY) => {
    let path = `M${startX},${startY} `;
    let x = startX;
    let y = startY;
    const centerX = 50;
    const centerY = 50;
    const steps = Math.floor(Math.random() * 3) + 3;

    for (let i = 0; i < steps; i++) {
      const dx = (centerX - x) / (steps - i);
      const dy = (centerY - y) / (steps - i);
      
      if (Math.random() > 0.7) {
        x += dx * 0.7;
        y += dy * 0.7;
        path += `L${x},${y} `;
      } else {
        if (Math.abs(dx) > Math.abs(dy) || Math.random() > 0.5) {
          x += dx;
          path += `H${x} `;
        } else {
          y += dy;
          path += `V${y} `;
        }
      }
    }
    
    path += `L${centerX},${centerY}`;
    return path;
  };

  const lines = 40;

  const paths = useMemo(() => {
    const generatedPaths = [];
    for (let i = 0; i < lines; i++) {
      let startX, startY;
      if (i < lines / 4) {
        startX = 0;
        startY = Math.random() * 100;
      } else if (i < lines / 2) {
        startX = 100;
        startY = Math.random() * 100;
      } else if (i < 3 * lines / 4) {
        startX = Math.random() * 100;
        startY = 0;
      } else {
        startX = Math.random() * 100;
        startY = 100;
      }
      generatedPaths.push(createPath(startX, startY));
    }
    return generatedPaths;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>
        {paths.map((path, i) => (
          <g key={i}>
            <path
              d={path}
              fill="none"
              stroke="rgba(59, 130, 246, 0.05)"
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
                duration: Math.random() * 5 + 5,
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
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
  <motion.section
    ref={sectionRef}
    className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
    style={{
      backgroundPositionY,
    }}>
    <TechLines />
    <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(0,119,255,0.3)_15%,rgba(0,21,36,0.5)_78%,transparent)]"></div>
    {/* Start Arc Reactor */}
    <div className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full border border-blue-400/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_center,white,#00a2ff_37.7%,#001842)] shadow-[0_0_50px_rgb(0,162,255),0_0_100px_rgb(0,162,255)]">
      <div className="absolute inset-4 border-4 border-blue-400 rounded-full"></div>
      <div className="absolute inset-8 border-2 border-blue-300 rounded-full"></div>
      <div className="absolute inset-0 m-auto w-16 h-16 bg-blue-500 rounded-full shadow-[0_0_20px_rgb(0,162,255)] flex items-center justify-center">
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </div>
    </div>
    {/* End Arc Reactor */}
    <div className="container relative mt-16">
      <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-blue-400 bg-[radial-gradient(100%_100%_at_top_left,#00a2ff,white,rgba(0,162,255,0.5))] text-transparent bg-clip-text text-center">Jarvis</h1>
      <p className="text-lg md:text-xl text-blue-100/70 mt-5 text-center max-w-xl mx-auto">Tu núcleo de confianza y crecimiento.</p>
      <div className="flex justify-center mt-5">
        <Button>Descubre Jarvis</Button>
      </div>
    </div>
  </motion.section>
  );
};