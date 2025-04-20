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


// —— NERVIOS MIEMBRO SUPERIOR

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
        range: '44.2 - 51.6 m/s',
        rangeMin: 44.2,
        rangeMax: 51.6,
        notes: 'Velocidad de conducción motora.'
      }
    },
    sensoryConduction: {
      peakLatency: {
        unit: 'ms',
        range: '3.0 - 3.4 ms',
        rangeMin: 3.0,
        rangeMax: 3.4,
        notes: 'Medido desde el punto de estimulación digital hasta la muñeca.'
      },
      amplitude: {
        unit: 'µV',
        range: '10 - 90 µV',
        rangeMin: 10,
        rangeMax: 90,
        notes: 'Potencial sensitivo.'
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
      patientPositioning: 'Paciente sentado con el brazo extendido y la palma hacia arriba.',
      electrodeLocation: 'Electrodo activo sobre el músculo abductor corto del pulgar; referencia en la articulación metacarpofalángica.',
      stimulationPoints: 'Muñeca: 8 cm proximal al pliegue de la muñeca. Codo: medial al tendón del bíceps, 7 cm distal al pliegue del codo.',
      specialConsiderations: 'Verificar posición neutra de la muñeca. Evitar compresión vascular durante estimulación.'
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
        notes: 'Potencial de acción muscular compuesto (PAMC).'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 50 m/s',
        rangeMin: 50,
        rangeMax: 60,
        notes: 'Velocidad de conducción motora.'
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
        notes: 'Potencial de acción nervioso sensitivo (PANS).'
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
      patientPositioning: 'Paciente en decúbito supino con el brazo extendido y la mano en posición neutra.',
      electrodeLocation: 'Electrodo activo sobre el músculo abductor del meñique; referencia en la articulación metacarpofalángica del 5º dedo.',
      stimulationPoints: 'Muñeca: 8 cm proximal al electrodo activo. Codo: 3–4 cm distal al epicóndilo medial. Axila: estimulación supraclavicular.'
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
        notes: 'Potencial sensitivo.'
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
      electrodeLocation: 'Electrodo activo sobre el músculo extensor indicis proprius; para sensitivo, electrodos de anillo en primer espacio interdigital.',
      stimulationPoints: 'Antebrazo: lateral al tendón del bíceps. Brazo: lateral a mitad del húmero. Axila: proximal.'
    }
  },
  {
    id: 'musculocutaneous',
    commonName: 'Nervio Musculocutáneo',
    anatomicalRegion: 'upperLimb',
    specificAnatomicalRegion: 'Brazo',
    motorConduction: {
      distalLatency: {
        unit: 'ms',
        range: '3.9 ± 0.5 ms',
        rangeMin: 3.4,
        rangeMax: 4.4,
        notes: 'Desde fosa axilar hasta bíceps braquial.'
      },
      amplitude: {
        unit: 'mV',
        range: '3.8 - 21 mV',
        rangeMin: 3.8,
        rangeMax: 21,
        notes: 'PAMC.'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 50 m/s',
        rangeMin: 50,
        rangeMax: null,
        notes: 'Velocidad motora.'
      }
    },
    sensoryConduction: {
      peakLatency: {
        unit: 'ms',
        range: '2.7 ± 0.2 ms',
        rangeMin: 2.5,
        rangeMax: 2.9,
        notes: 'Desde antebrazo lateral hasta registro.'
      },
      amplitude: {
        unit: 'µV',
        range: '10 - 30 µV',
        rangeMin: 10,
        rangeMax: 30,
        notes: 'Potencial sensitivo.'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '63 ± 5 m/s',
        rangeMin: 58,
        rangeMax: 68,
        notes: 'Velocidad sensitiva.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Paciente en decúbito supino, brazo abducido y codo a 90°.',
      electrodeLocation: 'Para motor: bíceps braquial; para sensitivo: antebrazo lateral a 12 cm del codo.',
      stimulationPoints: 'Axilar, supraclavicular y brazo; sensitivo antebrazo lateral.',
      specialConsiderations: 'Evitar contaminar con estímulo mediano.'
    },
    multimedia: {
      techniquePhotoUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'suprascapular',
    commonName: 'Nervio Supraescapular',
    anatomicalRegion: 'upperLimb',
    specificAnatomicalRegion: 'Hombro',
    motorConduction: {
      distalLatency: {
        unit: 'ms',
        range: '1.7 - 3.7 ms',
        rangeMin: 1.7,
        rangeMax: 3.7,
        notes: 'Latencia distal al supraespinoso.'
      },
      amplitude: {
        unit: 'mV',
        range: '1.2 - 12.6 mV',
        rangeMin: 1.2,
        rangeMax: 12.6,
        notes: 'PAMC.'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 60 m/s',
        rangeMin: 60,
        rangeMax: null,
        notes: 'Velocidad motora.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Sentado o prono, brazo colgando.',
      electrodeLocation: 'Supraespinoso y referencia en espina de escápula.',
      stimulationPoints: 'Punto de Erb supraclavicular o escotadura supraescapular.'
    }
  },
  {
    id: 'axillary',
    commonName: 'Nervio Axilar',
    anatomicalRegion: 'upperLimb',
    specificAnatomicalRegion: 'Hombro',
    motorConduction: {
      distalLatency: {
        unit: 'ms',
        range: '3.9 ± 0.4 ms',
        rangeMin: 3.5,
        rangeMax: 4.3,
        notes: 'Latencia distal al deltoides.'
      },
      amplitude: {
        unit: 'mV',
        range: '5 - 15 mV',
        rangeMin: 5,
        rangeMax: 15,
        notes: 'Amplitud deltoides.'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 50 m/s',
        rangeMin: 50,
        rangeMax: null,
        notes: 'Velocidad motora.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Decúbito lateral o sentado con brazo relajado.',
      electrodeLocation: 'Deltoides medio y referencia en inserción distal.',
      stimulationPoints: 'Erb y hueco axilar posterior.',
      specialConsiderations: 'Puede requerir aguja de estimulación.'
    }
  },
  // Add these entries to the upperLimbNerves array
{
  id: 'musculocutaneous',
  commonName: 'Nervio Musculocutáneo',
  anatomicalRegion: 'upperLimb',
  specificAnatomicalRegion: 'Brazo',
  motorConduction: {
    distalLatency: {
      unit: 'ms',
      range: '3.9 ± 0.5 ms',
      rangeMin: 3.4,
      rangeMax: 4.4,
      notes: 'Latencia distal al músculo bíceps braquial.'
    },
    amplitude: {
      unit: 'mV',
      range: '3.8 - 21 mV',
      rangeMin: 3.8,
      rangeMax: 21,
      notes: 'Amplitud del potencial de acción muscular compuesto (PAMC).'
    },
    conductionVelocity: {
      unit: 'm/s',
      range: '≥ 50 m/s',
      rangeMin: 50,
      rangeMax: 70,
      notes: 'Velocidad de conducción motora.'
    }
  },
  sensoryConduction: {
    peakLatency: {
      unit: 'ms',
      range: '2.5 - 3.1 ms',
      rangeMin: 2.5,
      rangeMax: 3.1,
      notes: 'Medido desde el punto de estimulación en el antebrazo lateral hasta el electrodo de registro en el codo.'
    },
    amplitude: {
      unit: 'µV',
      range: '10 - 30 µV',
      rangeMin: 10,
      rangeMax: 30,
      notes: 'Amplitud del potencial de acción nervioso sensitivo (PANS).'
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
    patientPositioning: 'Paciente en decúbito supino con el brazo en abducción leve y el codo flexionado a 90 grados.',
    electrodeLocation: 'Electrodo activo sobre el vientre muscular del bíceps braquial, electrodo de referencia sobre la inserción distal del tendón del bíceps.',
    stimulationPoints: 'Punto Erb: en el surco supraclavicular, aproximadamente 1 cm por encima de la clavícula. Axila: en la axila, lateral al proceso coracoide.',
    specialConsiderations: 'Evitar el desplazamiento del electrodo durante la contracción muscular, especialmente en estudios comparativos bilaterales.'
  }
},
{
  id: 'axillary',
  commonName: 'Nervio Axilar',
  anatomicalRegion: 'upperLimb',
  specificAnatomicalRegion: 'Hombro',
  motorConduction: {
    distalLatency: {
      unit: 'ms',
      range: '4.5 ± 0.6 ms',
      rangeMin: 3.9,
      rangeMax: 5.1,
      notes: 'Latencia distal al músculo deltoides.'
    },
    amplitude: {
      unit: 'mV',
      range: '5.7 ± 2.0 mV',
      rangeMin: 3.7,
      rangeMax: 7.7,
      notes: 'Amplitud del potencial de acción muscular compuesto (PAMC).'
    },
    conductionVelocity: {
      unit: 'm/s',
      range: '≥ 50 m/s',
      rangeMin: 50,
      rangeMax: 70,
      notes: 'Velocidad de conducción nerviosa motora.'
    }
  },
  studyTechnique: {
    patientPositioning: 'Paciente en decúbito lateral o sentado con el brazo en abducción moderada.',
    electrodeLocation: 'Electrodo activo sobre el músculo deltoides (porción media), electrodo de referencia sobre el acromion.',
    stimulationPoints: 'Punto Erb: en el surco supraclavicular. Fosa axilar: posterior a la arteria axilar en la fosa axilar.',
    specialConsiderations: 'Este estudio puede ser técnicamente difícil debido a la profundidad del nervio. La estimulación en el punto Erb también activará otros nervios del plexo braquial.'
  }
},
{
  id: 'suprascapular',
  commonName: 'Nervio Supraescapular',
  anatomicalRegion: 'upperLimb',
  specificAnatomicalRegion: 'Hombro',
  motorConduction: {
    distalLatency: {
      unit: 'ms',
      range: '3.9 ± 0.4 ms',
      rangeMin: 3.5,
      rangeMax: 4.3,
      notes: 'Latencia distal al músculo supraespinoso o infraespinoso.'
    },
    amplitude: {
      unit: 'mV',
      range: '5 - 15 mV',
      rangeMin: 5,
      rangeMax: 15,
      notes: 'Amplitud del potencial de acción muscular compuesto (PAMC).'
    },
    conductionVelocity: {
      unit: 'm/s',
      range: '≥ 60 m/s',
      rangeMin: 60,
      rangeMax: 75,
      notes: 'Velocidad de conducción nerviosa motora.'
    }
  },
  studyTechnique: {
    patientPositioning: 'Paciente en decúbito prono o sentado con los brazos a los lados.',
    electrodeLocation: 'Electrodo activo sobre el músculo supraespinoso (para supraespinoso) o sobre la fosa infraespinosa (para infraespinoso), electrodo de referencia sobre el acromion o espina de la escápula.',
    stimulationPoints: 'Punto Erb: en el surco supraclavicular. Escotadura supraescapular: medial al borde lateral de la espina de la escápula.',
    specialConsiderations: 'Este nervio es susceptible a la compresión en la escotadura supraescapular. La estimulación en el punto Erb también activará otros nervios del plexo braquial.'
  },
  multimedia: {
    techniquePhotoUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80'
  }
},
{
  id: 'long-thoracic',
  commonName: 'Nervio Torácico Largo',
  anatomicalRegion: 'upperLimb',
  specificAnatomicalRegion: 'Tórax',
  motorConduction: {
    distalLatency: {
      unit: 'ms',
      range: '3.9 ± 0.4 ms',
      rangeMin: 3.5,
      rangeMax: 4.3,
      notes: 'Latencia distal al músculo serrato anterior.'
    },
    amplitude: {
      unit: 'mV',
      range: '3 - 7 mV',
      rangeMin: 3,
      rangeMax: 7,
      notes: 'Amplitud del potencial de acción muscular compuesto (PAMC).'
    },
    conductionVelocity: {
      unit: 'm/s',
      range: '≥ 60 m/s',
      rangeMin: 60,
      rangeMax: 75,
      notes: 'Velocidad de conducción nerviosa motora.'
    }
  },
  studyTechnique: {
    patientPositioning: 'Paciente en decúbito lateral o sentado con el brazo ligeramente elevado para exponer el músculo serrato anterior.',
    electrodeLocation: 'Electrodo activo sobre el músculo serrato anterior a nivel del 5º-7º espacio intercostal en la línea axilar media, electrodo de referencia sobre la costilla adyacente.',
    stimulationPoints: 'Punto Erb: en el surco supraclavicular. Cuello: a nivel de C5-C7, posterior al músculo esternocleidomastoideo.',
    specialConsiderations: 'Este estudio puede ser técnicamente difícil debido a la profundidad del nervio y la interferencia del volumen conducido desde los músculos torácicos adyacentes. La parálisis del serrato anterior causa escápula alada.'
  }
},
{
  id: 'dorsal-scapular',
  commonName: 'Nervio Dorsal Escapular',
  anatomicalRegion: 'upperLimb',
  specificAnatomicalRegion: 'Espalda',
  motorConduction: {
    distalLatency: {
      unit: 'ms',
      range: '3.9 ± 0.5 ms',
      rangeMin: 3.4,
      rangeMax: 4.4,
      notes: 'Latencia distal al músculo romboides mayor.'
    },
    amplitude: {
      unit: 'mV',
      range: '2 - 5 mV',
      rangeMin: 2,
      rangeMax: 5,
      notes: 'Amplitud del potencial de acción muscular compuesto (PAMC).'
    },
    conductionVelocity: {
      unit: 'm/s',
      range: '≥ 60 m/s',
      rangeMin: 60,
      rangeMax: 75,
      notes: 'Velocidad de conducción nerviosa motora.'
    }
  },
  studyTechnique: {
    patientPositioning: 'Paciente en decúbito prono con los brazos a los lados o sentado con el tronco ligeramente flexionado hacia adelante.',
    electrodeLocation: 'Electrodo activo sobre el músculo romboides mayor (medial al borde medial de la escápula), electrodo de referencia sobre la espina de la escápula.',
    stimulationPoints: 'Cuello: a nivel de C5, posterior al músculo esternocleidomastoideo.',
    specialConsiderations: 'Este estudio generalmente requiere el uso de electrodos de aguja para el registro debido a la profundidad del músculo romboides. La lesión de este nervio puede causar debilidad en la aducción de la escápula.'
  }
}
];


// —— NERVIOS MIEMBRO INFERIOR

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
      electrodeLocation: 'Electrodo activo sobre el músculo extensor digitorum brevis; referencia sobre el quinto metatarsiano.',
      stimulationPoints: 'Tobillo: lateral al tendón del tibial anterior. Debajo de cabeza del peroné: 3–4 cm distal. Fosa poplítea: lateral a la línea media.'
    }
  },
  {
    id: 'femoral',
    commonName: 'Nervio Femoral',
    anatomicalRegion: 'lowerLimb',
    specificAnatomicalRegion: 'Muslo',
    motorConduction: {
      distalLatency: {
        unit: 'ms',
        range: '< 6.0 ms',
        rangeMin: 3.5,
        rangeMax: 6.0,
        notes: 'Medido desde el punto de estimulación en el pliegue inguinal hasta el músculo cuádriceps.'
      },
      amplitude: {
        unit: 'mV',
        range: '≥ 4 mV',
        rangeMin: 4,
        rangeMax: null,
        notes: 'Amplitud del PAMC.'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 40 m/s',
        rangeMin: 40,
        rangeMax: 55,
        notes: 'Velocidad de conducción motora.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Paciente en decúbito supino, pierna abducida y rotada externamente.',
      electrodeLocation: 'Electrodo activo sobre vasto medial del cuádriceps; referencia sobre la rótula.',
      stimulationPoints: 'Pliegue inguinal lateral a la arteria femoral.',
      specialConsiderations: 'Puede ser difícil lograr supramáximo por la profundidad del nervio.'
    }
  },
  {
    id: 'saphenous',
    commonName: 'Nervio Safeno',
    anatomicalRegion: 'lowerLimb',
    specificAnatomicalRegion: 'Pierna',
    sensoryConduction: {
      peakLatency: {
        unit: 'ms',
        range: '3.2 - 4.0 ms',
        rangeMin: 3.2,
        rangeMax: 4.0,
        notes: 'Latencia pico sensitiva.'
      },
      amplitude: {
        unit: 'µV',
        range: '4 - 12 µV',
        rangeMin: 4,
        rangeMax: 12,
        notes: 'Amplitud del PANS.'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 40 m/s',
        rangeMin: 40,
        rangeMax: null,
        notes: 'Velocidad sensitiva.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Decúbito supino, pierna ligeramente flexionada.',
      electrodeLocation: 'Registro en cara medial de la pierna, 10 cm por encima del maléolo.',
      stimulationPoints: 'Aspecto medial de la rodilla, 3 cm medial a la rótula.'
    }
  },
  {
    id: 'sural',
    commonName: 'Nervio Sural',
    anatomicalRegion: 'lowerLimb',
    specificAnatomicalRegion: 'Tobillo',
    sensoryConduction: {
      peakLatency: {
        unit: 'ms',
        range: '3.4 - 4.0 ms',
        rangeMin: 3.4,
        rangeMax: 4.0,
        notes: 'Latencia pico del PANS.'
      },
      amplitude: {
        unit: 'µV',
        range: '5 - 30 µV',
        rangeMin: 5,
        rangeMax: 30,
        notes: 'Amplitud del PANS.'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 40 m/s',
        rangeMin: 40,
        rangeMax: null,
        notes: 'Velocidad sensitiva.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Decúbito lateral o prono, tobillo ligeramente flexionado.',
      electrodeLocation: 'Registro posterior y distal al maléolo lateral.',
      stimulationPoints: 'Pantorrilla: 10–14 cm proximal a registros.'
    },
    multimedia: {
      techniquePhotoUrl: 'https://images.unsplash.com/photo-1512482170774-7ba3f9b13518?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'superficial-peroneal',
    commonName: 'Nervio Peroneo Superficial',
    anatomicalRegion: 'lowerLimb',
    specificAnatomicalRegion: 'Pierna',
    sensoryConduction: {
      peakLatency: {
        unit: 'ms',
        range: '2.6 - 3.2 ms',
        rangeMin: 2.6,
        rangeMax: 3.2,
        notes: 'Latencia pico del PANS.'
      },
      amplitude: {
        unit: 'µV',
        range: '14 - 26 µV',
        rangeMin: 14,
        rangeMax: 26,
        notes: 'Amplitud del PANS.'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 40 m/s',
        rangeMin: 40,
        rangeMax: null,
        notes: 'Velocidad sensitiva.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Decúbito supino con pierna extendida.',
      electrodeLocation: 'Registro en dorso del pie, entre 1º y 2º metatarsiano.',
      stimulationPoints: 'Tercio inferior lateral de pierna, 10–14 cm proximal al maléolo.'
    }
  },
  {
    id: 'lateral-femoral-cutaneous',
    commonName: 'Nervio Femorocutáneo Lateral',
    anatomicalRegion: 'lowerLimb',
    specificAnatomicalRegion: 'Muslo',
    sensoryConduction: {
      peakLatency: {
        unit: 'ms',
        range: '2.4 - 2.6 ms',
        rangeMin: 2.4,
        rangeMax: 2.6,
        notes: 'Latencia pico del potencial sensitivo.'
      },
      amplitude: {
        unit: 'µV',
        range: '10 - 25 µV',
        rangeMin: 10,
        rangeMax: 25,
        notes: 'Amplitud del PANS.'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '43 - 55 m/s',
        rangeMin: 43,
        rangeMax: 55,
        notes: 'Velocidad sensitiva.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Decúbito supino, pierna en neutro.',
      electrodeLocation: 'Registro en cara lateral del muslo, 10–15 cm distal a espina ilíaca anterosuperior.',
      stimulationPoints: '2 cm medial e inferior a la espina ilíaca anterosuperior.',
      specialConsiderations: 'Baja amplitud en obesos; promediar varias respuestas.'
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
        notes: 'Amplitud del PAMC.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Sentado con la cabeza en posición neutra.',
      electrodeLocation: 'Orbicular de los ojos y referencia en hueso temporal.',
      stimulationPoints: 'Trago, anterior al meato auditivo externo.',
      specialConsiderations: 'Usar electrodos de aguja si hay atrofia o edema.'
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
        notes: 'Amplitud del PAMC.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Sentado con la cabeza en neutro.',
      electrodeLocation: 'Masetero y referencia sobre arco cigomático.',
      stimulationPoints: 'Anterior al trago, superior al arco cigomático.'
    }
  },
  {
    id: 'accessory',
    commonName: 'Nervio Accesorio Espinal',
    anatomicalRegion: 'cranial',
    motorConduction: {
      distalLatency: {
        unit: 'ms',
        range: '2.5 - 4.0 ms',
        rangeMin: 2.5,
        rangeMax: 4.0,
        notes: 'Latencia distal al trapecio.'
      },
      amplitude: {
        unit: 'mV',
        range: '≥ 3 mV',
        rangeMin: 3,
        rangeMax: null,
        notes: 'Amplitud del PAMC.'
      },
      conductionVelocity: {
        unit: 'm/s',
        range: '≥ 55 m/s',
        rangeMin: 55,
        rangeMax: null,
        notes: 'Velocidad motora.'
      }
    },
    studyTechnique: {
      patientPositioning: 'Sentado o decúbito supino con cabeza girada al lado opuesto.',
      electrodeLocation: 'Trapecio superior y referencia en clavícula.',
      stimulationPoints: 'A lo largo de borde posterior del esternocleidomastoideo.',
      specialConsiderations: 'Confirmar contracción aislada del trapecio.'
    },
    multimedia: {
      techniquePhotoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80'
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
