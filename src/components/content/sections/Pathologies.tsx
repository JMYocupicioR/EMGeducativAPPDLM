import React from 'react';
import { useSettingsStore } from '../../../stores/settingsStore';
import { useTranslationStore } from '../../../stores/translationStore';

interface PathologiesProps {
  subsection: string | null;
}

export function Pathologies({ subsection }: PathologiesProps) {
  const { isDarkMode } = useSettingsStore();
  const { t } = useTranslationStore();
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  if (!subsection) {
    return (
      <div>
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
          {t('sections.pathologies')}
        </h2>
        <p className={`mb-4 ${subtextColor}`}>
          Explore los criterios diagnósticos y patrones electrodiagnósticos característicos
          de las principales patologías neuromusculares. Seleccione una categoría específica
          del menú para obtener información detallada.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
        {t(`subsections.${subsection}`)}
      </h2>
      <p className={subtextColor}>
        Contenido detallado en desarrollo...
      </p>
    </div>
  );
}