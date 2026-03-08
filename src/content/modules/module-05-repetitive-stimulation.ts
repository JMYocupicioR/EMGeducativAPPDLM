// src/content/modules/module-05-repetitive-stimulation.ts
import { Module } from '../../types/content';

export const module05: Module = {
  id: 'repetitive-stimulation',
  number: 5,
  title: 'Estimulación Nerviosa Repetitiva',
  titleEn: 'Repetitive Nerve Stimulation',
  emoji: '⚙️',
  description: 'Principios de la ENR, protocolos a baja y alta frecuencia, diagnóstico de unión neuromuscular',
  descriptionEn: 'RNS principles, low and high frequency protocols, NMJ diagnosis',
  color: 'from-rose-500 to-pink-700',
  icon: 'Repeat',
  topics: [
    { id: 'rns-principles', title: 'Principios de la ENR',
      children: [
        { id: 'nmj-physiology', title: 'Fisiología de la transmisión neuromuscular', content: 'Cada potencial de acción libera ~60 vesículas de ACh (quantum). Cada vesícula contiene ~10,000 moléculas de ACh. El potencial de placa terminal (EPP) normal es ~3-4 veces el umbral necesario para despolarizar la fibra muscular. Este exceso es el "margen de seguridad". La estimulación repetida causa depleción gradual del pool de vesículas preparadas (readily releasable pool).' },
        { id: 'safety-margin', title: 'Margen de seguridad sináptico', content: 'El margen de seguridad es la diferencia entre el EPP y el umbral de activación. En condiciones normales, incluso con la depleción fisiológica durante estimulación repetitiva, el EPP se mantiene por encima del umbral. En miastenia gravis, el margen de seguridad está reducido (menos receptores funcionales), por lo que la depleción fisiológica del 4to-5to estímulo causa falla de transmisión → decremento.' },
      ]
    },
    { id: 'low-frequency-rns', title: 'ENR a Baja Frecuencia (2-3 Hz)',
      children: [
        { id: 'standard-protocol', title: 'Protocolo estándar: 6-10 estímulos', content: 'Se aplican 6-10 estímulos supramáximos a 2-3 Hz. El máximo decremento ocurre entre el 1er y 4to-5to estímulo. Se calcula el porcentaje de caída: (Amplitud 1 - Amplitud 4) / Amplitud 1 × 100.' },
        { id: 'pathological-decrement', title: 'Decremento patológico (>10%)', content: 'Un decremento >10% entre el 1er y 4to CMAP es diagnóstico de trastorno de la UNM. Patrón en U: el decremento es máximo al 4to-5to estímulo, con ligera recuperación en los siguientes (repair). El decremento se acentúa post-ejercicio prolongado (agotamiento post-ejercicio) y se reduce post-ejercicio breve (facilitación post-tetánica).' },
        { id: 'nerves-muscles-rns', title: 'Nervios y músculos a evaluar', content: 'Músculos proximales son más sensibles: espinal accesorio→trapecio, axilar→deltoides, facial→nasalis. Los músculos distales (ADM, APB) son menos sensibles pero más fáciles de estudiar. Se evalúan al menos 3 pares nervio-músculo.' },
        { id: 'mg-diagnosis', title: 'Diagnóstico de miastenia gravis', content: 'Sensibilidad de ENR en MG generalizada: ~75-80%. En MG ocular pura: ~30-40%. Si ENR es normal y la sospecha clínica persiste, proceder a SFEMG (sensibilidad >95%).' },
      ]
    },
    { id: 'high-frequency-rns', title: 'ENR a Alta Frecuencia y Ejercicio Breve',
      children: [
        { id: 'increment-facilitation', title: 'Incremento/facilitación (>100%)', content: 'En el Síndrome de Lambert-Eaton, la amplitud del CMAP basal está muy reducida. Con ENR a alta frecuencia (20-50 Hz) o después de ejercicio máximo breve (10 segundos), la amplitud del CMAP aumenta >100% (a veces >200%). Este incremento dramático es diagnóstico de LEMS.' },
        { id: 'lems-botulism', title: 'Diagnóstico de Lambert-Eaton y botulismo', content: 'LEMS: CMAP basal bajo, incremento >100% post-ejercicio. Anticuerpos anti-VGCC positivos en ~85%. Botulismo: similar al LEMS pero con contexto clínico diferente (intoxicación alimentaria o de herida).' },
        { id: 'post-exercise-facilitation-exhaustion', title: 'Facilitación post-ejercicio vs. decremento post-ejercicio', content: 'Facilitación post-ejercicio (0-2 min post-ejercicio): incremento transitorio por acumulación de Ca²⁺ presináptico. Agotamiento post-ejercicio (2-5 min post-ejercicio): decremento acentuado tras depleción de vesículas. Estas ventanas temporales son importantes para el protocolo de ENR.' },
      ]
    },
    { id: 'rns-variants', title: 'Variantes y Técnicas Avanzadas',
      children: [
        { id: 'post-exercise-rns', title: 'ENR post-ejercicio' },
        { id: 'proximal-rns', title: 'ENR en nervios proximales' },
        { id: 'movement-artifacts', title: 'Contaminación por artefactos de movimiento', content: 'Inmovilizar la extremidad firmemente. Asegurar estimulación supramáxima estable. Verificar que no haya deriva de la línea base. Pseudodecremento por movimiento del electrodo es una fuente frecuente de falsos positivos.' },
      ]
    },
  ]
};
