
import React from 'react';
import { TrendingUp } from 'lucide-react';

interface LeaderboardHeaderProps {
  totalPlayers: number;
  isLoadingStats: boolean;
}

const LeaderboardHeader = ({ totalPlayers, isLoadingStats }: LeaderboardHeaderProps) => {
  const formatPlayerCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    }
    return count.toLocaleString();
  };

  return (
    <div className="text-center pt-8 pb-4 px-4">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-1">
        Leaderboard
      </h1>
      <p className="text-gray-400 text-sm">
        Total Players: {isLoadingStats ? '...' : formatPlayerCount(totalPlayers)}
      </p>
      <div className="flex items-center justify-center gap-1 mt-1">
        <TrendingUp className="w-3 h-3 text-green-400" />
        <span className="text-green-400 text-xs">+20K daily</span>
      </div>
    </div>
  );
};

export default LeaderboardHeader;
