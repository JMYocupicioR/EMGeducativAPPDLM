// src/content/modules/module-04-late-responses.ts
import { Module } from '../../types/content';

export const module04: Module = {
  id: 'late-responses',
  number: 4,
  title: 'Respuestas Tardías y Reflejos',
  titleEn: 'Late Responses and Reflexes',
  emoji: '🔄',
  description: 'Onda F, Reflejo H, reflejo axónico y reflejo de parpadeo',
  descriptionEn: 'F wave, H reflex, axon reflex and blink reflex',
  color: 'from-purple-500 to-purple-800',
  icon: 'RefreshCw',
  topics: [
    { id: 'f-wave', title: 'Onda F',
      children: [
        { id: 'f-wave-physiology', title: 'Fisiología: conducción antidrómica a la motoneurona', content: 'La onda F es una respuesta tardía causada por la activación antidrómica de las motoneuronas del asta anterior. El estímulo viaja antidrómicamente hasta el soma, donde una pequeña proporción (~1-5%) de motoneuronas se redisparará ortodrómicamente, generando un pequeño potencial muscular tardío. No involucra un arco reflejo sináptico.' },
        { id: 'f-latencies', title: 'Latencia mínima, media, máxima', content: 'Se registran 10-20 ráfagas y se mide la latencia mínima (la más reproducible), media y máxima. La latencia mínima refleja las fibras más rápidas. Se compara con valores normales ajustados a la estatura y extremidad.' },
        { id: 'persistence-chronodispersion', title: 'Persistencia y cronodispersión', content: 'Persistencia: porcentaje de estímulos que generan onda F (normal >50% para mediano/ulnar, >30% para tibial/peroneo). Cronodispersión: diferencia entre latencia máxima y mínima (normal <10 ms en MS). Ambas se alteran en neuropatías desmielinizantes.' },
        { id: 'f-wave-normal-values', title: 'Valores normales por nervio y extremidad' },
        { id: 'f-wave-utility', title: 'Utilidad clínica: radiculopatías, neuropatías proximales, GBS/CIDP', content: 'La onda F evalúa toda la longitud del nervio (incluyendo segmentos proximales inaccesibles a la neuroconducción convencional). Se prolonga o ausenta en: GBS temprano (hallazgo más precoz), CIDP, radiculopatías, plexopatías. Limitación: poca especificidad topográfica.' },
      ]
    },
    { id: 'h-reflex', title: 'Reflejo H (Hoffmann)',
      children: [
        { id: 'h-reflex-physiology', title: 'Fisiología: estímulo submáximo, arco reflejo monosináptico', content: 'El reflejo H es el equivalente eléctrico del reflejo miotático (de estiramiento). Un estímulo submáximo activa selectivamente las fibras aferentes Ia (de bajo umbral), que hacen sinapsis en la médula con las motoneuronas alfa, generando una respuesta refleja. A diferencia de la onda F, SÍ involucra una sinapsis (arco reflejo monosináptico).' },
        { id: 'tibial-soleus', title: 'Nervio tibial → sóleo (reflejo H clásico)', content: 'Se estimula el nervio tibial en el hueco poplíteo a intensidades submáximas y se registra en el sóleo/gastrocnemio. Latencia normal: <34 ms (varía con estatura). El reflejo H desaparece con estimulación supramáxima (colisión antidrómica). Comparación lado a lado: diferencia >1.5 ms es significativa.' },
        { id: 'side-comparison', title: 'Comparación lado a lado' },
        { id: 'fcr-h-reflex', title: 'Reflejo H del flexor carpi radialis', content: 'Alternativa en el MS. Estimulación del nervio mediano en el codo, registro en FCR. Útil para evaluar radiculopatía C6-C7.' },
        { id: 'h-reflex-utility', title: 'Utilidad clínica: radiculopatía S1, polineuropatías', content: 'El reflejo H tibial/sóleo es el estudio más sensible para radiculopatía S1 (más que la EMG de aguja en etapas tempranas). Está ausente bilateralmente en polineuropatías (hallazgo precoz). Diferencia lado a lado >1.5 ms sugiere radiculopatía S1 unilateral.' },
      ]
    },
    { id: 'axon-reflex', title: 'Reflejo Axónico (Onda A)',
      children: [
        { id: 'a-wave-pathophysiology', title: 'Fisiopatología', content: 'La onda A es una respuesta tardía con latencia fija y morfología constante. Se produce por activación antidrómica de una rama axonal colateral (sprout) que re-conduce ortodrómicamente por otra rama. Indica reinervación colateral (hallazgo de cronicidad).' },
        { id: 'a-vs-f-wave', title: 'Diferenciación con la onda F', content: 'La onda A tiene latencia y morfología constantes (a diferencia de la onda F que varía). Aparece con estimulación submáxima y desaparece con supramáxima. Indica patología (reinervación) mientras que la onda F es fisiológica.' },
      ]
    },
    { id: 'blink-reflex', title: 'Reflejo de Parpadeo (Blink Reflex)',
      children: [
        { id: 'trigeminal-facial-pathway', title: 'Vía trigémino-facial', content: 'Se estimula el nervio supraorbitario (rama del trigémino, V1) y se registra en el orbicular de los ojos bilateralmente. El impulso viaja por: rama sensitiva del trigémino → núcleo espinal del trigémino → conexiones pontinas y bulbares → núcleo motor del facial bilateral → músculo orbicular.' },
        { id: 'r1-r2-responses', title: 'Respuestas R1, R2 ipsilateral, R2 contralateral', content: 'R1: respuesta ipsilateral temprana (~10 ms), oligosináptica (pontina). Es la respuesta más localizable. R2 ipsilateral (~30 ms) y R2 contralateral (~32 ms): respuestas tardías polisinápticas (bulbares). El análisis de los patrones R1/R2 permite localizar la lesión a nivel del trigémino aferente, pontino, bulbar o facial eferente.' },
        { id: 'blink-patterns', title: 'Patrones patológicos y correlación lesional', content: 'Lesión del trigémino: R1, R2 ipsi y R2 contra ausentes/retardados con estimulación del lado afectado. Lesión del facial: R1 y R2 ipsi ausentes, R2 contra normal (estimulando el lado sano). Lesión pontina: R1 afectado. Lesión bulbar: R2 afectados bilateralmente.' },
        { id: 'blink-utility', title: 'Utilidad en neuropatía trigeminal y parálisis facial' },
      ]
    },
  ]
};
