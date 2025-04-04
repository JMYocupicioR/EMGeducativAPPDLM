import React from 'react';
import { useNavigationStore } from '../stores/navigationStore';
import { useSettingsStore } from '../stores/settingsStore';
import { useTranslationStore } from '../stores/translationStore';
import { ChevronRight } from 'lucide-react';

export function Navigation() {
  const { sections, activeSection, activeSubsection, setActiveSection, setActiveSubsection } = useNavigationStore();
  const { isDarkMode } = useSettingsStore();
  const { t } = useTranslationStore();

  return (
    <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg p-4`}>
      {sections.map((section) => (
        <div key={section.id} className="mb-4">
          <button
            onClick={() => setActiveSection(section.id)}
            className={`w-full text-left px-4 py-2 rounded-md transition-colors flex items-center justify-between ${
              activeSection === section.id
                ? isDarkMode
                  ? 'bg-blue-900 text-blue-200'
                  : 'bg-blue-50 text-blue-700'
                : isDarkMode
                ? 'hover:bg-gray-700 text-gray-200'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            <span>{t(`sections.${section.id}`)}</span>
            <ChevronRight
              size={18}
              className={`transform transition-transform ${
                activeSection === section.id ? 'rotate-90' : ''
              }`}
            />
          </button>
          {section.subsections && activeSection === section.id && (
            <div className="ml-4 mt-2 space-y-1">
              {section.subsections.map((subsection) => (
                <button
                  key={subsection.id}
                  onClick={() => setActiveSubsection(subsection.id)}
                  className={`w-full text-left px-4 py-2 text-sm rounded-md transition-colors ${
                    activeSubsection === subsection.id
                      ? isDarkMode
                        ? 'bg-blue-800 text-blue-200'
                        : 'bg-blue-100 text-blue-700'
                      : isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {t(`subsections.${subsection.id}`)}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}