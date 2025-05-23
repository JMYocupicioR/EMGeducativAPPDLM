import React from 'react';
import { useSettingsStore } from '../../stores/settingsStore';
import { useTranslationStore } from '../../stores/translationStore';
import { useNavigationStore } from '../../stores/navigationStore';
import { BookOpen, Activity, Brain, Library, Stethoscope } from 'lucide-react';

export function WelcomeScreen() {
  const { isDarkMode } = useSettingsStore();
  const { t } = useTranslationStore();
  const { navigateTo } = useNavigationStore();
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  const features = [
    {
      icon: Stethoscope,
      title: t('sections.nerves'),
      description: t('features.nerves'),
      onClick: () => navigateTo('nerves', 'upper-limb-nerves')
    },
    {
      icon: BookOpen,
      title: t('sections.nerve-conduction'),
      description: t('features.nerveConduction'),
      onClick: () => navigateTo('nerve-conduction', 'upper-limb-motor')
    },
    {
      icon: Activity,
      title: t('sections.emg-techniques'),
      description: t('features.emgTechniques'),
      onClick: () => navigateTo('emg-techniques', 'emg-basics')
    },
    {
      icon: Brain,
      title: t('sections.clinical-cases'),
      description: t('features.clinicalCases'),
      onClick: () => navigateTo('clinical-cases', 'carpal-tunnel')
    },
    {
      icon: Library,
      title: t('sections.reference'),
      description: t('features.references'),
      onClick: () => navigateTo('reference', 'guidelines')
    }
  ];

  return (
    <div>
      <h2 className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${textColor}`}>
        {t('welcome.title')}
      </h2>
      <p className={`text-sm md:text-base mb-4 md:mb-6 ${subtextColor}`}>
        {t('welcome.description')}
      </p>
      
      <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} p-3 md:p-4 rounded-lg mb-6 md:mb-8`}>
        <h3 className={`text-base md:text-lg font-semibold mb-2 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
          {t('welcome.howToUse')}
        </h3>
        <ul className={`list-disc list-inside ${subtextColor} space-y-1 text-sm md:text-base`}>
          {t('welcome.instructions').split('\n').map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <button
              key={index}
              onClick={feature.onClick}
              className={`w-full text-left ${
                isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
              } p-3 md:p-4 rounded-lg transition-colors`}
            >
              <div className="flex items-start space-x-2 md:space-x-3">
                <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <h3 className={`text-base md:text-lg font-semibold mb-1 ${textColor}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm md:text-base ${subtextColor}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}