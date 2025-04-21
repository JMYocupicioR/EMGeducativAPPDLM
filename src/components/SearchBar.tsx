import React, { useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { useTranslationStore } from '../stores/translationStore';
import { useSettingsStore } from '../stores/settingsStore';
import { useSearchStore } from '../stores/searchStore';
import { SearchResults } from './SearchResults';

function SearchBar() {
  const { t } = useTranslationStore();
  const { isDarkMode } = useSettingsStore();
  const { query, setQuery } = useSearchStore();
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const clearSearch = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      clearSearch();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      resultsRef.current?.querySelector('button')?.focus();
    }
  };

  return (
    <div className="mt-4 max-w-2xl relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          role="searchbox"
          aria-label={t('search.placeholder')}
          placeholder={t('search.placeholder')}
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`input pl-10 pr-10 ${
            isFocused ? 'ring-2 ring-primary-500 border-transparent' : ''
          }`}
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1
                     text-gray-500 hover:text-gray-700 dark:hover:text-gray-300
                     transition-colors duration-150"
            aria-label={t('search.clear')}
          >
            <X size={18} />
          </button>
        )}
      </div>
      <div ref={resultsRef}>
        <SearchResults inputRef={inputRef} />
      </div>
    </div>
  );
}

export default SearchBar;