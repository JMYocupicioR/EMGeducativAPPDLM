import { create } from 'zustand';

interface Section {
  id: string;
  title: string;
  subsections?: { id: string; title: string }[];
}

interface NavigationStore {
  sections: Section[];
  activeSection: string | null;
  setActiveSection: (sectionId: string) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  sections: [
    {
      id: 'nerve-conduction',
      title: 'Nerve Conduction Studies',
      subsections: [
        { id: 'upper-limb-motor', title: 'Upper Limb Motor' },
        { id: 'upper-limb-sensory', title: 'Upper Limb Sensory' },
        { id: 'lower-limb-motor', title: 'Lower Limb Motor' },
        { id: 'lower-limb-sensory', title: 'Lower Limb Sensory' },
      ],
    },
    {
      id: 'emg-techniques',
      title: 'EMG Techniques',
      subsections: [
        { id: 'emg-basics', title: 'EMG Basics' },
        { id: 'spontaneous-activity', title: 'Spontaneous Activity' },
        { id: 'motor-unit-potentials', title: 'Motor Unit Potentials' },
        { id: 'interference-pattern', title: 'Interference Pattern' },
      ],
    },
    {
      id: 'special-studies',
      title: 'Special Studies',
      subsections: [
        { id: 'f-waves', title: 'F-Waves' },
        { id: 'h-reflex', title: 'H-Reflex' },
        { id: 'repetitive-stimulation', title: 'Repetitive Stimulation' },
      ],
    },
    {
      id: 'clinical-cases',
      title: 'Clinical Cases',
      subsections: [
        { id: 'carpal-tunnel', title: 'Carpal Tunnel Syndrome' },
        { id: 'radiculopathies', title: 'Radiculopathies' },
        { id: 'polyneuropathies', title: 'Polyneuropathies' },
      ],
    },
  ],
  activeSection: null,
  setActiveSection: (sectionId) => set({ activeSection: sectionId }),
}));