import React from 'react';
import { Search } from 'lucide-react';
import { useSettingsStore } from '../stores/settingsStore';
import { useTranslationStore } from '../stores/translationStore';

export function SearchBar() {
  const { isDarkMode } = useSettingsStore();
  const { t } = useTranslationStore();

  return (
    <div className="mt-4 max-w-2xl">
      <div className="relative">
        <input
          type="text"
          placeholder={t('search.placeholder')}
          className={`w-full pl-10 pr-4 py-2 border rounded-lg ${
            isDarkMode
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
        />
        <Search className={`absolute left-3 top-2.5 h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
      </div>
    </div>
  );
}