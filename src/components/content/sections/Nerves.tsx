import React from 'react';
import { useSettingsStore } from '../../../stores/settingsStore';
import { useTranslationStore } from '../../../stores/translationStore';
import { UpperLimbNerves } from './nerves/UpperLimbNerves';
import { LowerLimbNerves } from './nerves/LowerLimbNerves';
import { CranialNerves } from './nerves/CranialNerves';

interface NervesProps {
  subsection: string | null;
}

export function Nerves({ subsection }: NervesProps) {
  const { isDarkMode } = useSettingsStore();
  const { t } = useTranslationStore();
  
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  if (!subsection) {
    return (
      <div>
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
          {t('nerves.title')}
        </h2>
        <p className={`mb-6 ${subtextColor}`}>
          {t('nerves.description')}
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div 
            onClick={() => window.location.hash = '#nerves/upper-limb-nerves'} 
            className={`cursor-pointer p-6 rounded-lg shadow-md transition-colors ${
              isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>
              {t('subsections.upper-limb-nerves')}
            </h3>
            <p className={subtextColor}>
              Mediano, Ulnar, Radial, Musculocutáneo y otros nervios del miembro superior.
            </p>
          </div>
          
          <div 
            onClick={() => window.location.hash = '#nerves/lower-limb-nerves'} 
            className={`cursor-pointer p-6 rounded-lg shadow-md transition-colors ${
              isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>
              {t('subsections.lower-limb-nerves')}
            </h3>
            <p className={subtextColor}>
              Tibial, Peroneo, Femoral, Sural y otros nervios del miembro inferior.
            </p>
          </div>
          
          <div 
            onClick={() => window.location.hash = '#nerves/cranial-nerves'} 
            className={`cursor-pointer p-6 rounded-lg shadow-md transition-colors ${
              isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>
              {t('subsections.cranial-nerves')}
            </h3>
            <p className={subtextColor}>
              Facial, Trigémino, Accesorio Espinal y otros nervios craneales estudiados en electrodiagnóstico.
            </p>
          </div>
        </div>
      </div>
    );
  }

  switch (subsection) {
    case 'upper-limb-nerves':
      return <UpperLimbNerves />;
    case 'lower-limb-nerves':
      return <LowerLimbNerves />;
    case 'cranial-nerves':
      return <CranialNerves />;
    default:
      return <div className={textColor}>Subsection not found</div>;
  }
}