import React from 'react';
import { useSettingsStore } from '../../../stores/settingsStore';

interface SpecialStudiesProps {
  subsection: string | null;
}

export function SpecialStudies({ subsection }: SpecialStudiesProps) {
  const { isDarkMode } = useSettingsStore();
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  if (!subsection) {
    return (
      <div>
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
          Estudios Especiales
        </h2>
        <p className={`mb-4 ${subtextColor}`}>
          Técnicas avanzadas y estudios especializados en neurofisiología.
          Seleccione una categoría específica del menú para obtener información detallada.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
        {subsection === 'f-waves' && 'Ondas F'}
        {subsection === 'h-reflex' && 'Reflejo H'}
        {subsection === 'repetitive-stimulation' && 'Estimulación Repetitiva'}
      </h2>
      <p className={subtextColor}>
        Contenido detallado en desarrollo...
      </p>
    </div>
  );
}