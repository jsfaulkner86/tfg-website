import logo from "@/assets/faulkner-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="The Faulkner Group" 
            className="h-16 w-auto md:h-20 transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#mission" 
            className="text-primary-foreground/90 hover:text-accent transition-colors duration-300 font-medium tracking-wide"
          >
            About
          </a>
          <a 
            href="#approach" 
            className="text-primary-foreground/90 hover:text-accent transition-colors duration-300 font-medium tracking-wide"
          >
            Our Approach
          </a>
          <a 
            href="#results" 
            className="text-primary-foreground/90 hover:text-accent transition-colors duration-300 font-medium tracking-wide"
          >
            Results
          </a>
          <a 
            href="#contact" 
            className="text-primary-foreground/90 hover:text-accent transition-colors duration-300 font-medium tracking-wide"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
