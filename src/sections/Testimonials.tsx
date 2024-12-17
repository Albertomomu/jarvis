'use client';
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“Jarvis ha transformado completamente nuestra presencia online y estrategia de marketing digital.”",
    name: "Sofía Pérez",
    title: "Directora de Marketing @ TechnoVision",
    avatarImg: avatar1,
  },
  {
    text: "“Las herramientas de SEO de Jarvis han revolucionado nuestra visibilidad en buscadores en tiempo récord.”",
    name: "Javier López",
    title: "Fundador @ Innova Digital",
    avatarImg: avatar2,
  },
  {
    text: "“La interfaz de usuario de nuestra nueva web es tan intuitiva que ha mejorado significativamente la experiencia de nuestros clientes.”",
    name: "Ana Martínez",
    title: "Gerente de Producto @ E-Commerce Plus",
    avatarImg: avatar3,
  },
  {
    text: "“Desde que implementamos la estrategia de marketing de Jarvis, nuestras conversiones han aumentado un 150%.”",
    name: "Alberto Sánchez",
    title: "CEO @ Soluciones Digitales",
    avatarImg: avatar4,
  },
];


export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
      <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">Lo que dicen nuestros clientes</h2>
      <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">Resultados que hablan por sí mismos.</p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            className="flex gap-5 flex-none"
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...testimonials,...testimonials].map((testimonial) => (
              <div key={testimonial.name} className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none">
                <div className="text-lg md:text-2xl tracking-tight">{testimonial.text}</div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image src={testimonial.avatarImg} alt={`Avatar for ${testimonial.name}`} className="h-11 w-11 rounded-lg grayscale" />
                  </div>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className="text-white/50 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
