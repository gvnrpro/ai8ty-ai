
import { useState, useEffect } from 'react';
import { leaderboardService } from '@/services/leaderboardService';
import { leaderboardStatsService } from '@/services/leaderboardStatsService';
import type { Database } from '@/integrations/supabase/types';

type RealUserLeaderboard = Database['public']['Views']['real_user_leaderboard']['Row'];
type RealClanLeaderboard = Database['public']['Views']['real_clan_leaderboard']['Row'];

export const useLeaderboardData = () => {
  const [topUsers, setTopUsers] = useState<RealUserLeaderboard[]>([]);
  const [topClans, setTopClans] = useState<RealClanLeaderboard[]>([]);
  const [totalPlayers, setTotalPlayers] = useState<number>(540000);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [isLoadingClans, setIsLoadingClans] = useState(true);
  const [isLoadingStats, setIsLoadingStats] = useState(true);

  const loadLeaderboards = async () => {
    try {
      setIsLoadingUsers(true);
      setIsLoadingClans(true);
      
      console.log('Loading leaderboards from real database views...');
      
      const [usersData, clansData] = await Promise.all([
        leaderboardService.getTopUsers(50),
        leaderboardService.getTopClans(50)
      ]);
      
      console.log('Loaded users data:', usersData);
      console.log('Loaded clans data:', clansData);
      
      setTopUsers(usersData);
      setTopClans(clansData);
    } catch (error) {
      console.error('Error loading leaderboards:', error);
    } finally {
      setIsLoadingUsers(false);
      setIsLoadingClans(false);
    }
  };

  const loadStats = async () => {
    try {
      setIsLoadingStats(true);
      const playerCount = await leaderboardStatsService.getTotalPlayers();
      setTotalPlayers(playerCount);
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setIsLoadingStats(false);
    }
  };

  useEffect(() => {
    loadLeaderboards();
    loadStats();
  }, []);

  return {
    topUsers,
    topClans,
    totalPlayers,
    isLoadingUsers,
    isLoadingClans,
    isLoadingStats,
    loadLeaderboards
  };
};
