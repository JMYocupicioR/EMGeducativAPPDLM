// src/types/nerves.ts
export interface ReferenceValue {
  value: string | null;
  unit: string;
  normalRange: string;
  notes?: string;
}

export interface MotorConduction {
  distalLatency: ReferenceValue;
  amplitude: ReferenceValue;
  conductionVelocity: ReferenceValue;
  fWave?: ReferenceValue;
  hReflex?: ReferenceValue;
}

export interface SensoryConduction {
  peakLatency: ReferenceValue;
  amplitude: ReferenceValue;
  conductionVelocity: ReferenceValue;
}

export interface StudyTechnique {
  patientPositioning: string;
  electrodeLocation: string;
  stimulationPoints: string;
  specialConsiderations: string;
}

export interface MultimediaMaterial {
  techniqueImageUrl?: string;
  demoVideoUrl?: string;
  anatomicalDiagramUrl?: string;
}

export interface AdjustmentVariables {
  age?: {
    ranges: {
      min: number;
      max: number;
      adjustments: { [key: string]: string };
    }[];
  };
  gender?: {
    notes: string;
  };
}

export interface Nerve {
  id: string;
  commonName: string;
  anatomicalRegion: "Upper Limb" | "Lower Limb" | "Head and Neck";
  specificAnatomicalSubregion?: string;
  motorConduction?: MotorConduction;
  sensoryConduction?: SensoryConduction;
  studyTechnique: StudyTechnique;
  multimediaMaterial?: MultimediaMaterial;
  adjustmentVariables?: AdjustmentVariables;
}