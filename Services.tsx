import React from 'react';
import { Search, BarChart, Globe } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Search className="w-12 h-12 text-blue-500" />,
      title: t('services.seo.title'),
      description: t('services.seo.description'),
      features: [
        t('services.seo.feature1'),
        t('services.seo.feature2'),
        t('services.seo.feature3')
      ]
    },
    {
      icon: <BarChart className="w-12 h-12 text-indigo-500" />,
      title: t('services.social.title'),
      description: t('services.social.description'),
      features: [
        t('services.social.feature1'),
        t('services.social.feature2'),
        t('services.social.feature3')
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: [
        t('services.web.feature1'),
        t('services.web.feature2'),
        t('services.web.feature3')
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="mb-6 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;