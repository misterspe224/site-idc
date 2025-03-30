
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  onClick?: () => void;
}

const ProjectCard = ({ 
  title, 
  category, 
  location, 
  image, 
  description,
  onClick 
}: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="project-card group cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="project-overlay">
        <div className="bg-idc-gold text-idc-navy px-2 py-1 text-xs font-medium mb-2 rounded">
          {category}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-2 opacity-80">{location}</p>
        <p className="text-sm text-center">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
