// src/content/modules/module-08-topographic-anatomy.ts
import { Module } from '../../types/content';

export const module08: Module = {
  id: 'topographic-anatomy',
  number: 8,
  title: 'Anatomía Topográfica y Neuroconducción por Nervio',
  titleEn: 'Topographic Anatomy and Nerve-by-Nerve Conduction',
  emoji: '🗺️',
  description: 'Plexos, raíces, mapas de inervación, dermatomas, miotomas y anastomosis',
  descriptionEn: 'Plexuses, roots, innervation maps, dermatomes, myotomes and anastomoses',
  color: 'from-amber-500 to-amber-800',
  icon: 'Map',
  topics: [
    { id: 'brachial-plexus', title: 'Plexo Braquial', children: [
      { id: 'roots-c5-t1', title: 'Raíces (C5-T1)', content: 'C5: deltoides, bíceps, supraespinoso; C6: bíceps, braquiorradial, extensores de muñeca; C7: tríceps, flexor radial del carpo, extensores de dedos; C8: flexores de dedos, interóseos; T1: intrínsecos de la mano.' },
      { id: 'trunks', title: 'Troncos (superior, medio, inferior)', content: 'Tronco superior (C5-C6): nervios supraescapular, musculocutáneo, axilar. Tronco medio (C7): contribuye al nervio radial, mediano. Tronco inferior (C8-T1): contribuye al nervio ulnar, mediano (ramas distales).' },
      { id: 'cords', title: 'Fascículos (lateral, posterior, medial)', content: 'Lateral: musculocutáneo y raíz lateral del mediano. Posterior: nervio axilar y radial. Medial: nervio ulnar, cutáneos braquial/antebraquial medial, y raíz medial del mediano.' },
      { id: 'terminal-branches', title: 'Ramas terminales', content: 'Cinco ramas principales emergen del plexo braquial: Musculocutáneo, Axilar, Radial, Mediano y Ulnar. Cada uno tiene un trayecto motor y sensitivo específico a lo largo de la extremidad.' },
      { id: 'erb-point', title: 'Punto de Erb y estimulación supraclavicular', content: 'Ubicado en el ángulo posterior del cuello, permite la estimulación del tronco superior (C5-C6). Su uso es vital en estudios de radiculopatía o en "inching" proximal para diagnosticar síndrome de salida torácica neurogénica.' },
      { id: 'myotomal-dermatomal', title: 'Correlación miotómica y dermatómica', content: 'Las lesiones primarias de plexo o nervio individual rompen la clásica distribución medular (miotoma/dermatoma). Si la debilidad agrupa por debajo de un fascículo (ej. debilidad tríceps + extensor dedos + supinador), la lesión es del cordón posterior, no radicular C7.' },
    ]},
    { id: 'lumbosacral-plexus', title: 'Plexo Lumbosacro', children: [
      { id: 'lumbar-plexus', title: 'Plexo lumbar (L1-L4)', content: 'Nervios: iliohipogástrico (L1), ilioinguinal (L1), genitofemoral (L1-L2), femorocutáneo lateral (L2-L3), femoral (L2-L4), obturador (L2-L4).' },
      { id: 'sacral-plexus', title: 'Plexo sacro (L4-S3)', content: 'Nervios: glúteo superior (L4-S1), glúteo inferior (L5-S2), ciático (L4-S3, se divide en tibial y peroneo común), pudendo (S2-S4), cutáneo femoral posterior (S1-S3).' },
      { id: 'emerging-nerves', title: 'Nervios emergentes y sus territorios', content: 'Nervio Femoral (L2-L4): flexión cadera, extensión rodilla, sensibilidad anterior/medial muslo. Nervio Ciático (L4-S3): compartimento posterior muslo, divide en Tibial (flexión plantar S1-S2) y Peroneo Común (dorsiflexión L4-L5).' },
    ]},
    { id: 'dorsal-root-ganglion', title: 'Ganglio de la Raíz Dorsal (GRD)', children: [
      { id: 'grp-location', title: 'Ubicación y función', content: 'El GRD contiene los cuerpos celulares de las neuronas sensitivas primarias. Se localiza en el foramen intervertebral, fuera de la duramadre. Concepto clave: en radiculopatía, la lesión es preganglionar (proximal al GRD), por lo que el SNAP se preserva. En plexopatía/neuropatía, la lesión es postganglionar, y el SNAP disminuye.' },
      { id: 'pre-post-ganglionic', title: 'Importancia: lesiones pre vs. postganglionares', content: 'Fundamental. Si hay anestesia grave clínica pero el SNAP está INTACTO electromiográficamente, la afección se asienta inexorablemente en la columna intraspinal medular/raíz (pre-ganglionar, pre-GRD). Si el SNAP decae junto a la clínica sensitiva, existe afección extraspinal real de neuroplexo troncal (post-ganglionar).' },
    ]},
    { id: 'anomalous-innervation', title: 'Inervaciones Anómalas', children: [
      { id: 'martin-gruber-detail', title: 'Anastomosis de Martin-Gruber', content: 'Presente en 15-30% de la población. Fibras motoras del mediano cruzan al ulnar en el antebrazo. Hallazgos electrodiagnósticos: CMAP del mediano en muñeca puede tener componente positivo inicial (deflexión positiva), CMAP del ulnar puede ser mayor con estimulación en codo que en muñeca. Si no se reconoce, puede simular bloqueo de conducción o neuropatía.' },
      { id: 'riche-cannieu-detail', title: 'Anastomosis de Riche-Cannieu', content: 'Comunicación palmar entre la rama motora del mediano (recurrente) y la del ulnar. Puede causar inervación dual del APB. Relevancia: en lesión completa del mediano, puede haber actividad residual en APB por la anastomosis.' },
      { id: 'diagnostic-impact', title: 'Impacto en la interpretación electrodiagnóstica', content: 'Identificar cruces de fibras motores (anastomosis anastomósica atípica) protege al electrodiagnostador de declarar bloqueos parciales falsos espurios (ej. Martin-Gruber confunde neuropatía ulnar codo) y previene cirugías de compresión irrelevantes inútiles erróneamente sugeridas.' },
    ]},
    { id: 'nerve-atlas', title: 'Atlas de Nervios por Región Anatómica', children: [
      { id: 'upper-innervation-map', title: 'Mapa de inervación del miembro superior', content: 'Nervio Radial: tríceps, braquiorradial, extensores de muñeca y dedos, abductor largo pulgar. Nervio Mediano: pronadores, flexores radiales, oponente del pulgar, lumbricales I-II. Nervio Ulnar: flexor ulnar carpo, interóseos palmares/dorsales, abductor meñique.' },
      { id: 'lower-innervation-map', title: 'Mapa de inervación del miembro inferior', content: 'Nervio Femoral: vastos, recto femoral, sartorio, ilíaco. Nervio Obturador: aductor largo/breve/magno, grácil. Nervio Tibial: gastrocnemio, sóleo, tibial posterior, lumbricales distales plantares. Nervio Peroneo Común: tibial anterior, extensores dedos/hallux (profundo), peroneos largo/corto (superficial).' },
      { id: 'dermatome-map', title: 'Mapa de dermatomas anatómicos críticos', content: 'C5: lateral brazo. C6: lateral antebrazo y pulgar. C7: dedos medio/índice palmar. C8: borde ulnar antebrazo y meñique. L4: medial rodilla/pierna. L5: lateral pierna y dorso del pie principal. S1: borde lateral pie, talón posterior plantar.' },
      { id: 'myotome-map', title: 'Mapa clínico de miotomas rápidos', content: 'C5: abducción hombro (Deltoides). C6: flexión codo (Bíceps). C7: extensión codo (Tríceps). C8-T1: flexión y abducción dígitos (Intrínsecos). L3-L4: extensión rodilla (Cuádriceps). L5: dorsiflexión tobillo (Tibial ant). S1: plantiflexión tobillo (Gastrocnemio).' },
    ]},
  ]
};
