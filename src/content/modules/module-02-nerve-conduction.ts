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
        { id: 'cathode-anode', title: 'Estimulación eléctrica: cátodo vs. ánodo',
          content: 'La estimulación eléctrica percutánea es la base de todo estudio de neuroconducción. Comprender la polaridad es esencial para obtener respuestas reproducibles.\n\n**Cátodo (electrodo negativo, negro/rojo según equipo):**\nBajo el cátodo se produce la despolarización del nervio porque la corriente negativa reduce el potencial de membrana hasta alcanzar el umbral de disparo del potencial de acción. Por lo tanto, el cátodo SIEMPRE debe orientarse hacia los electrodos de registro.\n\n**Ánodo (electrodo positivo):**\nBajo el ánodo ocurre hiperpolarización de la membrana, lo que puede impedir la propagación del potencial de acción hacia el registro. Este fenómeno se denomina **bloqueo anódico**.\n\n**Orientación correcta en la práctica:**\n• En NCS motora: el cátodo se coloca DISTAL (más cercano al electrodo de registro), el ánodo proximal.\n• En NCS sensitiva antidrómica: el cátodo se coloca PROXIMAL al registro (porque la dirección de conducción es del estímulo hacia los dedos).\n\n**Error común — inversión cátodo-ánodo:**\nSi se invierte la polaridad, el bloqueo anódico puede causar: reducción de la amplitud del CMAP/SNAP, prolongación de la latencia (la despolarización efectiva ocurre bajo el ánodo, más lejos del registro), y morfología distorsionada del potencial.',
          clinicalPearls: [
            'Si al estimular obtienes un CMAP de menor amplitud de lo esperado, lo PRIMERO que debes verificar es la orientación del estimulador — la inversión cátodo-ánodo es uno de los errores más frecuentes en principiantes.',
            'Regla mnemotécnica: "cátodo al cáptor" — el cátodo siempre apunta hacia los electrodos de captación (registro).',
          ],
          keyPoints: [
            'Cátodo (negativo) = despolariza el nervio. Ánodo (positivo) = hiperpolariza.',
            'El cátodo siempre se orienta hacia los electrodos de registro.',
            'Bloqueo anódico: la inversión reduce amplitud y prolonga latencia.',
            'Verificar polaridad del estimulador debe ser el primer paso ante un resultado inesperado.',
          ],
          youtubeUrls: [
            { title: 'NCS Basics - Electrode Placement', videoId: 'jXA9wXVU3-g' },
          ],
        },
        { id: 'supramaximal', title: 'Estimulación supramáxima',
          content: 'La estimulación supramáxima es un principio fundamental de la técnica de neuroconducción que asegura la activación completa y reproducible de todas las fibras del nervio.\n\n**Técnica paso a paso:**\n1. Iniciar con intensidad baja (5-10 mA) e incrementar gradualmente.\n2. Observar el aumento progresivo de la amplitud del CMAP/SNAP a medida que se reclutan más fibras nerviosas.\n3. Identificar la intensidad a la cual la amplitud ya no aumenta más (estimulación máxima).\n4. Incrementar un 20-25% adicional sobre la intensidad máxima → esta es la **estimulación supramáxima**.\n5. Usar esta intensidad para todas las mediciones del estudio de ese nervio.\n\n**¿Por qué 20-25% extra?**\nPorque durante el estudio el estimulador puede moverse ligeramente, la impedancia de la piel puede cambiar, o los nervios más profundos pueden requerir mayor intensidad. El margen extra asegura que TODAS las fibras permanezcan activadas.\n\n**Estimulación submáxima — el error que debes evitar:**\nSi la estimulación es submáxima, solo se activan las fibras de menor umbral (las más gruesas y superficiales). Esto produce un CMAP de menor amplitud que puede ser malinterpretado como pérdida axonal. La latencia también puede parecer más corta (solo responden las fibras más rápidas).\n\n**Consideraciones de comodidad:**\nLa estimulación supramáxima puede ser incómoda para el paciente. Explica previamente que sentirá una "corriente" y que habrá contracción muscular. Incrementa gradualmente para permitir adaptación.',
          clinicalPearls: [
            'NUNCA compares amplitudes entre sitios de estimulación si no usas estimulación supramáxima en TODOS los puntos. La estimulación submáxima proximal puede simular un falso bloqueo de conducción.',
            'En pacientes obesos o con edema, puede ser necesario usar duraciones de estímulo más largas (0.2-0.5 ms) en lugar de solo aumentar la intensidad.',
          ],
          keyPoints: [
            'Supramáxima = 20-25% por encima de la intensidad máxima.',
            'Incrementar gradualmente hasta que la amplitud deje de aumentar.',
            'Estimulación submáxima = falsa disminución de amplitud = error diagnóstico.',
            'Usar la misma intensidad supramáxima en TODOS los puntos de estimulación.',
          ],
        },
        { id: 'electrodes', title: 'Electrodos de registro: activo, referencia, tierra',
          content: 'La correcta colocación de los electrodos de registro determina la calidad y reproducibilidad de los estudios de neuroconducción.\n\n**Electrodo activo (G1):**\n• **NCS motora:** Se coloca sobre el **punto motor** del músculo (zona de máxima amplitud del CMAP). Para APB: eminencia tenar, a mitad distancia entre articulación MCF y pliegue de muñeca. Para ADM: borde ulnar de la mano, sobre la masa muscular.\n• **NCS sensitiva (antidrómica):** Se coloca sobre el nervio, con electrodo de anillo en el dedo.\n\n**Electrodo de referencia (G2):**\n• **NCS motora:** Sobre el tendón distal del músculo registrado (sitio eléctricamente inactivo). Para APB: articulación MCF del pulgar. Para ADM: base del 5to dedo.\n• **NCS sensitiva:** Se coloca 3-4 cm distal al G1 sobre el mismo dedo.\n\n**Electrodo de tierra (Ground):**\nSe coloca ENTRE el sitio de estimulación y los electrodos de registro. Función: drenar las corrientes de fuga y reducir el artefacto de estímulo. Usar electrodo de barra o disco adhesivo con gel conductor.\n\n**Verificación de colocación correcta:**\nUn CMAP bien registrado debe tener una **deflexión inicial negativa limpia** (ascendente desde la línea base). Si hay una deflexión inicial positiva, el G1 no está sobre el punto motor → reposicionar.',
          clinicalPearls: [
            'La regla de oro: si ves deflexión inicial positiva en el CMAP, MUEVE el G1. No continúes el estudio con un electrodo mal posicionado porque todas las mediciones serán inexactas.',
            'El electrodo de tierra NUNCA debe estar entre G1 y G2 — siempre entre el estimulador y los electrodos de registro.',
          ],
          keyPoints: [
            'G1 (activo): punto motor del músculo (motor) o sobre el nervio (sensitivo).',
            'G2 (referencia): tendón distal (motor) o 3-4 cm distal en dedo (sensitivo).',
            'Ground: SIEMPRE entre estimulador y registro.',
            'Deflexión inicial positiva = G1 mal posicionado → reposicionar antes de continuar.',
          ],
        },
        { id: 'distance-volume', title: 'Distancia entre electrodos y conducción de volumen',
          content: 'La distancia entre los puntos de estimulación y la conducción de volumen son factores técnicos que afectan directamente la precisión de las mediciones.\n\n**Distancia mínima entre sitios de estimulación:**\nPara el cálculo de velocidad de conducción motora, la distancia entre el punto de estimulación distal y proximal debe ser de al menos **10 cm**. Con distancias menores, los errores en la medición de la distancia (±0.5 cm) representan un porcentaje mayor del total, generando errores significativos en el cálculo de la velocidad.\n\n**Medición de distancia:**\n• Usar cinta métrica flexible (no rígida).\n• Medir en línea recta sobre la superficie de la piel entre los puntos de estimulación (marcados con bolígrafo).\n• Para el codo: medir con el codo flexionado a 70-90° (el nervio ulnar se estira con la flexión).\n• Registrar la distancia en milímetros para mayor precisión.\n\n**Conducción de volumen:**\nLas corrientes bioeléctricas se propagan tridimensionalmente a través de los tejidos (músculo, grasa, hueso). Esto puede causar:\n• Registro de potenciales de músculos adyacentes no deseados.\n• Deflexión inicial positiva cuando el electrodo no está directamente sobre el generador del potencial.\n• Captación de actividad motora en estudios sensitivos (especialmente en técnica antidrómica).\n\n**Cómo minimizar la conducción de volumen:**\n• Colocar G1 directamente sobre el punto motor.\n• Usar distancias G1-G2 adecuadas (no demasiado largas).\n• En sensitivos, promediación reduce la contaminación por volumen.',
          clinicalPearls: [
            'Para el nervio ulnar en el codo: SIEMPRE medir con el codo flexionado a 70-90°. Con el codo en extensión, la distancia medida es mayor a la real y la velocidad calculada será falsamente alta.',
            'Un error de 1 cm en una distancia de 10 cm produce un error del 10% en la velocidad de conducción.',
          ],
          keyPoints: [
            'Distancia mínima entre puntos de estimulación: 10 cm.',
            'Medir con cinta flexible, en mm, con el codo flexionado para ulnar.',
            'Conducción de volumen: propagación de corrientes a tejidos adyacentes.',
            'Error de medición de distancia es la fuente más común de imprecisión en la VCM.',
          ],
        },
        { id: 'averaging-artifacts', title: 'Promedios y artefactos',
          content: 'La promediación (averaging) y el reconocimiento de artefactos son habilidades técnicas esenciales para obtener estudios de neuroconducción confiables.\n\n**Promediación (Averaging):**\nConsiste en sumar múltiples respuestas al estímulo y dividir por el número de repeticiones. Las señales verdaderas (SNAP, CMAP) se suman coherentemente porque ocurren siempre en el mismo tiempo post-estímulo. El ruido aleatorio se cancela. El resultado es una mejora del SNR proporcional a √n.\n\n**Cuándo promediar:**\n• SNAP: casi siempre necesario (10-30 repeticiones), especialmente en MI y pacientes añosos.\n• CMAP: generalmente NO necesario (la señal es suficientemente grande). Si promedias un CMAP, probablemente tienes un problema técnico que deberías resolver primero.\n\n**Artefactos comunes y soluciones:**\n• **Artefacto de estímulo:** Señal eléctrica grande que precede al potencial biológico. Solución: verificar tierra, reducir impedancia, limpiar gel, alejar tierra del estimulador.\n• **Artefacto de movimiento:** Desplazamiento de la línea base por movimiento del paciente o cable. Solución: fijar cables, pedir al paciente que se relaje.\n• **Interferencia 50/60 Hz:** Línea base serpenteante con patrón periódico. Solución: reducir impedancia, verificar tierra, alejar equipos eléctricos, desconectar cama eléctrica.\n• **Artefacto de base inestable:** Línea base ondulante por sudoración o mala impedancia. Solución: limpiar piel, reaplicar gel.',
          clinicalPearls: [
            'Si necesitas promediar un CMAP para verlo, algo está mal. Verifica: estimulación supramáxima, colocación de electrodos, impedancia. El CMAP debería ser visible claramente en un solo trazo.',
            'Antes de activar el filtro notch para eliminar 60 Hz, SIEMPRE intenta primero: mejorar impedancia, verificar tierra, y alejar fuentes de ruido.',
          ],
          keyPoints: [
            'Averaging mejora SNR proporcionalmente a √n.',
            'SNAP: promediar 10-30 trazos. CMAP: generalmente un solo trazo basta.',
            'Artefacto de estímulo: verificar tierra y reducir impedancia.',
            'El filtro notch es el último recurso, no el primero.',
          ],
        },
      ]
    },
    {
      id: 'motor-conduction', title: 'Neuroconducción Motora', titleEn: 'Motor Nerve Conduction',
      description: 'CMAP, latencia, amplitud, velocidad y nervios motores por región',
      children: [
        { id: 'cmap-components', title: 'El PAMC (CMAP): componentes y morfología',
          content: 'El Potencial de Acción Muscular Compuesto (CMAP o PAMC) es la señal bioeléctrica que se registra al estimular un nervio motor y captar la respuesta del músculo inervado. Representa la suma sincronizada de todos los potenciales de acción de las fibras musculares activadas.\n\n**Componentes del CMAP:**\n• **Latencia de inicio:** Tiempo desde el estímulo hasta el comienzo de la deflexión negativa.\n• **Fase negativa (ascendente):** Corresponde a la despolarización del músculo bajo el electrodo activo.\n• **Amplitud:** Medida de la línea base al pico negativo (base-to-peak) o de pico negativo a pico positivo.\n• **Duración de la fase negativa:** Refleja la sincronía de activación de las fibras musculares.\n• **Área bajo la curva negativa:** Integra amplitud × duración, más representativa del número total de fibras activadas.\n\n**Morfología normal:**\nUn CMAP normal tiene una deflexión inicial negativa suave y rápida, un pico negativo definido, y una fase positiva más lenta. La presencia de deflexión inicial positiva indica que el electrodo G1 NO está sobre el punto motor.\n\n**Significado clínico de cada componente:**\n• Amplitud reducida → pérdida axonal o bloqueo de conducción distal.\n• Latencia prolongada → desmielinización del segmento distal.\n• Duración aumentada → dispersión temporal (desmielinización difusa).\n• Área reducida > amplitud reducida → bloqueo de conducción.',
          clinicalPearls: [
            'El ÁREA del CMAP es más confiable que la amplitud sola para detectar bloqueos de conducción, porque la dispersión temporal puede reducir la amplitud sin pérdida real de fibras.',
            'Un CMAP con muescas (notched) puede indicar reinervación con diferentes velocidades de conducción, o puede ser artefactual por conducción de volumen.',
          ],
          keyPoints: [
            'CMAP = suma de potenciales de acción de todas las fibras musculares.',
            'Amplitud (mV): refleja número de fibras musculares funcionales.',
            'Área: integra amplitud × duración, más sensible para bloqueos.',
            'Deflexión inicial positiva = G1 mal posicionado.',
          ],
        },
        { id: 'distal-latency', title: 'Latencia motora distal (LMD)',
          content: 'La latencia motora distal (LMD) es el tiempo transcurrido desde la aplicación del estímulo eléctrico en el punto de estimulación distal hasta el inicio de la deflexión negativa del CMAP.\n\n**Qué incluye la LMD:**\n1. Conducción nerviosa en el segmento distal del nervio.\n2. Retardo en la transmisión neuromuscular (~1 ms).\n3. Despolarización de la fibra muscular hasta el inicio del potencial.\n\n**Cómo medirla:**\nSe mide desde el artefacto de estímulo hasta donde la señal del CMAP abandona la línea base y comienza su deflexión negativa. Los cursores del equipo deben colocarse con precisión en ese punto exacto. Amplificar la ganancia ayuda a identificar el punto de despegue exacto.\n\n**Valores normales (ejemplos):**\n• Mediano (muñeca a APB, 8 cm): ≤4.4 ms\n• Ulnar (muñeca a ADM): ≤3.3 ms\n• Peroneo (tobillo a EDB): ≤6.3 ms\n• Tibial (tobillo a AH): ≤5.0 ms\n\n**Significado de prolongación:**\nUna LMD prolongada indica desmielinización del segmento distal del nervio (entre el punto de estimulación y el músculo). Es la principal herramienta diagnóstica del síndrome del túnel carpiano (LMD del mediano prolongada con LMD del ulnar normal).',
          clinicalPearls: [
            'En STC: la diferencia de LMD mediano-ulnar >1.5 ms es más sensible que la LMD absoluta del mediano, porque corrige la variabilidad individual.',
            'La LMD incluye el retardo de la UNM (~1 ms). Por eso NO se usa para calcular la velocidad de conducción motora (se necesitan dos puntos de estimulación).',
          ],
          keyPoints: [
            'LMD = tiempo desde estímulo distal hasta inicio de CMAP.',
            'Incluye: conducción nerviosa distal + retardo UNM + despolarización muscular.',
            'Prolongación → desmielinización distal (ej. STC).',
            'Comparación mediano-ulnar: diferencia >1.5 ms = criterio de STC.',
          ],
        },
        { id: 'cmap-amplitude', title: 'Amplitud del CMAP',
          content: 'La amplitud del CMAP es el parámetro más importante para evaluar la integridad axonal del nervio motor.\n\n**Medición:**\n• **Base-to-peak (línea base al pico negativo):** Método más estandarizado.\n• **Pico-a-pico (pico negativo a pico positivo):** Incluye la fase positiva, generalmente más alto.\n• Los equipos modernos permiten ambas mediciones automáticas.\n\n**Valores normales típicos (base-to-peak, adultos):**\n• Mediano motor (APB): ≥4 mV\n• Ulnar motor (ADM): ≥6 mV\n• Peroneo motor (EDB): ≥2 mV\n• Tibial motor (AH): ≥3 mV\n\n**Significado de la reducción:**\n• **Pérdida axonal:** Reducción bilateral simétrica en polineuropatías; asimétrica en mononeuropatías. El CMAP distal es proporcional al grado de pérdida axonal.\n• **Bloqueo de conducción:** El CMAP distal puede ser normal, pero la amplitud cae al estimular proximal al bloqueo.\n• **Trastornos de UNM:** El CMAP basal puede estar reducido (ej. Lambert-Eaton) o normal (Miastenia Gravis).\n\n**Comparación lado a lado:**\nUna diferencia de amplitud >50% entre el mismo nervio de ambas manos sugiere patología unilateral (neuropatía focal, radiculopatía con pérdida axonal).',
          clinicalPearls: [
            'Un CMAP normal distalmente con caída proximal = bloqueo de conducción (desmielinización focal). Un CMAP reducido distalmente = pérdida axonal. Esta distinción es CLAVE para el diagnóstico.',
            'En neuropatía peronea: CMAP del peroneo bajo puede ser por atrofia del EDB (músculo muy vulnerble), no necesariamente por pérdida axonal severa. Comparar con registro en tibial anterior.',
          ],
          keyPoints: [
            'Medición estándar: base-to-peak (línea base al pico negativo).',
            'Refleja el número de fibras musculares funcionales inervadas.',
            'Reducción distal = pérdida axonal. Caída proximal = bloqueo de conducción.',
            'Comparación lado a lado: diferencia >50% sugiere patología unilateral.',
          ],
        },
        { id: 'motor-cv', title: 'Velocidad de conducción motora (VCM)',
          content: 'La velocidad de conducción motora (VCM) mide la rapidez con que el impulso nervioso recorre un segmento de nervio motor, reflejando directamente la integridad de la mielina.\n\n**Fórmula:**\nVCM (m/s) = Distancia entre puntos de estimulación (mm) / (Latencia proximal − Latencia distal) (ms)\n\n**¿Por qué se necesitan DOS puntos de estimulación?**\nPorque la latencia distal incluye el retardo de la UNM y la despolarización muscular. Al restar las latencias, se cancela este componente y se obtiene puramente el tiempo de conducción nerviosa del segmento entre los dos puntos.\n\n**Valores normales:**\n• Miembro superior: ≥50 m/s\n• Miembro inferior: ≥40 m/s (los nervios son más largos y las fibras más finas)\n\n**Criterios de desmielinización (EFNS/PNS para CIDP):**\n• VCM <70% del límite inferior normal (LIN) en ≥2 nervios motores.\n• Para mediano: <70% de 50 m/s = <35 m/s.\n• Para peroneo: <70% de 40 m/s = <28 m/s.\n\n**Enlentecimiento leve (70-80% LIN):**\nPuede verse en pérdida axonal selectiva de fibras gruesas (las fibras remanentes más lentas determinan la VC), no necesariamente indica desmielinización primaria.',
          clinicalPearls: [
            'La VCM refleja solo las fibras MÁS RÁPIDAS del nervio. No detecta la pérdida de fibras de velocidad intermedia hasta que se pierden todas las rápidas.',
            'Recuerda: la VCM del ulnar a través del codo debe medirse con el codo flexionado a 70-90°. Esta única posición puede cambiar 10-15 m/s en el resultado.',
          ],
          keyPoints: [
            'VCM = Distancia / (Lat. proximal − Lat. distal).',
            'Requiere DOS puntos de estimulación (excluye retardo de UNM).',
            'Normal: ≥50 m/s MS, ≥40 m/s MI.',
            'VCM <70% LIN en ≥2 nervios = criterio de desmielinización.',
          ],
        },
        { id: 'duration-area', title: 'Duración y área bajo la curva',
          content: 'La duración y el área del CMAP son parámetros complementarios a la amplitud que proporcionan información valiosa sobre la sincronía de conducción y la fisiopatología del nervio.\n\n**Duración de la fase negativa del CMAP:**\n• Se mide desde el inicio de la deflexión negativa hasta el cruce por la línea base.\n• Un CMAP normal tiene una duración breve y un pico definido, indicando que todas las fibras conducen a velocidades similares (buena sincronía).\n\n**Dispersión temporal:**\n• Aumento de la duración >30% con estimulación proximal vs. distal = dispersión temporal.\n• Indica desmielinización difusa: diferentes fibras conducen a velocidades muy diferentes, llegando al músculo en tiempos distintos, "dispersando" el CMAP en el tiempo.\n• El CMAP se aplana y se ensancha, con pérdida de amplitud por cancelación de fase.\n\n**Área bajo la curva (fase negativa):**\n• Área = amplitud × duración (integración).\n• Es más representativa del número TOTAL de fibras activadas que la amplitud sola.\n• Es el parámetro preferido para detectar bloqueos de conducción porque la dispersión temporal puede reducir la amplitud sin reducir el área proporcionalmente.\n\n**Criterios de bloqueo de conducción (EFNS/PNS):**\n• Caída de amplitud >50% Y caída de área >50% entre estimulación proximal y distal.\n• Con aumento de duración <30% (para excluir pseudo-bloqueo por dispersión).',
          clinicalPearls: [
            'La diferencia clave: en dispersión temporal, la amplitud baja pero el ÁREA se conserva relativamente. En bloqueo verdadero, TANTO la amplitud COMO el área caen >50%.',
            'Los criterios de bloqueo EFNS/PNS requieren <30% de aumento en duración para diferenciar de cancelación de fase.',
          ],
          keyPoints: [
            'Duración: refleja sincronía de conducción entre fibras.',
            'Dispersión temporal: aumento >30% de duración proximal vs. distal.',
            'Área = amplitud × duración, más sensible para conteo total de fibras.',
            'Bloqueo verdadero: caída >50% de amplitud Y área con <30% aumento de duración.',
          ],
        },
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
        { id: 'mixed-recording', title: 'Registro de fibras motoras y sensitivas combinadas',
          content: 'Los estudios de neuroconducción mixta registran la actividad combinada de fibras motoras y sensitivas de un nervio, produciendo un potencial de acción de nervio mixto (MNAP).\n\n**Técnica:**\nSe estimula el nervio en un sitio donde contenga tanto fibras motoras como sensitivas y se registra en otro punto del mismo tronco nervioso. A diferencia de la NCS motora (que registra del músculo) o sensitiva (que registra sobre fibras puramente sensitivas), aquí se registra directamente del tronco nervioso completo.\n\n**Indicaciones:**\n• Evaluación de segmentos proximales del nervio donde los estudios convencionales son difíciles.\n• Síndrome del túnel carpiano: el estudio palmar mixto del mediano es más sensible que la NCS sensitiva convencional.\n• Evaluación de plexopatías y radiculopatías.\n\n**Ventajas:**\n• Mayor amplitud que los SNAP puros (contribuyen más fibras).\n• Permite evaluar segmentos más proximales.\n• Útil cuando los SNAP están ausentes.',
          clinicalPearls: [
            'El estudio de nervio mixto palmar del mediano es uno de los estudios más sensibles para STC leve/temprano.',
          ],
          keyPoints: [
            'MNAP: potencial combinado de fibras motoras y sensitivas.',
            'Mayor amplitud que SNAP, útil en segmentos proximales.',
            'Estudio palmar mixto: altamente sensible para STC temprano.',
          ],
        },
        { id: 'palmar-mixing', title: 'Palmar mixing study',
          content: 'El estudio palmar mixto (palmar mixed nerve study) es una técnica especializada para evaluar el segmento del nervio mediano a través del túnel carpiano con alta sensibilidad.\n\n**Técnica:**\n• Estimulación: palma de la mano (sobre el nervio mediano).\n• Registro: muñeca (sobre el nervio mediano proximal al túnel carpiano).\n• Distancia: 8 cm.\n• Se compara con el mismo estudio del nervio ulnar ipsilateral (misma distancia palma-muñeca).\n\n**Criterios diagnósticos de STC:**\n• Diferencia de latencia palmar mediano-ulnar >0.3 ms es diagnóstica de STC.\n• Es más sensible que la NCS sensitiva de rutina porque evalúa solo el segmento donde ocurre la compresión.\n\n**Cascada diagnóstica del STC (de más a menos sensible):**\n1. Estudio comparativo mediano-ulnar palmar mixto\n2. NCS sensitiva mediano dedo 4 (comparativa con ulnar dedo 4)\n3. NCS sensitiva mediano convencional (dedo 2/3)\n4. Latencia motora distal del mediano',
          clinicalPearls: [
            'En STC leve con NCS sensitiva de rutina normal, el palmar mixing study puede ser la clave diagnóstica. Es el estudio más sensible disponible.',
          ],
          keyPoints: [
            'Estimulación palmar, registro en muñeca, comparación mediano vs. ulnar.',
            'Diferencia >0.3 ms = diagnóstico de STC.',
            'Más sensible que NCS sensitiva de rutina para STC temprano.',
          ],
        },
        { id: 'ia-afferents', title: 'Aferentes Ia (fibras propioceptivas)',
          content: 'Las fibras Ia son las aferentes propioceptivas más gruesas y rápidas que se originan en los husos musculares. Son las responsables del componente aferente del reflejo miotático (reflejo de estiramiento).\n\n**Características:**\n• Diámetro: 12-20 µm (las más gruesas del organismo).\n• Velocidad de conducción: 70-120 m/s.\n• Contribuyen al reflejo H y a la onda F.\n• En estudios de nervio mixto, las fibras Ia contribuyen al componente más rápido del potencial.\n\n**Relevancia clínica:**\n• El reflejo H del sóleo (arco aferente del tibial) evalúa la integridad del arco reflejo S1 (incluye fibras Ia).\n• La pérdida selectiva de fibras gruesas (incluyendo Ia) reduce la VC y afecta propiocepción antes que el tacto fino.',
          keyPoints: [
            'Fibras Ia: las más gruesas (12-20 µm, 70-120 m/s).',
            'Arco aferente del reflejo H y reflejo miotático.',
            'Su pérdida causa ataxia sensitiva y pérdida propioceptiva.',
          ],
        },
      ]
    },
    {
      id: 'technical-factors', title: 'Factores Técnicos y Artefactos', titleEn: 'Technical Factors and Artifacts',
      children: [
        { id: 'temperature-effect', title: 'Efecto de la temperatura', content: 'La temperatura cutánea debe mantenerse ≥32°C en MS y ≥30°C en MI. El enfriamiento causa: prolongación de latencias (~0.2 ms/°C), aumento de amplitudes (menor cancelación de fase), enlentecimiento de velocidades de conducción (~2 m/s/°C). Estos cambios pueden simular falsamente una desmielinización. Siempre medir y documentar la temperatura.' },
        { id: 'age-height', title: 'Efecto de la edad y estatura', content: 'Con la edad: amplitudes disminuyen, latencias se prolongan ligeramente, velocidades disminuyen modestamente. Con mayor estatura: latencias de onda F más largas, velocidades de conducción ligeramente menores en segmentos distales. Usar tablas normativas ajustadas a la edad.' },
        { id: 'stimulus-artifact', title: 'Artefacto de estímulo', content: 'Acoplamiento eléctrico entre el estimulador y el amplificador. Se reduce con: electrodo de tierra entre estimulación y registro, rotación del ánodo, reducción de la impedancia de la piel, limpieza del gel conductor.' },
        { id: 'costimulation', title: 'Coestimulación y anastomosis',
          content: 'La coestimulación ocurre cuando el estímulo eléctrico activa un nervio adyacente además del nervio objetivo, produciendo un CMAP contaminado por la respuesta del músculo inervado por el nervio no deseado.\n\n**Sitios comunes de coestimulación:**\n• **Fosa antecubital:** estimulación del mediano puede coestimular el ulnar (y viceversa) por su proximidad.\n• **Hueco poplíteo:** el tibial y el peroneo corren juntos como nervio ciático.\n• **Muñeca:** mediano y ulnar están separados por pocos mm.\n\n**Cómo identificarla:**\n• Cambio súbito de morfología del CMAP al estimular en un punto proximal.\n• Aumento inesperado de amplitud con estimulación proximal.\n• Movimiento de músculos no esperados con la estimulación.\n\n**Solución:**\n• Reducir la intensidad al mínimo supramáximo.\n• Rotar el estimulador para alejarlo del nervio adyacente.\n• Mover el punto de estimulación ligeramente.',
          clinicalPearls: [
            'Si la amplitud del CMAP AUMENTA inexplicablemente al estimular proximalmente, sospecha coestimulación antes que anomalía anatómica.',
          ],
          keyPoints: [
            'Coestimulación: activación involuntaria de nervio adyacente.',
            'Sitios frecuentes: fosa antecubital, hueco poplíteo, muñeca.',
            'Solución: reducir intensidad, rotar estimulador.',
          ],
        },
        { id: 'electrode-errors', title: 'Errores comunes en la colocación de electrodos',
          content: 'Los errores en la colocación de electrodos son la causa más frecuente de resultados atípicos y deben descartarse antes de interpretar cualquier hallazgo como patológico.\n\n**Errores más comunes y cómo reconocerlos:**\n\n1. **G1 fuera del punto motor:** El CMAP muestra deflexión inicial positiva. Solución: reposicionar G1 hasta obtener deflexión negativa limpia.\n\n2. **G2 sobre tejido activo:** Contaminación del registro con potenciales de músculos cercanos. Solución: ubicar G2 sobre tendón o hueso.\n\n3. **Tierra mal posicionada:** Ubicar la tierra entre G1 y G2 (en vez de entre estímulo y registro) aumenta el artefacto de estímulo.\n\n4. **Inversión cátodo-ánodo:** Reduce amplitud y prolonga latencia.\n\n5. **Distancia incorrecta:** No medir la distancia real o medir con codo extendido (para ulnar) produce errores en la VCM.\n\n6. **Impedancia alta:** Piel sucia, mal contacto, gel seco → registros ruidosos.\n\n**Regla de oro:**\nAntes de reportar un resultado anormal, verifica la técnica. La mayoría de los resultados \"atípicos\" son errores técnicos.',
          clinicalPearls: [
            'El 80% de los \"resultados anormales\" en principiantes se resuelven corrigiendo la técnica. Siempre piensa primero: \"\u00bfEs técnico?\" antes de interpretar como patológico.',
          ],
          keyPoints: [
            'Deflexión inicial positiva = G1 fuera del punto motor.',
            'Siempre verificar técnica antes de interpretar como anormal.',
            'Impedancia alta = registros ruidosos = mala calidad.',
            'Regla: \"Si es atípico, primero descarta el error técnico.\"',
          ],
        },
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
