
import React from 'react';
import AppProviders from './components/AppProviders';
import AI8TYLayout from './components/Layout/AI8TYLayout';
import HomePage from './components/AI8TY/HomePage';
import AboutPage from './components/AI8TY/AboutPage';
import WhatWeBuildPage from './components/AI8TY/WhatWeBuildPage';
import LabsPage from './components/AI8TY/LabsPage';
import InsightsPage from './components/AI8TY/InsightsPage';
import JoinUsPage from './components/AI8TY/JoinUsPage';
import TryAI8TYPage from './components/AI8TY/TryAI8TYPage';
import { useAI8TYNavigation } from './hooks/useAI8TYNavigation';

const App = () => {
  const { 
    currentPage, 
    navigateToPage, 
    mobileMenuOpen, 
    setMobileMenuOpen 
  } = useAI8TYNavigation();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateToPage} />;
      case 'about':
        return <AboutPage />;
      case 'what-we-build':
        return <WhatWeBuildPage />;
      case 'labs':
        return <LabsPage />;
      case 'insights':
        return <InsightsPage />;
      case 'join-us':
        return <JoinUsPage />;
      case 'try-ai8ty':
        return <TryAI8TYPage />;
      default:
        return <HomePage onNavigate={navigateToPage} />;
    }
  };

  return (
    <AppProviders>
      <AI8TYLayout
        currentPage={currentPage}
        mobileMenuOpen={mobileMenuOpen}
        onNavigate={navigateToPage}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {renderCurrentPage()}
      </AI8TYLayout>
    </AppProviders>
  );
};

export default App;
