import React, { useState } from 'react';
import { useSettingsStore } from '../../../../stores/settingsStore';
import { useTranslationStore } from '../../../../stores/translationStore';
import { lowerLimbNerves, Nerve } from '../../../../data/nervesData';
import { NerveDetail } from './NerveDetail';

export function LowerLimbNerves() {
  const { isDarkMode } = useSettingsStore();
  const { t } = useTranslationStore();
  const [selectedNerve, setSelectedNerve] = useState<Nerve | null>(null);
  
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';
  const cardBg = isDarkMode ? 'bg-gray-700' : 'bg-white';
  const cardHoverBg = isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50';

  return (
    <div>
      <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
        {t('subsections.lower-limb-nerves')}
      </h2>
      
      {selectedNerve ? (
        <div className="mb-6">
          <button
            onClick={() => setSelectedNerve(null)}
            className={`mb-4 px-4 py-2 rounded ${
              isDarkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } transition-colors`}
          >
            ← Volver a la lista
          </button>
          <NerveDetail nerve={selectedNerve} />
        </div>
      ) : (
        <>
          <p className={`mb-6 ${subtextColor}`}>
            Seleccione un nervio de la lista para ver información detallada sobre valores de referencia, técnicas de estudio y consideraciones especiales.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {lowerLimbNerves.map((nerve) => (
              <div
                key={nerve.id}
                onClick={() => setSelectedNerve(nerve)}
                className={`cursor-pointer p-4 rounded-lg border ${borderColor} ${cardBg} ${cardHoverBg} transition-colors`}
              >
                <h3 className={`text-lg font-semibold ${textColor}`}>
                  {nerve.commonName}
                </h3>
                <p className={`text-sm ${subtextColor}`}>
                  {nerve.specificAnatomicalRegion || ''}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {nerve.motorConduction && (
                    <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      Motor
                    </span>
                  )}
                  {nerve.sensoryConduction && (
                    <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Sensitivo
                    </span>
                  )}
                  {nerve.motorConduction?.fWave && (
                    <span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      Onda F
                    </span>
                  )}
                  {nerve.motorConduction?.hReflex && (
                    <span className="px-2 py-1 text-xs rounded bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">
                      Reflejo H
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}