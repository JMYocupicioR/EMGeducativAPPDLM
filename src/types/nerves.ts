// src/types/nerves.ts

/**
 * Interfaz corregida para valores de referencia, basada en la estructura de nervesData.ts
 */
export interface NerveReferenceValue {
  unit: string;           // Unidad de medida (e.g., 'ms', 'mV', 'µV', 'm/s')
  range: string;          // Rango descriptivo como string (e.g., '≤ 4.4 ms', '≥ 4 mV')
  rangeMin?: number | null; // Valor numérico mínimo del rango (opcional)
  rangeMax?: number | null; // Valor numérico máximo del rango (opcional)
  notes?: string;         // Notas explicativas adicionales (opcional)
  // Se eliminan 'value' y 'normalRange' de la versión anterior que no coincidían
}

/**
 * Define la estructura para los datos de conducción motora.
 * Usa la interfaz NerveReferenceValue corregida.
 */
export interface MotorNerveConduction {
  distalLatency: NerveReferenceValue;
  amplitude: NerveReferenceValue;
  conductionVelocity: NerveReferenceValue;
  fWave?: NerveReferenceValue;         // Opcional, ya que no todos los nervios lo tienen
  hReflex?: NerveReferenceValue;       // Opcional
}

/**
 * Define la estructura para los datos de conducción sensitiva.
 * Usa la interfaz NerveReferenceValue corregida.
 */
export interface SensoryNerveConduction {
  peakLatency: NerveReferenceValue;
  amplitude: NerveReferenceValue;
  conductionVelocity: NerveReferenceValue;
}

/**
 * Define la estructura para la técnica de estudio.
 */
export interface StudyTechnique {
  patientPositioning: string;
  electrodeLocation: string;
  stimulationPoints: string;
  specialConsiderations?: string;     // Opcional
}

/**
 * Define la estructura para contenido multimedia (renombrada de MultimediaMaterial).
 */
export interface MultimediaContent { // Renombrada para coincidir con nervesData.ts
  techniquePhotoUrl?: string;       // Opcional
  demoVideoUrl?: string;            // Opcional (mantenida aunque no vista en datos)
  anatomicalDiagramUrl?: string;    // Opcional (mantenida aunque no vista en datos)
}

/**
 * Define la estructura para variables de ajuste.
 */
export interface AdjustmentVariables {
  age?: {
    ranges: {
      min: number;
      max: number;
      adjustment: string; // Mantenido como string según los datos actuales
    }[];
  };
  gender?: {
    notes: string;
  };
  height?: { // Mantenida aunque no vista en datos actuales
    ranges: {
      min: number;
      max: number;
      adjustment: string;
    }[];
  };
  temperature?: { // Mantenida aunque no vista en datos actuales
    notes: string;
  };
}

/**
 * Interfaz principal para un nervio, usando las interfaces corregidas
 * y ajustando tipos/opcionalidad según nervesData.ts.
 */
export interface Nerve {
  id: string;
  commonName: string;
  // Tipo ajustado a los valores literales usados en los datos
  anatomicalRegion: 'upperLimb' | 'lowerLimb' | 'cranial';
  specificAnatomicalRegion?: string; // Opcional
  motorConduction?: MotorNerveConduction;   // Opcional
  sensoryConduction?: SensoryNerveConduction; // Opcional
  studyTechnique: StudyTechnique;        // No opcional (parece siempre presente)
  multimedia?: MultimediaContent;        // Opcional (renombrada)
  adjustmentVariables?: AdjustmentVariables;// Opcional
}