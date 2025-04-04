import React from 'react';
import { useNavigationStore } from '../stores/navigationStore';
import { useSettingsStore } from '../stores/settingsStore';

export function Navigation() {
  const { sections, activeSection, setActiveSection } = useNavigationStore();
  const { isDarkMode } = useSettingsStore();

  return (
    <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg p-4`}>
      {sections.map((section) => (
        <div key={section.id} className="mb-4">
          <button
            onClick={() => setActiveSection(section.id)}
            className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
              activeSection === section.id
                ? isDarkMode
                  ? 'bg-blue-900 text-blue-200'
                  : 'bg-blue-50 text-blue-700'
                : isDarkMode
                ? 'hover:bg-gray-700 text-gray-200'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            {section.title}
          </button>
          {section.subsections && activeSection === section.id && (
            <div className="ml-4 mt-2 space-y-1">
              {section.subsections.map((subsection) => (
                <button
                  key={subsection.id}
                  className={`w-full text-left px-4 py-2 text-sm rounded-md ${
                    isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {subsection.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}