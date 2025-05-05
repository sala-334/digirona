import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">Digirona</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-blue-600 transition-colors">
              {t('nav.home')}
            </a>
            <a href="#services" className="text-gray-800 hover:text-blue-600 transition-colors">
              {t('nav.services')}
            </a>
            <a href="#pricing" className="text-gray-800 hover:text-blue-600 transition-colors">
              {t('nav.pricing')}
            </a>
            <a href="#testimonials" className="text-gray-800 hover:text-blue-600 transition-colors">
              {t('nav.testimonials')}
            </a>
            <a href="#about" className="text-gray-800 hover:text-blue-600 transition-colors">
              {t('nav.about')}
            </a>
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              {t('nav.contact')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out pt-20`}
      >
        <div className="flex flex-col items-center space-y-6 p-4">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)}
            className="text-xl text-gray-800 hover:text-blue-600 transition-colors"
          >
            {t('nav.home')}
          </a>
          <a 
            href="#services" 
            onClick={() => setIsOpen(false)}
            className="text-xl text-gray-800 hover:text-blue-600 transition-colors"
          >
            {t('nav.services')}
          </a>
          <a 
            href="#pricing" 
            onClick={() => setIsOpen(false)}
            className="text-xl text-gray-800 hover:text-blue-600 transition-colors"
          >
            {t('nav.pricing')}
          </a>
          <a 
            href="#testimonials" 
            onClick={() => setIsOpen(false)}
            className="text-xl text-gray-800 hover:text-blue-600 transition-colors"
          >
            {t('nav.testimonials')}
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-xl text-gray-800 hover:text-blue-600 transition-colors"
          >
            {t('nav.about')}
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-xl"
          >
            {t('nav.contact')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;