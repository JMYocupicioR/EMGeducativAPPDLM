import React from 'react';
import { useSettingsStore } from '../../stores/settingsStore';
import { useTranslationStore } from '../../stores/translationStore';
import { useNavigationStore } from '../../stores/navigationStore';
import { BookOpen, Activity, Brain, Library } from 'lucide-react';

export function WelcomeScreen() {
  const { isDarkMode } = useSettingsStore();
  const { t } = useTranslationStore();
  const { setActiveSection, setActiveSubsection } = useNavigationStore();
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  const features = [
    {
      icon: BookOpen,
      title: t('sections.nerve-conduction'),
      description: t('features.nerveConduction'),
      onClick: () => {
        setActiveSection('nerve-conduction');
        setActiveSubsection('upper-limb-motor');
      }
    },
    {
      icon: Activity,
      title: t('sections.emg-techniques'),
      description: t('features.emgTechniques'),
      onClick: () => {
        setActiveSection('emg-techniques');
        setActiveSubsection('emg-basics');
      }
    },
    {
      icon: Brain,
      title: t('sections.clinical-cases'),
      description: t('features.clinicalCases'),
      onClick: () => {
        setActiveSection('clinical-cases');
        setActiveSubsection('carpal-tunnel');
      }
    },
    {
      icon: Library,
      title: t('sections.reference'),
      description: t('features.references'),
      onClick: () => {
        setActiveSection('reference');
        setActiveSubsection('guidelines');
      }
    }
  ];

  return (
    <div>
      <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
        {t('welcome.title')}
      </h2>
      <p className={`mb-6 ${subtextColor}`}>
        {t('welcome.description')}
      </p>
      
      <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg mb-8`}>
        <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
          {t('welcome.howToUse')}
        </h3>
        <ul className={`list-disc list-inside ${subtextColor} space-y-1`}>
          {t('welcome.instructions').split('\n').map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <button
              key={index}
              onClick={feature.onClick}
              className={`w-full text-left ${
                isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
              } p-4 rounded-lg transition-colors`}
            >
              <div className="flex items-start space-x-3">
                <Icon className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <h3 className={`text-lg font-semibold mb-1 ${textColor}`}>
                    {feature.title}
                  </h3>
                  <p className={subtextColor}>
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