import React from 'react';
import { useNavigationStore } from '../../stores/navigationStore';
import { useSettingsStore } from '../../stores/settingsStore';
import { NerveConduction } from './sections/NerveConduction';
import { EMGTechniques } from './sections/EMGTechniques';
import { SpecialStudies } from './sections/SpecialStudies';
import { ClinicalCases } from './sections/ClinicalCases';
import { Reference } from './sections/Reference';
import { WelcomeScreen } from './WelcomeScreen';

export function ContentViewer() {
  const { activeSection, activeSubsection } = useNavigationStore();
  const { isDarkMode } = useSettingsStore();
  
  const renderContent = () => {
    if (!activeSection) {
      return <WelcomeScreen />;
    }
    
    switch (activeSection) {
      case 'nerve-conduction':
        return <NerveConduction subsection={activeSubsection} />;
      case 'emg-techniques':
        return <EMGTechniques subsection={activeSubsection} />;
      case 'special-studies':
        return <SpecialStudies subsection={activeSubsection} />;
      case 'clinical-cases':
        return <ClinicalCases subsection={activeSubsection} />;
      case 'reference':
        return <Reference subsection={activeSubsection} />;
      default:
        return <WelcomeScreen />;
    }
  };
  
  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg p-6`}>
      {renderContent()}
    </div>
  );
}