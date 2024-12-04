'use client';
import { Button } from "@/components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Nuevo componente para las líneas tecnológicas
const TechLines = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute h-px bg-blue-200/10"
        style={{
          top: `${Math.random() * 100}%`,
          left: '-10%',
          right: '-10%',
          transform: `rotate(${Math.random() * 180 - 90}deg)`,
        }}
      >
        <motion.div
          className="h-full w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    ))}
  </div>
);

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
    {/* Start ring 1 */}
    <motion.div 
    style={{
      translateX: "-50%",
      translateY: "-50%",
    }}
    animate={{
      rotate: "1turn",
    }} transition={{
      duration: 30,
      ease: "linear",
      repeat: Infinity,
    }} className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[590px] border border-blue-400/50 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute h-2 w-2 left-0 bg-blue-400 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-2 w-2 left-1/2 bg-blue-400 rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-5 w-5 left-full border border-blue-400 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
        <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
      </div>
    </motion.div>
    {/* End ring 1 */}
    {/* Start ring 2 */}
    <motion.div 
    style={{
      translateX: "-50%",
      translateY: "-50%",
    }}
    animate={{
      rotate: "-1turn",
    }} transition={{
      duration: 60,
      ease: "linear",
      repeat: Infinity,
    }}
    className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-blue-300/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></motion.div>
    {/* End ring 2 */}
    {/* Start ring 3 */}
    <motion.div
    style={{
      translateX: "-50%",
      translateY: "-50%",
    }}
    animate={{
      rotate: "1turn",
    }} transition={{
      duration: 90,
      ease: "linear",
      repeat: Infinity,
    }}
    className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-blue-200/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute h-2 w-2 left-0 bg-blue-200 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-2 w-2 left-full bg-blue-200 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </motion.div>
    {/* End ring 3 */}
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