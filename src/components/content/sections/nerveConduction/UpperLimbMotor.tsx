import React from 'react';
import { useSettingsStore } from '../../../../stores/settingsStore';
import { useTranslationStore } from '../../../../stores/translationStore';

interface NerveStudyData {
  nerve: string;
  stimulationSites: string[];
  recordingSite: string;
  normalValues: {
    latency: string;
    amplitude: string;
    velocity: string;
  };
  technique: string;
  image: string;
}

export function UpperLimbMotor() {
  const { isDarkMode } = useSettingsStore();
  const { t } = useTranslationStore();
  
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';
  const tableHeaderBg = isDarkMode ? 'bg-gray-700' : 'bg-gray-50';
  const tableRowHoverBg = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50';

  const nerveStudies: NerveStudyData[] = [
    {
      nerve: 'Mediano',
      stimulationSites: ['Muñeca', 'Fosa antecubital', 'Punto de Erb'],
      recordingSite: 'APB (Abductor Pollicis Brevis)',
      normalValues: {
        latency: '≤ 4.4 ms',
        amplitude: '≥ 4 mV',
        velocity: '≥ 50 m/s'
      },
      technique: 'Electrodo activo sobre el vientre muscular del APB, referencia en la articulación metacarpofalángica del pulgar.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
    },
    {
      nerve: 'Ulnar',
      stimulationSites: ['Muñeca', 'Bajo codo', 'Sobre codo', 'Axila'],
      recordingSite: 'ADM (Abductor Digiti Minimi)',
      normalValues: {
        latency: '≤ 3.3 ms',
        amplitude: '≥ 6 mV',
        velocity: '≥ 50 m/s'
      },
      technique: 'Electrodo activo sobre el vientre muscular del ADM, referencia en la articulación metacarpofalángica del 5º dedo.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
          Estudios Motores de Miembro Superior
        </h2>
        <p className={`mb-6 ${subtextColor}`}>
          Los estudios de conducción motora del miembro superior son fundamentales para evaluar la función de los nervios periféricos
          y diagnosticar diversas condiciones neuromusculares. A continuación se presentan los protocolos detallados para los
          principales nervios del miembro superior.
        </p>
      </div>

      {nerveStudies.map((study, index) => (
        <div key={index} className={`border ${borderColor} rounded-lg overflow-hidden`}>
          <div className="p-6">
            <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>
              Nervio {study.nerve}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className={`font-medium mb-2 ${textColor}`}>Sitios de Estimulación</h4>
                <ul className={`list-disc list-inside ${subtextColor}`}>
                  {study.stimulationSites.map((site, idx) => (
                    <li key={idx}>{site}</li>
                  ))}
                </ul>

                <h4 className={`font-medium mt-4 mb-2 ${textColor}`}>Sitio de Registro</h4>
                <p className={subtextColor}>{study.recordingSite}</p>

                <h4 className={`font-medium mt-4 mb-2 ${textColor}`}>Técnica</h4>
                <p className={subtextColor}>{study.technique}</p>
              </div>

              <div>
                <h4 className={`font-medium mb-2 ${textColor}`}>Valores Normales</h4>
                <table className="w-full border-collapse">
                  <thead className={tableHeaderBg}>
                    <tr>
                      <th className={`px-4 py-2 text-left ${textColor} border ${borderColor}`}>Parámetro</th>
                      <th className={`px-4 py-2 text-left ${textColor} border ${borderColor}`}>Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={tableRowHoverBg}>
                      <td className={`px-4 py-2 border ${borderColor}`}>Latencia Distal</td>
                      <td className={`px-4 py-2 border ${borderColor}`}>{study.normalValues.latency}</td>
                    </tr>
                    <tr className={tableRowHoverBg}>
                      <td className={`px-4 py-2 border ${borderColor}`}>Amplitud CMAP</td>
                      <td className={`px-4 py-2 border ${borderColor}`}>{study.normalValues.amplitude}</td>
                    </tr>
                    <tr className={tableRowHoverBg}>
                      <td className={`px-4 py-2 border ${borderColor}`}>Velocidad de Conducción</td>
                      <td className={`px-4 py-2 border ${borderColor}`}>{study.normalValues.velocity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6">
              <img
                src={study.image}
                alt={`Técnica de estudio del nervio ${study.nerve}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}

      <div className={`bg-blue-500 bg-opacity-10 p-6 rounded-lg mt-8 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
        <h4 className="font-semibold mb-2">Consejos Técnicos</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Asegure una temperatura cutánea ≥ 32°C</li>
          <li>Mantenga una distancia mínima de 10 cm entre sitios de estimulación</li>
          <li>Evite la estimulación submáxima</li>
          <li>Verifique la ausencia de bloqueos de conducción</li>
        </ul>
      </div>
    </div>
  );
}