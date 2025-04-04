import { create } from 'zustand';

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
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  sections: [
    {
      id: 'nerve-conduction',
      title: 'Estudios de Conducción Nerviosa',
      description: 'Valores de referencia y técnicas para estudios de conducción nerviosa',
      subsections: [
        { id: 'upper-limb-motor', title: 'Motor Miembro Superior' },
        { id: 'upper-limb-sensory', title: 'Sensitivo Miembro Superior' },
        { id: 'lower-limb-motor', title: 'Motor Miembro Inferior' },
        { id: 'lower-limb-sensory', title: 'Sensitivo Miembro Inferior' },
      ],
    },
    {
      id: 'emg-techniques',
      title: 'Técnicas EMG',
      description: 'Guías detalladas de técnicas electromiográficas',
      subsections: [
        { id: 'emg-basics', title: 'Fundamentos EMG' },
        { id: 'spontaneous-activity', title: 'Actividad Espontánea' },
        { id: 'motor-unit-potentials', title: 'Potenciales de Unidad Motora' },
        { id: 'interference-pattern', title: 'Patrón de Interferencia' },
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
      id: 'clinical-cases',
      title: 'Casos Clínicos',
      description: 'Casos de estudio y ejemplos prácticos',
      subsections: [
        { id: 'carpal-tunnel', title: 'Síndrome del Túnel Carpiano' },
        { id: 'radiculopathies', title: 'Radiculopatías' },
        { id: 'polyneuropathies', title: 'Polineuropatías' },
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
  setActiveSection: (sectionId) => 
    set((state) => ({
      activeSection: sectionId,
      // Clear subsection when changing sections
      activeSubsection: null
    })),
  setActiveSubsection: (subsectionId) =>
    set({ activeSubsection: subsectionId }),
}));