
import React from 'react';
import { Home, CheckSquare, Users, User, Settings, Star, Zap } from 'lucide-react';
import { Page } from '@/hooks/useNavigation';
import NavigationItem from './NavigationItem';

interface BottomNavigationProps {
  currentPage: Page;
  showAdminAccess: boolean;
  onPageChange: (page: Page) => void;
  onTaskButtonClick: () => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  currentPage,
  showAdminAccess,
  onPageChange,
  onTaskButtonClick
}) => {
  const handleSpinAndWin = () => {
    window.open('http://t.me/Spacelbot/Gift', '_blank');
  };

  const navigationItems = [{
    id: 'mining',
    label: 'Mining',
    icon: Home
  }, {
    id: 'tasks',
    label: 'Tasks',
    icon: CheckSquare
  }, {
    id: 'spin',
    label: 'Spin & Win',
    icon: Zap
  }, {
    id: 'nft',
    label: 'NFT',
    icon: Star
  }, {
    id: 'referral',
    label: 'Friends',
    icon: Users
  }, {
    id: 'profile',
    label: 'Profile',
    icon: User
  }];

  if (showAdminAccess) {
    navigationItems.push({
      id: 'admin',
      label: 'Admin',
      icon: Settings
    });
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-white/10 p-2 z-50">
      <div className="max-w-md mx-auto">
        <div className={`grid gap-1 ${showAdminAccess ? 'grid-cols-7' : 'grid-cols-6'}`}>
          {navigationItems.map(item => (
            <NavigationItem
              key={item.id}
              id={item.id}
              label={item.label}
              icon={item.icon}
              currentPage={currentPage}
              onClick={() => {
                if (item.id === 'tasks') {
                  onTaskButtonClick();
                } else if (item.id === 'spin') {
                  handleSpinAndWin();
                } else {
                  onPageChange(item.id as Page);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
