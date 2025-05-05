import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-blue-400 mb-4">Digirona</div>
            <p className="text-gray-400 max-w-md">
              {t('about.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.services')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.seo.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.social.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.web.title')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Email: info@digirona.com</span>
              </li>
              <li className="text-gray-400">
                <span className="block">Tel: +34 972 123 456</span>
              </li>
              <li className="text-gray-400">
                <span className="block">Girona, Catalunya</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            {t('footer.rights')}
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.cookies')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;