import React from 'react';
import { useSettingsStore } from '../../../stores/settingsStore';

interface ClinicalCasesProps {
  subsection: string | null;
}

export function ClinicalCases({ subsection }: ClinicalCasesProps) {
  const { isDarkMode } = useSettingsStore();
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  if (!subsection) {
    return (
      <div>
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
          Casos Clínicos
        </h2>
        <p className={`mb-4 ${subtextColor}`}>
          Casos de estudio y ejemplos prácticos para mejorar sus habilidades diagnósticas.
          Seleccione una categoría específica del menú para ver casos detallados.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
        {subsection === 'carpal-tunnel' && 'Síndrome del Túnel Carpiano'}
        {subsection === 'radiculopathies' && 'Radiculopatías'}
        {subsection === 'polyneuropathies' && 'Polineuropatías'}
      </h2>
      <p className={subtextColor}>
        Contenido detallado en desarrollo...
      </p>
    </div>
  );
}