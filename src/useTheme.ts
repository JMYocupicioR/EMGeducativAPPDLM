import { useLayoutEffect } from 'react';
import { useSettingsStore } from './stores/settingsStore';

export function useTheme() {
  const { isDarkMode } = useSettingsStore();

  useLayoutEffect(() => {
    const root = document.documentElement;
    
    // Add transition class
    root.classList.add('transition-colors', 'duration-300');
    
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Cleanup
    return () => {
      root.classList.remove('transition-colors', 'duration-300');
    };
  }, [isDarkMode]);

  return { isDarkMode };
}