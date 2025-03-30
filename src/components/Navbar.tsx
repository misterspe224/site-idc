
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/648d338c-f4a3-4162-93c8-a7b9101a7076.png" 
              alt="IDC Consulting SARL Logo" 
              className="h-12 sm:h-16" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="navbar-link">Accueil</Link>
            <Link to="/about" className="navbar-link">À Propos</Link>
            <Link to="/services" className="navbar-link">Services</Link>
            <Link to="/projects" className="navbar-link">Réalisations</Link>
            <Link to="/commitments" className="navbar-link">Engagements</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-idc-navy focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link to="/" className="navbar-link" onClick={toggleMenu}>Accueil</Link>
          <Link to="/about" className="navbar-link" onClick={toggleMenu}>À Propos</Link>
          <Link to="/services" className="navbar-link" onClick={toggleMenu}>Services</Link>
          <Link to="/projects" className="navbar-link" onClick={toggleMenu}>Réalisations</Link>
          <Link to="/commitments" className="navbar-link" onClick={toggleMenu}>Engagements</Link>
          <Link to="/contact" className="navbar-link" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
