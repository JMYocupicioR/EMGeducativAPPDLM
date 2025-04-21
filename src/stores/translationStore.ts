// src/stores/translationStore.ts
import { create } from 'zustand';
// Importa el store de configuración para acceder al idioma actual
import { useSettingsStore } from './settingsStore';

// Interfaz para la estructura de los objetos de traducción
interface Translations {
  [key: string]: {
    [languageCode: string]: string; // e.g., 'es': 'Hola', 'en': 'Hello'
  };
}

// Definición de tipos para las traducciones
interface TranslationStore {
  t: (key: string, params?: Record<string, string>) => string;
  currentLanguage: string;
  setLanguage: (language: string) => void;
}

// Objeto con todas las traducciones
const translations = {
  en: {
    // Welcome screen
    'welcome.title': 'Welcome to ENMG DeepLuxMed',
    'welcome.description': 'Your comprehensive guide to electromyography and nerve conduction studies.',
    'welcome.howToUse': 'How to use this guide',
    'welcome.instructions': '1. Select a section from the navigation menu\n2. Explore the detailed content\n3. Use the search function to find specific topics\n4. Bookmark important information for quick access',

    // Sections
    'sections.nerves': 'Nerves',
    'sections.nerve-conduction': 'Nerve Conduction',
    'sections.emg-techniques': 'EMG Techniques',
    'sections.special-studies': 'Special Studies',
    'sections.pathologies': 'Pathologies',
    'sections.clinical-cases': 'Clinical Cases',
    'sections.reference': 'Reference',

    // Features
    'features.nerves': 'Detailed information about peripheral nerves and their innervation',
    'features.nerveConduction': 'Comprehensive guide to nerve conduction studies',
    'features.emgTechniques': 'Step-by-step EMG techniques and protocols',
    'features.specialStudies': 'Advanced and specialized EMG studies',
    'features.pathologies': 'Common neuromuscular pathologies and their EMG findings',
    'features.clinicalCases': 'Real clinical cases with EMG findings',
    'features.references': 'Quick access to important references and guidelines',

    // Títulos y textos generales
    'emgBasics.pageTitle': 'EMG Basics',
    'emgBasics.introduction': 'Electromyography (EMG) is a diagnostic procedure to assess the health of muscles and the nerve cells that control them. This guide covers the fundamental principles and techniques.',
    'emgBasics.rangeLabel': 'Range',
    'emgBasics.valueLabel': 'Value',

    // Principios básicos
    'emgBasics.principles.title': 'Basic Principles',
    'emgBasics.principles.point1': 'EMG measures electrical activity in muscles',
    'emgBasics.principles.point2': 'Evaluates both spontaneous and voluntary muscle activity',
    'emgBasics.principles.point3': 'Helps diagnose neuromuscular disorders',
    'emgBasics.principles.point4': 'Combines with nerve conduction studies for comprehensive assessment',
    'emgBasics.principles.point5': 'Extends neurological examination with objective data',

    // Unidad Motora
    'emgBasics.motorUnit.title': 'Motor Unit',
    'emgBasics.motorUnit.point1': 'A motor unit consists of a motor neuron and all the muscle fibers it innervates',
    'emgBasics.motorUnit.point2': 'Motor Unit Action Potential (MUAP) represents the sum of individual muscle fiber potentials',
    'emgBasics.motorUnit.point3': 'MUAP morphology is affected by muscle fiber density, size, and synchrony',

    // Tipos de señales
    'emgBasics.signalTypes.title': 'Signal Types',
    'emgBasics.signalTypes.insertion': 'Insertion Activity: Brief burst of activity when needle is inserted',
    'emgBasics.signalTypes.spontaneous': 'Spontaneous Activity: Abnormal activity at rest',
    'emgBasics.signalTypes.muap': 'Motor Unit Action Potentials: Normal voluntary activity',
    'emgBasics.signalTypes.interference': 'Interference Pattern: Full muscle contraction',

    // Características de la señal
    'emgBasics.signalChars.title': 'Signal Characteristics',
    'emgBasics.signalChars.amplitude.title': 'Amplitude',
    'emgBasics.signalChars.amplitude.desc': 'Represents the size of the electrical potential',
    'emgBasics.signalChars.duration.title': 'Duration',
    'emgBasics.signalChars.duration.desc': 'Time from initial deflection to return to baseline',
    'emgBasics.signalChars.phases.title': 'Phases',
    'emgBasics.signalChars.phases.desc': 'Number of baseline crossings plus one',
    'emgBasics.signalChars.turns.title': 'Turns',
    'emgBasics.signalChars.turns.desc': 'Changes in direction of the waveform',
    'emgBasics.signalChars.frequency.title': 'Frequency',
    'emgBasics.signalChars.frequency.desc': 'Rate of potential generation',

    // Configuración del equipo
    'emgBasics.equipment.title': 'Equipment Settings',
    'emgBasics.equipment.filters.title': 'Filters',
    'emgBasics.equipment.filters.lowPass': 'Low Pass Filter',
    'emgBasics.equipment.filters.lowPassValue': '10 kHz (Needle)',
    'emgBasics.equipment.filters.highPass': 'High Pass Filter',
    'emgBasics.equipment.filters.highPassValue': '10-20 Hz (Needle)',
    'emgBasics.equipment.filters.notch': 'Notch Filter',
    'emgBasics.equipment.filters.notchValue': '50/60 Hz (Use with caution)',
    'emgBasics.equipment.gain.title': 'Gain',
    'emgBasics.equipment.gain.desc': 'Amplification of the signal',
    'emgBasics.equipment.sweep.title': 'Sweep Speed',
    'emgBasics.equipment.sweep.desc': 'Time base for display',
    'emgBasics.equipment.cmrr.title': 'Common Mode Rejection Ratio',
    'emgBasics.equipment.cmrr.desc': 'Ability to reject common signals',
    'emgBasics.equipment.inputImpedance.title': 'Input Impedance',
    'emgBasics.equipment.inputImpedance.desc': 'Resistance to current flow',

    // Consideraciones técnicas
    'emgBasics.techConsiderations.title': 'Technical Considerations',
    'emgBasics.techConsiderations.temp': 'Maintain skin temperature ≥ 32-34°C',
    'emgBasics.techConsiderations.impedance': 'Verify electrode impedance < 5-10kΩ',
    'emgBasics.techConsiderations.artifacts': 'Avoid movement and electrical artifacts',
    'emgBasics.techConsiderations.relaxation': 'Ensure complete muscle relaxation at rest',
    'emgBasics.techConsiderations.ground': 'Proper ground electrode placement',
    'emgBasics.techConsiderations.needle': 'Correct needle insertion and exploration',
    'emgBasics.techConsiderations.meds': 'Document relevant medications (e.g., anticoagulants)',

    // Referencias
    'references.prestonShapiro': 'Preston DC, Shapiro BE. Electromyography and Neuromuscular Disorders. 3rd ed. Elsevier; 2013.',
    'references.kimura': 'Kimura J. Electrodiagnosis in Diseases of Nerve and Muscle. 4th ed. Oxford University Press; 2013.',
    'references.aanemGuidelines': 'American Association of Neuromuscular & Electrodiagnostic Medicine. Practice Guidelines.',
    'references.dumitru': 'Dumitru D, Amato AA, Zwarts MJ. Electrodiagnostic Medicine. 2nd ed. Hanley & Belfus; 2002.',

    // Subsections
    'subsections.upper-limb-nerves': 'Upper Limb Nerves',
    'subsections.lower-limb-nerves': 'Lower Limb Nerves',
    'subsections.cranial-nerves': 'Cranial Nerves',
    'subsections.upper-limb-motor': 'Upper Limb Motor',
    'subsections.upper-limb-sensory': 'Upper Limb Sensory',
    'subsections.lower-limb-motor': 'Lower Limb Motor',
    'subsections.lower-limb-sensory': 'Lower Limb Sensory',
    'subsections.emg-basics': 'EMG Basics',
    'subsections.spontaneous-activity': 'Spontaneous Activity',
    'subsections.motor-unit-potentials': 'Motor Unit Potentials',
    'subsections.interference-pattern': 'Interference Pattern',
    'subsections.f-waves': 'F Waves',
    'subsections.h-reflex': 'H Reflex',
    'subsections.repetitive-stimulation': 'Repetitive Stimulation',
    'subsections.neuropathies': 'Neuropathies',
    'subsections.myopathies': 'Myopathies',
    'subsections.neuromuscular-junction': 'Neuromuscular Junction',
    'subsections.motor-neuron': 'Motor Neuron',
    'subsections.carpal-tunnel': 'Carpal Tunnel Syndrome',
    'subsections.radiculopathies': 'Radiculopathies',
    'subsections.polyneuropathies': 'Polyneuropathies',
    'subsections.guidelines': 'International Guidelines',
    'subsections.articles': 'Scientific Articles',
    'subsections.books': 'Recommended Books',

    // Nerve Conduction Studies
    'nerveConduction.upperLimbMotor.description': 'Los estudios de conducción motora del miembro superior son fundamentales para evaluar la función de los nervios periféricos y diagnosticar diversas condiciones neuromusculares. A continuación se presentan los protocolos detallados para los principales nervios del miembro superior.',

    // Nerve Conduction Studies - Upper Limb Motor
    'nerveConduction.upperLimbMotor.median': 'Median Nerve',
    'nerveConduction.upperLimbMotor.ulnar': 'Ulnar Nerve',
    'nerveConduction.upperLimbMotor.stimulationSites.wrist': 'Wrist',
    'nerveConduction.upperLimbMotor.stimulationSites.antecubital': 'Antecubital Fossa',
    'nerveConduction.upperLimbMotor.stimulationSites.erb': "Erb's Point",
    'nerveConduction.upperLimbMotor.stimulationSites.belowElbow': 'Below Elbow',
    'nerveConduction.upperLimbMotor.stimulationSites.aboveElbow': 'Above Elbow',
    'nerveConduction.upperLimbMotor.stimulationSites.axilla': 'Axilla',
    'nerveConduction.upperLimbMotor.recordingSites.apb': 'APB (Abductor Pollicis Brevis)',
    'nerveConduction.upperLimbMotor.recordingSites.adm': 'ADM (Abductor Digiti Minimi)',
    'nerveConduction.upperLimbMotor.normalValues.median.latency': '≤ 4.4 ms',
    'nerveConduction.upperLimbMotor.normalValues.median.amplitude': '≥ 4 mV',
    'nerveConduction.upperLimbMotor.normalValues.median.velocity': '≥ 50 m/s',
    'nerveConduction.upperLimbMotor.normalValues.ulnar.latency': '≤ 3.3 ms',
    'nerveConduction.upperLimbMotor.normalValues.ulnar.amplitude': '≥ 6 mV',
    'nerveConduction.upperLimbMotor.normalValues.ulnar.velocity': '≥ 50 m/s',
    'nerveConduction.upperLimbMotor.technique.median': 'Active electrode over the APB muscle belly, reference at the thumb metacarpophalangeal joint.',
    'nerveConduction.upperLimbMotor.technique.ulnar': 'Active electrode over the ADM muscle belly, reference at the 5th finger metacarpophalangeal joint.',
    'nerveConduction.upperLimbMotor.nerveTitle': 'Nerve {nerve}',
    'nerveConduction.upperLimbMotor.stimulationSitesTitle': 'Stimulation Sites',
    'nerveConduction.upperLimbMotor.recordingSiteTitle': 'Recording Site',
    'nerveConduction.upperLimbMotor.techniqueTitle': 'Technique',
    'nerveConduction.upperLimbMotor.normalValuesTitle': 'Normal Values',
    'nerveConduction.upperLimbMotor.parameter': 'Parameter',
    'nerveConduction.upperLimbMotor.value': 'Value',
    'nerveConduction.upperLimbMotor.distalLatency': 'Distal Latency',
    'nerveConduction.upperLimbMotor.cmapAmplitude': 'CMAP Amplitude',
    'nerveConduction.upperLimbMotor.conductionVelocity': 'Conduction Velocity',
    'nerveConduction.upperLimbMotor.electrodePlacement': 'Electrode Placement',
    'nerveConduction.upperLimbMotor.electrodePlacementAlt': 'Nerve {nerve} study technique',
    'nerveConduction.upperLimbMotor.technicalTips': 'Technical Tips',
    'nerveConduction.upperLimbMotor.tips.temperature': 'Ensure skin temperature ≥ 32°C',
    'nerveConduction.upperLimbMotor.tips.distance': 'Maintain minimum 10 cm distance between stimulation sites',
    'nerveConduction.upperLimbMotor.tips.submaximal': 'Avoid submaximal stimulation',
    'nerveConduction.upperLimbMotor.tips.block': 'Verify absence of conduction blocks',

    // Nerve Detail Page
    'nerves.specializedTechniqueRequired': 'Specialized Technique Required',
    'nerves.specializedTechniqueDescription': 'This study requires specialized techniques and/or specific experience for proper execution. Please refer to special considerations for more details.',
    'nerves.backToList': '← Back to List',
    'nerves.studyTechnique': 'Study Technique',
    'nerves.studyTechniqueAlt': 'Study technique for {nerve}',
    'nerves.clinicalReferences': 'Clinical References',
    'nerves.patientPositioning': 'Patient Positioning',
    'nerves.electrodeLocation': 'Electrode Location',
    'nerves.stimulationPoints': 'Stimulation Points',
    'nerves.specialConsiderations': 'Special Considerations',
    'nerves.adjustmentVariables': 'Adjustment Variables',
    'nerves.age': 'Age',
    'nerves.gender': 'Gender',
    'nerves.height': 'Height',
    'nerves.temperature': 'Temperature',
    'nerves.motor': 'Motor',
    'nerves.sensory': 'Sensory',
    'nerves.fWave': 'F Wave',
    'nerves.selectNerveDescription': 'Select a nerve from the list to view detailed information about reference values, study techniques, and special considerations.',
    'nerves.latency': 'Latency',
    'nerves.referenceRange': 'Reference Range',
    'nerves.unit': 'Unit',
    'nerves.notes': 'Notes',
    'nerves.amplitude': 'Amplitude',
    'nerves.conductionVelocity': 'Conduction Velocity',
    'nerves.motorConduction': 'Motor Conduction',
    'nerves.sensoryConduction': 'Sensory Conduction',
    'nerves.noSpecialConsiderations': 'No special considerations',

    // Search
    'search.placeholder': 'Search nerves, studies, or topics...',
    'search.clear': 'Clear search',
    'search.results': 'Search results',
    'search.noResults': 'No results found'
  },
  es: {
    // Welcome screen
    'welcome.title': 'Bienvenida/o a ENMG DeepLuxMed',
    'welcome.description': 'Tu guía completa para electromiografía y estudios de neuroconducción.',
    'welcome.howToUse': 'Cómo usar esta guía',
    'welcome.instructions': '1. Selecciona una sección del menú de navegación\n2. Explora el contenido detallado\n3. Usa la función de búsqueda para encontrar temas específicos\n4. Marca información importante para acceso rápido',

    // Sections
    'sections.nerves': 'Nervios',
    'sections.nerve-conduction': 'Neuroconducción',
    'sections.emg-techniques': 'Técnicas EMG',
    'sections.special-studies': 'Estudios Especiales',
    'sections.pathologies': 'Patologías',
    'sections.clinical-cases': 'Casos Clínicos',
    'sections.reference': 'Referencia',

    // Features
    'features.nerves': 'Información detallada sobre nervios periféricos y su inervación',
    'features.nerveConduction': 'Guía completa de estudios de conducción nerviosa',
    'features.emgTechniques': 'Técnicas y protocolos EMG paso a paso',
    'features.specialStudies': 'Estudios EMG avanzados y especializados',
    'features.pathologies': 'Patologías neuromusculares comunes y sus hallazgos EMG',
    'features.clinicalCases': 'Casos clínicos reales con hallazgos EMG',
    'features.references': 'Acceso rápido a referencias y guías importantes',

    // Títulos y textos generales
    'emgBasics.pageTitle': 'Conceptos Básicos de EMG',
    'emgBasics.introduction': 'La electromiografía (EMG) es un procedimiento diagnóstico para evaluar la salud de los músculos y las células nerviosas que los controlan. Esta guía cubre los principios fundamentales y técnicas.',
    'emgBasics.rangeLabel': 'Rango',
    'emgBasics.valueLabel': 'Valor',

    // Principios básicos
    'emgBasics.principles.title': 'Principios Básicos',
    'emgBasics.principles.point1': 'EMG mide la actividad eléctrica en los músculos',
    'emgBasics.principles.point2': 'Evalúa tanto la actividad muscular espontánea como voluntaria',
    'emgBasics.principles.point3': 'Ayuda a diagnosticar trastornos neuromusculares',
    'emgBasics.principles.point4': 'Se combina con estudios de conducción nerviosa para una evaluación integral',
    'emgBasics.principles.point5': 'Extiende el examen neurológico con datos objetivos',

    // Unidad Motora
    'emgBasics.motorUnit.title': 'Unidad motora',
    'emgBasics.motorUnit.point1': 'Una unidad motora consiste en una neurona motora y todas las fibras musculares que inerva',
    'emgBasics.motorUnit.point2': 'El potencial de acción de la unidad motora (PAUM) representa la suma de los potenciales individuales de las fibras musculares',
    'emgBasics.motorUnit.point3': 'La morfología del PAUM está afectada por la densidad, tamaño y sincronía de las fibras musculares',

    // Tipos de señales
    'emgBasics.signalTypes.title': 'Tipos de Señales',
    'emgBasics.signalTypes.insertion': 'Actividad de Inserción: Breve estallido de actividad cuando se inserta la aguja',
    'emgBasics.signalTypes.spontaneous': 'Actividad Espontánea: Actividad anormal en reposo',
    'emgBasics.signalTypes.muap': 'Potenciales de acción de la unidad motora: Actividad voluntaria normal',
    'emgBasics.signalTypes.interference': 'Patrón de Interferencia: Contracción muscular completa',

    // Características de la señal
    'emgBasics.signalChars.title': 'Características de la Señal',
    'emgBasics.signalChars.amplitude.title': 'Amplitud',
    'emgBasics.signalChars.amplitude.desc': 'Representa el tamaño del potencial eléctrico',
    'emgBasics.signalChars.duration.title': 'Duración',
    'emgBasics.signalChars.duration.desc': 'Tiempo desde la deflexión inicial hasta el retorno a la línea base',
    'emgBasics.signalChars.phases.title': 'Fases',
    'emgBasics.signalChars.phases.desc': 'Número de cruces de la línea base más uno',
    'emgBasics.signalChars.turns.title': 'Giros',
    'emgBasics.signalChars.turns.desc': 'Cambios en la dirección de la forma de onda',
    'emgBasics.signalChars.frequency.title': 'Frecuencia',
    'emgBasics.signalChars.frequency.desc': 'Tasa de generación de potenciales',

    // Configuración del equipo
    'emgBasics.equipment.title': 'Configuración del Equipo',
    'emgBasics.equipment.filters.title': 'Filtros',
    'emgBasics.equipment.filters.lowPass': 'Filtro Pasa Bajos',
    'emgBasics.equipment.filters.lowPassValue': '10 kHz (Aguja)',
    'emgBasics.equipment.filters.highPass': 'Filtro Pasa Altos',
    'emgBasics.equipment.filters.highPassValue': '10-20 Hz (Aguja)',
    'emgBasics.equipment.filters.notch': 'Filtro Notch',
    'emgBasics.equipment.filters.notchValue': '50/60 Hz (Usar con precaución)',
    'emgBasics.equipment.gain.title': 'Ganancia',
    'emgBasics.equipment.gain.desc': 'Amplificación de la señal',
    'emgBasics.equipment.sweep.title': 'Velocidad de Barrido',
    'emgBasics.equipment.sweep.desc': 'Base de tiempo para la visualización',
    'emgBasics.equipment.cmrr.title': 'Relación de Rechazo en Modo Común',
    'emgBasics.equipment.cmrr.desc': 'Capacidad para rechazar señales comunes',
    'emgBasics.equipment.inputImpedance.title': 'Impedancia de Entrada',
    'emgBasics.equipment.inputImpedance.desc': 'Resistencia al flujo de corriente',

    // Consideraciones técnicas
    'emgBasics.techConsiderations.title': 'Consideraciones Técnicas',
    'emgBasics.techConsiderations.temp': 'Mantener temperatura cutánea ≥ 32-34°C',
    'emgBasics.techConsiderations.impedance': 'Verificar impedancia del electrodo < 5-10kΩ',
    'emgBasics.techConsiderations.artifacts': 'Evitar artefactos de movimiento y eléctricos',
    'emgBasics.techConsiderations.relaxation': 'Asegurar relajación muscular completa en reposo',
    'emgBasics.techConsiderations.ground': 'Colocación adecuada del electrodo de tierra',
    'emgBasics.techConsiderations.needle': 'Correcta inserción y exploración con la aguja',
    'emgBasics.techConsiderations.meds': 'Documentar medicaciones relevantes (ej. anticoagulantes)',

    // Referencias
    'references.prestonShapiro': 'Preston DC, Shapiro BE. Electromyography and Neuromuscular Disorders. 3rd ed. Elsevier; 2013.',
    'references.kimura': 'Kimura J. Electrodiagnosis in Diseases of Nerve and Muscle. 4th ed. Oxford University Press; 2013.',
    'references.aanemGuidelines': 'American Association of Neuromuscular & Electrodiagnostic Medicine. Practice Guidelines.',
    'references.dumitru': 'Dumitru D, Amato AA, Zwarts MJ. Electrodiagnostic Medicine. 2nd ed. Hanley & Belfus; 2002.',

    // Subsections
    'subsections.upper-limb-nerves': 'Nervios del Miembro Superior',
    'subsections.lower-limb-nerves': 'Nervios del Miembro Inferior',
    'subsections.cranial-nerves': 'Nervios Craneales',
    'subsections.upper-limb-motor': 'Estudios Motores de Miembro Superior',
    'subsections.upper-limb-sensory': 'Estudios Sensitivos de Miembro Superior',
    'subsections.lower-limb-motor': 'Estudios Motores de Miembro Inferior',
    'subsections.lower-limb-sensory': 'Estudios Sensitivos de Miembro Inferior',
    'subsections.emg-basics': 'Conceptos Básicos de EMG',
    'subsections.spontaneous-activity': 'Actividad Espontánea',
    'subsections.motor-unit-potentials': 'Potenciales de Unidad Motora',
    'subsections.interference-pattern': 'Patrón de Interferencia',
    'subsections.f-waves': 'Ondas F',
    'subsections.h-reflex': 'Reflejo H',
    'subsections.repetitive-stimulation': 'Estimulación Repetitiva',
    'subsections.neuropathies': 'Neuropatías',
    'subsections.myopathies': 'Miopatías',
    'subsections.neuromuscular-junction': 'Unión Neuromuscular',
    'subsections.motor-neuron': 'Neurona Motora',
    'subsections.carpal-tunnel': 'Síndrome del Túnel Carpiano',
    'subsections.radiculopathies': 'Radiculopatías',
    'subsections.polyneuropathies': 'Polineuropatías',
    'subsections.guidelines': 'Guías Internacionales',
    'subsections.articles': 'Artículos Científicos',
    'subsections.books': 'Libros Recomendados',

    // Nerve Conduction Studies
    'nerveConduction.upperLimbMotor.description': 'Los estudios de conducción motora del miembro superior son fundamentales para evaluar la función de los nervios periféricos y diagnosticar diversas condiciones neuromusculares. A continuación se presentan los protocolos detallados para los principales nervios del miembro superior.',

    // Nerve Conduction Studies - Upper Limb Motor
    'nerveConduction.upperLimbMotor.median': 'Nervio Mediano',
    'nerveConduction.upperLimbMotor.ulnar': 'Nervio Cubital',
    'nerveConduction.upperLimbMotor.stimulationSites.wrist': 'Muñeca',
    'nerveConduction.upperLimbMotor.stimulationSites.antecubital': 'Fosa antecubital',
    'nerveConduction.upperLimbMotor.stimulationSites.erb': 'Punto de Erb',
    'nerveConduction.upperLimbMotor.stimulationSites.belowElbow': 'Bajo codo',
    'nerveConduction.upperLimbMotor.stimulationSites.aboveElbow': 'Sobre codo',
    'nerveConduction.upperLimbMotor.stimulationSites.axilla': 'Axila',
    'nerveConduction.upperLimbMotor.recordingSites.apb': 'APB (Abductor Pollicis Brevis)',
    'nerveConduction.upperLimbMotor.recordingSites.adm': 'ADM (Abductor Digiti Minimi)',
    'nerveConduction.upperLimbMotor.normalValues.median.latency': '≤ 4.4 ms',
    'nerveConduction.upperLimbMotor.normalValues.median.amplitude': '≥ 4 mV',
    'nerveConduction.upperLimbMotor.normalValues.median.velocity': '≥ 50 m/s',
    'nerveConduction.upperLimbMotor.normalValues.ulnar.latency': '≤ 3.3 ms',
    'nerveConduction.upperLimbMotor.normalValues.ulnar.amplitude': '≥ 6 mV',
    'nerveConduction.upperLimbMotor.normalValues.ulnar.velocity': '≥ 50 m/s',
    'nerveConduction.upperLimbMotor.technique.median': 'Electrodo activo sobre el vientre muscular del APB, referencia en la articulación metacarpofalángica del pulgar.',
    'nerveConduction.upperLimbMotor.technique.ulnar': 'Electrodo activo sobre el vientre muscular del ADM, referencia en la articulación metacarpofalángica del 5º dedo.',
    'nerveConduction.upperLimbMotor.nerveTitle': 'Nervio {nerve}',
    'nerveConduction.upperLimbMotor.stimulationSitesTitle': 'Sitios de Estimulación',
    'nerveConduction.upperLimbMotor.recordingSiteTitle': 'Sitio de Registro',
    'nerveConduction.upperLimbMotor.techniqueTitle': 'Técnica',
    'nerveConduction.upperLimbMotor.normalValuesTitle': 'Valores Normales',
    'nerveConduction.upperLimbMotor.parameter': 'Parámetro',
    'nerveConduction.upperLimbMotor.value': 'Valor',
    'nerveConduction.upperLimbMotor.distalLatency': 'Latencia Distal',
    'nerveConduction.upperLimbMotor.cmapAmplitude': 'Amplitud CMAP',
    'nerveConduction.upperLimbMotor.conductionVelocity': 'Velocidad de Conducción',
    'nerveConduction.upperLimbMotor.electrodePlacement': 'Colocación de Electrodos',
    'nerveConduction.upperLimbMotor.electrodePlacementAlt': 'Técnica de estudio del nervio {nerve}',
    'nerveConduction.upperLimbMotor.technicalTips': 'Consejos Técnicos',
    'nerveConduction.upperLimbMotor.tips.temperature': 'Asegure una temperatura cutánea ≥ 32°C',
    'nerveConduction.upperLimbMotor.tips.distance': 'Mantenga una distancia mínima de 10 cm entre sitios de estimulación',
    'nerveConduction.upperLimbMotor.tips.submaximal': 'Evite la estimulación submáxima',
    'nerveConduction.upperLimbMotor.tips.block': 'Verifique la ausencia de bloqueos de conducción',

    // Nerve Detail Page
    'nerves.specializedTechniqueRequired': 'Técnica Especializada Requerida',
    'nerves.specializedTechniqueDescription': 'Este estudio requiere técnicas especiales y/o experiencia específica para su correcta realización. Consulte consideraciones especiales para más detalles.',
    'nerves.backToList': '← Volver a la lista',
    'nerves.studyTechnique': 'Técnica de Estudio',
    'nerves.studyTechniqueAlt': 'Técnica de estudio del {nerve}',
    'nerves.clinicalReferences': 'Referencias Clínicas',
    'nerves.patientPositioning': 'Posicionamiento del Paciente',
    'nerves.electrodeLocation': 'Ubicación de Electrodos',
    'nerves.stimulationPoints': 'Puntos de Estimulación',
    'nerves.specialConsiderations': 'Consideraciones Especiales',
    'nerves.adjustmentVariables': 'Variables de Ajuste',
    'nerves.age': 'Edad',
    'nerves.gender': 'Género',
    'nerves.height': 'Altura',
    'nerves.temperature': 'Temperatura',
    'nerves.motor': 'Motor',
    'nerves.sensory': 'Sensitivo',
    'nerves.fWave': 'Onda F',
    'nerves.selectNerveDescription': 'Selecciona un nervio de la lista para ver información detallada sobre valores de referencia, técnicas de estudio y consideraciones especiales.',
    'nerves.latency': 'Latencia',
    'nerves.referenceRange': 'Rango de Referencia',
    'nerves.unit': 'Unidad',
    'nerves.notes': 'Notas',
    'nerves.amplitude': 'Amplitud',
    'nerves.conductionVelocity': 'Velocidad de Conducción',
    'nerves.motorConduction': 'Conducción Motora',
    'nerves.sensoryConduction': 'Conducción Sensitiva',
    'nerves.noSpecialConsiderations': 'Sin consideraciones especiales',

    // Search
    'search.placeholder': 'Buscar nervios, estudios o temas...',
    'search.clear': 'Limpiar búsqueda',
    'search.results': 'Resultados de búsqueda',
    'search.noResults': 'No se encontraron resultados'
  }
};

// Define la estructura del estado para este store
interface TranslationStoreState {
  translations: Translations; // Almacena los datos de traducción
  t: (key: string, params?: Record<string, string>) => string; // Función para obtener una traducción
  // Nota: 'language' y 'setLanguage' se eliminan.
  // La configuración del idioma ahora es gestionada por useSettingsStore.
}

// Crea el store de Zustand
export const useTranslationStore = create<TranslationStore>((set) => ({
  currentLanguage: 'es',
  setLanguage: (language) => set({ currentLanguage: language }),
  t: (key: string, params?: Record<string, string>) => {
    const language = useSettingsStore.getState().language;
    let translation = translations[language]?.[key] || key;
    
    // Handle variable interpolation
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation.replace(`{${key}}`, value);
      });
    }
    
    return translation;
  }
}));

// Ejemplo de cómo usar el store en un componente:
/*
import { useTranslationStore } from './stores/translationStore';
import { useSettingsStore } from './stores/settingsStore'; // Podrías necesitarlo para cambiar el idioma

function MyComponent() {
  const { t } = useTranslationStore();
  const { setLanguage } = useSettingsStore(); // Para permitir el cambio de idioma

  // Los cambios de idioma se manejan mediante useSettingsStore,
  // y la función 't' usará automáticamente el idioma actualizado en el próximo renderizado.

  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <button onClick={() => setLanguage('en')}>Switch to English</button>
      <button onClick={() => setLanguage('es')}>Cambiar a Español</button>
    </div>
  );
}
*/