
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Shield } from 'lucide-react';
import UserLeaderboardCard from './UserLeaderboardCard';
import ClanLeaderboardCard from './ClanLeaderboardCard';
import type { Database } from '@/integrations/supabase/types';
import type { ClanMember } from '@/services/clanService';

type RealUserLeaderboard = Database['public']['Views']['real_user_leaderboard']['Row'];
type RealClanLeaderboard = Database['public']['Views']['real_clan_leaderboard']['Row'];

interface LeaderboardTabsProps {
  topUsers: RealUserLeaderboard[];
  topClans: RealClanLeaderboard[];
  isLoadingUsers: boolean;
  isLoadingClans: boolean;
  userClanMembership: ClanMember | null;
  isJoining: string | null;
  onJoinClan: (clan: RealClanLeaderboard, e: React.MouseEvent) => Promise<void>;
  onNavigate?: (page: string, clanId?: string) => void;
}

const LeaderboardTabs = ({
  topUsers,
  topClans,
  isLoadingUsers,
  isLoadingClans,
  userClanMembership,
  isJoining,
  onJoinClan,
  onNavigate
}: LeaderboardTabsProps) => {
  
  const handleClanNavigation = (page: string, clanId?: string) => {
    console.log('LeaderboardTabs: Navigating to clan page:', page, clanId);
    if (onNavigate) {
      onNavigate(page, clanId);
    } else {
      console.error('LeaderboardTabs: onNavigate function not provided');
    }
  };

  return (
    <div className="px-4 pb-4">
      <div className="max-w-md mx-auto">
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-4 h-10 rounded-xl">
            <TabsTrigger 
              value="users" 
              className="text-xs py-1.5 data-[state=active]:bg-blue-500/30 data-[state=active]:text-blue-400 rounded-lg"
            >
              <Trophy className="w-3 h-3 mr-1" />
              Top Users
            </TabsTrigger>
            <TabsTrigger 
              value="clans" 
              className="text-xs py-1.5 data-[state=active]:bg-purple-500/30 data-[state=active]:text-purple-400 rounded-lg"
            >
              <Shield className="w-3 h-3 mr-1" />
              Top Clans
            </TabsTrigger>
          </TabsList>

          <div className="space-y-3">
            <TabsContent value="users" className="space-y-2 mt-0">
              {isLoadingUsers ? (
                <div className="text-center py-8">
                  <div className="text-gray-400">Loading users...</div>
                </div>
              ) : topUsers.length === 0 ? (
                <div className="text-center py-8">
                  <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <div className="text-gray-400">No users data available yet</div>
                  <p className="text-gray-500 text-sm mt-2">Rankings will appear here once users start earning coins</p>
                </div>
              ) : (
                topUsers.map((user, index) => (
                  <UserLeaderboardCard key={user.id} user={user} index={index} />
                ))
              )}
            </TabsContent>

            <TabsContent value="clans" className="space-y-2 mt-0">
              {!userClanMembership && (
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4 mb-4">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <p className="text-purple-300 text-sm">You're not in a clan yet!</p>
                    <p className="text-gray-400 text-xs mt-1">Join a clan below to get a 20% mining bonus</p>
                  </div>
                </div>
              )}
              
              {isLoadingClans ? (
                <div className="text-center py-8">
                  <div className="text-gray-400">Loading clans...</div>
                </div>
              ) : topClans.length === 0 ? (
                <div className="text-center py-8">
                  <Shield className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <div className="text-gray-400">No clans available yet</div>
                  <p className="text-gray-500 text-sm mt-2">Clans will appear here once they are created</p>
                </div>
              ) : (
                topClans.map((clan, index) => (
                  <ClanLeaderboardCard 
                    key={clan.id} 
                    clan={clan} 
                    index={index}
                    userClanMembership={userClanMembership}
                    isJoining={isJoining}
                    onJoinClan={onJoinClan}
                    onNavigate={handleClanNavigation}
                  />
                ))
              )}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default LeaderboardTabs;
