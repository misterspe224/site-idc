
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  buttonText = "Découvrir nos réalisations", 
  buttonLink = "/projects" 
}: HeroProps) => {
  return (
    <div className="hero-section">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="hero-overlay" />
      <div className="hero-content animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{subtitle}</p>
        {buttonText && (
          <Link to={buttonLink} className="inline-flex items-center bg-idc-gold text-idc-navy px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200">
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
