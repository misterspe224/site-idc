
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({ quote, name, title, company, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative">
      <Quote className="absolute top-4 left-4 h-8 w-8 text-idc-gold opacity-20" />
      <div className="pt-6">
        <p className="text-gray-700 mb-6 italic">{quote}</p>
        <div className="flex items-center">
          {image && (
            <div className="mr-4">
              <img 
                src={image} 
                alt={name} 
                className="h-12 w-12 rounded-full object-cover" 
              />
            </div>
          )}
          <div>
            <h4 className="font-semibold text-idc-navy">{name}</h4>
            <p className="text-sm text-gray-500">{title}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
