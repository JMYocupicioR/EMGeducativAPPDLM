import { create } from 'zustand';
import { useTranslationStore } from './translationStore';

interface Subsection {
  id: string;
  title: string;
  description?: string;
}

interface Section {
  id: string;
  title: string;
  description?: string;
  subsections?: Subsection[];
}

interface NavigationStore {
  sections: Section[];
  activeSection: string | null;
  activeSubsection: string | null;
  setActiveSection: (sectionId: string) => void;
  setActiveSubsection: (subsectionId: string | null) => void;
  navigateTo: (section: string, subsection: string | null) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  sections: [
    {
      id: 'nerves',
      title: 'Nervios',
      description: 'Información detallada sobre nervios periféricos y craneales',
      subsections: [
        { id: 'upper-limb-nerves', title: 'Nervios del Miembro Superior' },
        { id: 'lower-limb-nerves', title: 'Nervios del Miembro Inferior' },
        { id: 'cranial-nerves', title: 'Nervios Craneales' },
      ],
    },
    {
      id: 'nerve-conduction',
      title: 'Estudios de Neuroconducción',
      description: 'Valores de referencia y técnicas para estudios de conducción nerviosa',
      subsections: [
        { id: 'upper-limb-motor', title: 'Estudios Motores de Miembro Superior' },
        { id: 'upper-limb-sensory', title: 'Estudios Sensitivos de Miembro Superior' },
        { id: 'lower-limb-motor', title: 'Estudios Motores de Miembro Inferior' },
        { id: 'lower-limb-sensory', title: 'Estudios Sensitivos de Miembro Inferior' },
      ],
    },
    {
      id: 'emg-techniques',
      title: 'Técnicas EMG',
      description: 'Técnicas de electromiografía e interpretación',
      subsections: [
        { id: 'emg-basics', title: 'Conceptos Básicos de EMG' },
        { id: 'needle-placement', title: 'Colocación de Aguja' },
        { id: 'waveform-analysis', title: 'Análisis de Formas de Onda' },
      ],
    },
    {
      id: 'special-studies',
      title: 'Estudios Especiales',
      description: 'Técnicas avanzadas y estudios especializados',
      subsections: [
        { id: 'f-waves', title: 'Ondas F' },
        { id: 'h-reflex', title: 'Reflejo H' },
        { id: 'repetitive-stimulation', title: 'Estimulación Repetitiva' },
      ],
    },
    {
      id: 'pathologies',
      title: 'Patologías y Criterios Diagnósticos',
      description: 'Criterios diagnósticos y patrones electrodiagnósticos',
      subsections: [
        { id: 'neuropathies', title: 'Neuropatías' },
        { id: 'myopathies', title: 'Miopatías' },
        { id: 'neuromuscular-junction', title: 'Unión Neuromuscular' },
        { id: 'motor-neuron', title: 'Neurona Motora' },
      ],
    },
    {
      id: 'clinical-cases',
      title: 'Clinical Cases',
      description: 'Real clinical cases and their interpretation',
      subsections: [
        { id: 'case-studies', title: 'Case Studies' },
        { id: 'differential-diagnosis', title: 'Differential Diagnosis' },
        { id: 'treatment-options', title: 'Treatment Options' },
      ],
    },
    {
      id: 'reference',
      title: 'Referencias',
      description: 'Material de referencia y recursos adicionales',
      subsections: [
        { id: 'guidelines', title: 'Guías Internacionales' },
        { id: 'articles', title: 'Artículos Científicos' },
        { id: 'books', title: 'Libros Recomendados' },
      ],
    },
  ],
  activeSection: null,
  activeSubsection: null,
  setActiveSection: (sectionId) => {
    set({ activeSection: sectionId });
  },
  setActiveSubsection: (subsectionId) => {
    set({ activeSubsection: subsectionId });
  },
  navigateTo: (section: string, subsection: string | null) => {
    set({ 
      activeSection: section,
      activeSubsection: subsection
    });
  }
}));