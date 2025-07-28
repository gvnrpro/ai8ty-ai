
import React from 'react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface NavigationItemProps {
  id: string;
  label: string;
  icon: LucideIcon;
  currentPage: string;
  onClick: () => void;
}

const NavigationItem = ({ id, label, icon: Icon, currentPage, onClick }: NavigationItemProps) => {
  return (
    <Button
      key={id}
      variant="ghost"
      onClick={onClick}
      className={`flex flex-col items-center gap-1 h-12 py-1.5 px-1 text-xs rounded-lg transition-all duration-200 ${
        currentPage === id
          ? 'text-pink-400 bg-pink-400/15 border border-pink-400/20'
          : 'text-gray-400 hover:text-white hover:bg-white/8 border border-transparent'
      }`}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="text-[10px] leading-tight truncate max-w-full font-medium">{label}</span>
    </Button>
  );
};

export default NavigationItem;
