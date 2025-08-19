import React from 'react';
import { Heart } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">{portfolioConfig.personal.name}</h3>
            <p className="text-gray-400 text-sm">{portfolioConfig.personal.title}</p>
          </div>
          
          <div className="flex items-center text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" />
            <span>© {currentYear}</span>
          </div>
          
          <div className="text-xs text-gray-500 text-center">
            Built with React, TypeScript, and Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;