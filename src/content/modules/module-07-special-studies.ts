// src/content/modules/module-07-special-studies.ts
import { Module } from '../../types/content';

export const module07: Module = {
  id: 'special-studies',
  number: 7,
  title: 'Estudios Especiales y Técnicas Avanzadas',
  titleEn: 'Special Studies and Advanced Techniques',
  emoji: '🔧',
  description: 'Inching, colisión, ecografía neuromuscular, MIO y sistema nervioso autónomo',
  descriptionEn: 'Inching, collision, neuromuscular ultrasound, IOM and autonomic nervous system',
  color: 'from-teal-500 to-cyan-700',
  icon: 'Wrench',
  topics: [
    { id: 'inching', title: 'Técnicas de Inching (Avance Lento)', children: [
      { id: 'incremental-assessment', title: 'Evaluación milimétrica a lo largo del nervio', content: 'Se estimula el nervio a intervalos cortos (1-2 cm) a lo largo de su trayecto. Se buscan cambios abruptos de latencia (>0.4-0.5 ms en 1 cm) o caídas de amplitud que localicen el punto exacto de compresión o bloqueo focal. Es la técnica más precisa para localizar atrapamientos.' },
      { id: 'focal-block-detection', title: 'Detección de bloqueos focales', content: 'Un salto de latencia desproporcionado entre dos puntos adyacentes de 1 cm demuestra desmielinización segmentaria focal exacta, distinguiéndola de un enlentecimiento técnico generalizado.' },
      { id: 'entrapment-application', title: 'Aplicación en atrapamientos', content: 'Clásicamente usado en el codo para el nervio cubital (segmentando epicóndilo medial a surco a flexor carpi ulnaris) o en el túnel carpiano evaluando la latencia palmar vs muñeca.' },
    ]},
    { id: 'collision-techniques', title: 'Técnicas de Colisión', children: [
      { id: 'costimulation-elimination', title: 'Eliminación de coestimulación', content: 'Cuando dos nervios corren juntos (ej. mediano y ulnar), la estimulación de uno puede activar accidentalmente al otro. La técnica de colisión aplica un estímulo de bloqueo al nervio no deseado distalmente, impidiendo que la señal no deseada llegue al electrodo de registro.' },
      { id: 'erb-separation', title: 'Separación de fibras mediano-cubital en Erb', content: 'Al estimular el punto de Erb, se activan todos los troncos. Usando colisión distal (estimulando el mediano en la muñeca simultáneamente), el impulso antidrómico choca y cancela el impulso ortodrómico del mediano, aislando puramente la respuesta del nervio ulnar.' },
    ]},
    { id: 'neuromuscular-us', title: 'Ecografía Neuromuscular (NMUS)', children: [
      { id: 'us-principles', title: 'Principios del ultrasonido', content: 'Utiliza sondas de alta frecuencia (12-18 MHz). El nervio sano tiene un patrón "en panal de abejas" (fascículos hipoecoicos, perineuro hiperecoico). En patología, el nervio pierde su arquitectura fascicular y se vuelve hipoecoico y agrandado.' },
      { id: 'cross-sectional-area', title: 'Área de sección transversal (AST) del nervio', content: 'Dato cardinal. El AST aumentada sugiere patología. Mediano >10-12 mm² sugiere STC crónico. En polineuropatías, el AST diferencia axonales (normal o reducida) de desmielinizantes hipertróficas (aumentada).' },
      { id: 'entrapment-tumor-us', title: 'Enfermedad Inflamatoria: BUS (Bochum Score)', content: 'Bochum Ultrasound Score (BUS): cuantifica el aumento de AST en sitios específicos (mediano antebrazo, ulnar brazo, radial espiral, sural pantorrilla) para diferenciar patología inflamatoria crónica (CIDP > 2 puntos) de GBS agudo o neuropatía axonal.' },
      { id: 'fasciculation-detection', title: 'Detección ecográfica de fasciculaciones', content: 'Las fasciculaciones pueden visualizarse como contracciones focales del músculo en tiempo real. Útil en músculos profundos donde la EMG de aguja es difícil. Complementa los hallazgos de EMG en diagnóstico de ELA.' },
      { id: 'atrophy-fat', title: 'Atrofia y Escala de Heckmatt', content: 'Para miopatías, la escala visual de Heckmatt evalúa ecogenicidad muscular (Grado I normal a Grado IV patológico borrando el hueso subyacente). A mayor atrofia e infiltración grasa, mayor ecogenicidad (volviéndose blanco en US).' },
      { id: 'us-emg-complement', title: 'Complemento de la EMG con ecografía', content: 'El US identifica lesiones estructurales tratables quirúrgicamente (neuromas, schwannomas, quistes compresivos) que la EDX solo puede localizar anatómicamente de forma ciega.' },
    ]},
    { id: 'us-guided-emg', title: 'EMG Guiada por Ecografía', children: [
      { id: 'in-out-plane', title: 'Técnica "in-plane" y "out-of-plane"', content: 'In-plane: la aguja se inserta en el plano del transductor, visualizando todo el trayecto de la aguja. Out-of-plane: la aguja se inserta perpendicular al plano, solo se ve un punto brillante. In-plane es preferida para músculos profundos por mejor visualización.' },
      { id: 'deep-muscles', title: 'Músculos profundos críticos', content: 'Esencial para explorar diafragma (riesgo altísimo de neumotórax ciego), psoas, romboides, tibial posterior y pronador cuadrado sin riesgo vascular.' },
      { id: 'us-safety', title: 'Seguridad y ventajas', content: 'Prevención absoluta de punción pleural, arterial o nerviosa directa. Obligatorio en laboratorios modernos para evaluación hemidiafragmática en ELA.' },
    ]},
    { id: 'iom', title: 'Monitorización Intraoperatoria (MIO)', children: [
      { id: 'dynamic-static-emg', title: 'EMG Libre (Free-run) y Evocada', content: 'EMG Libre monitoriza irritación radicular pasiva continua (descargas neurotónicas alertan daño traccional espinal). EMG Evocada estimula el hueso pedicular activamente; un umbral bajo indica brecha ósea peligrosa tocando raíz nerviosa.' },
      { id: 'ssep-iom', title: 'PESS intraoperatorios', content: 'Vigilan columnas dorsales de médula espinal e isquemia cerebral. Criterio de alarma: retardo latencia >10% o caída de amplitud >50% del basal continuo.' },
      { id: 'mep-iom', title: 'PEM intraoperatorios', content: 'Evalúan tractos corticoespinales ventrolaterales (los más susceptibles de isquemia medular quirúrgica vascular transitoria). Se pierden inmediatamente ante hipoperfusión.' },
      { id: 'iom-applications', title: 'Aplicaciones Críticas', content: 'Cirugía de escoliosis, aneurismas aórticos complejos, resección de tumores del ángulo pontocerebeloso (Blink reflex/Pares craneales) y monitoreo recurrente laríngeo en tiroidectomías.' },
    ]},
    { id: 'autonomic-studies', title: 'Estudios del Sistema Nervioso Autónomo', children: [
      { id: 'ssr', title: 'Respuesta cutánea simpática (SSR)', content: 'Se estimula un nervio (mediano o tibial) y se registra la respuesta sudomotora en palmas/plantas. Evalúa la función de las fibras autonómicas simpáticas (fibras C amielínicas). Ausencia bilateral = neuropatía autonómica (diabetes, amiloidosis). Limitación: alta habituación, variabilidad.' },
      { id: 'rr-variability', title: 'Variabilidad del intervalo RR por respiración profundia', content: 'El marcador parasimpático cardiovagal más reproducible. La diferencia de latidos RR en inhalación frente a exhalación se cuantifica, pérdida de variabilidad es patognomónica de falla autonómica cardíaca temprana diabética.' },
      { id: 'qst', title: 'Evaluación cuantitativa de sensibilidad (QST)', content: 'Mide umbrales de percepción térmica (frío y calor), vibratoria y dolorosa. Evalúa indirectamente patología selectiva de fibras finas espinotalámicas A-delta y amielínicas tipo C termostáticas.' },
    ]},
    { id: 'signal-processing', title: 'Procesamiento Avanzado de Señales y Fisiología', children: [
      { id: 'fourier', title: 'Transformada Rápida de Fourier (FFT) del EMG', content: 'Descompone el patrón de interferencia temporal bruto a frecuencias constitutivas en Hertzios. Una fatiga muscular patológica o una miopatía grave causan cambios medibles (shift-to-left por fatiga de alta frecuencia).' },
      { id: 'wavelet', title: 'Transformada Wavelet de Potenciales', content: 'A diferencia de Fourier, mantiene tiempo y frecuencia de señales no estacionarias, sirviendo para sustracción de artefactos complejos (como latidos ECG potentes montados sobre la frágil señal EMG torácica).' },
      { id: 'coherence', title: 'Análisis de coherencia corticomuscular', content: 'Evalúa la sincronización intrínseca de frecuencias beta/gamma entre disparo del encéfalo motor EEG y la contracción EMG. Falla drástica en ELA central temprana o ACV corticales que alteran reclutamiento superior.' },
    ]},
  ]
};
