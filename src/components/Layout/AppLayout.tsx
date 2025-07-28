
import React from 'react';
import BottomNavigation from '../Navigation/BottomNavigation';
import { Page } from '@/hooks/useNavigation';

interface AppLayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  showAdminAccess: boolean;
  onPageChange: (page: Page) => void;
  onTaskButtonClick: () => void;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  currentPage,
  showAdminAccess,
  onPageChange,
  onTaskButtonClick
}) => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto pb-12">
        {children}
      </div>
      <BottomNavigation
        currentPage={currentPage}
        showAdminAccess={showAdminAccess}
        onPageChange={onPageChange}
        onTaskButtonClick={onTaskButtonClick}
      />
    </div>
  );
};

export default AppLayout;
