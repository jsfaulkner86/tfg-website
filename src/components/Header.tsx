import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/faulkner-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

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
              className="h-20 w-auto md:h-24 transition-transform duration-300 hover:scale-105"
              loading="eager"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
              }}
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <a 
              href="#mission" 
              className="text-white font-playfair font-medium text-lg tracking-wide relative group transition-all duration-300 py-1"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
            </a>
            <a 
              href="#approach" 
              className="text-white font-playfair font-medium text-lg tracking-wide relative group transition-all duration-300 py-1"
            >
              Our Approach
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
            </a>
            <a 
              href="#testimonials" 
              className="text-white font-playfair font-medium text-lg tracking-wide relative group transition-all duration-300 py-1"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
            </a>
            <a 
              href="#contact" 
              className="text-white font-playfair font-medium text-lg tracking-wide relative group transition-all duration-300 py-1"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
            style={{ color: '#F3DA73' }}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-lg backdrop-blur-xl border border-white/10 overflow-hidden animate-fade-in z-50"
          style={{
            background: 'rgba(113,141,169,0.98)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <nav className="flex flex-col py-2">
            <a 
              href="#mission"
              onClick={handleNavClick}
              className="text-white font-playfair font-medium text-lg tracking-wide px-6 py-4 hover:bg-white/10 transition-all duration-300 border-b border-white/10"
            >
              About
            </a>
            <a 
              href="#approach"
              onClick={handleNavClick}
              className="text-white font-playfair font-medium text-lg tracking-wide px-6 py-4 hover:bg-white/10 transition-all duration-300 border-b border-white/10"
            >
              Our Approach
            </a>
            <a 
              href="#testimonials"
              onClick={handleNavClick}
              className="text-white font-playfair font-medium text-lg tracking-wide px-6 py-4 hover:bg-white/10 transition-all duration-300 border-b border-white/10"
            >
              Testimonials
            </a>
            <a 
              href="#contact"
              onClick={handleNavClick}
              className="text-white font-playfair font-medium text-lg tracking-wide px-6 py-4 hover:bg-white/10 transition-all duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
