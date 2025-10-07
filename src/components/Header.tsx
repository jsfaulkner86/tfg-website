import { useState, useEffect } from "react";
import logo from "@/assets/faulkner-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'w-[96%]' : 'w-[92%]'
      } max-w-7xl`}
    >
      <div 
        className={`rounded-lg backdrop-blur-xl border border-white/10 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[rgba(113,141,169,0.95)] shadow-[0_8px_32px_rgba(0,0,0,0.12)]' 
            : 'bg-[rgba(113,141,169,0.85)] shadow-[0_4px_16px_rgba(0,0,0,0.08)]'
        }`}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="px-8 flex items-center justify-between" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="The Faulkner Group - Healthcare Advisory Excellence" 
              className="h-14 w-auto md:h-16 transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-12">
            <a 
              href="#mission" 
              className="text-white font-playfair font-medium text-base tracking-wide relative group transition-all duration-300 py-1"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
            </a>
            <a 
              href="#approach" 
              className="text-white font-playfair font-medium text-base tracking-wide relative group transition-all duration-300 py-1"
            >
              Our Approach
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
            </a>
            <a 
              href="#results" 
              className="text-white font-playfair font-medium text-base tracking-wide relative group transition-all duration-300 py-1"
            >
              Results
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
            </a>
            <a 
              href="#contact" 
              className="text-white font-playfair font-medium text-base tracking-wide relative group transition-all duration-300 py-1"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
