import React, { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, languages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="bg-white shadow-lg rounded-full p-3 flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none"
          aria-label="Select language"
        >
          <Globe className="w-6 h-6 text-blue-600" />
        </button>
        
        {isOpen && (
          <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-xl p-2 min-w-[120px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                  language === lang.code 
                    ? 'bg-blue-100 text-blue-600 font-medium' 
                    : 'hover:bg-gray-100 text-gray-800'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;