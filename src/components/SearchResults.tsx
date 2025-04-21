import React, { useState, useEffect } from 'react';
import { useSearchStore } from '../stores/searchStore';
import { useSettingsStore } from '../stores/settingsStore';
import { useNavigationStore } from '../stores/navigationStore';
import { useTranslationStore } from '../stores/translationStore';

interface SearchResultsProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

export function SearchResults({ inputRef }: SearchResultsProps) {
  const { results, query } = useSearchStore();
  const { isDarkMode } = useSettingsStore();
  const { navigateTo } = useNavigationStore();
  const { t } = useTranslationStore();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [query]);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setSelectedIndex(Math.min(selectedIndex + 1, results.length - 1));
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (selectedIndex === 0) {
          inputRef.current?.focus();
          setSelectedIndex(-1);
        } else {
          setSelectedIndex(Math.max(selectedIndex - 1, 0));
        }
        break;
      case 'Enter':
        event.preventDefault();
        handleNerveClick(results[index]);
        break;
      case 'Escape':
        event.preventDefault();
        inputRef.current?.focus();
        break;
    }
  };

  const handleNerveClick = (nerve: any) => {
    let section = '';
    let subsection = '';

    switch (nerve.anatomicalRegion) {
      case 'upperLimb':
        section = 'nerves';
        subsection = 'upper-limb-nerves';
        break;
      case 'lowerLimb':
        section = 'nerves';
        subsection = 'lower-limb-nerves';
        break;
      case 'cranial':
        section = 'nerves';
        subsection = 'cranial-nerves';
        break;
    }

    navigateTo(section, subsection);
    inputRef.current?.focus();
  };

  if (!query) return null;

  return (
    <div
      className={`absolute z-50 w-full mt-1 rounded-lg shadow-lg ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
      role="listbox"
      aria-label={t('search.results')}
    >
      {results.length > 0 ? (
        <ul className="py-2 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <li key={result.id}>
              <button
                role="option"
                aria-selected={index === selectedIndex}
                className={`w-full text-left px-4 py-2 transition-colors duration-150
                          ${index === selectedIndex
                            ? 'bg-primary-50 text-primary-900 dark:bg-primary-900/50 dark:text-primary-100'
                            : isDarkMode
                            ? 'hover:bg-gray-700 text-gray-200'
                            : 'hover:bg-gray-100 text-gray-900'
                          }`}
                onClick={() => handleNerveClick(result)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                <div className="font-medium">{result.commonName}</div>
                {result.specificAnatomicalRegion && (
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {result.specificAnatomicalRegion}
                  </div>
                )}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="px-4 py-3 text-gray-500 dark:text-gray-400 italic">
          {t('search.noResults')}
        </div>
      )}
    </div>
  );
}