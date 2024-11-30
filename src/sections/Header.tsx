import LogoIcon from "@/assets/logo.png";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
        <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="h-14 w-14 rounded-lg inline-flex justify-center items-center">
              <span><img src={LogoIcon.src} alt="" /></span>
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">Servicios</a>
              <a href="#" className="text-white/70 hover:text-white transition">Por qué elegirnos</a>
              <a href="#" className="text-white/70 hover:text-white transition">Metodología Jarvis</a>
              <a href="#" className="text-white/70 hover:text-white transition">Planes</a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Contacto</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
