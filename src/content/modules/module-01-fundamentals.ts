// src/content/modules/module-01-fundamentals.ts
import { Module } from '../../types/content';

export const module01: Module = {
  id: 'fundamentals',
  number: 1,
  title: 'Fundamentos de Neurofisiología Clínica',
  titleEn: 'Clinical Neurophysiology Fundamentals',
  emoji: '📘',
  description: 'Bases de electricidad, neuroanatomía funcional y fisiología de la contracción muscular',
  descriptionEn: 'Electrical principles, functional neuroanatomy, and muscle contraction physiology',
  color: 'from-blue-500 to-blue-700',
  icon: 'BookOpen',
  topics: [
    {
      id: 'intro-neurodiagnostics',
      title: 'Introducción al Neurodiagnóstico',
      titleEn: 'Introduction to Neurodiagnostics',
      description: 'Historia, rol clínico y ética del electrodiagnóstico',
      children: [
        { id: 'history', title: 'Historia de la electrofisiología clínica', titleEn: 'History of clinical electrophysiology', content: 'Desde los experimentos de Galvani con las ancas de rana en 1791, pasando por los primeros electromiógrafo clínicos de Adrian y Bronk (1929), hasta los modernos equipos digitales de neuroconducción. La electrofisiología clínica ha evolucionado de una curiosidad científica a una herramienta diagnóstica fundamental en neurología y rehabilitación.' },
        { id: 'clinical-role', title: 'Rol del electrodiagnóstico en medicina', titleEn: 'Role of electrodiagnostics in medicine', content: 'Los estudios de electrodiagnóstico (EDx) son una extensión del examen neurológico que proporciona datos objetivos sobre la función del sistema nervioso periférico y muscular. Permite localizar lesiones (raíz, plexo, nervio, unión neuromuscular, músculo), determinar fisiopatología (axonal vs. desmielinizante), estimar severidad y pronóstico, y guiar decisiones terapéuticas.' },
        { id: 'laboratory', title: 'El laboratorio de neurofisiología: equipamiento y bioseguridad', titleEn: 'Neurophysiology laboratory: equipment and biosafety', content: 'Un laboratorio de EDx requiere: equipo de EMG/NCS con amplificador diferencial, estimulador eléctrico, altavoz, pantalla de visualización, electrodos de superficie y de aguja, gel conductor, alcohol, guantes, contenedor de punzocortantes. Debe cumplir con normativas de bioseguridad para prevención de infecciones y manejo de residuos biológico-infecciosos.' },
        { id: 'ethics', title: 'Ética y prevención cuaternaria en electrodiagnóstico', titleEn: 'Ethics and quaternary prevention', content: 'La prevención cuaternaria en electrodiagnóstico implica evitar indicaciones innecesarias de estudios, respetar el principio de no maleficencia (los estudios son invasivos y dolorosos), informar adecuadamente al paciente, y reportar hallazgos con honestidad. El método clínico debe guiar la indicación, no la disponibilidad del equipo.' },
      ]
    },
    {
      id: 'electricity-basics',
      title: 'Bases de Electricidad y Electrónica',
      titleEn: 'Electrical and Electronic Basics',
      description: 'Principios eléctricos aplicados al electrodiagnóstico',
      children: [
        { id: 'voltage-current', title: 'Principios de electricidad: voltaje, corriente, resistencia', titleEn: 'Electricity principles', content: 'Voltaje (V): diferencia de potencial entre dos puntos, medido en voltios. Corriente (I): flujo de carga eléctrica, medido en amperios. Resistencia (R): oposición al flujo de corriente, medida en ohmios. Ley de Ohm: V = I × R. En electrodiagnóstico trabajamos con señales del orden de microvoltios (µV) a milivoltios (mV).' },
        { id: 'differential-amplification', title: 'Amplificación diferencial', titleEn: 'Differential amplification', content: 'El amplificador diferencial registra la diferencia de potencial entre dos electrodos (activo y referencia), rechazando señales comunes a ambos (ruido ambiental). Es la base del registro de potenciales bioeléctricos en EMG y NCS.' },
        { id: 'filters', title: 'Filtros: pasa-bajos, pasa-altos, notch', titleEn: 'Filters: low-pass, high-pass, notch', content: 'Filtro pasa-bajos: permite el paso de frecuencias bajas (ej. 10 kHz para aguja EMG). Filtro pasa-altos: permite el paso de frecuencias altas (ej. 10-20 Hz para EMG de aguja, 2 Hz para NCS). Filtro Notch: elimina una frecuencia específica (50/60 Hz de la red eléctrica) — usar con precaución porque puede distorsionar los potenciales.' },
        { id: 'impedance', title: 'Impedancia de electrodos', titleEn: 'Electrode impedance', content: 'La impedancia del electrodo debe ser menor a 5-10 kΩ para obtener registros de calidad. Se reduce con limpieza adecuada de la piel (abrasión, alcohol) y uso de gel conductor. Una impedancia alta produce registros con mucho ruido y potenciales de baja calidad.' },
        { id: 'signal-noise-cmrr', title: 'Relación señal/ruido y CMRR', titleEn: 'Signal-to-noise ratio and CMRR', content: 'La relación señal/ruido (SNR) debe ser alta para distinguir los potenciales biológicos del ruido de fondo. El CMRR (Common Mode Rejection Ratio) indica la capacidad del amplificador para rechazar interferencias comunes. Un CMRR típico es ≥ 100,000:1 (100 dB).' },
        { id: 'digitalization', title: 'Digitalización y muestreo de señales', titleEn: 'Signal digitalization and sampling', content: 'Las señales analógicas se convierten a digitales mediante un conversor A/D (analógico a digital). La frecuencia de muestreo debe cumplir el teorema de Nyquist: al menos el doble de la frecuencia máxima de la señal (ej. para señales de hasta 10 kHz, muestrear a ≥ 20 kHz).' },
      ]
    },
    {
      id: 'functional-neuroanatomy',
      title: 'Neuroanatomía Funcional',
      titleEn: 'Functional Neuroanatomy',
      description: 'Arquitectura de la neurona motora, axón periférico, fibras y unidad motora',
      children: [
        {
          id: 'motor-neuron-architecture',
          title: 'Arquitectura de la neurona motora',
          titleEn: 'Motor neuron architecture',
          children: [
            { id: 'soma-dendrites-axon', title: 'Soma, dendritas, axón, terminales sinápticas', titleEn: 'Soma, dendrites, axon, synaptic terminals', content: 'La neurona motora inferior (motoneurona alfa) tiene su soma en el asta anterior de la médula espinal, múltiples dendritas que reciben input sináptico, un largo axón mielinizado que viaja por las raíces ventrales y nervios periféricos, y terminales sinápticas que forman la unión neuromuscular con fibras musculares esqueléticas.' },
            { id: 'umn-vs-lmn', title: 'Neurona motora superior vs. inferior', titleEn: 'Upper vs. lower motor neuron', content: 'Neurona motora superior (UMN): corteza motora → médula espinal (vía piramidal). Signos de lesión: espasticidad, hiperreflexia, Babinski, clonus. Neurona motora inferior (LMN): asta anterior → músculo. Signos de lesión: atrofia, fasciculaciones, hiporreflexia, hipotonía. La EMG evalúa directamente la LMN y el músculo.' },
          ]
        },
        {
          id: 'peripheral-axon',
          title: 'El axón periférico',
          titleEn: 'The peripheral axon',
          children: [
            { id: 'axonal-membrane', title: 'Membrana axonal y canales iónicos', titleEn: 'Axonal membrane and ion channels', content: 'La membrana del axón contiene canales de Na+ dependientes de voltaje (concentrados en los nódulos de Ranvier) y canales de K+ (en las regiones paranodales e internodales). El potencial de reposo (-70 a -90 mV) se mantiene por la bomba Na+/K+-ATPasa.' },
            { id: 'myelin-sheath', title: 'Vaina de mielina y células de Schwann', titleEn: 'Myelin sheath and Schwann cells', content: 'Las células de Schwann envuelven el axón periférico formando la vaina de mielina, un aislante eléctrico que permite la conducción saltatoria. Cada célula de Schwann mieliniza un solo segmento internodal. Las fibras mielinizadas tienen velocidades de conducción de 40-70 m/s, mientras que las amielínicas conducen a 0.5-2 m/s.' },
            { id: 'nodes-saltatory', title: 'Nódulos de Ranvier y conducción saltatoria', titleEn: 'Nodes of Ranvier and saltatory conduction', content: 'Los nódulos de Ranvier son las brechas entre segmentos de mielina donde los canales de Na+ están concentrados. La conducción saltatoria "salta" de nódulo a nódulo, permitiendo velocidades de conducción altas con menor gasto energético. La desmielinización interrumpe este mecanismo, causando enlentecimiento o bloqueo de la conducción.' },
            { id: 'wallerian-degeneration', title: 'Degeneración Walleriana y regeneración axonal', titleEn: 'Wallerian degeneration and axonal regeneration', content: 'Tras una lesión axonal, la porción distal del axón degenera (degeneración Walleriana) en 7-11 días. Los tubos endoneurales vacíos pueden guiar la regeneración, que ocurre a ~1 mm/día (o 1 pulgada/mes). Las fibrilaciones aparecen en EMG 2-3 semanas después de la denervación.' },
          ]
        },
        {
          id: 'nerve-fiber-classification',
          title: 'Clasificación de fibras nerviosas',
          titleEn: 'Nerve fiber classification',
          children: [
            { id: 'fiber-types', title: 'Fibras Aα, Aβ, Aδ, B y C', titleEn: 'Fiber types Aα, Aβ, Aδ, B and C', content: 'Aα: mielinizadas gruesas (12-20 µm), propiocepción y motoras somáticas, 70-120 m/s. Aβ: mielinizadas medias (5-12 µm), tacto discriminativo y presión, 30-70 m/s. Aδ: mielinizadas finas (2-5 µm), dolor agudo y temperatura, 12-30 m/s. B: mielinizadas finas, autónomas preganglionares, 3-15 m/s. C: amielínicas (0.3-1.3 µm), dolor lento, temperatura, autónomas postganglionares, 0.5-2 m/s.' },
            { id: 'cv-by-fiber', title: 'Velocidades de conducción por tipo de fibra', titleEn: 'Conduction velocities by fiber type' },
            { id: 'clinical-correlation', title: 'Correlación clínica de cada grupo', titleEn: 'Clinical correlation of each group' },
          ]
        },
        {
          id: 'peripheral-nerve-anatomy',
          title: 'Anatomía del nervio periférico',
          titleEn: 'Peripheral nerve anatomy',
          children: [
            { id: 'endo-peri-epineurium', title: 'Endoneuro, perineuro, epineuro', titleEn: 'Endoneurium, perineurium, epineurium', content: 'El nervio periférico se organiza en: Endoneuro (tejido conectivo laxo que rodea cada fibra nerviosa individual), Perineuro (vaina que rodea cada fascículo, forma la barrera hemato-neural), y Epineuro (tejido conectivo que agrupa todos los fascículos formando el tronco nervioso). La lesión de diferentes capas define el grado de severidad (clasificación de Sunderland).' },
            { id: 'vasa-nervorum', title: 'Vasa nervorum y barrera hemato-neural', titleEn: 'Vasa nervorum and blood-nerve barrier' },
          ]
        },
        {
          id: 'motor-unit',
          title: 'La unidad motora',
          titleEn: 'The motor unit',
          children: [
            { id: 'motor-unit-composition', title: 'Composición: motoneurona + axón + UNM + fibras musculares', titleEn: 'Composition: motor neuron + axon + NMJ + muscle fibers', content: 'La unidad motora es la unidad funcional básica del sistema neuromuscular. Está compuesta por una motoneurona alfa del asta anterior, su axón (que viaja por raíz ventral, plexo y nervio periférico), la unión neuromuscular, y todas las fibras musculares que inerva. Es la unidad que la EMG estudia directamente.' },
            { id: 'innervation-ratio', title: 'Ratio de inervación', titleEn: 'Innervation ratio', content: 'El ratio de inervación varía enormemente entre músculos: músculos oculares extrínsecos (~5-10 fibras/UM) para movimientos finos, hasta el gastrocnemio (~2000 fibras/UM) para fuerza bruta. Un ratio bajo = control fino; un ratio alto = fuerza.' },
            { id: 'motor-unit-territory', title: 'Territorio de la unidad motora', titleEn: 'Motor unit territory', content: 'Las fibras musculares de una sola unidad motora se distribuyen aleatoriamente dentro de un territorio que se superpone con otras unidades motoras. El PAUM registrado por la aguja concéntrica representa la actividad de ~15-20 fibras dentro del radio de captación del electrodo (aproximadamente 2.5 mm).' },
          ]
        },
      ]
    },
    {
      id: 'muscle-contraction-physiology',
      title: 'Neurofisiología de la Contracción Muscular',
      titleEn: 'Muscle Contraction Neurophysiology',
      description: 'Potencial de acción, transmisión neuromuscular y tipos de fibra',
      children: [
        { id: 'action-potential-generation', title: 'Generación y propagación del potencial de acción', titleEn: 'Action potential generation and propagation', content: 'El potencial de acción se genera cuando la membrana se despolariza hasta alcanzar el umbral (-55 mV). La apertura de canales de Na+ causa una rápida despolarización (fase ascendente), seguida por la inactivación de Na+ y apertura de K+ (repolarización). El período refractario absoluto asegura la conducción unidireccional.' },
        { id: 'neuromuscular-transmission', title: 'Transmisión neuromuscular: acetilcolina y receptores nicotínicos', titleEn: 'Neuromuscular transmission', content: 'La llegada del potencial de acción al terminal presináptico abre canales de Ca² dependientes de voltaje. El influjo de calcio desencadena la fusión de vesículas de acetilcolina (ACh) con la membrana presináptica (exocitosis). La ACh se une a receptores nicotínicos postsinápticos, generando el potencial de placa terminal. La ACh es degradada rápidamente por la acetilcolinesterasa.' },
        { id: 'excitation-contraction', title: 'Acoplamiento excitación-contracción', titleEn: 'Excitation-contraction coupling', content: 'El potencial de acción del sarcolema viaja por los túbulos T, activando los receptores de dihidropiridina (DHPR) que a su vez activan los receptores de rianodina (RyR) del retículo sarcoplásmico. La liberación de Ca²⁺ permite la interacción actina-miosina. La recaptación de Ca²⁺ por la SERCA relaja el músculo.' },
        { id: 'fiber-types', title: 'Fibras musculares tipo I vs. tipo II', titleEn: 'Type I vs type II muscle fibers', content: 'Tipo I (fibras lentas, rojas, oxidativas): resistentes a la fatiga, reclutadas primero (principio de Henneman). Tipo II (fibras rápidas, blancas, glucolíticas): mayor fuerza y velocidad, reclutadas con mayor esfuerzo. Tipo IIa: intermedias. Tipo IIb/IIx: más rápidas y fatigables. La composición varía entre músculos y puede cambiar con entrenamiento o enfermedad.' },
      ]
    },
  ]
};
