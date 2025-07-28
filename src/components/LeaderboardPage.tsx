
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Btn15 from '@/components/ui/btn15';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Trophy, Crown, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLeaderboardData } from '@/hooks/useLeaderboardData';
import { useClanMembership } from '@/hooks/useClanMembership';
import { useNavigation } from '@/hooks/useNavigation';
import LeaderboardHeader from './Leaderboard/LeaderboardHeader';
import LeaderboardTabs from './Leaderboard/LeaderboardTabs';

const LeaderboardPage = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();
  const { handleQuickNavigation } = useNavigation();
  
  const {
    topUsers,
    topClans,
    totalPlayers,
    isLoadingUsers,
    isLoadingClans,
    isLoadingStats,
    loadLeaderboards
  } = useLeaderboardData();

  const {
    userClanMembership,
    isJoining,
    handleJoinClan
  } = useClanMembership();

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await loadLeaderboards();
      toast({
        title: "Refreshed Successfully",
        description: "Leaderboard data has been updated",
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: "Refresh Failed",
        description: "Failed to refresh leaderboard data",
        variant: "destructive"
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleClanJoin = async (clan: any, e: React.MouseEvent) => {
    await handleJoinClan(clan, () => {
      loadLeaderboards();
    });
  };

  const handleNavigateToClan = (page: string, clanId?: string) => {
    console.log('LeaderboardPage: Navigating to clan with:', page, clanId);
    if (page === 'clan' && clanId) {
      handleQuickNavigation('clan-detail', clanId);
    } else {
      handleQuickNavigation(page, clanId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="min-h-screen flex flex-col">
        <LeaderboardHeader 
          totalPlayers={totalPlayers}
          isLoadingStats={isLoadingStats}
        />

        <div className="px-4">
          <div className="max-w-md mx-auto mb-4">
            <Btn15
              onClick={handleRefresh}
              disabled={isRefreshing}
              label={isRefreshing ? 'Refreshing...' : 'Refresh Data'}
              icon={RefreshCw}
              variant="info"
              size="default"
              className="w-full shadow-lg hover:shadow-xl"
            />
          </div>
        </div>

        <LeaderboardTabs 
          topUsers={topUsers}
          topClans={topClans}
          isLoadingUsers={isLoadingUsers}
          isLoadingClans={isLoadingClans}
          userClanMembership={userClanMembership}
          isJoining={isJoining}
          onJoinClan={handleClanJoin}
          onNavigate={handleNavigateToClan}
        />
      </div>
    </div>
  );
};

export default LeaderboardPage;
