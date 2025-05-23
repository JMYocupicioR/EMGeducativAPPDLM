import React from 'react';
import { useSettingsStore } from '../../../stores/settingsStore';
import { EMGBasics } from './emg/EMGBasics';

interface EMGTechniquesProps {
  subsection: string | null;
}

export function EMGTechniques({ subsection }: EMGTechniquesProps) {
  const { isDarkMode } = useSettingsStore();
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  if (!subsection) {
    return (
      <div>
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
          Técnicas EMG
        </h2>
        <p className={`mb-4 ${subtextColor}`}>
          Guías detalladas sobre técnicas electromiográficas y su aplicación clínica.
          Seleccione una categoría específica del menú para obtener información detallada.
        </p>
      </div>
    );
  }

  return (
    <div>
      {subsection === 'emg-basics' && <EMGBasics />}
      {subsection === 'spontaneous-activity' && (
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
            Actividad Espontánea
          </h2>
          <p className={subtextColor}>
            Contenido detallado en desarrollo...
          </p>
        </div>
      )}
      {subsection === 'motor-unit-potentials' && (
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
            Potenciales de Unidad Motora
          </h2>
          <p className={subtextColor}>
            Contenido detallado en desarrollo...
          </p>
        </div>
      )}
      {subsection === 'interference-pattern' && (
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
            Patrón de Interferencia
          </h2>
          <p className={subtextColor}>
            Contenido detallado en desarrollo...
          </p>
        </div>
      )}
    </div>
  );
}