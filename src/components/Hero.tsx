import React from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={portfolioConfig.personal.avatar}
              alt={portfolioConfig.personal.name}
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg ring-4 ring-white"
            />
          </div>
          
          <p className="text-lg text-gray-600 mb-2 animate-fade-in">
            {portfolioConfig.hero.greeting}
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            <span className="text-blue-600">{portfolioConfig.personal.name.split(' ')[0]}</span>{' '}
            <span className="text-gray-900">{portfolioConfig.personal.name.split(' ')[1]}</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-6 animate-fade-in-up animation-delay-200">
            {portfolioConfig.hero.headline}
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            {portfolioConfig.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {portfolioConfig.hero.ctaText}
              <ExternalLink className="ml-2 w-5 h-5" />
            </button>
            
            {portfolioConfig.personal.resumeUrl && (
              <a
                href={portfolioConfig.personal.resumeUrl}
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
              >
                Download Resume
                <Download className="ml-2 w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToProjects}
          className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;