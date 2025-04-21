import React from 'react';
import { useSettingsStore } from '../../../../stores/settingsStore';
import { useTranslationStore } from '../../../../stores/translationStore'; // Importar store de traducción
import { Activity, Zap, Waves, Settings2, AlertTriangle, BookOpen, Brain /* Icono para Unidad Motora */ } from 'lucide-react';

// Interfaz para definir la estructura de las características de la señal
interface SignalCharacteristic {
  titleKey: string; // Clave para traducción
  rangeKey?: string; // Clave para rango (opcional)
  range?: string; // Rango directo (si no se traduce)
  descriptionKey: string; // Clave para descripción
}

// Interfaz para definir la estructura de la configuración del equipo
interface EquipmentSetting {
  titleKey: string;
  valueKey?: string; // Clave para valor/rango
  value?: string; // Valor directo
  descriptionKey?: string; // Clave para descripción (opcional)
  subSettings?: { [key: string]: string | { titleKey: string; valueKey: string } }; // Para sub-configuraciones como filtros
}

export function EMGBasics() {
  // --- Hooks de Estado y Traducción ---
  const { isDarkMode } = useSettingsStore();
  const { t } = useTranslationStore(); // Hook para obtener traducciones

  // --- Estilos Dinámicos ---
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white'; // Fondo de tarjeta más oscuro
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';
  const iconColor = isDarkMode ? 'text-blue-400' : 'text-blue-600';
  const warningIconColor = isDarkMode ? 'text-yellow-400' : 'text-yellow-600';
  const bookIconColor = isDarkMode ? 'text-green-400' : 'text-green-600';

  // --- Datos del Contenido (Usando claves de traducción) ---
  // Nota: Asegúrate de que estas claves existan en tu `translationStore.ts`
  const sections = [
    {
      icon: Activity,
      titleKey: 'emgBasics.principles.title',
      contentKeys: [ // Lista de claves para los puntos
        'emgBasics.principles.point1',
        'emgBasics.principles.point2',
        'emgBasics.principles.point3',
        'emgBasics.principles.point4',
        'emgBasics.principles.point5', // Añadido: Extensión de exploración neurológica
      ]
    },
    {
      icon: Brain, // Icono para Unidad Motora
      titleKey: 'emgBasics.motorUnit.title',
      contentKeys: [
        'emgBasics.motorUnit.point1', // Definición de UM
        'emgBasics.motorUnit.point2', // PAUM como suma de potenciales
        'emgBasics.motorUnit.point3', // Factores que afectan morfología PAUM
      ]
    },
    {
      icon: Zap,
      titleKey: 'emgBasics.signalTypes.title',
      contentKeys: [
        'emgBasics.signalTypes.insertion',
        'emgBasics.signalTypes.spontaneous',
        'emgBasics.signalTypes.muap',
        'emgBasics.signalTypes.interference'
      ]
    },
    {
      icon: Waves,
      titleKey: 'emgBasics.signalChars.title',
      // Objeto con características detalladas (usando claves)
      characteristics: {
        amplitude: {
          titleKey: 'emgBasics.signalChars.amplitude.title',
          range: '100 µV - 5 mV (Aguja)', // Rango típico con aguja
          descriptionKey: 'emgBasics.signalChars.amplitude.desc'
        },
        duration: {
          titleKey: 'emgBasics.signalChars.duration.title',
          range: '5 - 15 ms',
          descriptionKey: 'emgBasics.signalChars.duration.desc'
        },
        phases: { // Añadido: Fases
            titleKey: 'emgBasics.signalChars.phases.title',
            range: '2 - 4',
            descriptionKey: 'emgBasics.signalChars.phases.desc'
        },
        turns: { // Añadido: Giros
            titleKey: 'emgBasics.signalChars.turns.title',
            descriptionKey: 'emgBasics.signalChars.turns.desc' // Podría no tener rango fijo
        },
        frequency: {
          titleKey: 'emgBasics.signalChars.frequency.title',
          range: '20 Hz - 10 kHz (Aguja)', // Rango más amplio para aguja
          descriptionKey: 'emgBasics.signalChars.frequency.desc'
        }
      } as { [key: string]: SignalCharacteristic } // Tipado para claridad
    },
    {
      icon: Settings2,
      titleKey: 'emgBasics.equipment.title',
      settings: {
        filters: {
          titleKey: 'emgBasics.equipment.filters.title',
          subSettings: { // Usar subSettings para detalles
            lowPass: { titleKey: 'emgBasics.equipment.filters.lowPass', valueKey: 'emgBasics.equipment.filters.lowPassValue' }, // ej: 10 kHz (Aguja)
            highPass: { titleKey: 'emgBasics.equipment.filters.highPass', valueKey: 'emgBasics.equipment.filters.highPassValue' }, // ej: 10-20 Hz (Aguja)
            notch: { titleKey: 'emgBasics.equipment.filters.notch', valueKey: 'emgBasics.equipment.filters.notchValue' } // ej: 50/60 Hz (Usar con precaución)
          }
        },
        gain: {
          titleKey: 'emgBasics.equipment.gain.title',
          range: '50 µV - 10 mV/div', // Rango ajustado
          descriptionKey: 'emgBasics.equipment.gain.desc'
        },
        sweep: {
          titleKey: 'emgBasics.equipment.sweep.title',
          range: '5 - 10 ms/div', // Rango típico
          descriptionKey: 'emgBasics.equipment.sweep.desc'
        },
        cmrr: { // Añadido: CMRR
            titleKey: 'emgBasics.equipment.cmrr.title',
            value: '> 100 dB',
            descriptionKey: 'emgBasics.equipment.cmrr.desc'
        },
        inputImpedance: { // Añadido: Impedancia de Entrada
            titleKey: 'emgBasics.equipment.inputImpedance.title',
            value: '> 100 MΩ',
            descriptionKey: 'emgBasics.equipment.inputImpedance.desc'
        }
      } as { [key: string]: EquipmentSetting } // Tipado
    }
  ];

  // Consideraciones técnicas (usando claves de traducción)
  const technicalConsiderationKeys = [
    'emgBasics.techConsiderations.temp',       // Mantener temperatura cutánea ≥ 32-34°C
    'emgBasics.techConsiderations.impedance',  // Verificar impedancia del electrodo < 5-10kΩ
    'emgBasics.techConsiderations.artifacts',  // Evitar artefactos de movimiento y eléctricos
    'emgBasics.techConsiderations.relaxation', // Asegurar relajación muscular completa en reposo
    'emgBasics.techConsiderations.ground',     // Colocación adecuada del electrodo de tierra
    'emgBasics.techConsiderations.needle',     // Correcta inserción y exploración con la aguja
    'emgBasics.techConsiderations.meds',       // Documentar medicaciones relevantes (ej. anticoagulantes)
  ];

  // Referencias (usando claves o texto directo si prefieres)
  const referenceKeys = [
    'references.prestonShapiro',
    'references.kimura',
    'references.aanemGuidelines',
    'references.dumitru' // Añadida referencia adicional común
  ];

  // --- Renderizado del Componente ---
  return (
    <div className="space-y-8">
      {/* --- Título e Introducción --- */}
      <div>
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
          {t('emgBasics.pageTitle')} {/* Traducir título */}
        </h2>
        <p className={`mb-6 ${subtextColor}`}>
          {t('emgBasics.introduction')} {/* Traducir introducción */}
        </p>
      </div>

      {/* --- Grid de Secciones --- */}
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div
              key={index}
              className={`${cardBg} p-6 rounded-lg border ${borderColor} shadow-md`} // Añadida sombra
            >
              {/* Cabecera de la Tarjeta */}
              <div className="flex items-center gap-3 mb-4">
                <Icon className={`w-6 h-6 ${iconColor}`} />
                <h3 className={`text-xl font-semibold ${textColor}`}>
                  {t(section.titleKey)} {/* Traducir título de sección */}
                </h3>
              </div>

              {/* Contenido de la Tarjeta (Lógica de Renderizado) */}
              {section.contentKeys ? ( // Si es una lista de puntos
                <ul className={`list-disc list-inside ${subtextColor} space-y-2`}>
                  {section.contentKeys.map((itemKey, i) => (
                    <li key={i}>{t(itemKey)}</li> // Traducir cada punto
                  ))}
                </ul>
              ) : section.characteristics ? ( // Si son características de señal
                <div className="space-y-4">
                  {Object.entries(section.characteristics).map(([key, value]) => (
                    <div key={key}>
                      <h4 className={`font-medium mb-1 ${textColor}`}>{t(value.titleKey)}</h4>
                      {value.range && ( // Mostrar rango si existe
                         <p className={`${subtextColor} text-sm mb-1`}>{t('emgBasics.rangeLabel')}: {value.rangeKey ? t(value.rangeKey) : value.range}</p>
                      )}
                      <p className={`${subtextColor} text-sm`}>{t(value.descriptionKey)}</p>
                    </div>
                  ))}
                </div>
              ) : section.settings ? ( // Si son configuraciones de equipo
                <div className="space-y-4">
                  {Object.entries(section.settings).map(([key, value]) => (
                    <div key={key}>
                      <h4 className={`font-medium mb-1 ${textColor}`}>{t(value.titleKey)}</h4>
                      {value.subSettings ? ( // Para filtros u otros sub-ajustes
                         <div className="pl-4">
                            {Object.entries(value.subSettings).map(([subKey, subValue]) => (
                                <p key={subKey} className={`${subtextColor} text-sm`}>
                                    {typeof subValue === 'string' ? t(subValue) : `${t(subValue.titleKey)}: ${t(subValue.valueKey)}`}
                                </p>
                            ))}
                         </div>
                      ) : (
                        <>
                          {(value.range || value.value) && (
                            <p className={`${subtextColor} text-sm mb-1`}>
                              {value.range ? `${t('emgBasics.rangeLabel')}: ${value.rangeKey ? t(value.rangeKey) : value.range}` : `${t('emgBasics.valueLabel')}: ${value.valueKey ? t(value.valueKey) : value.value}`}
                            </p>
                          )}
                          {value.descriptionKey && (
                            <p className={`${subtextColor} text-sm`}>{t(value.descriptionKey)}</p>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* --- Consideraciones Técnicas --- */}
      <div className={`${cardBg} p-6 rounded-lg border ${borderColor} shadow-md`}>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className={`w-6 h-6 ${warningIconColor}`} />
          <h3 className={`text-xl font-semibold ${textColor}`}>
            {t('emgBasics.techConsiderations.title')} {/* Traducir título */}
          </h3>
        </div>
        <ul className={`list-disc list-inside ${subtextColor} space-y-2`}>
          {technicalConsiderationKeys.map((key, index) => (
            <li key={index}>{t(key)}</li> // Traducir consideraciones
          ))}
        </ul>
      </div>

      {/* --- Referencias Bibliográficas --- */}
      <div className={`${cardBg} p-6 rounded-lg border ${borderColor} shadow-md`}>
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className={`w-6 h-6 ${bookIconColor}`} />
          <h3 className={`text-xl font-semibold ${textColor}`}>
            {t('emgBasics.references.title')} {/* Traducir título */}
          </h3>
        </div>
        <ul className={`list-disc list-inside ${subtextColor} space-y-2 text-sm`}>
           {referenceKeys.map((key, index) => (
            <li key={index}>{t(key)}</li> // Traducir referencias (o mostrar texto directo)
          ))}
          {/* Puedes añadir más referencias directamente o mediante claves */}
        </ul>
      </div>
    </div>
  );
}
