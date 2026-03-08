import { Module } from '../../types/content';

export const module13: Module = {
  id: 'safety-qc',
  number: 13,
  title: 'Seguridad, Errores y Control de Calidad',
  titleEn: 'Safety, Errors and Quality Control',
  emoji: '🛡️',
  description: 'Manejo de temperatura, artefactos técnicos, marcapasos y estándares AANEM',
  descriptionEn: 'Temperature management, technical artifacts, pacemakers and AANEM standards',
  color: 'from-red-600 to-rose-800',
  icon: 'ShieldAlert',
  topics: [
    {
      id: 'temperature-control',
      title: 'Control de Temperatura',
      children: [
        { id: 'clinical-impact', title: 'Impacto Clínico del Frío', content: 'El frío ralentiza el cierre de los canales de sodio. Consecuencias: prolongación de latencias, disminución de velocidad de conducción (1.5-2 m/s por cada grado < 32°C), aumento espurio de amplitud y duración del potencial. Puede enmascarar bloqueos de conducción o simular neuropatía desmielinizante.' },
        { id: 'standard-requirements', title: 'Requisitos Estándar', content: 'Temperatura cutánea obligatoria >32°C en miembros superiores y >30°C en inferiores. Debe calentarse la extremidad (agua tibia, lámparas) antes de realizar el estudio si no cumple los criterios (absolutamente necesario para diagnosticar STC límite).' }
      ]
    },
    {
      id: 'artifacts-errors',
      title: 'Artefactos y Errores Técnicos Comunes',
      children: [
        { id: '60hz-noise', title: 'Interferencia de línea (60Hz)', content: 'Artefacto por mala conexión a tierra, sala ruidosa eléctricamente o alta impedancia del electrodo. Solución: limpiar piel (preparación con alcohol/pasta abrasiva), aplicar gel, asegurar el electrodo de tierra entre estimulador y registro activo, y desconectar camas eléctricas.' },
        { id: 'stimulus-artifact', title: 'Artefacto de Estímulo Excesivo', content: 'Oculta el inicio del potencial (latencia ilegible). Solución: alejar tierra del registro (ponerla entre estimulador y registro), girar el ánodo del estimulador, reducir duración del estímulo, o "pellizcar" la piel entre estimulador y electrodo activo.' },
        { id: 'co-stimulation', title: 'Co-estimulación (Efecto de Volumen)', content: 'Activación accidental de un nervio adyacente por estímulo supramáximo excesivamente alto o desbordamiento de gel. Distorsiona la morfología creando deflexiones iniciales positivas. Ejemplo: estimular mediano al intentar estimular ulnar en muñeca.' },
        { id: 'distance-errors', title: 'Errores de Medición de Distancia', content: 'Medir holgadamente, flojo, o apretado usando cinta métrica altera dramáticamente el cálculo de velocidad de conducción (VCN). Siempre debe medirse con la extremidad en la MISMA posición exacta en que se mantuvo durante el estímulo (cinta tensa en línea recta, o midiendo codos curvos propiamente).' }
      ]
    },
    {
      id: 'patient-safety',
      title: 'Seguridad del Paciente y Contraindicaciones',
      children: [
        { id: 'pacemakers-icd', title: 'Marcapasos y Desfibriladores (DAI)', content: 'NCS asilado distal es seguro en marcapasos modernos PERO no se debe estimular cerca del generador o clavícula (hombro, cuello, plexo braquial ipsilateral). En pacientes con DAI (Desfibrilador Automático Implantable), cardiología DEBE suspender temporalmente/desactivar las terapias de choque con imán antes del estudio motor para evitar descargas letales espurias.' },
        { id: 'bleeding-risk', title: 'Riesgo de Sangrado (Anticoagulantes)', content: 'La EMG de aguja es usualmente segura con warfarina si el INR es < 3.0, o bajo DOACs modernos. EVITACIÓN ABSOLUTA: No pinchar músculos profundos incompresibles (psoas ilíaco, paraespinales profundos, obturador interno) donde no se pueda hacer hemostasia directa por compresión en caso de hematoma.' },
        { id: 'infection-risk', title: 'Riesgo de Infección y Daño Cutáneo', content: 'Contraindicado insertar aguja bipolar a través de úlceras abiertas, placas de celulitis severa, injertos cutáneos recientes o zonas con linfedema plástico severo (riesgo catastrófico de sepsis/erisipela). Bioseguridad y guantes son estándares de oro universales.' },
        { id: 'pneumothorax', title: 'Riesgo Crítico de Neumotórax', content: 'Riesgo de punción pleural letal al examinar músculos cercanos al tórax: paraespinales torácicos, supraespinosos, romboides, serrato anterior, diafragma, intercostales. Las agujas NUNCA deben insertarse profundamente hacia el pulmón sin buscar tope óseo directo o usar guía ecográfica obligatoria.' }
      ]
    },
    {
      id: 'aanem-ndtf',
      title: 'Criterios de Calidad AANEM / NDTF',
      children: [
        { id: 'supramaximal', title: 'Estímulo Supramáximo Riguroso', content: 'Todo estudio de CMAP/SNAP requiere obligatoriamente que la intensidad del estímulo sea continuada hasta un 20% - 30% SUPERIOR al nivel de voltaje donde se alcanza y estanca la amplitud máxima, asegurando así la despolarización forzosa de todos los axones del haz.' },
        { id: 'sweep-gain', title: 'Configuración Sensitiva vs Motora', content: 'Motores (Grandes): Ganancia 2-5 mV/divensión, Base de tiempo sweep 2-5 ms/div, Filtros paso 2-10k Hz. Sensitivos (Frágiles): Ganancia 10-20 µV/div, Base de tiempo 1-2 ms/div, Filtros 20-2k Hz.' },
        { id: 'reproducibility', title: 'Reproducibilidad Mínima', content: 'Requisito técnico inquebrantable para certificar como real una latencia y amplitud sensitiva biológica enmascarada. Promediar (averaging digital) al menos 10-20 trazos constantes superpuestos es mandatorio para separar la señal minúscula del persistente ruido basal del salón.' }
      ]
    }
  ]
};
