// src/content/modules/module-06-evoked-potentials.ts
import { Module } from '../../types/content';

export const module06: Module = {
  id: 'evoked-potentials',
  number: 6,
  title: 'Potenciales Evocados',
  titleEn: 'Evoked Potentials',
  emoji: '🧠',
  description: 'PEV, PEATC, PESS, PEM, potenciales cognitivos, electroretinografía',
  descriptionEn: 'VEP, BAEP, SSEP, MEP, cognitive potentials, electroretinography',
  color: 'from-indigo-500 to-indigo-800',
  icon: 'Brain',
  topics: [
    { id: 'ep-fundamentals', title: 'Fundamentos de Potenciales Evocados',
      children: [
        { id: 'averaging-principle', title: 'Principio: promediación de señales', content: 'Los potenciales evocados son señales de muy baja amplitud (0.1-20 µV) inmersas en actividad EEG de fondo (50-100 µV). La promediación (averaging) de cientos/miles de respuestas idénticas permite extraer la señal del ruido: la respuesta evocada (sincronizada con el estímulo) se potencia, mientras el ruido aleatorio se cancela. √N mejoras con N repeticiones.' },
        { id: 'wave-nomenclature', title: 'Nomenclatura de ondas (N, P + latencia)', content: 'Las ondas se nombran por su polaridad (N=negativa, P=positiva) y su latencia aproximada en milisegundos. Ejemplo: N20 = onda negativa a ~20 ms, P100 = onda positiva a ~100 ms. En PEATC se usan números romanos (I-V).' },
        { id: 'ep-equipment', title: 'Equipo y configuración' },
      ]
    },
    { id: 'vep', title: 'Potenciales Evocados Visuales (PEV)',
      children: [
        { id: 'pattern-reversal', title: 'Técnica: patrón reverso (damero)', content: 'Se presenta un tablero de ajedrez que alterna (reversa) los cuadros blancos y negros a ~2 Hz. El paciente fija la vista en el centro. Se registra en la corteza occipital (Oz). Es la técnica estándar por su alta reproducibilidad.' },
        { id: 'p100', title: 'Componente P100', content: 'La onda P100 es el componente más importante y reproducible del PEV. Latencia normal: ~100 ms (±10 ms). Se prolonga con desmielinización de la vía visual (nervio óptico → quiasma → tracto óptico → cuerpo geniculado lateral → radiaciones ópticas → corteza visual). Prolongación clásica en neuritis óptica (esclerosis múltiple).' },
        { id: 'vep-clinical', title: 'Aplicación clínica: neuritis óptica, esclerosis múltiple', content: 'El PEV es el estudio más sensible para detectar desmielinización subclínica del nervio óptico. En EM, puede estar prolongado incluso sin síntomas visuales. Criterios McDonald incluyen PEV como evidencia de diseminación en espacio. Sensibilidad ~85-100% en EM con neuritis óptica previa, ~30-60% sin antecedente.' },
        { id: 'flash-multifocal', title: 'PEV por flash y PEV multifocal' },
      ]
    },
    { id: 'baep', title: 'PEATC (Potenciales Evocados Auditivos de Tallo Cerebral)',
      children: [
        { id: 'waves-i-v', title: 'Ondas I-V: generadores anatómicos', content: 'Onda I: nervio auditivo (porción distal). Onda II: núcleo coclear. Onda III: complejo olivar superior. Onda IV: lemnisco lateral. Onda V: colículo inferior (la más constante y robusta). Se generan en los primeros 10 ms post-estímulo.' },
        { id: 'interpeak-intervals', title: 'Intervalos I-III, III-V, I-V', content: 'Intervalo I-III: vía auditiva periférica → pontina. Intervalo III-V: vía pontina → mesencefálica. Intervalo I-V: toda la vía auditiva del tallo. Prolongación del I-III: lesión pontina baja. Prolongación del III-V: lesión pontina alta/mesencéfalo. Comparación interaural: diferencia >0.3 ms es significativa.' },
        { id: 'baep-applications', title: 'Aplicaciones: neurinoma del acústico, muerte cerebral, screening neonatal', content: 'Neurinoma del acústico (schwannoma vestibular): prolongación o ausencia de onda I con intervalo I-III prolongado. Muerte cerebral: ausencia de ondas II-V con onda I preservada. Screening auditivo neonatal: presencia de onda V confirma integridad auditiva.' },
        { id: 'auditory-audiometry', title: 'Audiometría de potenciales evocados' },
      ]
    },
    { id: 'ssep', title: 'Potenciales Evocados Somatosensoriales (PESS)',
      children: [
        { id: 'median-ssep', title: 'PESS del nervio mediano',
          children: [
            { id: 'erb-n13-n14-n20', title: 'Punto de Erb, N13, N14, N20', content: 'Punto de Erb (N9): plexo braquial. N13: columnas posteriores cervicales (cuerno dorsal). N14: lemnisco medial (tallo cerebral). N20: corteza somatosensorial primaria (S1). Intervalo Erb-N13: segmento periférico. Intervalo N13-N20: conducción central (normal: <6.0 ms). Prolongación del TCC sugiere mielopatía cervical o lesión de columnas posteriores.' },
            { id: 'central-conduction-time', title: 'Tiempo de conducción central' },
          ]
        },
        { id: 'tibial-ssep', title: 'PESS del nervio tibial',
          children: [
            { id: 'popliteal-l1-p37', title: 'Hueco poplíteo, L1/T12, P37/N45', content: 'Se estimula el nervio tibial posterior en el tobillo. Registro: fosa poplítea (nervio periférico), espinosa L1/T12 (cauda equina/médula), Cz (corteza). P37/N45: componente cortical. TCC tibial normal: <21 ms. Útil en mielopatía torácica y dorsal.' },
          ]
        },
        { id: 'ulnar-ssep', title: 'PESS del nervio ulnar' },
        { id: 'peroneal-ssep', title: 'PESS del nervio peroneo' },
        { id: 'dermatomal-ssep', title: 'PESS dermatoméricos', content: 'Se estimulan dermatomas específicas (L4, L5, S1) para evaluar raíces individuales. Más específicos que los PESS de tronco nervioso para radiculopatía, pero mayor variabilidad inter-sujeto.' },
        { id: 'ssep-clinical', title: 'Aplicaciones clínicas: mielopatía, estenosis espinal, EM', content: 'Los PESS son esenciales para evaluar la función de las columnas posteriores (vía lemniscal). Indicaciones principales: mielopatía cervical espondilótica, esclerosis múltiple, lesión medular, monitorización intraoperatoria de columna, y pronóstico en coma post-paro cardíaco (ausencia bilateral de N20 = mal pronóstico).' },
      ]
    },
    { id: 'mep', title: 'Potenciales Evocados Motores (PEM)',
      children: [
        { id: 'tms', title: 'Estimulación magnética transcraneal (EMT)', content: 'Un pulso magnético potente genera un campo eléctrico que activa las neuronas corticomotoras. Se registra el MEP en un músculo blanco (ej. APB para MS, tibial anterior para MI). Ventajas: no invasivo, indoloro. Limitación: contraindicado con implantes metálicos intracraneales, marcapasos, epilepsia no controlada.' },
        { id: 'electrical-stimulation', title: 'Estimulación eléctrica transcraneal', content: 'Usada principalmente en monitorización intraoperatoria. Más dolorosa que EMT pero más consistente bajo anestesia general.' },
        { id: 'cmct', title: 'Tiempo de conducción motora central (TCMC)', content: 'TCMC = Latencia cortical MEP − Latencia raíz cervical/lumbar. Normal MS: <8.0 ms; MI: <16 ms. Prolongación indica desmielinización de la vía corticoespinal (esclerosis múltiple, mielopatía, ELA). Ausencia de MEP indica bloqueo de conducción severo o pérdida axonal corticoespinal.' },
        { id: 'mep-clinical', title: 'Aplicaciones: esclerosis múltiple, ELA, mielopatía', content: 'EM: TCMC prolongado por desmielinización corticoespinal (complementa PEV y PESS). ELA: amplitudes reducidas, TCMC puede estar normal o levemente prolongado. Mielopatía: correlación con severidad clínica. Monitorización intraoperatoria: cambios >50% de amplitud o >10% de latencia son significativos de riesgo medular.' },
      ]
    },
    { id: 'cognitive-ep', title: 'Potenciales Evocados Cognitivos',
      children: [
        { id: 'p300', title: 'P300: paradigma oddball', content: 'Se presentan dos estímulos auditivos: frecuente (80%) e infrecuente (20%). El paciente identifica los infrecuentes. La onda P300 (~300 ms) refleja la atención, memoria de trabajo y procesamiento cognitivo. Latencia se prolonga con deterioro cognitivo, demencia, delirium. Variabilidad alta; uso clínico complementario.' },
        { id: 'cnv', title: 'Variación negativa contingente (CNV)' },
        { id: 'cognitive-application', title: 'Aplicación en deterioro cognitivo' },
      ]
    },
    { id: 'erg-eog', title: 'Electroretinografía (ERG) y Electrooculografía (EOG)' },
  ]
};
