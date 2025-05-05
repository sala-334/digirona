import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const pricingPlans = [
    {
      title: t('pricing.seo.title'),
      price: t('pricing.seo.price'),
      monthly: t('pricing.seo.monthly'),
      features: [
        t('pricing.seo.feature1'),
        t('pricing.seo.feature2'),
        t('pricing.seo.feature3'),
        t('pricing.seo.feature4')
      ],
      highlighted: false,
      color: 'blue'
    },
    {
      title: t('pricing.social.title'),
      price: t('pricing.social.price'),
      monthly: t('pricing.social.monthly'),
      features: [
        t('pricing.social.feature1'),
        t('pricing.social.feature2'),
        t('pricing.social.feature3'),
        t('pricing.social.feature4')
      ],
      highlighted: true,
      color: 'indigo'
    },
    {
      title: t('pricing.web.title'),
      price: t('pricing.web.price'),
      monthly: t('pricing.web.monthly'),
      features: [
        t('pricing.web.feature1'),
        t('pricing.web.feature2'),
        t('pricing.web.feature3'),
        t('pricing.web.feature4')
      ],
      highlighted: false,
      color: 'purple'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const colorClasses = {
              blue: 'bg-blue-500 hover:bg-blue-600',
              indigo: 'bg-indigo-500 hover:bg-indigo-600',
              purple: 'bg-purple-500 hover:bg-purple-600'
            };
            
            return (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                  plan.highlighted 
                    ? 'bg-white shadow-xl border-2 border-indigo-500' 
                    : 'bg-white shadow-lg'
                }`}
              >
                <div className={`p-6 ${plan.highlighted ? 'bg-indigo-50' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.title}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">/{t('pricing.quarterly')}</span>
                  </div>
                  <p className="text-gray-500 mb-6">
                    {plan.monthly}/{t('pricing.month')}
                  </p>
                  <a 
                    href="#contact" 
                    className={`block w-full py-3 px-4 rounded-md text-white text-center font-medium ${
                      colorClasses[plan.color as keyof typeof colorClasses]
                    } transition-colors duration-300`}
                  >
                    {t('hero.cta')}
                  </a>
                </div>
                <div className="p-6 bg-gray-50">
                  <p className="font-medium text-gray-700 mb-4">
                    {t('pricing.features')}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 max-w-4xl mx-auto shadow-lg">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">{t('pricing.promo.title')}</h3>
            <p className="text-lg mb-6">{t('pricing.promo.description')}</p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              {t('pricing.promo.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;