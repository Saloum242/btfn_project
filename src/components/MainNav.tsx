import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Home } from 'lucide-react';

const MainNav: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <Lightbulb className="w-8 h-8" />
            <span className="text-2xl font-bold">BTFN</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-orange-200 flex items-center gap-2">
            <Home size={20} />
            <span>Accueil</span>
          </Link>
          {/* <Link to="/about" className="hover:text-orange-200">À propos</Link>
          <Link to="/experts" className="hover:text-orange-200">Experts</Link>
          <Link to="#partners" className="hover:text-orange-200">Partenaires</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;