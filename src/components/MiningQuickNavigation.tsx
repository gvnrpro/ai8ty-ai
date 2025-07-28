
import React from 'react';
import { Button } from '@/components/ui/button';
import { Gamepad2, Trophy, Users } from 'lucide-react';

interface MiningQuickNavigationProps {
  onNavigate: (page: string) => void;
}

const MiningQuickNavigation: React.FC<MiningQuickNavigationProps> = ({ onNavigate }) => {
  const quickNavItems = [
    {
      id: 'spin-wheel', 
      label: 'Spin Wheel',
      icon: Gamepad2,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 'leaderboard',
      label: 'Leaderboard', 
      icon: Trophy,
      gradient: 'from-indigo-600 to-blue-600'
    },
    {
      id: 'referral',
      label: 'Friends',
      icon: Users,
      gradient: 'from-pink-600 to-rose-600'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-3 px-4 mb-6">
      {quickNavItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <Button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`h-16 bg-gradient-to-r ${item.gradient} hover:opacity-90 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center gap-1 shadow-lg`}
          >
            <IconComponent className="w-5 h-5" />
            <span className="text-xs">{item.label}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default MiningQuickNavigation;
