// src/content/modules/module-10-diagnostic-criteria.ts
import { Module } from '../../types/content';

export const module10: Module = {
  id: 'diagnostic-criteria',
  number: 10,
  title: 'Criterios Diagnósticos y Algoritmos Clínicos',
  titleEn: 'Diagnostic Criteria and Clinical Algorithms',
  emoji: '📋',
  description: 'Criterios de desmielinización, ELA, NMM, UNM y algoritmos diagnósticos',
  descriptionEn: 'Demyelination criteria, ALS, MMN, NMJ and diagnostic algorithms',
  color: 'from-slate-500 to-slate-800',
  icon: 'ClipboardList',
  topics: [
    { id: 'cidp-criteria', title: 'Criterios de CIDP (EAN/PNS 2021)', content: 'Las guías EAN/PNS 2021 reemplazan las EFNS 2010. Ya no existe "CIDP probable", solo "CIDP" y "CIDP posible". Obligan a demostrar anomalías en la neuroconducción sensitiva para diagnosticar CIDP típica. Definen explícitamente variantes: multifocal, focal, distal, motora y sensitiva. Se requieren 2 nervios motores con desmielinización (VCM ≤70% LIN, LMD ≥50% LSN, dispersión >30%, onda F ausente/prolongada).' },
    { id: 'als-criteria', title: 'Criterios de ELA (Gold Coast 2019)', content: 'Los criterios Gold Coast 2019 reemplazan a El Escorial/Awaji por ser más simples y sensibles. Eliminan las categorías "probable" y "posible". Requieren: 1) deterioro motor progresivo, 2) disfunción UMN+LMN en ≥1 región, o LMN en ≥2 regiones, y 3) exclusión de otras causas. En EMG, las fasciculaciones complejas/inestables tienen el mismo peso diagnóstico que fibrilaciones/PSW para documentar denervación activa.' },
    { id: 'gbs-subtypes', title: 'Criterios de SGB y Subtipos', content: 'Criterios de Hadden, Ho y Rajabally diferencian AIDP vs AMAN/AMSAN. Se requieren estudios seriados, ya que el estudio inicial puede clasificar erróneamente. AMAN puede mostrar Fallo de Conducción Reversible (RCF) por ataque a los nodos de Ranvier que simula bloqueo desmielinizante rápido. Patrón pronóstico de GBS: la amplitud baja del CMAP es el mejor predictor de mala recuperación.' },
    { id: 'mfs-criteria', title: 'Síndrome de Miller Fisher (MFS)', content: 'Variante craneal del SGB. Tríada clínica: oftalmoplejía, ataxia y arreflexia. Biomarcador: anticuerpos anti-GQ1b IgG altamente específicos. Hallazgos electrodiagnósticos: SNAPs reducidos o ausentes (muy característico), CMAPs preservados inicialmente, reflejo H y ondas F ausentes. La latencia del parpadeo (blink reflex) R1 y R2 suele estar prolongada o ausente.' },
    { id: 'mmn-criteria', title: 'Criterios de Bloqueo de Conducción (NMM)', content: 'Criterios definitivos para NMM: bloqueo de conducción motor definido en ≥1 nervio fuera de sitios de atrapamiento clásicos, con SNAP normal en ese nervio. Caída de CMAP >50% en amplitud o área. Los nervios sensitivos del mismo nervio deben ser normales (a diferencia de CIDP).' },
    { id: 'nmj-criteria', title: 'Criterios de la Unión Neuromuscular', content: 'Miastenia Gravis: decremento >10% en ENR a 2-3 Hz. Jitter aumentado en SFEMG (>95% sensibilidad). Lambert-Eaton: CMAP basal bajo con incremento >100% post-ejercicio o ENR a alta frecuencia. Ambos: siempre correlacionar con clínica y anticuerpos.' },
    { id: 'diagnostic-algorithms', title: 'Algoritmos Diagnósticos', children: [
      { id: 'upper-limb-weakness', title: 'Flujograma: debilidad de miembro superior', content: 'Debilidad MS → NCS motoras y sensitivas mediano/ulnar/radial + EMG de músculos proximales y distales. Si NCS anormales: ¿focal (atrapamiento) vs. difusa (polineuropatía vs. CIDP)? Si NCS normales + EMG anormal: ¿radiculopatía (SNAP normal + paraespinales afectados) vs. enfermedad de motoneurona (> 1 raíz, sin compromiso sensitivo)?' },
      { id: 'lower-limb-weakness', title: 'Flujograma: debilidad de miembro inferior' },
      { id: 'sensorimotor-poly', title: 'Flujograma: polineuropatía sensitivo-motora', content: '¿Distribución longitud-dependiente? → ¿Patrón axonal o desmielinizante? Axonal: diabetes, tóxica, hereditaria (CMT2). Desmielinizante: ¿uniforme (CMT1) o segmentaria con bloqueos (CIDP)? Velocidad <70% LIN en >1 nervio + bloqueos → CIDP (tratable con IVIg, plasmaféresis, corticoides).' },
      { id: 'fatigability', title: 'Flujograma: fatigabilidad', content: 'Debilidad fluctuante/fatigabilidad → ENR 2-3 Hz: ¿decremento >10%? Sí + distribución craneal/proximal → MG. No + CMAP basales bajos → ejercicio 10s → ¿incremento >100%? Sí → LEMS. ENR normal + alta sospecha → SFEMG.' },
      { id: 'proximal-vs-distal', title: 'Flujograma: debilidad proximal vs. distal' },
    ]},
    { id: 'emg-pattern-differentiation', title: 'Diferenciación de Patrones EMG', content: 'Neurogénico: PUM largos, amplios, polifásicos, con reclutamiento reducido y disparo rápido. Fibrilaciones/PSW en denervación activa. Miopático: PUM cortos, de baja amplitud, polifásicos, con reclutamiento precoz. Fibrilaciones solo en miopatías inflamatorias/necrotizantes. UNM: PUM variables (morfología inestable), jitter aumentado.' },
  ]
};
