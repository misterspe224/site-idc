
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-idc-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/648d338c-f4a3-4162-93c8-a7b9101a7076.png" 
              alt="IDC Consulting SARL Logo" 
              className="h-16 invert" 
            />
            <p className="mt-4 text-sm text-gray-300">
              IDC Consulting SARL est un acteur clé dans le secteur du BTP en Afrique de l'Ouest, 
              offrant des solutions innovantes et durables.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-idc-gold">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-idc-gold transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-idc-gold transition-colors">À Propos</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-idc-gold transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-idc-gold transition-colors">Réalisations</Link></li>
              <li><Link to="/commitments" className="text-gray-300 hover:text-idc-gold transition-colors">Engagements</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-idc-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-idc-gold">Nos Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-idc-gold transition-colors">Bâtiments</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-idc-gold transition-colors">Infrastructures Routières</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-idc-gold transition-colors">Infrastructures Agricoles</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-idc-gold transition-colors">Génie Civil</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-idc-gold transition-colors">Conseils et Expertises</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-idc-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-idc-gold shrink-0 mt-0.5" />
                <span className="text-sm">
                  Conakry, Guinée<br />
                  Freetown, Sierra Leone
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-idc-gold" />
                <span className="text-sm">+224 12 345 678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-idc-gold" />
                <a href="mailto:contact@idcconsulting.com" className="text-sm hover:text-idc-gold transition-colors">
                  contact@idcconsulting.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} IDC Consulting SARL. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-idc-gold transition-colors">
                  Mentions Légales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-idc-gold transition-colors">
                  Politique de Confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
