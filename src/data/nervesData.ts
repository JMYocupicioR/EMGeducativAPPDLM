// Interfaces y tipos base
export interface NerveReferenceValue {
  value?: number | null;
  unit: string;
  rangeMin?: number | null;
  rangeMax?: number | null;
  range: string;
  notes?: string;
}

export interface MotorNerveConduction {
  distalLatency: NerveReferenceValue;
  amplitude: NerveReferenceValue;
  conductionVelocity: NerveReferenceValue;
  fWave?: NerveReferenceValue;
  hReflex?: NerveReferenceValue;
}

export interface SensoryNerveConduction {
  peakLatency: NerveReferenceValue;
  amplitude: NerveReferenceValue;
  conductionVelocity: NerveReferenceValue;
}

export interface StudyTechnique {
  patientPositioning: string;
  electrodeLocation: string;
  stimulationPoints: string;
  specialConsiderations?: string;
}

export interface MultimediaContent {
  techniquePhotoUrl?: string;
  demoVideoUrl?: string;
  anatomicalDiagramUrl?: string;
}

export interface AdjustmentVariables {
  age?: {
    ranges: { min: number; max: number; adjustment: string }[];
  };
  gender?: { notes: string };
  height?: {
    ranges: { min: number; max: number; adjustment: string }[];
  };
  temperature?: { notes: string };
}

export interface Nerve {
  id: string;
  commonName: string;
  anatomicalRegion: 'upperLimb' | 'lowerLimb' | 'cranial';
  specificAnatomicalRegion?: string;
  motorConduction?: MotorNerveConduction;
  sensoryConduction?: SensoryNerveConduction;
  studyTechnique: StudyTechnique;
  multimedia?: MultimediaContent;
  adjustmentVariables?: AdjustmentVariables;
}

// —— NERVIOS DEL MIEMBRO SUPERIOR
export const upperLimbNerves: Nerve[] = [
  {
    id: 'median-wrist',
    commonName: 'Nervio Mediano',
    anatomicalRegion: 'upperLimb',
    specificAnatomicalRegion: 'Muñeca',
    motorConduction: {
      distalLatency: { unit: 'ms', range: '≤ 4.4 ms', rangeMin: 3.2, rangeMax: 4.2, notes: 'Medido desde la muñeca hasta abductor corto del pulgar.' },
      amplitude:    { unit: 'mV', range: '≥ 4 mV', rangeMin: 5,   rangeMax: 25,  notes: 'PAMC.' },
      conductionVelocity: { unit: 'm/s', range: '44.2 - 51.6 m/s', rangeMin: 44.2, rangeMax: 51.6, notes: 'Vel. motora.' }
    },
    sensoryConduction: {
      peakLatency: { unit: 'ms', range: '3.0 - 3.4 ms', rangeMin: 3.0, rangeMax: 3.4, notes: 'Estimulación digital hasta muñeca.' },
      amplitude:    { unit: 'µV', range: '10 - 90 µV',  rangeMin: 10,  rangeMax: 90,  notes: 'PANS.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 50 m/s', rangeMin: 50, rangeMax: null, notes: 'Vel. sensitiva.' }
    },
    studyTechnique: {
      patientPositioning: 'Sentado, brazo extendido, palma hacia arriba.',
      electrodeLocation: 'Activo: abductor corto pulgar; referencia: metacarpofalángica.',
      stimulationPoints: 'Muñeca: 8 cm proximal al pliegue. Codo: 7 cm distal al pliegue.',
      specialConsiderations: 'Neutra la muñeca, evitar compresión vascular.'
    },
    multimedia: { techniquePhotoUrl: 'https://static.wixstatic.com/media/fc5d1a_a6275d4d6d9e4b0392832a119e447b66~mv2.png' },
    adjustmentVariables: {
      age: { ranges: [ { min: 0, max: 12, adjustment: '2.5 - 4.0 ms' }, { min: 13, max: 65, adjustment: '3.0 - 4.5 ms' }, { min: 66, max: 120, adjustment: '3.5 - 5.0 ms' } ] },
      gender: { notes: 'Sin ajustes por género.' }
    }
  },
  {
    id: 'ulnar-wrist',
    commonName: 'Nervio Ulnar',
    anatomicalRegion: 'upperLimb',
    specificAnatomicalRegion: 'Muñeca',
    motorConduction: {
      distalLatency: { unit: 'ms', range: '≤ 3.3 ms', rangeMin: 2.7, rangeMax: 3.7, notes: 'Hasta abductor del meñique.' },
      amplitude:    { unit: 'mV', range: '≥ 6 mV',  rangeMin: 1.64, rangeMax: 9.56, notes: 'PAMC.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 50 m/s', rangeMin: 50, rangeMax: 60, notes: 'Vel. motora.' },
      fWave: { unit: 'ms', range: '27.5 - 33.5 ms', rangeMin: 27.5, rangeMax: 33.5, notes: 'Latencia mínima proximal.' }
    },
    sensoryConduction: {
      peakLatency: { unit: 'ms', range: '2.95 - 3.45 ms', rangeMin: 2.95, rangeMax: 3.45, notes: 'Latencia pico.' },
      amplitude:    { unit: 'µV', range: '15 - 50 µV',   rangeMin: 15,  rangeMax: 50,  notes: 'PANS.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 50 m/s', rangeMin: 50, rangeMax: null, notes: 'Vel. sensitiva.' }
    },
    studyTechnique: {
      patientPositioning: 'Decúbito supino, brazo extendido en neutro.',
      electrodeLocation: 'Activo: abductor meñique; referencia: metacarpofalángica 5º dedo.',
      stimulationPoints: 'Muñeca: 8 cm proximal; Codo: 3–4 cm distal al epicóndilo; Axila supraclavicular.'
    },
    multimedia: { techniquePhotoUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' }
  },
  {
    id: 'radial',
    commonName: 'Nervio Radial',
    anatomicalRegion: 'upperLimb',
    specificAnatomicalRegion: 'Antebrazo',
    motorConduction: {
      distalLatency: { unit: 'ms', range: '≤ 3.3 ms', rangeMin: 2.16, rangeMax: 3.04, notes: 'Lat. distal motora.' },
      amplitude:    { unit: 'mV', range: '7.7 - 14 mV', rangeMin: 7.7, rangeMax: 14, notes: 'Amplitud motora.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 50 m/s', rangeMin: 50, rangeMax: 60, notes: 'Vel. motora.' }
    },
    sensoryConduction: {
      peakLatency: { unit: 'ms', range: '2.3 - 3.3 ms', rangeMin: 2.3, rangeMax: 3.3, notes: 'Lat. pico.' },
      amplitude:    { unit: 'µV', range: '4 - 75 µV',   rangeMin: 4,   rangeMax: 75, notes: 'PANS.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 50 m/s', rangeMin: 50, rangeMax: null, notes: 'Vel. sensitiva.' }
    },
    studyTechnique: {
      patientPositioning: 'Sentado, antebrazo en pronación sobre superficie plana.',
      electrodeLocation: 'Activo: extensor indicis proprius; anillo sensitivo en espacio interdigital.',
      stimulationPoints: 'Antebrazo lateral al tendón bíceps; braquial medio; axilar.'
    }
  },
  {
    id: 'musculocutaneous',
    commonName: 'Nervio Musculocutáneo',
    anatomicalRegion: 'upperLimb',
    specificAnatomicalRegion: 'Brazo',
    motorConduction: {
      distalLatency: { unit: 'ms', range: '3.9 ± 0.5 ms', rangeMin: 3.4, rangeMax: 4.4, notes: 'Hasta bíceps braquial.' },
      amplitude:    { unit: 'mV', range: '3.8 - 21 mV',  rangeMin: 3.8, rangeMax: 21, notes: 'PAMC.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 50 m/s', rangeMin: 50, rangeMax: null, notes: 'Vel. motora.' }
    },
    sensoryConduction: {
      peakLatency: { unit: 'ms', range: '2.5 - 3.1 ms', rangeMin: 2.5, rangeMax: 3.1, notes: 'Estimulación antebrazo lateral hasta codo.' },
      amplitude:    { unit: 'µV', range: '10 - 30 µV',  rangeMin: 10,  rangeMax: 30, notes: 'PANS.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 50 m/s', rangeMin: 50, rangeMax: null, notes: 'Vel. sensitiva.' }
    },
    studyTechnique: {
      patientPositioning: 'Decúbito supino, brazo abducido 15°, codo 90°.',
      electrodeLocation: 'Activo: vientre bíceps; referencia: tendón distal.',
      stimulationPoints: 'Erb supraclavicular; axila lateral a coracoides.',
      specialConsiderations: 'Evitar desplazamientos durante contracción.'
    }
  },
  {
    id: 'suprascapular',
    commonName: 'Nervio Supraescapular',
    anatomicalRegion: 'upperLimb',
    specificAnatomicalRegion: 'Hombro',
    motorConduction: {
      distalLatency: { unit: 'ms', range: '3.9 ± 0.4 ms', rangeMin: 3.5, rangeMax: 4.3, notes: 'Hasta supraespinoso.' },
      amplitude:    { unit: 'mV', range: '5 - 15 mV',   rangeMin: 5,   rangeMax: 15, notes: 'PAMC.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 60 m/s', rangeMin: 60, rangeMax: null, notes: 'Vel. motora.' }
    },
    studyTechnique: {
      patientPositioning: 'Prono o sentado, brazos a los lados.',
      electrodeLocation: 'Activo: supraespinoso; referencia: espina escápula.',
      stimulationPoints: 'Erb supraclavicular; escotadura supraespacular.',
      specialConsiderations: 'Riesgo de compresión en escotadura.'
    }
  }
];

// —— NERVIOS DEL MIEMBRO INFERIOR
export const lowerLimbNerves: Nerve[] = [
  {
    id: 'tibial-ankle',
    commonName: 'Nervio Tibial',
    anatomicalRegion: 'lowerLimb',
    specificAnatomicalRegion: 'Tobillo',
    motorConduction: {
      distalLatency: { unit: 'ms', range: '< 5.0 ms', rangeMin: 2.9, rangeMax: 5.0, notes: 'Hasta abductor hallucis.' },
      amplitude:    { unit: 'mV', range: '≥ 3 mV',   rangeMin: 3,   rangeMax: null, notes: 'PAMC.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 40 m/s', rangeMin: 40, rangeMax: 50, notes: 'Vel. motora.' },
      fWave:        { unit: 'ms', range: '48 - 56.6 ms', rangeMin: 48, rangeMax: 56.6, notes: 'Lat. mínima.' },
      hReflex:      { unit: 'ms', range: '< 34 ms',    rangeMin: null, rangeMax: 34, notes: 'Lat. reflejo H.' }
    },
    sensoryConduction: {
      peakLatency: { unit: 'ms', range: '3.4 - 4.0 ms', rangeMin: 3.4, rangeMax: 4.0, notes: 'Lat. pico.' },
      amplitude:    { unit: 'µV', range: '5 - 30 µV',  rangeMin: 5,   rangeMax: 30, notes: 'PANS.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 40 m/s', rangeMin: 40, rangeMax: null, notes: 'Vel. sensitiva.' }
    },
    studyTechnique: {
      patientPositioning: 'Prono o supino, pierna flexionada leve.',
      electrodeLocation: 'Activo: abductor hallucis; referencia: 1ª articulación.',
      stimulationPoints: 'Tobillo: maléolo medial; poplítea: línea media.'
    }
  },
  {
    id: 'peroneal-ankle',
    commonName: 'Nervio Peroneo Común',
    anatomicalRegion: 'lowerLimb',
    specificAnatomicalRegion: 'Tobillo',
    motorConduction: {
      distalLatency: { unit: 'ms', range: '< 6.3 ms', rangeMin: 3.7, rangeMax: 6.3, notes: 'Hasta extensor brevis.' },
      amplitude:    { unit: 'mV', range: '≥ 2 mV',   rangeMin: 3.2, rangeMax: 5.6, notes: 'PAMC.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 40 m/s', rangeMin: 40, rangeMax: 50, notes: 'Vel. motora.' },
      fWave:        { unit: 'ms', range: '46.6 - 56 ms', rangeMin: 46.6, rangeMax: 56, notes: 'Lat. mínima.' }
    },
    sensoryConduction: {
      peakLatency: { unit: 'ms', range: '2.7 - 4.7 ms', rangeMin: 2.7, rangeMax: 4.7, notes: 'Lat. pico.' },
      amplitude:    { unit: 'µV', range: '5 - 44 µV',   rangeMin: 5,   rangeMax: 44, notes: 'PANS.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 40 m/s', rangeMin: 40, rangeMax: null, notes: 'Vel. sensitiva.' }
    },
    studyTechnique: {
      patientPositioning: 'Supino, pierna neutra, pie relajado.',
      electrodeLocation: 'Activo: extensor digitorum brevis; referencia: 5º metatarsiano.',
      stimulationPoints: 'Tobillo lateral al tibial anterior; poplítea lateral.'
    }
  },
  {
    id: 'femoral',
    commonName: 'Nervio Femoral',
    anatomicalRegion: 'lowerLimb',
    specificAnatomicalRegion: 'Muslo',
    motorConduction: {
      distalLatency: { unit: 'ms', range: '< 6.0 ms', rangeMin: 3.5, rangeMax: 6.0, notes: 'Hasta cuádriceps.' },
      amplitude:    { unit: 'mV', range: '≥ 4 mV',   rangeMin: 4,   rangeMax: null, notes: 'PAMC.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 40 m/s', rangeMin: 40, rangeMax: 55, notes: 'Vel. motora.' }
    },
    studyTechnique: {
      patientPositioning: 'Supino, pierna abducida, rotada externamente.',
      electrodeLocation: 'Activo: vasto medial; referencia: rótula.',
      stimulationPoints: 'Pliegue inguinal lateral a arteria femoral.',
      specialConsiderations: 'Difícil supramáximo por profundidad.'
    }
  },
  {
    id: 'saphenous',
    commonName: 'Nervio Safeno',
    anatomicalRegion: 'lowerLimb',
    specificAnatomicalRegion: 'Pierna',
    sensoryConduction: {
      peakLatency: { unit: 'ms', range: '3.2 - 4.0 ms', rangeMin: 3.2, rangeMax: 4.0, notes: 'Lat. pico.' },
      amplitude:    { unit: 'µV', range: '4 - 12 µV',   rangeMin: 4,   rangeMax: 12, notes: 'PANS.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 40 m/s', rangeMin: 40, rangeMax: null, notes: 'Vel. sensitiva.' }
    },
    studyTechnique: {
      patientPositioning: 'Supino, pierna flexionada leve.',
      electrodeLocation: 'Medial pierna 10 cm por encima maléolo.',
      stimulationPoints: 'Medial rodilla 3 cm medial a rótula.'
    }
  },
  {
    id: 'sural',
    commonName: 'Nervio Sural',
    anatomicalRegion: 'lowerLimb',
    specificAnatomicalRegion: 'Tobillo',
    sensoryConduction: {
      peakLatency: { unit: 'ms', range: '3.4 - 4.0 ms', rangeMin: 3.4, rangeMax: 4.0, notes: 'Lat. pico.' },
      amplitude:    { unit: 'µV', range: '5 - 30 µV',   rangeMin: 5,   rangeMax: 30, notes: 'PANS.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 40 m/s', rangeMin: 40, rangeMax: null, notes: 'Vel. sensitiva.' }
    },
    studyTechnique: {
      patientPositioning: 'Lateral o prono, tobillo flexionado.',
      electrodeLocation: 'Posterior al maléolo lateral.',
      stimulationPoints: 'Pantorrilla 10–14 cm proximal.'
    },
    multimedia: { techniquePhotoUrl: 'https://images.unsplash.com/photo-1512482170774-7ba3f9b13518?auto=format&fit=crop&w=800&q=80' }
  },
  {
    id: 'superficial-peroneal',
    commonName: 'Nervio Peroneo Superficial',
    anatomicalRegion: 'lowerLimb',
    specificAnatomicalRegion: 'Pierna',
    sensoryConduction: {
      peakLatency: { unit: 'ms', range: '2.6 - 3.2 ms', rangeMin: 2.6, rangeMax: 3.2, notes: 'Lat. pico.' },
      amplitude:    { unit: 'µV', range: '14 - 26 µV',  rangeMin: 14,  rangeMax: 26, notes: 'PANS.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 40 m/s', rangeMin: 40, rangeMax: null, notes: 'Vel. sensitiva.' }
    },
    studyTechnique: {
      patientPositioning: 'Supino con pierna extendida.',
      electrodeLocation: 'Dorso pie entre 1º y 2º metatarsiano.',
      stimulationPoints: 'Tercio inferior lateral pierna 10–14 cm.'
    }
  },
  {
    id: 'lateral-femoral-cutaneous',
    commonName: 'Nervio Femorocutáneo Lateral',
    anatomicalRegion: 'lowerLimb',
    specificAnatomicalRegion: 'Muslo',
    sensoryConduction: {
      peakLatency: { unit: 'ms', range: '2.4 - 2.6 ms', rangeMin: 2.4, rangeMax: 2.6, notes: 'Lat. pico.' },
      amplitude:    { unit: 'µV', range: '10 - 25 µV',  rangeMin: 10,  rangeMax: 25, notes: 'PANS.' },
      conductionVelocity: { unit: 'm/s', range: '43 - 55 m/s', rangeMin: 43, rangeMax: 55, notes: 'Vel. sensitiva.' }
    },
    studyTechnique: {
      patientPositioning: 'Supino, pierna en neutro.',
      electrodeLocation: 'Cara lateral muslo 10–15 cm distal a EIAS.',
      stimulationPoints: '2 cm medial e inferior a EIAS.',
      specialConsiderations: 'Baja amplitud en obesos; promediar respuestas.'
    }
  }
];

// —— NERVIOS CRANEALES
export const cranialNerves: Nerve[] = [
  {
    id: 'facial',
    commonName: 'Nervio Facial',
    anatomicalRegion: 'cranial',
    motorConduction: {
      distalLatency: { unit: 'ms', range: '< 4.5 ms', rangeMin: null, rangeMax: 4.5, notes: 'Hasta orbicular ojos.' },
      amplitude:    { unit: 'mV', range: '≥ 1 mV',  rangeMin: 1,   rangeMax: null, notes: 'PAMC.' }
    },
    studyTechnique: {
      patientPositioning: 'Sentado con cabeza neutra.',
      electrodeLocation: 'Orbicular ojos; referencia: temporal.',
      stimulationPoints: 'Trago, ant. meato auditivo.',
      specialConsiderations: 'Usar aguja si atrofia o edema.'
    }
  },
  {
    id: 'trigeminal',
    commonName: 'Nervio Trigémino',
    anatomicalRegion: 'cranial',
    motorConduction: {
      distalLatency: { unit: 'ms', range: '< 3 ms', rangeMin: null, rangeMax: 3, notes: 'Hasta masetero.' },
      amplitude:    { unit: 'mV', range: '≥ 2 mV', rangeMin: 2,   rangeMax: null, notes: 'PAMC.' }
    },
    studyTechnique: {
      patientPositioning: 'Sentado con cabeza neutra.',
      electrodeLocation: 'Masetero; referencia: cigomático.',
      stimulationPoints: 'Ant. trago, sup. arco cigomático.'
    }
  },
  {
    id: 'spinal-accessory',
    commonName: 'Nervio Espinal Accesorio',
    anatomicalRegion: 'cranial',
    motorConduction: {
      distalLatency: { unit: 'ms', range: '2.0 - 4.0 ms', rangeMin: 2.0, rangeMax: 4.0, notes: 'Hasta esternocleidomastoideo.' },
      amplitude:    { unit: 'mV', range: '3 - 8 mV',   rangeMin: 3,   rangeMax: 8, notes: 'PAMC.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 60 m/s', rangeMin: 60, rangeMax: null, notes: 'Vel. motora.' }
    },
    studyTechnique: {
      patientPositioning: 'Sentado o supino, cabeza girada contralateral.',
      electrodeLocation: 'Esternocleidomastoideo medio; referencia: clavícula.',
      stimulationPoints: 'Borde post. ECM nivel C2-C3.',
      specialConsiderations: 'Diferenciar rama externa/interna.'
    }
  },
  {
    id: 'hypoglossal',
    commonName: 'Nervio Hipogloso',
    anatomicalRegion: 'cranial',
    motorConduction: {
      distalLatency: { unit: 'ms', range: '2.0 - 3.5 ms', rangeMin: 2.0, rangeMax: 3.5, notes: 'Hasta geniogloso.' },
      amplitude:    { unit: 'mV', range: '≥ 2 mV',   rangeMin: 2,   rangeMax: null, notes: 'PAMC.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 50 m/s', rangeMin: 50, rangeMax: null, notes: 'Vel. motora.' }
    },
    studyTechnique: {
      patientPositioning: 'Sentado, cabeza neutra, boca abierta.',
      electrodeLocation: 'Aguja concéntrica lateral lengua; ref. ángulo mandíbula.',
      stimulationPoints: 'Submandibular, lat. digástrico.',
      specialConsiderations: 'Usar aguja, evitar movimientos lengua.'
    },
    multimedia: { techniquePhotoUrl: 'https://images.unsplash.com/photo-1566275529824-cca6d008f3da?auto=format&fit=crop&w=800&q=80' }
  },
  {
    id: 'glossopharyngeal',
    commonName: 'Nervio Glosofaríngeo',
    anatomicalRegion: 'cranial',
    motorConduction: {
      distalLatency: { unit: 'ms', range: '3.0 - 4.5 ms', rangeMin: 3.0, rangeMax: 4.5, notes: 'Hasta faríngeos.' },
      amplitude:    { unit: 'mV', range: '1 - 3 mV',   rangeMin: 1,   rangeMax: 3, notes: 'PAMC.' }
    },
    sensoryConduction: {
      peakLatency: { unit: 'ms', range: '2.5 - 3.5 ms', rangeMin: 2.5, rangeMax: 3.5, notes: 'Estimulación faringe post.' },
      amplitude:    { unit: 'µV', range: '5 - 15 µV',   rangeMin: 5,   rangeMax: 15, notes: 'PANS.' },
      conductionVelocity: { unit: 'm/s', range: '≥ 45 m/s', rangeMin: 45, rangeMax: null, notes: 'Vel. sensitiva.' }
    },
    studyTechnique: {
      patientPositioning: 'Sentado, cuello extendido.',
      electrodeLocation: 'Motor: faríngeos con aguja o superficie; Sens.: base cráneo.',
      stimulationPoints: 'Motor: retroauricular; Sens.: pared faringe posterior.',
      specialConsiderations: 'Precaución reflejo nauseoso.'
    }
  },
  {
    id: 'vagus',
    commonName: 'Nervio Vago',
    anatomicalRegion: 'cranial',
    motorConduction: {
      distalLatency: { unit: 'ms', range: '3.0 - 5.0 ms', rangeMin: 3.0, rangeMax: 5.0, notes: 'Hasta cricotiroideo.' },
      amplitude:    { unit: 'mV', range: '0.5 - 2.5 mV', rangeMin: 0.5, rangeMax: 2.5, notes: 'Baja amplitud técnica.' }
    },
    studyTechnique: {
      patientPositioning: 'Supino, cuello ligeramente extendido.',
      electrodeLocation: 'Aguja o superficie en cricotiroideo; ref.: cartílago tiroides.',
      stimulationPoints: 'Borde ant. ECM nivel tiroides.',
      specialConsiderations: 'Monitorizar reflejo vago y ritmo cardíaco.'
    }
  }
];

// —— ARRAYS Y UTILIDADES COMBINADAS
export const allNerves: Nerve[] = [
  ...upperLimbNerves,
  ...lowerLimbNerves,
  ...cranialNerves
];

export const getNerveById = (id: string): Nerve | undefined =>
  allNerves.find(n => n.id === id);

export const getNervesByRegion = (region: 'upperLimb' | 'lowerLimb' | 'cranial'): Nerve[] =>
  allNerves.filter(n => n.anatomicalRegion === region);
