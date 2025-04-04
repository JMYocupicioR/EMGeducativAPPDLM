import React from 'react';
import { useNavigationStore } from '../stores/navigationStore';
import { useSettingsStore } from '../stores/settingsStore';

export function MainContent() {
  const { activeSection } = useNavigationStore();
  const { isDarkMode } = useSettingsStore();

  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  if (!activeSection) {
    return (
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg p-6`}>
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
          Bienvenido a la Herramienta de Referencia EMG
        </h2>
        <p className={`mb-4 ${subtextColor}`}>
          Esta herramienta interactiva proporciona información completa sobre electromiografía (EMG) 
          y estudios de conducción nerviosa (NCS). Utilice el menú de la izquierda para explorar 
          diferentes secciones.
        </p>
        
        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg mb-6`}>
          <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
            Cómo usar esta herramienta:
          </h3>
          <ul className={`list-disc list-inside ${subtextColor}`}>
            <li>Navegue por las categorías usando el menú de la izquierda</li>
            <li>Busque términos específicos usando el cuadro de búsqueda</li>
            <li>Acceda a valores de referencia y guías técnicas</li>
            <li>Explore casos clínicos comunes</li>
          </ul>
        </div>

        <div className={`grid md:grid-cols-2 gap-4`}>
          <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
            <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>
              Estudios de Conducción Nerviosa
            </h3>
            <p className={subtextColor}>
              Valores de referencia normales para latencias, amplitudes y velocidades de conducción.
            </p>
          </div>
          
          <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
            <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>
              Técnicas EMG
            </h3>
            <p className={subtextColor}>
              Guías detalladas para la realización de estudios electromiográficos.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg p-6`}>
      <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
        {activeSection}
      </h2>
      <p className={subtextColor}>
        Seleccione una subsección del menú para ver el contenido detallado.
      </p>
    </div>
  );
}