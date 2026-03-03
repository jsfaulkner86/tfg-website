import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LinkedInIcon from "@/components/LinkedInIcon";
import logo from "@/assets/faulkner-logo.png";
import backtableIcon from "@/assets/backtable-obgyn-icon.png";

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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[92%] md:w-[calc(100%-2rem)] max-w-none ${
        isScrolled ? 'md:w-[calc(100%-1rem)]' : ''
      }`}
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
            <a href="/" className="flex items-center">
              <img 
                src={logo} 
                alt="The Faulkner Group - Clinical Strategy for Health Tech" 
                className="h-20 w-auto md:h-24 transition-transform duration-300 hover:scale-105"
                loading="eager"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                }}
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <a 
              href="/for-womens-health" 
              className="text-white font-playfair font-medium text-lg tracking-wide relative group transition-all duration-300 py-1"
            >
              For Women's Health
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
            </a>
            <a 
              href="/#mission" 
              className="text-white font-playfair font-medium text-lg tracking-wide relative group transition-all duration-300 py-1"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
            </a>
            <a 
              href="/#approach" 
              className="text-white font-playfair font-medium text-lg tracking-wide relative group transition-all duration-300 py-1"
            >
              Our Approach
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
            </a>
            <div className="relative group py-1">
              <a 
                href="/services" 
                className="text-white font-playfair font-medium text-lg tracking-wide relative transition-all duration-300 flex items-center gap-1"
              >
                Services
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 transition-transform duration-300 group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
              </a>
              {/* Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div 
                  className="rounded-lg border border-white/10 py-2 min-w-[260px]"
                  style={{
                    background: 'rgba(113,141,169,0.97)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  }}
                >
                  <a 
                    href="/clinical-clarity-session" 
                    className="block px-5 py-3 text-white font-playfair text-base tracking-wide hover:bg-white/10 transition-all duration-200"
                  >
                    Clinical Clarity Session
                  </a>
                </div>
              </div>
            </div>
            <a 
              href="/#contact" 
              className="text-white font-playfair font-medium text-lg tracking-wide relative group transition-all duration-300 py-1"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DA73] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
            </a>
            <div className="flex items-center gap-1 ml-2">
              <a href="https://www.linkedin.com/company/faulkner-group/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/15 transition-all duration-300" aria-label="The Faulkner Group LinkedIn">
                <LinkedInIcon size={18} color="#F3DA73" />
              </a>
              <a href="https://www.youtube.com/@YourHealthcareITexpert" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/15 transition-all duration-300" aria-label="The Faulkner Group YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="#F3DA73"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://podcasts.apple.com/us/podcast/smarter-systems-better-care-podcast/id1835554141" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/15 transition-all duration-300" aria-label="Smarter Systems Better Care Podcast">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="#F3DA73"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 0 1 8.4 8.4c0 2.47-1.065 4.688-2.76 6.228a.725.725 0 0 1-.476.18.72.72 0 0 1-.716-.72c0-.212.092-.404.236-.54A6.96 6.96 0 0 0 18.96 12 6.96 6.96 0 0 0 12 5.04 6.96 6.96 0 0 0 5.04 12a6.96 6.96 0 0 0 2.276 5.148.72.72 0 0 1 .236.54.72.72 0 0 1-.716.72.725.725 0 0 1-.476-.18A8.363 8.363 0 0 1 3.6 12 8.4 8.4 0 0 1 12 3.6zm0 3.6A4.8 4.8 0 0 1 16.8 12c0 1.42-.62 2.696-1.6 3.572a.72.72 0 0 1-1.196-.54.72.72 0 0 1 .248-.544A3.36 3.36 0 0 0 15.36 12 3.36 3.36 0 0 0 12 8.64 3.36 3.36 0 0 0 8.64 12c0 .952.396 1.812 1.032 2.424a.72.72 0 0 1-.948 1.084A4.764 4.764 0 0 1 7.2 12 4.8 4.8 0 0 1 12 7.2zm0 3.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-.72 3.48h1.44l.6 4.44a.72.72 0 0 1-.6.84h-1.44a.72.72 0 0 1-.6-.84l.6-4.44z"/></svg>
              </a>
              <a href="https://open.spotify.com/show/1vUfjTssusiFxzcjV80sDH?si=151dc41f2a2341f8" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/15 transition-all duration-300" aria-label="Podcast on Spotify">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="#F3DA73"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
              </a>
              <a href="https://www.backtable.com/shows/obgyn" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/15 transition-all duration-300" aria-label="BackTable OB/GYN Podcast">
                <img src={backtableIcon} alt="BackTable OB/GYN" className="h-[24px] w-auto rounded-sm border border-[#F3DA73] p-[1px]" />
              </a>
            </div>
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
          className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-lg backdrop-blur-xl border border-white/10 overflow-y-auto animate-fade-in z-50"
          style={{
            background: 'rgba(113,141,169,0.98)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            maxHeight: 'calc(100vh - 160px - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px))',
          }}
        >
          <nav className="flex flex-col py-2 pb-4">
            <a 
              href="/for-womens-health"
              onClick={handleNavClick}
              className="text-white font-playfair font-medium text-lg tracking-wide px-6 py-4 hover:bg-white/10 transition-all duration-300 border-b border-white/10"
            >
              For Women's Health
            </a>
            <a 
              href="/#mission"
              onClick={handleNavClick}
              className="text-white font-playfair font-medium text-lg tracking-wide px-6 py-4 hover:bg-white/10 transition-all duration-300 border-b border-white/10"
            >
              About
            </a>
            <a 
              href="/#approach"
              onClick={handleNavClick}
              className="text-white font-playfair font-medium text-lg tracking-wide px-6 py-4 hover:bg-white/10 transition-all duration-300 border-b border-white/10"
            >
              Our Approach
            </a>
            <a 
              href="/services"
              onClick={handleNavClick}
              className="text-white font-playfair font-medium text-lg tracking-wide px-6 py-4 hover:bg-white/10 transition-all duration-300 border-b border-white/10"
            >
              Services
            </a>
            <a 
              href="/clinical-clarity-session"
              onClick={handleNavClick}
              className="text-white/90 font-playfair text-base tracking-wide pl-10 pr-6 py-3 hover:bg-white/10 transition-all duration-300 border-b border-white/10"
            >
              — Clinical Clarity Session
            </a>
            <a 
              href="/#contact"
              onClick={handleNavClick}
              className="text-white font-playfair font-medium text-lg tracking-wide px-6 py-4 hover:bg-white/10 transition-all duration-300 border-b border-white/10"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/company/faulkner-group/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="flex items-center gap-2 px-6 py-4 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10"
            >
              <LinkedInIcon size={18} color="#F3DA73" />
              <span className="text-sm font-inter">LinkedIn</span>
            </a>
            <a
              href="https://www.youtube.com/@YourHealthcareITexpert"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="flex items-center gap-2 px-6 py-4 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="#F3DA73">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-sm font-inter">YouTube</span>
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/smarter-systems-better-care-podcast/id1835554141"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="flex items-center gap-2 px-6 py-4 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="#F3DA73">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 0 1 8.4 8.4c0 2.47-1.065 4.688-2.76 6.228a.725.725 0 0 1-.476.18.72.72 0 0 1-.716-.72c0-.212.092-.404.236-.54A6.96 6.96 0 0 0 18.96 12 6.96 6.96 0 0 0 12 5.04 6.96 6.96 0 0 0 5.04 12a6.96 6.96 0 0 0 2.276 5.148.72.72 0 0 1 .236.54.72.72 0 0 1-.716.72.725.725 0 0 1-.476-.18A8.363 8.363 0 0 1 3.6 12 8.4 8.4 0 0 1 12 3.6zm0 3.6A4.8 4.8 0 0 1 16.8 12c0 1.42-.62 2.696-1.6 3.572a.72.72 0 0 1-1.196-.54.72.72 0 0 1 .248-.544A3.36 3.36 0 0 0 15.36 12 3.36 3.36 0 0 0 12 8.64 3.36 3.36 0 0 0 8.64 12c0 .952.396 1.812 1.032 2.424a.72.72 0 0 1-.948 1.084A4.764 4.764 0 0 1 7.2 12 4.8 4.8 0 0 1 12 7.2zm0 3.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-.72 3.48h1.44l.6 4.44a.72.72 0 0 1-.6.84h-1.44a.72.72 0 0 1-.6-.84l.6-4.44z"/>
              </svg>
              <span className="text-sm font-inter">Podcast</span>
            </a>
            <a
              href="https://open.spotify.com/show/1vUfjTssusiFxzcjV80sDH?si=151dc41f2a2341f8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="flex items-center gap-2 px-6 py-4 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="#F3DA73">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span className="text-sm font-inter">Spotify</span>
            </a>
            <a
              href="https://www.backtable.com/shows/obgyn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="flex items-center gap-2 px-6 py-4 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <img src={backtableIcon} alt="BackTable OB/GYN" className="h-[24px] w-auto rounded-sm border border-[#F3DA73] p-[1px]" />
              <span className="text-sm font-inter">BackTable OB/GYN</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
