import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fadeIn">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-md">
              {t('hero.subtitle')}
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200"
            >
              {t('hero.cta')}
            </a>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 absolute -top-6 -left-6 animate-blob"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 absolute -bottom-6 -right-6 animate-blob animation-delay-2000"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 absolute top-12 right-12 animate-blob animation-delay-4000"></div>
              <img 
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital Marketing Team" 
                className="relative z-10 rounded-2xl shadow-xl w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;