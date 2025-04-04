import React from 'react';
import { useSettingsStore } from '../../../stores/settingsStore';

interface ReferenceProps {
  subsection: string | null;
}

export function Reference({ subsection }: ReferenceProps) {
  const { isDarkMode } = useSettingsStore();
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  if (!subsection) {
    return (
      <div>
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
          Referencias
        </h2>
        <p className={`mb-4 ${subtextColor}`}>
          Material de referencia y recursos adicionales para profundizar en el conocimiento.
          Seleccione una categoría específica del menú para acceder a los recursos.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
        {subsection === 'guidelines' && 'Guías Internacionales'}
        {subsection === 'articles' && 'Artículos Científicos'}
        {subsection === 'books' && 'Libros Recomendados'}
      </h2>
      <p className={subtextColor}>
        Contenido detallado en desarrollo...
      </p>
    </div>
  );
}