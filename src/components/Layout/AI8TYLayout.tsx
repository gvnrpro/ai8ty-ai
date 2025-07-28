import React from 'react';
import TopNavigation from '../Navigation/TopNavigation';
import { AI8TYPage } from '@/hooks/useAI8TYNavigation';

interface AI8TYLayoutProps {
  children: React.ReactNode;
  currentPage: AI8TYPage;
  mobileMenuOpen: boolean;
  onNavigate: (page: AI8TYPage) => void;
  onMobileMenuToggle: () => void;
}

const AI8TYLayout: React.FC<AI8TYLayoutProps> = ({
  children,
  currentPage,
  mobileMenuOpen,
  onNavigate,
  onMobileMenuToggle
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavigation
        currentPage={currentPage}
        mobileMenuOpen={mobileMenuOpen}
        onNavigate={onNavigate}
        onMobileMenuToggle={onMobileMenuToggle}
      />
      <main className="flex-1 pt-16">
        {children}
      </main>
    </div>
  );
};

export default AI8TYLayout;