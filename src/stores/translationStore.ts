import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  'welcome.title': {
    es: 'Bienvenido a la Herramienta de Referencia EMG',
    en: 'Welcome to the EMG Reference Tool'
  },
  'welcome.description': {
    es: 'Esta herramienta interactiva proporciona información completa sobre electromiografía (EMG) y estudios de conducción nerviosa. Utilice el menú de la izquierda para explorar las diferentes secciones.',
    en: 'This interactive tool provides comprehensive information about electromyography (EMG) and nerve conduction studies. Use the left menu to explore different sections.'
  },
  'welcome.howToUse': {
    es: 'Cómo usar esta herramienta:',
    en: 'How to use this tool:'
  },
  'welcome.instructions': {
    es: 'Navegue por las categorías usando el menú de la izquierda\nUtilice la barra de búsqueda para encontrar temas específicos\nExplore los casos clínicos para práctica diagnóstica\nConsulte los valores de referencia actualizados',
    en: 'Navigate through categories using the left menu\nUse the search bar to find specific topics\nExplore clinical cases for diagnostic practice\nCheck updated reference values'
  },
  'features.nerveConduction': {
    es: 'Protocolos detallados y valores de referencia para estudios de conducción nerviosa.',
    en: 'Detailed protocols and reference values for nerve conduction studies.'
  },
  'features.emgTechniques': {
    es: 'Guías paso a paso para realizar estudios electromiográficos precisos.',
    en: 'Step-by-step guides for performing precise electromyographic studies.'
  },
  'features.clinicalCases': {
    es: 'Ejemplos prácticos y escenarios reales para mejorar tu diagnóstico.',
    en: 'Practical examples and real scenarios to improve your diagnosis.'
  },
  'features.references': {
    es: 'Acceso a recursos académicos y guías internacionales actualizadas.',
    en: 'Access to academic resources and updated international guidelines.'
  },
  'search.placeholder': {
    es: 'Buscar parámetros EMG, técnicas o condiciones...',
    en: 'Search EMG parameters, techniques or conditions...'
  },
  'sections.nerve-conduction': {
    es: 'Estudios de Conducción Nerviosa',
    en: 'Nerve Conduction Studies'
  },
  'sections.emg-techniques': {
    es: 'Técnicas EMG',
    en: 'EMG Techniques'
  },
  'sections.special-studies': {
    es: 'Estudios Especiales',
    en: 'Special Studies'
  },
  'sections.pathologies': {
    es: 'Patologías y Criterios Diagnósticos',
    en: 'Pathologies and Diagnostic Criteria'
  },
  'sections.clinical-cases': {
    es: 'Casos Clínicos',
    en: 'Clinical Cases'
  },
  'sections.reference': {
    es: 'Referencias',
    en: 'References'
  },
  'subsections.upper-limb-motor': {
    es: 'Motor Miembro Superior',
    en: 'Upper Limb Motor'
  },
  'subsections.upper-limb-sensory': {
    es: 'Sensitivo Miembro Superior',
    en: 'Upper Limb Sensory'
  },
  'subsections.lower-limb-motor': {
    es: 'Motor Miembro Inferior',
    en: 'Lower Limb Motor'
  },
  'subsections.lower-limb-sensory': {
    es: 'Sensitivo Miembro Inferior',
    en: 'Lower Limb Sensory'
  },
  'subsections.emg-basics': {
    es: 'Fundamentos EMG',
    en: 'EMG Basics'
  },
  'subsections.spontaneous-activity': {
    es: 'Actividad Espontánea',
    en: 'Spontaneous Activity'
  },
  'subsections.motor-unit-potentials': {
    es: 'Potenciales de Unidad Motora',
    en: 'Motor Unit Potentials'
  },
  'subsections.interference-pattern': {
    es: 'Patrón de Interferencia',
    en: 'Interference Pattern'
  },
  'subsections.f-waves': {
    es: 'Ondas F',
    en: 'F Waves'
  },
  'subsections.h-reflex': {
    es: 'Reflejo H',
    en: 'H Reflex'
  },
  'subsections.repetitive-stimulation': {
    es: 'Estimulación Repetitiva',
    en: 'Repetitive Stimulation'
  },
  'subsections.neuropathies': {
    es: 'Neuropatías',
    en: 'Neuropathies'
  },
  'subsections.myopathies': {
    es: 'Miopatías',
    en: 'Myopathies'
  },
  'subsections.neuromuscular-junction': {
    es: 'Unión Neuromuscular',
    en: 'Neuromuscular Junction'
  },
  'subsections.motor-neuron': {
    es: 'Neurona Motora',
    en: 'Motor Neuron'
  },
  'subsections.carpal-tunnel': {
    es: 'Síndrome del Túnel Carpiano',
    en: 'Carpal Tunnel Syndrome'
  },
  'subsections.radiculopathies': {
    es: 'Radiculopatías',
    en: 'Radiculopathies'
  },
  'subsections.polyneuropathies': {
    es: 'Polineuropatías',
    en: 'Polyneuropathies'
  },
  'subsections.guidelines': {
    es: 'Guías Internacionales',
    en: 'International Guidelines'
  },
  'subsections.articles': {
    es: 'Artículos Científicos',
    en: 'Scientific Articles'
  },
  'subsections.books': {
    es: 'Libros Recomendados',
    en: 'Recommended Books'
  }
};

interface TranslationStore {
  translations: Translations;
  language: 'es' | 'en';
  t: (key: string) => string;
  setLanguage: (language: 'es' | 'en') => void;
}

export const useTranslationStore = create<TranslationStore>()(
  persist(
    (set, get) => ({
      translations,
      language: 'es',
      t: (key: string) => {
        const translation = get().translations[key]?.[get().language];
        return translation || key;
      },
      setLanguage: (language: 'es' | 'en') => set({ language }),
    }),
    {
      name: 'translation-storage',
    }
  )
);