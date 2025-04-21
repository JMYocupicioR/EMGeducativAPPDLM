import React from 'react';
import { MobileNavigation } from './components/MobileNavigation';
import { Settings } from './components/Settings';
import SearchBar from './components/SearchBar';
import { useTheme } from './useTheme';

export function Header() {
  const { isDarkMode } = useTheme();

  const headerClasses = `sticky top-0 z-30 ${
    isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'
  } backdrop-blur-sm border-b ${
    isDarkMode ? 'border-gray-800' : 'border-gray-200'
  } shadow-sm`;

  return (
    <header 
      className={headerClasses} 
      role="banner"
      aria-label="Encabezado principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <MobileNavigation />
            <div>
              <h1 
                className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                aria-label="ENMG DeepLuxMed - Guía de electromiografía"
              >
                ENMG. DeepLuxMed
              </h1>
              <p 
                className={`mt-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                aria-label="Descripción del sitio"
              >
                Guía completa para electromiografía y estudios de neuroconducción
              </p>
            </div>
          </div>
          <Settings />
        </div>
        <div className="mt-4" role="search">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}