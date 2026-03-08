// src/content/modules/module-03-emg-needle.ts
import { Module } from '../../types/content';

export const module03: Module = {
  id: 'emg-needle',
  number: 3,
  title: 'Electromiografía de Aguja',
  titleEn: 'Needle Electromyography',
  emoji: '🔬',
  description: 'Tipos de electrodos, fases de exploración, actividad espontánea y análisis de PUM',
  descriptionEn: 'Electrode types, exploration phases, spontaneous activity and MUP analysis',
  color: 'from-green-500 to-emerald-700',
  icon: 'Crosshair',
  topics: [
    {
      id: 'emg-principles', title: 'Principios de la EMG de Aguja',
      children: [
        { id: 'electrode-types', title: 'Tipos de electrodos',
          children: [
            { id: 'concentric-needle', title: 'Aguja concéntrica', content: 'Electrodo más utilizado. Consta de un alambre fino (activo) dentro de una cánula de acero (referencia). Radio de captación ~2.5 mm. Registra ~15-20 fibras musculares de la unidad motora. Menor interferencia de volumen que la monopolar.' },
            { id: 'monopolar-needle', title: 'Aguja monopolar', content: 'Aguja sólida recubierta de teflón con la punta expuesta como electrodo activo. Referencia: electrodo de superficie separado. Mayor área de registro, amplitudes algo mayores que la concéntrica. Más cómoda para el paciente.' },
            { id: 'single-fiber-needle', title: 'Aguja de fibra única', content: 'Pequeña superficie de registro (25 µm). Radio de captación ~300 µm. Registra 1-3 fibras musculares individuales. Usada para medir jitter y densidad de fibra.' },
            { id: 'macro-electrode', title: 'Macro-electrodo', content: 'Registra la actividad de toda la unidad motora. Utiliza la cánula de la aguja como electrodo activo. Macro-MUP refleja el tamaño total de la unidad motora.' },
          ]
        },
        { id: 'equipment-settings', title: 'Configuración del equipo: filtros, ganancia, barrido', content: 'EMG de aguja: filtros 10 Hz - 10 kHz, ganancia 50-200 µV/div, velocidad de barrido 10 ms/div. SFEMG: filtros 500 Hz - 10 kHz. La ganancia se ajusta para visualizar adecuadamente los PUM individuales.', videoUrls: [{ title: 'Interferencia a 60 Hz', driveId: '1WxSGYJRL-KbEV1u8rdyuW4FJk1mC5zrO' }, { title: 'Interferencia EKG', driveId: '1gAoqj5yQAZX6ef--xGX1l3tnm-Dc2xn7' }, { title: 'Marcapasos', driveId: '1-YZZZ3TyRbZrhuaSCcYCXxcGqd6GdDzV' }] },
        { id: 'exploration-technique', title: 'Técnica de exploración: cuadrantes y profundidad', content: 'Se explora sistemáticamente en los 4 cuadrantes del músculo, a diferentes profundidades: superficial, media y profunda. El objetivo es evaluar un mínimo de 20 PUM (idealmente >20 sitios). Mover la aguja lentamente, buscando potenciales nítidos con tiempo de ascenso <500 µs.' },
        { id: 'biosafety', title: 'Bioseguridad y complicaciones', content: 'Precauciones universales: guantes, agujas desechables (nunca reutilizar), contenedor de punzocortantes, limpieza de la piel. Complicaciones: hematoma (especialmente con anticoagulantes), infección, neumotórax (al pinchar músculos torácicos: diafragma, serrato anterior, romboides). Contraindicaciones relativas: anticoagulación severa, infecciones cutáneas.' },
      ]
    },
    {
      id: 'emg-phases', title: 'Fases de la Exploración EMG',
      children: [
        { id: 'insertion-activity', title: 'Actividad de inserción',
          children: [
            { id: 'normal-insertion', title: 'Normal', content: 'Breve estallido de actividad eléctrica (<300 ms) al mover la aguja. Causada por la despolarización mecánica de las fibras musculares.', videoUrls: [{ title: 'Inserción normal', driveId: '1mIO7Oq-mwzE_C2OIHsELS38nczAC81Ay' }] },
            { id: 'increased-insertion', title: 'Aumentada (patológica)', content: 'Actividad de inserción que persiste >300 ms. Indica membrana muscular irritable: denervación aguda/subaguda, miopatías inflamatorias, miotonía temprana.', videoUrls: [{ title: 'Inserción aumentada', driveId: '1TuIOyoFWt_70jT4b5nn9vZKbIZ1c4Fk5' }] },
            { id: 'decreased-insertion', title: 'Disminuida / silencio eléctrico', content: 'Indica tejido muscular no viable: reemplazo fibroso/graso severo, atrofia de larga evolución, miopatía terminal. También en parálisis periódica durante el ataque.', videoUrls: [{ title: 'Inserción disminuida', driveId: '1eJ0j6Jnef2WApEJJ2gypK1HKBmwuWs-m' }] },
          ]
        },
        { id: 'rest-activity', title: 'Actividad en reposo',
          children: [
            { id: 'endplate-noise', title: 'Ruido de placa motora (potenciales en miniatura)', content: 'Actividad normal: ruido monofásico negativo de baja amplitud (10-50 µV), como "soplido de viento". Causado por la liberación espontánea de vesículas de ACh (potenciales miniatura de placa terminal). NO es patológico pero puede confundirse con fibrilaciones.', videoUrls: [{ title: 'Potencial de placa terminal miniatura', driveId: '1oGLifGxCY-iBMDZv39NTOtc3TwjYChpF' }] },
            { id: 'endplate-spikes', title: 'Espículas de placa terminal', content: 'Potenciales irregulares, bifásicos con deflexión negativa inicial, 100-200 µV. Causados por la activación de una sola fibra muscular en la zona de la placa. Son normales pero dolorosos para el paciente — mover la aguja ligeramente para salir de la zona de placa.', videoUrls: [{ title: 'Espículas de placa terminal', driveId: '1zLA6JYR_BnDAfU28jcA3rH1HHNYSlr66' }, { title: 'Espículas de placa terminal (2)', driveId: '17zBInoX6SZiX0-L4v34Gf_B5ha7tygwL' }, { title: 'Espículas de placa terminal atípicas', driveId: '16ftESXOlyuKHTvfbbQKdjtM3bPSbr-o9' }] },
            { id: 'normal-silence', title: 'Silencio eléctrico normal', content: 'Un músculo completamente relajado no muestra actividad eléctrica fuera de la zona de placa. La presencia de cualquier actividad en reposo (fuera de la placa) es anormal.' },
          ]
        },
        { id: 'spontaneous-activity', title: 'Actividad espontánea anormal', videoUrls: [{ title: 'Calambre', driveId: '19TAx27BvBDeMefLtu2ZW_SsvW76Nm_pW' }, { title: 'Calambre 2', driveId: '1AgwXJWo-VMzu5wb4OoZhpoVaR4lB95Un' }],
          children: [
            { id: 'fibrillations', title: 'Fibrilaciones: fisiopatología y significado', content: 'Potenciales de fibra muscular individual que se despolariza espontáneamente por pérdida de inervación. Morfología: bifásicas (deflexión positiva inicial), 1-5 ms duración, 20-200 µV. Sonido: "lluvia en el techo". Aparecen 2-3 semanas post-denervación. Se gradúan de 1+ a 4+. Causas: denervación (la más común), miopatías inflamatorias, miopatías necrotizantes.', videoUrls: [{ title: 'Fibrilaciones', driveId: '1K9oy18ok-gK3NTKP1ZxLmbBwRci9Ui90' }] },
            { id: 'positive-sharp-waves', title: 'Ondas agudas positivas (PSW)', content: 'Mismo significado que las fibrilaciones (denervación). Morfología: deflexión positiva inicial abrupta seguida de retorno lento a la línea base. Duración más larga que las fibrilaciones. Sonido: "golpe sordo". A menudo aparecen antes que las fibrilaciones y persisten más tiempo.', videoUrls: [{ title: 'Ondas positivas', driveId: '1E2kLgERe2t0uNjx-brGCrlja6GduTG0I' }, { title: 'Ondas positivas + fibrilaciones', driveId: '1rIl096UwPW5aNyeLY9DKAtFtt72A2SGb' }] },
            { id: 'fasciculations', title: 'Fasciculaciones: benignas vs. malignas', content: 'Contracción visible de un fascículo muscular. En EMG: PUM de morfología normal que descarga irregularmente. Fasciculaciones benignas: morfología normal, persona sana, estresada, cafeína. Fasciculaciones malignas (criterios de Awaji): morfología compleja/inestable, en contexto de denervación activa (fibrilaciones, PSW). En ELA, las fasciculaciones tienen el mismo valor diagnóstico que las fibrilaciones.', videoUrls: [{ title: 'Fasciculaciones', driveId: '1vp09_FsBATj5VBTriGGw3FdyTfDU_9Vd' }, { title: 'Tremor Parkinsoniano', driveId: '17EwHc-8pg83JF1No6EKyTkiCTkpWPhm4' }, { title: 'Registro de un px con ALS', driveId: '1hWzkmC5KVuVLUI71QiBxMXRIso8-M1Eg' }] },
            { id: 'crd', title: 'Descargas repetitivas complejas (CRD)', content: 'Descargas polifásicas (5-100 componentes) que inician y terminan abruptamente, regulares como "máquina de coser". No tienen componente miotónico. Indican cronicidad: denervación crónica, miopatías crónicas, lesiones antiguas. No son específicas de ninguna etiología.', videoUrls: [{ title: 'Descargas repetitivas complejas', driveId: '1DgUYo0lSJdlxb0seMq7c9sLYb6vQuF4c' }, { title: 'Descargas repetitivas complejas 2', driveId: '1690RuQIeJU4I-vmBI-Q6Z5g5WBbxU6TX' }] },
            { id: 'myotonic-discharges', title: 'Descargas miotónicas', content: 'Ráfagas de potenciales que aumentan y disminuyen en frecuencia y amplitud (waxing and waning). Sonido característico: "bombardero en picada" o "motocicleta acelerando". Causas: distrofia miotónica (DM1, DM2), miotonía congénita, paramiotonía congénita, hipotiroidismo severo, fármacos (estatinas, colchicina).', videoUrls: [{ title: 'Descargas miotónicas', driveId: '1oZ1eWZMq46MWtY1TTLM4ctYwPYqys0IA' }, { title: 'Descargas miotónicas 2', driveId: '1JU0SGnXzBKbjCJNsA6UnS0Lr3HUaeRUv' }] },
            { id: 'myokymia', title: 'Mioquimias', content: 'Descargas agrupadas de PUM (dobletes o tripletes) con patrón semirrítmico. Sonido: "soldados marchando". Causas: radiación (plexopatía braquial post-radiación), esclerosis múltiple (facial), Guillain-Barré, intoxicación por organofosforados.', videoUrls: [{ title: 'Descargas mioquímicas', driveId: '1AErD_0PSEDmtjHYDZBrAiQgIwxw_UFN8' }, { title: 'Descargas mioquímicas y multipletes', driveId: '1YDkEp9-EK4kytvQY9IP0N0Uus1pa2Hnh' }] },
            { id: 'neuromyotonia', title: 'Descargas neuromiotónicas', content: 'Ráfagas de alta frecuencia (150-300 Hz) que decrementan. Causas: síndrome de Isaac (neuromiotonía adquirida), anticuerpos anti-CASPR2/LGI1.' },
            { id: 'doublets-multiplets', title: 'Dobletes, tripletes, multipletes', content: 'Descarga repetida de la misma unidad motora en intervalos fijos cortos (5-15 ms). Pueden verse en tétanos, hiperexcitabilidad nerviosa, y como hallazgo normal ocasional.', videoUrls: [{ title: 'Dobletes', driveId: '1rWovq9O5tvA_FEwsZk0GQ2b84R_xDtA_' }, { title: 'Dobletes y múltipletes', driveId: '1p-zDNVIoQ5j32WPWr3G2oaSyNTOKxdKX' }] },
          ]
        },
        { id: 'voluntary-minimal', title: 'Contracción voluntaria mínima',
          children: [
            { id: 'mup-analysis', title: 'Análisis del PAUM individual', content: 'Se pide al paciente una contracción leve para activar 1-3 unidades motoras. Se evalúa la morfología de cada PUM: amplitud, duración, número de fases, giros, y estabilidad.', videoUrls: [{ title: 'Potencial de acción de unidad motora', driveId: '1QWxlCUVjEhG3vvqMhAy-W8CiyEd_kiSB' }, { title: 'PAUM en Lambert-Eaton', driveId: '1_CSLekaV929-SkXtzvYGI6NnOS3_BSaa' }] },
            { id: 'mup-amplitude-duration', title: 'Amplitud, duración, fases, giros', content: 'Amplitud: µV a mV, depende de la distancia al electrodo. Duración: 5-15 ms (varía por músculo y edad), refleja la dispersión temporal de las fibras de la UM. Fases: ≤4 es normal; >4 = polifásico. Giros: cambios de dirección del potencial.' },
            { id: 'polyphasic', title: 'Potenciales polifásicos', content: 'PUM con >4 fases. Hasta 5-15% de PUM polifásicos es normal. Aumento de polifasia indica: desincronización de fibras (denervación con reinervación colateral), o desincronización dentro de fibras (miopatía). No es específico.' },
            { id: 'satellite-nascent', title: 'Potenciales satélites y nacientes', content: 'Satélites: componente tardío separado del PUM principal, indica reinervación temprana con fibras de conducción lenta. Nacientes: PUM muy pequeños, polifásicos, inestables, vistos en denervación reciente con reinervación incipiente.', videoUrls: [{ title: 'Potenciales satélite', driveId: '1wJI_1rsXjSa2H2NJBjBpDbs0rxQOL2m5' }, { title: 'PAUM en fibras sin reinervación', driveId: '1vB2OX_mZkHFJXz9KSIx5XWfXF2UyLNOs' }] },
            { id: 'mup-stability', title: 'Estabilidad del PAUM', content: 'Un PUM que varía en morfología entre descargas sucesivas indica inestabilidad de transmisión neuromuscular (ej. desórdenes de la UNM) o reinervación incompleta. Se evalúa mejor con SFEMG (jitter).' },
          ]
        },
        { id: 'voluntary-maximal', title: 'Contracción voluntaria máxima',
          children: [
            { id: 'recruitment-pattern', title: 'Patrón de reclutamiento', content: 'Reclutamiento normal: nuevas unidades motoras se activan cuando la primera dispara a ~10 Hz (ratio de reclutamiento). Patrón de interferencia completo: con esfuerzo máximo, no se pueden distinguir PUM individuales.', videoUrls: [{ title: 'Reclutamiento de unidad motora', driveId: '19zRgbM4Qwnr_Dtyb5C-NyPcP2_idl3F2' }] },
            { id: 'full-interference', title: 'Patrón de interferencia completo' },
            { id: 'early-recruitment', title: 'Reclutamiento precoz (miopático)', content: 'Muchas unidades motoras reclutadas tempranamente, cada una generando poca fuerza. El patrón está "lleno" a pesos bajos porque cada UM tiene menos fibras funcionales. PUM pequeños y cortos con patrón denso.' },
            { id: 'reduced-recruitment', title: 'Reclutamiento disminuido (neurogénico)', content: 'Pocas unidades motoras disponibles, cada una disparando rápidamente (>20 Hz). Patrón de interferencia reducido. Las UM sobrevivientes pueden ser de gran amplitud (gigantes) por reinervación colateral.', videoUrls: [{ title: 'Reclutamiento en px con denervación', driveId: '1wT1Gu1XKJBh3NChmlAFl9CEaIk-tMlGE' }] },
            { id: 'turns-amplitude', title: 'Análisis cuantitativo turns/amplitud', content: 'Método objetivo de evaluación del patrón de interferencia. Relaciona la frecuencia de giros vs. la amplitud media. Patrón miopático: muchos giros, baja amplitud. Patrón neurogénico: pocos giros, alta amplitud.' },
          ]
        },
      ]
    },
    {
      id: 'quantitative-emg', title: 'EMG Cuantitativa',
      children: [
        { id: 'automatic-mup', title: 'Análisis automático de PUM' },
        { id: 'multi-mup', title: 'Multi-MUP analysis (MMA)' },
        { id: 'signal-decomposition', title: 'Descomposición de señales' },
      ]
    },
    {
      id: 'sfemg', title: 'EMG de Fibra Única (SFEMG)',
      children: [
        { id: 'sfemg-principles', title: 'Principios y electrodos', content: 'La SFEMG utiliza un electrodo con superficie de registro muy pequeña (25 µm) que capta la actividad de 1-3 fibras musculares individuales. La selectividad se logra mediante filtros de pasa-altos más agresivos (500 Hz).' },
        { id: 'jitter', title: 'Jitter neuromuscular', content: 'El jitter es la variabilidad del intervalo entre dos potenciales de fibra única consecutivos de la misma unidad motora. Normal: 20-50 µs (varía por músculo). Aumentado en trastornos de transmisión neuromuscular (miastenia gravis, botulismo) y en reinervación. Bloqueo: cuando el jitter es tan amplio que un potencial falla completamente.' },
        { id: 'fiber-density', title: 'Densidad de fibra', content: 'Número de fibras musculares de la misma UM dentro del radio de captación del electrodo de fibra única. Normal: 1.5 (±0.3). Aumenta con reinervación colateral (más fibras por UM en ese territorio). Es un marcador de remodelación de la UM.' },
        { id: 'sfemg-myasthenia', title: 'Aplicación en miastenia gravis', content: 'SFEMG es el estudio más sensible para trastornos de UNM (sensibilidad >95% en MG generalizada). Jitter anormal = disfunción de transmisión neuromuscular. Si ENR es normal y persiste sospecha clínica, la SFEMG es el siguiente paso.' },
      ]
    },
    {
      id: 'surface-hd-emg', title: 'EMG de Superficie y de Alta Densidad (HD-EMG)',
      children: [
        { id: 'spatiotemporal', title: 'Activación temporo-espacial' },
        { id: 'dimensionality', title: 'Dimensionalidad de la señal' },
        { id: 'fatigue-assessment', title: 'Evaluación de fatiga muscular' },
      ]
    },
    {
      id: 'muscles-explored', title: 'Músculos Explorados en EMG',
      children: [
        { id: 'upper-limb-muscles', title: 'Miembro superior',
          children: [
            { id: 'fdi', title: 'Primer interóseo dorsal', content: 'Inervado por nervio ulnar (C8-T1). Fácilmente accesible, útil para evaluar C8-T1, tronco inferior, cordón medial, nervio ulnar.' },
            { id: 'apb', title: 'Abductor corto del pulgar', content: 'Inervado por nervio mediano (C8-T1). Músculo estándar para registro en NCS del mediano motor. Evaluación de túnel carpiano y lesión C8-T1.' },
            { id: 'biceps', title: 'Bíceps braquial', content: 'Inervado por nervio musculocutáneo (C5-C6). Músculo proxi del MS para evaluar raíces C5-C6, tronco superior, cordón lateral.' },
            { id: 'triceps', title: 'Tríceps braquial', content: 'Inervado por nervio radial (C6-C8). Evalúa raíz C7, tronco medio, cordón posterior, nervio radial.' },
            { id: 'deltoid', title: 'Deltoides', content: 'Inervado por nervio axilar (C5-C6). Músculo proxi para evaluar C5-C6 y nervio axilar post-luxación de hombro.' },
            { id: 'forearm-extensors', title: 'Extensores del antebrazo', content: 'Inervados por nervio radial (rama interósea posterior). Evalúa radiculopatía C7 y síndrome del interóseo posterior.' },
            { id: 'cervical-paraspinals', title: 'Paraespinales cervicales', content: 'Inervados por ramos dorsales. Cruciales para confirmar radiculopatía (fibrilaciones en paraespinales) vs. plexopatía (paraespinales normales).', videoUrls: [{ title: 'Actividad motora de paraespinales', driveId: '19pO6_gBt72i80aSm-m9DSicNY6MMhrNZ' }] },
          ]
        },
        { id: 'lower-limb-muscles', title: 'Miembro inferior',
          children: [
            { id: 'tibialis-anterior', title: 'Tibial anterior', content: 'Inervado por nervio peroneo profundo (L4-L5). Músculo clave para evaluar L5 y neuropatía peronea.' },
            { id: 'medial-gastrocnemius', title: 'Gastrocnemio medial', content: 'Inervado por nervio tibial (S1-S2). Evalúa radiculopatía S1.' },
            { id: 'vastus-lateralis', title: 'Vasto lateral', content: 'Inervado por nervio femoral (L2-L4). Músculo proxi para evaluar L3-L4 y neuropatía femoral.' },
            { id: 'gluteus-medius', title: 'Glúteo medio', content: 'Inervado por nervio glúteo superior (L4-S1). Evalúa plexopatía y radiculopatía lumbar alta.' },
            { id: 'ehl', title: 'Extensor largo del hallux', content: 'Inervado por nervio peroneo profundo (L5). Muy específico para evaluación de raíz L5.' },
            { id: 'lumbar-paraspinals', title: 'Paraespinales lumbares', content: 'Ramos dorsales (L3-S1). Confirman radiculopatía. Explorar a 2-3 cm lateral a la apófisis espinosa.' },
          ]
        },
        { id: 'cranial-muscles', title: 'Cráneo y cuello',
          children: [
            { id: 'orbicularis-oculi', title: 'Orbicular de los ojos' },
            { id: 'masseter', title: 'Masetero' },
            { id: 'genioglossus', title: 'Geniogloso (lengua)' },
            { id: 'scm', title: 'Esternocleidomastoideo' },
            { id: 'trapezius', title: 'Trapecio' },
          ]
        },
        { id: 'risky-muscles', title: 'Músculos de riesgo: diafragma, serrato, romboides', content: 'El diafragma, serrato anterior y romboides tienen cercanía al pulmón. Su punción puede causar neumotórax. Técnicas: inserción tangencial, guía ecográfica, uso de aguja corta. Evaluar riesgo/beneficio.' },
      ]
    },
  ]
};
