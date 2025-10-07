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
        isScrolled ? 'w-[95%]' : 'w-[90%]'
      } max-w-7xl`}
    >
      <div 
        className={`rounded-2xl backdrop-blur-md border border-white/10 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[rgba(113,141,169,0.95)] shadow-lg' 
            : 'bg-[rgba(113,141,169,0.85)] shadow-md'
        }`}
      >
        <div className="px-6 py-5 flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="The Faulkner Group - Healthcare Advisory Excellence" 
              className="h-12 w-auto md:h-14 transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-10">
            <a 
              href="#mission" 
              className="text-white font-playfair font-medium text-base tracking-[0.03em] relative group transition-colors duration-300"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a 
              href="#approach" 
              className="text-white font-playfair font-medium text-base tracking-[0.03em] relative group transition-colors duration-300"
            >
              Our Approach
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a 
              href="#results" 
              className="text-white font-playfair font-medium text-base tracking-[0.03em] relative group transition-colors duration-300"
            >
              Results
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a 
              href="#contact" 
              className="text-white font-playfair font-medium text-base tracking-[0.03em] relative group transition-colors duration-300"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
