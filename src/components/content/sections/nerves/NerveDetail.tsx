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
  const alertBg = isDarkMode ? 'bg-yellow-900 bg-opacity-30' : 'bg-yellow-50';
  const alertText = isDarkMode ? 'text-yellow-200' : 'text-yellow-800';

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

  // Determinar si este nervio requiere técnicas especiales
  const requiresSpecialTechnique = nerve.studyTechnique.specialConsiderations && 
    (nerve.studyTechnique.specialConsiderations.includes('especializado') || 
     nerve.studyTechnique.specialConsiderations.includes('electrodos de aguja') ||
     nerve.studyTechnique.specialConsiderations.includes('técnicamente difícil') ||
     nerve.studyTechnique.specialConsiderations.includes('experiencia'));

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

        {/* Alerta para nervios que requieren técnicas especializadas */}
        {requiresSpecialTechnique && (
          <div className={`${alertBg} p-4 mb-6 rounded-lg border border-yellow-200 dark:border-yellow-900`}>
            <h4 className={`font-semibold ${alertText}`}>{t('nerves.specializedTechniqueRequired')}</h4>
            <p className={alertText}>
              {t('nerves.specializedTechniqueDescription')}
            </p>
          </div>
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
                  {nerve.motorConduction.conductionVelocity && 
                    renderReferenceValue(t('nerves.conductionVelocity'), nerve.motorConduction.conductionVelocity)}
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

              {nerve.adjustmentVariables.height && (
                <div className="mb-4">
                  <h4 className={`font-medium mb-2 ${textColor}`}>Altura</h4>
                  <ul className={`list-disc list-inside ${subtextColor}`}>
                    {nerve.adjustmentVariables.height.ranges.map((range, index) => (
                      <li key={index}>
                        {range.min} - {range.max} cm: {range.adjustment}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {nerve.adjustmentVariables.temperature && (
                <div className="mb-4">
                  <h4 className={`font-medium mb-2 ${textColor}`}>Temperatura</h4>
                  <p className={subtextColor}>{nerve.adjustmentVariables.temperature.notes}</p>
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
            {t('nerves.studyTechnique')}
          </h3>
          <img 
            src={nerve.multimedia.techniquePhotoUrl} 
            alt={t('nerves.studyTechniqueAlt', { nerve: nerve.commonName })} 
            className="w-full h-72 object-cover"
          />
        </div>
      )}

      {/* References Section for cranial nerves with special considerations */}
      {nerve.anatomicalRegion === 'cranial' && (
        <div className="p-6 pt-0">
          <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>
            {t('nerves.clinicalReferences')}
          </h3>
          <div className={`p-4 rounded-lg border ${borderColor}`}>
            <ul className={`list-disc list-inside ${subtextColor} space-y-2`}>
              <li>American Association of Neuromuscular & Electrodiagnostic Medicine. (2022). Practice guidelines for electrodiagnostic studies of cranial nerves.</li>
              <li>Preston, D. C., & Shapiro, B. E. (2020). Electromyography and Neuromuscular Disorders: Clinical-Electrophysiologic Correlations (4th ed.).</li>
              <li>Kimura, J. (2013). Electrodiagnosis in Diseases of Nerve and Muscle: Principles and Practice (4th ed.).</li>
              <li>Dumitru, D., Amato, A. A., & Zwarts, M. J. (2002). Electrodiagnostic Medicine (2nd ed.).</li>
            </ul>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t('nerves.studyTechniqueAlt', { nerve: nerve.name })}
        </h1>
        <button
          onClick={() => navigate('/nerves')}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {t('nerves.backToList')}
        </button>
      </div>

      {nerve.studyTechnique.specialConsiderations && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg dark:bg-yellow-900/20 dark:border-yellow-800">
          <h2 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            {t('nerves.specializedTechniqueRequired')}
          </h2>
          <p className="text-yellow-700 dark:text-yellow-300">
            {t('nerves.specializedTechniqueDescription')}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t('nerves.patientPositioning')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {nerve.studyTechnique.patientPositioning}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t('nerves.electrodeLocation')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {nerve.studyTechnique.electrodeLocation}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t('nerves.stimulationPoints')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {nerve.studyTechnique.stimulationPoints}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t('nerves.specialConsiderations')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {nerve.studyTechnique.specialConsiderations || t('nerves.noSpecialConsiderations')}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t('nerves.adjustmentVariables')}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('nerves.age')}
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('nerves.gender')}
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <option value="male">{t('nerves.male')}</option>
                  <option value="female">{t('nerves.female')}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('nerves.height')}
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('nerves.temperature')}
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}