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
      nerve: t('nerveConduction.upperLimbMotor.median'),
      stimulationSites: [
        t('nerveConduction.upperLimbMotor.stimulationSites.wrist'),
        t('nerveConduction.upperLimbMotor.stimulationSites.antecubital'),
        t('nerveConduction.upperLimbMotor.stimulationSites.erb')
      ],
      recordingSite: t('nerveConduction.upperLimbMotor.recordingSites.apb'),
      normalValues: {
        latency: t('nerveConduction.upperLimbMotor.normalValues.median.latency'),
        amplitude: t('nerveConduction.upperLimbMotor.normalValues.median.amplitude'),
        velocity: t('nerveConduction.upperLimbMotor.normalValues.median.velocity')
      },
      technique: t('nerveConduction.upperLimbMotor.technique.median'),
      image: 'https://static.wixstatic.com/media/fc5d1a_a6275d4d6d9e4b0392832a119e447b66~mv2.png'
    },
    {
      nerve: t('nerveConduction.upperLimbMotor.ulnar'),
      stimulationSites: [
        t('nerveConduction.upperLimbMotor.stimulationSites.wrist'),
        t('nerveConduction.upperLimbMotor.stimulationSites.belowElbow'),
        t('nerveConduction.upperLimbMotor.stimulationSites.aboveElbow'),
        t('nerveConduction.upperLimbMotor.stimulationSites.axilla')
      ],
      recordingSite: t('nerveConduction.upperLimbMotor.recordingSites.adm'),
      normalValues: {
        latency: t('nerveConduction.upperLimbMotor.normalValues.ulnar.latency'),
        amplitude: t('nerveConduction.upperLimbMotor.normalValues.ulnar.amplitude'),
        velocity: t('nerveConduction.upperLimbMotor.normalValues.ulnar.velocity')
      },
      technique: t('nerveConduction.upperLimbMotor.technique.ulnar'),
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
          {t('subsections.upper-limb-motor')}
        </h2>
        <p className={`mb-6 ${subtextColor}`}>
          {t('nerveConduction.upperLimbMotor.description')}
        </p>
      </div>

      {nerveStudies.map((study, index) => (
        <div key={index} className={`border ${borderColor} rounded-lg overflow-hidden`}>
          <div className="p-6">
            <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>
              {t('nerveConduction.upperLimbMotor.nerveTitle', { nerve: study.nerve })}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className={`font-medium mb-2 ${textColor}`}>{t('nerveConduction.upperLimbMotor.stimulationSitesTitle')}</h4>
                <ul className={`list-disc list-inside ${subtextColor}`}>
                  {study.stimulationSites.map((site, idx) => (
                    <li key={idx}>{site}</li>
                  ))}
                </ul>

                <h4 className={`font-medium mt-4 mb-2 ${textColor}`}>{t('nerveConduction.upperLimbMotor.recordingSiteTitle')}</h4>
                <p className={subtextColor}>{study.recordingSite}</p>

                <h4 className={`font-medium mt-4 mb-2 ${textColor}`}>{t('nerveConduction.upperLimbMotor.techniqueTitle')}</h4>
                <p className={subtextColor}>{study.technique}</p>
              </div>

              <div className="flex flex-col">
                <div className="mb-6">
                  <h4 className={`font-medium mb-2 ${textColor}`}>{t('nerveConduction.upperLimbMotor.normalValuesTitle')}</h4>
                  <table className="w-full border-collapse">
                    <thead className={tableHeaderBg}>
                      <tr>
                        <th className={`px-4 py-2 text-left ${textColor} border ${borderColor}`}>{t('nerveConduction.upperLimbMotor.parameter')}</th>
                        <th className={`px-4 py-2 text-left ${textColor} border ${borderColor}`}>{t('nerveConduction.upperLimbMotor.value')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={tableRowHoverBg}>
                        <td className={`px-4 py-2 border ${borderColor}`}>{t('nerveConduction.upperLimbMotor.distalLatency')}</td>
                        <td className={`px-4 py-2 border ${borderColor}`}>{study.normalValues.latency}</td>
                      </tr>
                      <tr className={tableRowHoverBg}>
                        <td className={`px-4 py-2 border ${borderColor}`}>{t('nerveConduction.upperLimbMotor.cmapAmplitude')}</td>
                        <td className={`px-4 py-2 border ${borderColor}`}>{study.normalValues.amplitude}</td>
                      </tr>
                      <tr className={tableRowHoverBg}>
                        <td className={`px-4 py-2 border ${borderColor}`}>{t('nerveConduction.upperLimbMotor.conductionVelocity')}</td>
                        <td className={`px-4 py-2 border ${borderColor}`}>{study.normalValues.velocity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex-1">
                  <h4 className={`font-medium mb-2 ${textColor}`}>{t('nerveConduction.upperLimbMotor.electrodePlacement')}</h4>
                  <div className="relative w-full h-64 md:h-80">
                    <img
                      src={study.image}
                      alt={t('nerveConduction.upperLimbMotor.electrodePlacementAlt', { nerve: study.nerve })}
                      className="absolute inset-0 w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={`bg-blue-500 bg-opacity-10 p-6 rounded-lg mt-8 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
        <h4 className="font-semibold mb-2">{t('nerveConduction.upperLimbMotor.technicalTips')}</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>{t('nerveConduction.upperLimbMotor.tips.temperature')}</li>
          <li>{t('nerveConduction.upperLimbMotor.tips.distance')}</li>
          <li>{t('nerveConduction.upperLimbMotor.tips.submaximal')}</li>
          <li>{t('nerveConduction.upperLimbMotor.tips.block')}</li>
        </ul>
      </div>
    </div>
  );
}