
import React from 'react';
import Btn15 from '@/components/ui/btn15';
import { Gift, Trophy, RefreshCw } from 'lucide-react';

interface TopActionButtonsProps {
  isMining: boolean;
  timeLeft: number;
  onGet1000TON: () => void;
  onLeaderboard: () => void;
  onResetMining: () => void;
}

const TopActionButtons: React.FC<TopActionButtonsProps> = ({
  isMining,
  timeLeft,
  onGet1000TON,
  onLeaderboard,
  onResetMining
}) => {
  return (
    <div className="pt-6 px-4">
      <div className="flex justify-center items-center gap-3">
        <Btn15
          onClick={onGet1000TON}
          label="Get 1000 TON"
          icon={Gift}
          variant="warning"
          size="sm"
          className="shadow-lg transition-all duration-300 hover:shadow-xl"
        />

        <Btn15
          onClick={onLeaderboard}
          label="Leaderboard"
          icon={Trophy}
          variant="default"
          size="sm"
          className="shadow-lg transition-all duration-300 hover:shadow-xl"
        />

        {(isMining && timeLeft <= 0) && (
          <Btn15
            onClick={onResetMining}
            label="Reset"
            icon={RefreshCw}
            variant="danger"
            size="sm"
            className="shadow-lg transition-all duration-300 hover:shadow-xl"
          />
        )}
      </div>
    </div>
  );
};

export default TopActionButtons;
