// src/content/modules/module-11-quick-reference.ts
import { Module } from '../../types/content';

export const module11: Module = {
  id: 'quick-reference',
  number: 11,
  title: 'Referencia Rápida y Tablas Clínicas',
  titleEn: 'Quick Reference and Clinical Tables',
  emoji: '📊',
  description: 'Valores normales, tablas de ondas F, reflejo H, PESS, miotomas y dermatomas',
  descriptionEn: 'Normal values, F wave tables, H reflex, SSEP, myotomes and dermatomes',
  color: 'from-sky-500 to-sky-700',
  icon: 'Table',
  topics: [
    { id: 'normal-values', title: 'Valores Normales AANEM / NDTF', content: 'Criterios AANEM estandarizados internacionalmente a 32°C. Motores: Mediano (LMD ≤4.4ms, Amp ≥4mV, VCM ≥50m/s). Ulnar (LMD ≤3.3ms, Amp ≥6mV, VCM ≥50m/s). Tibial (LMD ≤5.0ms, Amp ≥3mV, VCM ≥40m/s). Peroneo (LMD ≤6.3ms, Amp ≥2mV, VCM ≥40m/s). Sensitivos: Mediano (LP ≤3.4ms, Amp ≥10µV, VCS ≥50m/s). Sural (LP ≤4.0ms, Amp ≥5µV). Temperatura: Cutánea MANDATORIA >32°C brazos, >30°C piernas.' },
    { id: 'block-vs-dispersion', title: 'Bloqueo Quirúrgico vs Dispersión Temporal', content: 'CRITERIO ESTRICTO EMG: "Bloqueo de Conducción Verdadero" = Caída de amplitud y área proximal/distal >50% CON un incremento de duración proximal estricto <30%. "Dispersión Temporal Clásica" = Caída de amplitud prominente PERO con ensanchamiento de duración >30% (producto de la desincronización de fibras lentas/rápidas, patognomónico de desmielinización adquirida como CIDP).' },
    { id: 'f-wave-tables', title: 'Latencias de Onda F y Criterios', content: 'Latencia mínima (depende de la estatura: <170cm vs >170cm). Mediano: 24-31ms. Ulnar: 24-32ms. Tibial: 44-58ms. Peroneo: 44-56ms. Criterios anormalidad radicular temprana: Ausencia absoluta unilateral, Persistencia <50% en brazo o <30% en pierna, asimetría de latencia >2ms, o Cronodispersión masiva >10 ms.' },
    { id: 'h-reflex-tables', title: 'Reflejo H (S1 / Tibial-Sóleo)', content: 'Latencia LMD <34 ms (estatura dependiente absoluta). Criterio de radiculopatía S1 severa inicial: asimetría de latencia lado-a-lado >1.5 ms. Relación de voltaje H/M normal: 0.3 a 0.7.' },
    { id: 'ssep-vep-tables', title: 'PESS y Valores Centrales PEV', content: 'PEV P100 visual: ≤115 ms (desmielinización nervio óptico). PESS Mediano (N20): ≤22 ms. Tiempo de Conducción Central PESS Mediano (N13-N20) límite patológico <6.0 ms. PESS Tibial (P37): ≤45 ms. PEATC (Tallo cerebral): Onda I a V ≤4.4 ms de tiempo interpico absoluto.' },
    { id: 'segmental-table', title: 'Miotomas Segmentarios Clínicos', content: 'C5: deltoides, supraespinoso. C6: bíceps, braquiorradial. C7: tríceps, flexor carpo, extensor digital. C8: flexor profundo, abductor meñique. T1: interóseos mano. L4: cuádriceps femoral, tibial anterior. L5: extensor profundo hallux, glúteo medio. S1: gastrocnemio medial, glúteo mayor plantar.' },
    { id: 'dermatome-table', title: 'Dermatomas y Referencia Táctil', content: 'C5: cara lateral del brazo, C6: reborde pulgar, C7: dedo central medio, C8: dedo meñique distal T1: antebrazo interno. L4: tobillo medial tibial, L5: tobillo lateral y tres dígitos pie dorsales, S1: talón plantar.' },
    { id: 'emg-muscle-table', title: 'Protocolos Musculares Needle EMG', content: 'Radiculopatía Cervical: examinar mínimo 6 músculos de raíz C5 a T1 suplidos por al menos 3 nervios periféricos distintos, más paraespinal cervical. Lumbosacra: 6 músculos L2-S1 (femoral/obturador/ciático) + paraespinal S1. Esclerosis Lateral Aminotrófica (ALS): OBLIGATORIO escaneo de 4 esferas: Bulbar (lengua), Cervical, Torácica, Lumbosacra.' },
  ]
};
