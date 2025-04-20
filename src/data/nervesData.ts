export interface NerveReferenceValue {
  value?: number | null;
  unit: string;
  rangeMin?: number;
  rangeMax?: number;
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
    ranges: {
      min: number;
      max: number;
      adjustment: string;
    }[];
  };
  gender?: {
    notes: string;
  };
  height?: {
    ranges: {
      min: number;
      max: number;
      adjustment: string;
    }[];
  };
  temperature?: {
    notes: string;
  };
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

// Upper Limb Nerves
export const upperLimbNerves: Nerve[] = [
  {
    id: 'median-wrist',
    commonName: 'Nervio Mediano',
    anatomicalRegion: 'upperLimb',
    specificAnatomicalRegion: 'Muñeca',
    motorConduction: {
      distalLatency: {
        unit: 'ms',
        range: '≤ 4.4 ms',
        rangeMin: 3.2,
        rangeMax: 4.2,
        notes: 'Medido desde el punto de estimulación en la muñeca hasta el músculo abductor corto del pulgar.'
      },
      amplitude: {
        unit: 'mV',
        range: '≥ 4 mV',
        rangeMin: 5,
        rangeMax: 25,
        notes: 'Potencial de acción muscular compuesto (PAMC).'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 50 m/s',
        rangeMin: 50,
        rangeMax: 60,
        notes: 'Calculado entre dos puntos de estimulación proximal y distal.'
      },
      fWave: {
        unit: 'ms',
        range: '26.8 - 31.4 ms',
        rangeMin: 26.8,
        rangeMax: 31.4,
        notes: 'Latencia mínima, evalúa la conducción proximal.'
      }
    },
    sensoryConduction: {
      peakLatency: {
        unit: 'ms',
        range: '3.0 - 3.4 ms',
        rangeMin: 3.0,
        rangeMax: 3.4,
        notes: 'Medido desde el punto de estimulación en el dedo hasta el electrodo de registro en la muñeca.'
      },
      amplitude: {
        unit: 'µV',
        range: '10 - 90 µV',
        rangeMin: 10,
        rangeMax: 90,
        notes: 'Potencial de acción del nervio sensitivo (PANS).'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 50 m/s',
        rangeMin: 50,
        rangeMax: null,
        notes: 'Calculado entre dos puntos a lo largo del nervio.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Paciente en decúbito supino con el brazo extendido y la palma hacia arriba.',
      electrodeLocation: 'Electrodo activo sobre el músculo abductor corto del pulgar, electrodo de referencia distal a la articulación metacarpofalángica del pulgar, electrodo de tierra entre el sitio de estimulación y el electrodo de registro.',
      stimulationPoints: 'Muñeca: aproximadamente 8 cm proximal al pliegue de la muñeca, entre los tendones del palmar largo y el flexor radial del carpo. Codo: aproximadamente 7 cm distal al pliegue del codo, medial al tendón del bíceps.',
      specialConsiderations: 'Asegurar un buen contacto de los electrodos con la piel. Evitar la estimulación directa de los vasos sanguíneos.'
    },
    multimedia: {
      techniquePhotoUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      anatomicalDiagramUrl: '/images/nerves/median-nerve-diagram.png'
    },
    adjustmentVariables: {
      age: {
        ranges: [
          { min: 0, max: 12, adjustment: '2.5 - 4.0 ms (latencia distal)' },
          { min: 13, max: 65, adjustment: '3.0 - 4.5 ms (latencia distal)' },
          { min: 66, max: 120, adjustment: '3.5 - 5.0 ms (latencia distal)' }
        ]
      },
      gender: {
        notes: 'No se requieren ajustes significativos por género para este nervio.'
      }
    }
  },
  {
    id: 'ulnar-wrist',
    commonName: 'Nervio Ulnar',
    anatomicalRegion: 'upperLimb',
    specificAnatomicalRegion: 'Muñeca',
    motorConduction: {
      distalLatency: {
        unit: 'ms',
        range: '≤ 3.3 ms',
        rangeMin: 2.7,
        rangeMax: 3.7,
        notes: 'Medido desde el punto de estimulación en la muñeca hasta el músculo abductor del meñique.'
      },
      amplitude: {
        unit: 'mV',
        range: '≥ 6 mV',
        rangeMin: 1.64,
        rangeMax: 9.56,
        notes: 'Amplitud del potencial de acción muscular compuesto (PAMC).'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 50 m/s',
        rangeMin: 50,
        rangeMax: 60,
        notes: 'Velocidad de conducción nerviosa motora.'
      },
      fWave: {
        unit: 'ms',
        range: '27.5 - 33.5 ms',
        rangeMin: 27.5,
        rangeMax: 33.5,
        notes: 'Latencia mínima, evalúa la conducción proximal.'
      }
    },
    sensoryConduction: {
      peakLatency: {
        unit: 'ms',
        range: '2.95 - 3.45 ms',
        rangeMin: 2.95,
        rangeMax: 3.45,
        notes: 'Latencia pico sensitiva.'
      },
      amplitude: {
        unit: 'µV',
        range: '15 - 50 µV',
        rangeMin: 15,
        rangeMax: 50,
        notes: 'Amplitud del potencial de acción nervioso sensitivo (PANS).'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 50 m/s',
        rangeMin: 50,
        rangeMax: null,
        notes: 'Velocidad de conducción nerviosa sensitiva.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Paciente en decúbito supino con el brazo extendido y la mano en posición neutra.',
      electrodeLocation: 'Electrodo activo sobre el músculo abductor del meñique, electrodo de referencia en la articulación metacarpofalángica del 5º dedo.',
      stimulationPoints: 'Muñeca: 8 cm proximal al electrodo activo, justo lateral al tendón del flexor carpi ulnaris. Bajo el codo: 3-4 cm distal al epicóndilo medial. Sobre el codo: 3-4 cm proximal al epicóndilo medial. Axila: lo más proximal posible en la axila.'
    },
    multimedia: {
      techniquePhotoUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'radial',
    commonName: 'Nervio Radial',
    anatomicalRegion: 'upperLimb',
    specificAnatomicalRegion: 'Antebrazo',
    motorConduction: {
      distalLatency: {
        unit: 'ms',
        range: '≤ 3.3 ms',
        rangeMin: 2.16,
        rangeMax: 3.04,
        notes: 'Latencia distal motora.'
      },
      amplitude: {
        unit: 'mV',
        range: '7.7 - 14 mV',
        rangeMin: 7.7,
        rangeMax: 14,
        notes: 'Amplitud motora.'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 50 m/s',
        rangeMin: 50,
        rangeMax: 60,
        notes: 'Velocidad de conducción motora.'
      }
    },
    sensoryConduction: {
      peakLatency: {
        unit: 'ms',
        range: '2.3 - 3.3 ms',
        rangeMin: 2.3,
        rangeMax: 3.3,
        notes: 'Latencia pico sensitiva.'
      },
      amplitude: {
        unit: 'µV',
        range: '4 - 75 µV',
        rangeMin: 4,
        rangeMax: 75,
        notes: 'Amplitud del potencial sensitivo.'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 50 m/s',
        rangeMin: 50,
        rangeMax: null,
        notes: 'Velocidad de conducción sensitiva.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Paciente sentado con el antebrazo en pronación moderada sobre una superficie plana.',
      electrodeLocation: 'Para el estudio motor: electrodo activo sobre el músculo extensor indicis proprius. Para el estudio sensitivo: electrodos de anillo en el primer espacio interdigital.',
      stimulationPoints: 'Antebrazo: lateral al tendón del bíceps en la fosa antecubital. Brazo: lateral al bíceps aproximadamente a mitad del húmero. Axila: lo más proximalmente posible.'
    }
  }
];

// Lower Limb Nerves
export const lowerLimbNerves: Nerve[] = [
  {
    id: 'tibial-ankle',
    commonName: 'Nervio Tibial',
    anatomicalRegion: 'lowerLimb',
    specificAnatomicalRegion: 'Tobillo',
    motorConduction: {
      distalLatency: {
        unit: 'ms',
        range: '< 5.0 ms',
        rangeMin: 2.9,
        rangeMax: 5.0,
        notes: 'Medido desde el punto de estimulación en el tobillo hasta el músculo abductor hallucis.'
      },
      amplitude: {
        unit: 'mV',
        range: '≥ 3 mV',
        rangeMin: 3,
        rangeMax: null,
        notes: 'Amplitud del potencial de acción muscular compuesto (PAMC).'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 40 m/s',
        rangeMin: 40,
        rangeMax: 50,
        notes: 'Velocidad de conducción nerviosa motora.'
      },
      fWave: {
        unit: 'ms',
        range: '48 - 56.6 ms',
        rangeMin: 48,
        rangeMax: 56.6,
        notes: 'Latencia mínima, evalúa la conducción proximal.'
      },
      hReflex: {
        unit: 'ms',
        range: '< 34 ms',
        rangeMin: null,
        rangeMax: 34,
        notes: 'Latencia del reflejo H, evalúa el arco reflejo monosináptico.'
      }
    },
    sensoryConduction: {
      peakLatency: {
        unit: 'ms',
        range: '3.4 - 4.0 ms',
        rangeMin: 3.4,
        rangeMax: 4.0,
        notes: 'Latencia pico del potencial de acción nervioso sensitivo (PANS).'
      },
      amplitude: {
        unit: 'µV',
        range: '5 - 30 µV',
        rangeMin: 5,
        rangeMax: 30,
        notes: 'Amplitud del potencial de acción nervioso sensitivo (PANS).'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 40 m/s',
        rangeMin: 40,
        rangeMax: null,
        notes: 'Velocidad de conducción nerviosa sensitiva.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Paciente en decúbito prono o supino con la pierna ligeramente flexionada y el pie en posición neutra.',
      electrodeLocation: 'Electrodo activo sobre el músculo abductor hallucis (parte medial del pie), electrodo de referencia sobre la primera articulación metatarsofalángica.',
      stimulationPoints: 'Tobillo: posterior al maléolo medial. Fosa poplítea: en el pliegue poplíteo, en la línea media.'
    },
    multimedia: {
      techniquePhotoUrl: 'https://images.unsplash.com/photo-1519056312048-72a52d2ef903?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'peroneal-ankle',
    commonName: 'Nervio Peroneo',
    anatomicalRegion: 'lowerLimb',
    specificAnatomicalRegion: 'Tobillo',
    motorConduction: {
      distalLatency: {
        unit: 'ms',
        range: '< 6.3 ms',
        rangeMin: 3.7,
        rangeMax: 6.3,
        notes: 'Medido desde el punto de estimulación en el tobillo hasta el músculo extensor digitorum brevis.'
      },
      amplitude: {
        unit: 'mV',
        range: '≥ 2 mV',
        rangeMin: 3.2,
        rangeMax: 5.6,
        notes: 'Amplitud del potencial de acción muscular compuesto (PAMC).'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 40 m/s',
        rangeMin: 40,
        rangeMax: 50,
        notes: 'Velocidad de conducción nerviosa motora.'
      },
      fWave: {
        unit: 'ms',
        range: '46.6 - 56 ms',
        rangeMin: 46.6,
        rangeMax: 56,
        notes: 'Latencia mínima, evalúa la conducción proximal.'
      }
    },
    sensoryConduction: {
      peakLatency: {
        unit: 'ms',
        range: '2.7 - 4.7 ms',
        rangeMin: 2.7,
        rangeMax: 4.7,
        notes: 'Latencia pico del potencial de acción nervioso sensitivo (PANS).'
      },
      amplitude: {
        unit: 'µV',
        range: '5 - 44 µV',
        rangeMin: 5,
        rangeMax: 44,
        notes: 'Amplitud del potencial de acción nervioso sensitivo (PANS).'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 40 m/s',
        rangeMin: 40,
        rangeMax: null,
        notes: 'Velocidad de conducción nerviosa sensitiva.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Paciente en decúbito supino con la pierna en posición neutra y el pie relajado.',
      electrodeLocation: 'Electrodo activo sobre el músculo extensor digitorum brevis, electrodo de referencia sobre el quinto metatarsiano.',
      stimulationPoints: 'Tobillo: lateral al tendón del tibial anterior. Debajo de la cabeza del peroné: 3-4 cm distal a la cabeza del peroné. Sobre la cabeza del peroné: en la cabeza del peroné, cuidando de no estimular el nervio tibial. Fosa poplítea: lateral a la línea media de la fosa poplítea.'
    }
  }
];

// Cranial Nerves
export const cranialNerves: Nerve[] = [
  {
    id: 'facial',
    commonName: 'Nervio Facial',
    anatomicalRegion: 'cranial',
    motorConduction: {
      distalLatency: {
        unit: 'ms',
        range: '< 4.5 ms',
        rangeMin: null,
        rangeMax: 4.5,
        notes: 'Latencia distal al músculo orbicular de los ojos.'
      },
      amplitude: {
        unit: 'mV',
        range: '≥ 1 mV',
        rangeMin: 1,
        rangeMax: null,
        notes: 'Amplitud del potencial de acción muscular compuesto (PAMC).'
      }
    },
    studyTechnique: {
      patientPositioning: 'Paciente sentado en posición cómoda con la cabeza en posición neutra.',
      electrodeLocation: 'Electrodo activo sobre el músculo orbicular de los ojos (lateral al canto externo), electrodo de referencia sobre el hueso temporal.',
      stimulationPoints: 'A nivel del trago, anterior al meato auditivo externo.',
      specialConsiderations: 'Considerar el uso de electrodos de aguja concéntrica para el registro en casos de atrofia muscular severa o edema facial significativo.'
    }
  },
  {
    id: 'trigeminal',
    commonName: 'Nervio Trigémino',
    anatomicalRegion: 'cranial',
    motorConduction: {
      distalLatency: {
        unit: 'ms',
        range: '< 3 ms',
        rangeMin: null,
        rangeMax: 3,
        notes: 'Latencia distal al músculo masetero.'
      },
      amplitude: {
        unit: 'mV',
        range: '≥ 2 mV',
        rangeMin: 2,
        rangeMax: null,
        notes: 'Amplitud del potencial de acción muscular compuesto (PAMC).'
      }
    },
    studyTechnique: {
      patientPositioning: 'Paciente sentado en posición cómoda con la cabeza en posición neutra.',
      electrodeLocation: 'Electrodo activo sobre el músculo masetero, electrodo de referencia sobre el arco cigomático.',
      stimulationPoints: 'Rama motora del nervio trigémino: anterior al trago, superior al arco cigomático.'
    }
  }
];

// Combined array with all nerves
export const allNerves: Nerve[] = [
  ...upperLimbNerves,
  ...lowerLimbNerves,
  ...cranialNerves
];

// Function to get a nerve by its ID
export const getNerveById = (id: string): Nerve | undefined => {
  return allNerves.find(nerve => nerve.id === id);
};

// Function to get nerves by anatomical region
export const getNervesByRegion = (region: 'upperLimb' | 'lowerLimb' | 'cranial'): Nerve[] => {
  return allNerves.filter(nerve => nerve.anatomicalRegion === region);
};