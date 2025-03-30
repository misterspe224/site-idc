
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  image?: string;
}

const ServiceCard = ({ title, description, icon, link, image }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-idc-gold mr-3">{icon}</div>
          <h3 className="text-xl font-semibold text-idc-navy">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-idc-navy font-medium hover:text-idc-gold transition-colors"
        >
          En savoir plus
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
