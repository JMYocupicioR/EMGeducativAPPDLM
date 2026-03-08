// src/content/modules/module-02-nerve-conduction.ts
import { Module } from '../../types/content';

export const module02: Module = {
  id: 'nerve-conduction',
  number: 2,
  title: 'Estudios de Conducción Nerviosa',
  titleEn: 'Nerve Conduction Studies',
  emoji: '⚡',
  description: 'Principios, técnicas motoras y sensitivas, valores normales y fenómenos patológicos',
  descriptionEn: 'Principles, motor and sensory techniques, normal values and pathological phenomena',
  color: 'from-yellow-500 to-orange-600',
  icon: 'Zap',
  topics: [
    {
      id: 'general-principles', title: 'Principios Generales de Neuroconducción', titleEn: 'General Principles',
      description: 'Estimulación, electrodos y artefactos',
      children: [
        { id: 'cathode-anode', title: 'Estimulación eléctrica: cátodo vs. ánodo', content: 'La despolarización del nervio ocurre bajo el cátodo (electrodo negativo). El ánodo (electrodo positivo) puede causar hiperpolarización. El cátodo siempre debe colocarse proximal al electrodo de registro (distalmente sobre el nervio) para evitar bloqueo anódico. La inversión cátodo-ánodo puede reducir la amplitud y prolongar la latencia.' },
        { id: 'supramaximal', title: 'Estimulación supramáxima', content: 'Se aplica una intensidad de estímulo 20-25% superior a la necesaria para activar todas las fibras del nervio. Esto asegura una respuesta reproducible y de máxima amplitud. Una estimulación submáxima produce respuestas de menor amplitud que pueden simular falsamente una neuropatía axonal.' },
        { id: 'electrodes', title: 'Electrodos de registro: activo, referencia, tierra', content: 'Electrodo activo (G1): se coloca sobre el vientre muscular (motor) o sobre el nervio (sensitivo). Electrodo de referencia (G2): sobre el tendón o sobre un punto eléctricamente inactivo. Electrodo de tierra: entre el sitio de estimulación y registro, reduce el artefacto de estímulo.' },
        { id: 'distance-volume', title: 'Distancia entre electrodos y conducción de volumen', content: 'La distancia mínima entre sitios de estimulación debe ser de al menos 10 cm para minimizar errores en el cálculo de la velocidad de conducción. La conducción de volumen puede causar registros inicialmente positivos cuando el electrodo activo no está directamente sobre el punto de generación del potencial.' },
        { id: 'averaging-artifacts', title: 'Promedios y artefactos', content: 'El promediado de señales (averaging) mejora la relación señal/ruido para potenciales de baja amplitud (ej. SNAP). Artefactos comunes: artefacto de estímulo (acoplamiento entre estimulador y amplificador), artefacto de movimiento, interferencia de 50/60 Hz, y artefacto de base.' },
      ]
    },
    {
      id: 'motor-conduction', title: 'Neuroconducción Motora', titleEn: 'Motor Nerve Conduction',
      description: 'CMAP, latencia, amplitud, velocidad y nervios motores por región',
      children: [
        { id: 'cmap-components', title: 'El PAMC (CMAP): componentes y morfología', content: 'El Potencial de Acción Muscular Compuesto (CMAP/PAMC) representa la suma de todos los potenciales de acción de las fibras musculares activadas por el estímulo nervioso. Un CMAP normal tiene una deflexión inicial negativa (ascendente), seguida de recuperación a la línea base. Su amplitud refleja el número de fibras musculares funcionales; su área integra amplitud y duración.' },
        { id: 'distal-latency', title: 'Latencia motora distal (LMD)', content: 'Tiempo desde el estímulo hasta el inicio de la deflexión negativa del CMAP. Incluye: tiempo de conducción nerviosa distal + retardo en la unión neuromuscular + tiempo de generación del potencial muscular. Se prolonga en desmielinización distal (ej. túnel carpiano) y con enfriamiento.' },
        { id: 'cmap-amplitude', title: 'Amplitud del CMAP', content: 'Se mide de la línea base al pico negativo (base-to-peak) o de pico a pico. Refleja el número de fibras musculares funcionalmente inervadas. Disminuye en pérdida axonal, bloqueos de conducción (distalmente), y trastornos de la UNM. Valores normales típicos: mediano ≥4 mV, ulnar ≥6 mV, tibial ≥3 mV.' },
        { id: 'motor-cv', title: 'Velocidad de conducción motora (VCM)', content: 'VCM = Distancia (mm) / (Latencia proximal − Latencia distal) (ms). Expresada en m/s. Refleja la integridad de la mielina de las fibras más rápidas. Normal: ≥50 m/s en MS, ≥40 m/s en MI. Enlentecimiento significativo (<70-80% del límite inferior normal) sugiere desmielinización.' },
        { id: 'duration-area', title: 'Duración y área bajo la curva', content: 'La duración del CMAP negativo indica la sincronía de las fibras. La dispersión temporal (aumento de duración >30% con estimulación proximal) sugiere desmielinización. El área bajo la curva integra amplitud y duración, siendo más sensible que la amplitud sola para detectar bloqueos de conducción.' },
        {
          id: 'upper-limb-motor', title: 'Nervios motores del miembro superior', titleEn: 'Upper limb motor nerves',
          children: [
            { id: 'median-motor', title: 'Nervio Mediano motor', content: 'Registro: APB (abductor corto del pulgar). Estimulación: muñeca (8 cm proximal), fosa antecubital, axila, Erb. LMD ≤4.4 ms, amplitud ≥4 mV, VCM ≥50 m/s. El estudio del mediano motor en muñeca es esencial para el diagnóstico de síndrome del túnel carpiano.' },
            { id: 'ulnar-motor', title: 'Nervio Ulnar motor', content: 'Registro: ADM (abductor del meñique). Estimulación: muñeca, bajo codo, sobre codo, axila. LMD ≤3.3 ms, amplitud ≥6 mV, VCM ≥50 m/s. La velocidad a través del codo <50 m/s o una caída de amplitud >20% sugiere neuropatía cubital en el codo.' },
            { id: 'radial-motor', title: 'Nervio Radial motor', content: 'Registro: EIP (extensor del índice). Estimulación: antebrazo, codo, brazo, axila. LMD ≤3.3 ms, amplitud 7.7-14 mV, VCM ≥50 m/s.' },
            { id: 'musculocutaneous-motor', title: 'Nervio Musculocutáneo', content: 'Registro: bíceps braquial. Estimulación: Erb supraclavicular, axila. LMD 3.9±0.5 ms, amplitud 3.8-21 mV, VCM ≥50 m/s.' },
            { id: 'suprascapular-motor', title: 'Nervio Supraescapular', content: 'Registro: supraespinoso o infraespinoso. Estimulación: Erb, escotadura supraescapular. LMD 3.9±0.4 ms, amplitud 5-15 mV, VCM ≥60 m/s.' },
            { id: 'axillary-motor', title: 'Nervio Axilar', content: 'Registro: deltoides. Estimulación: Erb, axila posterior. Útil para evaluar plexopatía braquial y lesión del nervio axilar post-luxación de hombro.' },
          ]
        },
        {
          id: 'lower-limb-motor', title: 'Nervios motores del miembro inferior', titleEn: 'Lower limb motor nerves',
          children: [
            { id: 'tibial-motor', title: 'Nervio Tibial', content: 'Registro: AH (abductor hallucis). Estimulación: tobillo (maléolo medial), hueco poplíteo. LMD <5.0 ms, amplitud ≥3 mV, VCM ≥40 m/s. Onda F lat. mín. 48-56.6 ms. Reflejo H <34 ms.' },
            { id: 'peroneal-motor', title: 'Nervio Peroneo Común (profundo)', content: 'Registro: EDB (extensor digitorum brevis). Estimulación: tobillo, cabeza del peroné, hueco poplíteo. LMD <6.3 ms, amplitud ≥2 mV, VCM ≥40 m/s. Caída de amplitud >50% a través de la cabeza del peroné sugiere neuropatía peronea.' },
            { id: 'femoral-motor', title: 'Nervio Femoral', content: 'Registro: vasto medial o recto femoral. Estimulación: pliegue inguinal lateral a la arteria femoral. LMD <6.0 ms, amplitud ≥4 mV, VCM ≥40 m/s. Estimulación supramáxima difícil por la profundidad del nervio.' },
          ]
        },
        {
          id: 'cranial-motor', title: 'Nervios craneales motores', titleEn: 'Motor cranial nerves',
          children: [
            { id: 'facial-motor', title: 'Nervio Facial (VII)', content: 'Registro: orbicular de los ojos o nasalis. Estimulación: preauricular. LMD <4.5 ms, amplitud ≥1 mV. Comparación lado a lado: diferencia de amplitud >50% es significativa. Esencial en parálisis de Bell.' },
            { id: 'trigeminal-motor', title: 'Nervio Trigémino motor (V)', content: 'Registro: masetero. LMD <3 ms, amplitud ≥2 mV.' },
            { id: 'accessory-motor', title: 'Nervio Espinal Accesorio (XI)', content: 'Registro: ECM o trapecio. LMD 2.0-4.0 ms, amplitud 3-8 mV, VCM ≥60 m/s.' },
            { id: 'hypoglossal-motor', title: 'Nervio Hipogloso (XII)', content: 'Registro: geniogloso (aguja). LMD 2.0-3.5 ms, amplitud ≥2 mV.' },
            { id: 'glossopharyngeal-motor', title: 'Nervio Glosofaríngeo motor (IX)', content: 'Registro: faríngeos. LMD 3.0-4.5 ms, amplitud 1-3 mV.' },
            { id: 'vagus-motor', title: 'Nervio Vago motor (X)', content: 'Registro: cricotiroideo. LMD 3.0-5.0 ms, amplitud 0.5-2.5 mV. Monitorizar ritmo cardíaco.' },
          ]
        },
        { id: 'motor-interpretation', title: 'Interpretación: normal vs. axonal vs. desmielinizante', content: 'Patrón axonal: amplitud reducida con latencias y velocidades relativamente preservadas. Patrón desmielinizante: latencias prolongadas, velocidades lentas, dispersión temporal, bloqueos de conducción, con amplitudes inicialmente preservadas. Patrón mixto: combinación de ambos (ej. CIDP crónica con daño axonal secundario).' },
      ]
    },
    {
      id: 'sensory-conduction', title: 'Neuroconducción Sensitiva', titleEn: 'Sensory Nerve Conduction',
      description: 'SNAP, técnicas antidrómicas/ortodrómicas y nervios sensitivos',
      children: [
        { id: 'snap-morphology', title: 'El PANS (SNAP): morfología y medición', content: 'El Potencial de Acción del Nervio Sensitivo es una señal de mucho menor amplitud que el CMAP (µV vs. mV). Es bifásico o trifásico. Se mide amplitud base-pico o pico-pico, latencia de inicio o de pico, y se calcula velocidad de conducción sensitiva.' },
        { id: 'onset-peak-latency', title: 'Latencia de inicio y latencia pico', content: 'La latencia de inicio corresponde a las fibras más rápidas; la latencia pico es más reproducible pero incluye fibras de velocidad media. La latencia pico se usa más frecuentemente en la práctica clínica por su mayor reproducibilidad.' },
        { id: 'snap-amplitude', title: 'Amplitud del SNAP', content: 'La amplitud del SNAP refleja el número de fibras sensitivas funcionalmente intactas. Es muy sensible a la temperatura (disminuye con el enfriamiento). Disminuye con la edad. Valores muy variables entre pacientes; la comparación lado a lado es más útil que los valores absolutos.' },
        { id: 'sensory-cv', title: 'Velocidad de conducción sensitiva (VCS)', content: 'VCS = Distancia / Latencia de inicio. Normal: ≥50 m/s en MS, ≥40 m/s en MI. Suele ser ligeramente más rápida que la VCM del mismo nervio en condiciones normales.' },
        { id: 'antidromic-orthodromic', title: 'Técnica antidrómica vs. ortodrómica', content: 'Antidrómica: estimulación proximal, registro distal (contra la dirección fisiológica). Ventaja: mayor amplitud (más fibras estimuladas). Desventaja: potencial artefacto por CMAP. Ortodrómica: estimulación distal, registro proximal (fisiológica). Ventaja: sin contaminación motora. Desventaja: menor amplitud.' },
        {
          id: 'upper-limb-sensory', title: 'Nervios sensitivos del miembro superior',
          children: [
            { id: 'median-sensory', title: 'Nervio Mediano sensitivo (dedo 2 y 3)', content: 'Estimulación: dedo 2 o 3 (anillo). Registro: muñeca. Latencia pico 3.0-3.4 ms a 14 cm, amplitud 10-90 µV, VCS ≥50 m/s. Es el estudio más sensible para túnel carpiano.' },
            { id: 'ulnar-sensory', title: 'Nervio Ulnar sensitivo (dedo 5)', content: 'Estimulación: dedo 5. Registro: muñeca. Latencia pico 2.95-3.45 ms, amplitud 15-50 µV, VCS ≥50 m/s.' },
            { id: 'radial-sensory', title: 'Nervio Radial sensitivo (tabaquera anatómica)', content: 'Estimulación: antebrazo lateral. Registro: tabaquera anatómica. Latencia pico 2.3-3.3 ms, amplitud 4-75 µV, VCS ≥50 m/s.' },
            { id: 'lateral-cutaneous-forearm', title: 'N. Cutáneo lateral del antebrazo (musculocutáneo)', content: 'Estimulación: antebrazo lateral hasta codo. Latencia pico 2.5-3.1 ms, amplitud 10-30 µV.' },
            { id: 'medial-cutaneous-forearm', title: 'N. Cutáneo medial del antebrazo', content: 'Útil para diferenciar plexopatía braquial (SNAPs reducidos) de radiculopatía (SNAPs preservados, ya que la lesión es preganglionar).' },
          ]
        },
        {
          id: 'lower-limb-sensory', title: 'Nervios sensitivos del miembro inferior',
          children: [
            { id: 'sural-sensory', title: 'Nervio Sural', content: 'Estimulación: pantorrilla posterior. Registro: posterior al maléolo lateral. Latencia 3.4-4.0 ms, amplitud 5-30 µV, VCS ≥40 m/s. Es el nervio sensitivo más consistente del MI.' },
            { id: 'superficial-peroneal-sensory', title: 'Nervio Peroneo Superficial', content: 'Estimulación: pierna anterolateral. Registro: dorso del pie. Latencia 2.6-3.2 ms, amplitud 14-26 µV, VCS ≥40 m/s.' },
            { id: 'saphenous-sensory', title: 'Nervio Safeno', content: 'Estimulación: rodilla medial. Registro: pierna medial. Latencia 3.2-4.0 ms, amplitud 4-12 µV, VCS ≥40 m/s. Baja amplitud; frecuentemente necesita promediación.' },
            { id: 'lateral-femoral-cutaneous', title: 'Nervio Femorocutáneo Lateral', content: 'Latencia pico 2.4-2.6 ms, amplitud 10-25 µV, VCS 43-55 m/s. Baja amplitud en obesos. Se afecta en meralgia parestésica.' },
            { id: 'plantar-nerves', title: 'Nervio Plantar (medial y lateral)', content: 'Útiles para evaluar neuropatía del túnel tarsal y polineuropatía distal.' },
          ]
        },
        { id: 'pre-post-ganglionic', title: 'Significado clínico: lesiones pre vs. postganglionares', content: 'Principio clave: en lesiones preganglionares (radiculopatías), el cuerpo celular en el ganglio de la raíz dorsal está intacto, por lo tanto el SNAP se preserva a pesar de la clínica sensitiva. En lesiones postganglionares (plexopatía, neuropatía), el SNAP disminuye o desaparece. Este principio es fundamental para la localización electrodiagnóstica.' },
      ]
    },
    {
      id: 'mixed-conduction', title: 'Neuroconducción Mixta', titleEn: 'Mixed Nerve Conduction',
      children: [
        { id: 'mixed-recording', title: 'Registro de fibras motoras y sensitivas combinadas' },
        { id: 'palmar-mixing', title: 'Palmar mixing study' },
        { id: 'ia-afferents', title: 'Aferentes Ia (fibras propioceptivas)' },
      ]
    },
    {
      id: 'technical-factors', title: 'Factores Técnicos y Artefactos', titleEn: 'Technical Factors and Artifacts',
      children: [
        { id: 'temperature-effect', title: 'Efecto de la temperatura', content: 'La temperatura cutánea debe mantenerse ≥32°C en MS y ≥30°C en MI. El enfriamiento causa: prolongación de latencias (~0.2 ms/°C), aumento de amplitudes (menor cancelación de fase), enlentecimiento de velocidades de conducción (~2 m/s/°C). Estos cambios pueden simular falsamente una desmielinización. Siempre medir y documentar la temperatura.' },
        { id: 'age-height', title: 'Efecto de la edad y estatura', content: 'Con la edad: amplitudes disminuyen, latencias se prolongan ligeramente, velocidades disminuyen modestamente. Con mayor estatura: latencias de onda F más largas, velocidades de conducción ligeramente menores en segmentos distales. Usar tablas normativas ajustadas a la edad.' },
        { id: 'stimulus-artifact', title: 'Artefacto de estímulo', content: 'Acoplamiento eléctrico entre el estimulador y el amplificador. Se reduce con: electrodo de tierra entre estimulación y registro, rotación del ánodo, reducción de la impedancia de la piel, limpieza del gel conductor.' },
        { id: 'costimulation', title: 'Coestimulación y anastomosis' },
        { id: 'electrode-errors', title: 'Errores comunes en la colocación de electrodos' },
        { id: 'martin-gruber', title: 'Anomalías anatómicas: Martin-Gruber y Riche-Cannieu', content: 'Anastomosis de Martin-Gruber (15-30% de la población): fibras motoras del mediano cruzan al ulnar en el antebrazo. Puede causar: CMAP del mediano en muñeca con componente positivo inicial, CMAP del ulnar mayor en codo que en muñeca. Riche-Cannieu: comunicación palmar entre mediano y ulnar.' },
      ]
    },
    {
      id: 'pathological-phenomena', title: 'Fenómenos Patológicos en Neuroconducción', titleEn: 'Pathological Phenomena',
      children: [
        { id: 'conduction-block', title: 'Bloqueo de conducción: definición y criterios', content: 'Caída de amplitud (o área) del CMAP >50% entre estimulación distal y proximal, con <15% de cambio en duración. Indica desmielinización focal con fallo de la conducción del impulso. Distinguir del pseudo-bloqueo por dispersión temporal (desmielinización difusa) o cancelación de fase.' },
        { id: 'temporal-dispersion', title: 'Dispersión temporal', content: 'Aumento de la duración del CMAP >30% con estimulación proximal vs. distal. Indica desmielinización difusa con velocidades de conducción heterogéneas entre fibras.' },
        { id: 'phase-cancellation', title: 'Cancelación de fase', content: 'Cuando fibras con velocidades diferentes producen potenciales que se cancelan entre sí (fase positiva de una cancela la fase negativa de otra). Causa reducción aparente de amplitud que no es un verdadero bloqueo.' },
        { id: 'axonal-vs-demyelinating', title: 'Patrón axonal vs. desmielinizante', content: 'AXONAL: ↓amplitud, latencias y velocidades relativamente normales, sin bloqueos. DESMIELINIZANTE: ↑latencias, ↓velocidades, bloqueos de conducción, dispersión temporal, con amplitudes inicialmente preservadas. Patrón mixto en lesiones crónicas con daño axonal secundario.' },
      ]
    },
  ]
};
