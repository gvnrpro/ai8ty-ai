import { useState } from 'react';

export type AI8TYPage = 'home' | 'about' | 'what-we-build' | 'labs' | 'insights' | 'join-us' | 'try-ai8ty';

export const useAI8TYNavigation = () => {
  const [currentPage, setCurrentPage] = useState<AI8TYPage>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateToPage = (page: AI8TYPage) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    currentPage,
    setCurrentPage,
    navigateToPage,
    mobileMenuOpen,
    setMobileMenuOpen,
    scrollToSection
  };
};