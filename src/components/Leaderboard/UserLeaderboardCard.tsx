
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, Trophy } from 'lucide-react';
import type { Database } from '@/integrations/supabase/types';

type RealUserLeaderboard = Database['public']['Views']['real_user_leaderboard']['Row'];

interface UserLeaderboardCardProps {
  user: RealUserLeaderboard;
  index: number;
}

const UserLeaderboardCard = ({ user, index }: UserLeaderboardCardProps) => {
  const getRankIcon = (rank: number | null) => {
    if (!rank) return <span className="w-5 h-5 flex items-center justify-center text-gray-400 font-bold text-sm">-</span>;
    
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-400" />;
      case 2: return <Trophy className="w-5 h-5 text-gray-300" />;
      case 3: return <Trophy className="w-5 h-5 text-orange-400" />;
      default: return <span className="w-5 h-5 flex items-center justify-center text-gray-400 font-bold text-sm">#{rank}</span>;
    }
  };

  const getRankColor = (rank: number | null) => {
    if (!rank) return 'from-gray-600/20 to-gray-700/20 border-gray-600/30';
    
    switch (rank) {
      case 1: return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
      case 2: return 'from-gray-400/20 to-gray-500/20 border-gray-400/30';
      case 3: return 'from-orange-400/20 to-red-500/20 border-orange-400/30';
      default: return 'from-gray-600/20 to-gray-700/20 border-gray-600/30';
    }
  };

  const formatCoins = (coins: number | null) => {
    if (!coins) return '0';
    if (coins >= 1000000) {
      return `${(coins / 1000000).toFixed(1)}M`;
    } else if (coins >= 1000) {
      return `${(coins / 1000).toFixed(1)}K`;
    }
    return coins.toLocaleString();
  };

  const getDisplayName = (user: RealUserLeaderboard) => {
    if (user.first_name && user.first_name.trim()) {
      return user.first_name.trim();
    }
    
    if (user.username && user.username.trim()) {
      return user.username.trim();
    }
    
    if (user.referral_name && !user.referral_name.startsWith('SPACE#')) {
      return user.referral_name;
    }
    
    return user.referral_name || 'Unknown User';
  };

  const getAvatarFallback = (displayName: string) => {
    return displayName.charAt(0).toUpperCase();
  };

  const displayName = getDisplayName(user);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className={`bg-gradient-to-r ${getRankColor(user.rank)} backdrop-blur-sm border rounded-xl overflow-hidden`}>
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              {getRankIcon(user.rank)}
            </div>
            
            <Avatar className="w-10 h-10 border-2 border-white/20">
              {user.photo_url && (
                <AvatarImage src={user.photo_url} alt={displayName} />
              )}
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-bold">
                {getAvatarFallback(displayName)}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <h3 className="text-white font-medium text-sm truncate">
                  {displayName}
                </h3>
              </div>
              <p className="text-gray-400 text-xs truncate">
                {user.clan_name || 'No Clan'}
              </p>
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-1">
                <img 
                  src="/lovable-uploads/304f8800-11e4-4204-a4b7-cf255c07987d.png" 
                  alt="Space Coin"
                  className="w-3 h-3 rounded-full"
                />
                <span className="text-yellow-400 font-bold text-sm">
                  {formatCoins(user.coins)}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UserLeaderboardCard;
