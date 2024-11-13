import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

export default function Navigation() {
  const scrollToExclusives = () => {
    const exclusivesSection = document.getElementById('exclusives-section');
    if (exclusivesSection) {
      exclusivesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Music className="w-8 h-8 text-purple-500" />
            <span className="font-bold text-xl">FMS Vol.2</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={scrollToExclusives}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              MINY Exclusive
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}