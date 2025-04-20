import React from 'react';
import { useSettingsStore } from '../../../../stores/settingsStore';
import { useTranslationStore } from '../../../../stores/translationStore';
import { Nerve, NerveReferenceValue } from '../../../../data/nervesData';

interface NerveDetailProps {
  nerve: Nerve;
}

export function NerveDetail({ nerve }: NerveDetailProps) {
  const { isDarkMode } = useSettingsStore();
  const { t } = useTranslationStore();
  
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';
  const sectionBg = isDarkMode ? 'bg-gray-700' : 'bg-white';
  const tableBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-50';
  const tableHeaderBg = isDarkMode ? 'bg-gray-700' : 'bg-gray-100';

  const renderReferenceValue = (label: string, value: NerveReferenceValue) => {
    return (
      <tr className="border-b border-gray-200 dark:border-gray-700">
        <td className="px-4 py-3 font-medium">{label}</td>
        <td className="px-4 py-3">{value.range}</td>
        <td className="px-4 py-3">{value.unit}</td>
        <td className="px-4 py-3 text-sm">{value.notes}</td>
      </tr>
    );
  };

  return (
    <div className={`rounded-lg shadow-lg overflow-hidden ${sectionBg}`}>
      <div className="p-6">
        <h2 className={`text-2xl font-bold mb-2 ${textColor}`}>
          {nerve.commonName}
        </h2>
        {nerve.specificAnatomicalRegion && (
          <p className={`text-lg mb-4 ${subtextColor}`}>
            {nerve.specificAnatomicalRegion}
          </p>
        )}
        
        {/* Motor Conduction Section */}
        {nerve.motorConduction && (
          <div className="mb-8">
            <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>
              {t('nerves.motorConduction')}
            </h3>
            <div className="overflow-x-auto">
              <table className={`w-full border-collapse ${tableBg}`}>
                <thead className={tableHeaderBg}>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className={`px-4 py-3 text-left ${textColor}`}>{t('nerves.latency')}</th>
                    <th className={`px-4 py-3 text-left ${textColor}`}>{t('nerves.referenceRange')}</th>
                    <th className={`px-4 py-3 text-left ${textColor}`}>{t('nerves.unit')}</th>
                    <th className={`px-4 py-3 text-left ${textColor}`}>{t('nerves.notes')}</th>
                  </tr>
                </thead>
                <tbody className={textColor}>
                  {renderReferenceValue(t('nerves.latency'), nerve.motorConduction.distalLatency)}
                  {renderReferenceValue(t('nerves.amplitude'), nerve.motorConduction.amplitude)}
                  {renderReferenceValue(t('nerves.conductionVelocity'), nerve.motorConduction.conductionVelocity)}
                  {nerve.motorConduction.fWave && renderReferenceValue(t('nerves.fWave'), nerve.motorConduction.fWave)}
                  {nerve.motorConduction.hReflex && renderReferenceValue(t('nerves.hReflex'), nerve.motorConduction.hReflex)}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* Sensory Conduction Section */}
        {nerve.sensoryConduction && (
          <div className="mb-8">
            <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>
              {t('nerves.sensoryConduction')}
            </h3>
            <div className="overflow-x-auto">
              <table className={`w-full border-collapse ${tableBg}`}>
                <thead className={tableHeaderBg}>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className={`px-4 py-3 text-left ${textColor}`}>{t('nerves.latency')}</th>
                    <th className={`px-4 py-3 text-left ${textColor}`}>{t('nerves.referenceRange')}</th>
                    <th className={`px-4 py-3 text-left ${textColor}`}>{t('nerves.unit')}</th>
                    <th className={`px-4 py-3 text-left ${textColor}`}>{t('nerves.notes')}</th>
                  </tr>
                </thead>
                <tbody className={textColor}>
                  {renderReferenceValue(t('nerves.latency'), nerve.sensoryConduction.peakLatency)}
                  {renderReferenceValue(t('nerves.amplitude'), nerve.sensoryConduction.amplitude)}
                  {renderReferenceValue(t('nerves.conductionVelocity'), nerve.sensoryConduction.conductionVelocity)}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* Study Technique Section */}
        <div className="mb-8">
          <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>
            {t('nerves.studyTechnique')}
          </h3>
          <div className={`p-4 rounded-lg border ${borderColor}`}>
            <div className="mb-4">
              <h4 className={`font-medium mb-2 ${textColor}`}>{t('nerves.patientPositioning')}</h4>
              <p className={subtextColor}>{nerve.studyTechnique.patientPositioning}</p>
            </div>
            
            <div className="mb-4">
              <h4 className={`font-medium mb-2 ${textColor}`}>{t('nerves.electrodeLocation')}</h4>
              <p className={subtextColor}>{nerve.studyTechnique.electrodeLocation}</p>
            </div>
            
            <div className="mb-4">
              <h4 className={`font-medium mb-2 ${textColor}`}>{t('nerves.stimulationPoints')}</h4>
              <p className={subtextColor}>{nerve.studyTechnique.stimulationPoints}</p>
            </div>
            
            {nerve.studyTechnique.specialConsiderations && (
              <div>
                <h4 className={`font-medium mb-2 ${textColor}`}>{t('nerves.specialConsiderations')}</h4>
                <p className={subtextColor}>{nerve.studyTechnique.specialConsiderations}</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Adjustment Variables Section */}
        {nerve.adjustmentVariables && (
          <div>
            <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>
              {t('nerves.adjustmentVariables')}
            </h3>
            <div className={`p-4 rounded-lg border ${borderColor}`}>
              {nerve.adjustmentVariables.age && (
                <div className="mb-4">
                  <h4 className={`font-medium mb-2 ${textColor}`}>Edad</h4>
                  <ul className={`list-disc list-inside ${subtextColor}`}>
                    {nerve.adjustmentVariables.age.ranges.map((range, index) => (
                      <li key={index}>
                        {range.min} - {range.max} años: {range.adjustment}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {nerve.adjustmentVariables.gender && (
                <div className="mb-4">
                  <h4 className={`font-medium mb-2 ${textColor}`}>Género</h4>
                  <p className={subtextColor}>{nerve.adjustmentVariables.gender.notes}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Image Section */}
      {nerve.multimedia?.techniquePhotoUrl && (
        <div className="mt-6">
          <h3 className={`text-xl font-semibold mb-4 px-6 ${textColor}`}>
            Técnica de Estudio
          </h3>
          <img 
            src={nerve.multimedia.techniquePhotoUrl} 
            alt={`Técnica de estudio del ${nerve.commonName}`} 
            className="w-full h-72 object-cover"
          />
        </div>
      )}
    </div>
  );
}