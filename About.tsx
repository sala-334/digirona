import React from 'react';
import { Users, Target, Award, CheckCircle } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    { 
      icon: <Users className="w-6 h-6 text-blue-500" />, 
      title: t('about.values.value1') 
    },
    { 
      icon: <CheckCircle className="w-6 h-6 text-indigo-500" />, 
      title: t('about.values.value2') 
    },
    { 
      icon: <Award className="w-6 h-6 text-purple-500" />, 
      title: t('about.values.value3') 
    },
    { 
      icon: <Target className="w-6 h-6 text-pink-500" />, 
      title: t('about.values.value4') 
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-xl transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digirona Team" 
                className="relative rounded-xl shadow-lg w-full h-full object-cover z-10"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 mb-8">
              {t('about.description')}
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.mission.description')}
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('about.vision.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.vision.description')}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('about.values.title')}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="mr-3">{value.icon}</div>
                    <div className="font-medium">{value.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;