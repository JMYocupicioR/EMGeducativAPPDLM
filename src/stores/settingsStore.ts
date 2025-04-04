import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsStore {
  isDarkMode: boolean;
  language: 'es' | 'en';
  toggleDarkMode: () => void;
  setLanguage: (lang: 'es' | 'en') => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      isDarkMode: false,
      language: 'es',
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'settings-storage',
    }
  )
);