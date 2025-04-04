import React from 'react';
import { useSettingsStore } from '../../../stores/settingsStore';
import { useTranslationStore } from '../../../stores/translationStore';
import { UpperLimbMotor } from './nerveConduction/UpperLimbMotor';

interface NerveConductionProps {
  subsection: string | null;
}

export function NerveConduction({ subsection }: NerveConductionProps) {
  const { isDarkMode } = useSettingsStore();
  const { t } = useTranslationStore();
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  if (!subsection) {
    return (
      <div>
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
          {t('sections.nerve-conduction')}
        </h2>
        <p className={`mb-4 ${subtextColor}`}>
          Los estudios de conducción nerviosa son una herramienta diagnóstica fundamental
          en la evaluación de la función nerviosa periférica. Seleccione una categoría
          específica del menú para obtener información detallada.
        </p>
      </div>
    );
  }

  return (
    <div>
      {subsection === 'upper-limb-motor' && <UpperLimbMotor />}
      {subsection === 'upper-limb-sensory' && (
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
            {t('subsections.upper-limb-sensory')}
          </h2>
          <p className={subtextColor}>
            Contenido detallado en desarrollo...
          </p>
        </div>
      )}
      {subsection === 'lower-limb-motor' && (
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
            {t('subsections.lower-limb-motor')}
          </h2>
          <p className={subtextColor}>
            Contenido detallado en desarrollo...
          </p>
        </div>
      )}
      {subsection === 'lower-limb-sensory' && (
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
            {t('subsections.lower-limb-sensory')}
          </h2>
          <p className={subtextColor}>
            Contenido detallado en desarrollo...
          </p>
        </div>
      )}
    </div>
  );
}