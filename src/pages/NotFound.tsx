
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-idc-navy mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-6">Page non trouvée</p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link 
          to="/" 
          className="btn-primary inline-flex items-center"
        >
          Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
