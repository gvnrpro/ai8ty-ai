import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Share2, Copy, Gift, Coins, Trophy } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { simpleReferralService } from '@/services/simpleReferralService';

const ReferralPage = () => {
  const [userProfile, setUserProfile] = useState<any>(null);
  const [referralStats, setReferralStats] = useState({ 
    totalReferrals: 0, 
    totalEarnings: 0,
    referrals: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const username = localStorage.getItem('username');

  useEffect(() => {
    if (username) {
      loadUserData();
    } else {
      setIsLoading(false);
    }
  }, [username]);

  const loadUserData = async () => {
    if (!username) return;
    
    setIsLoading(true);
    try {
      // Try to find existing profile
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('*')
        .eq('referral_name', username)
        .maybeSingle();
      
      if (existingProfile) {
        setUserProfile(existingProfile);
      } else {
        // Create profile if doesn't exist
        await createUserProfile();
      }
      
      // Load referral stats
      const stats = await simpleReferralService.getReferralStats(username);
      setReferralStats(stats);
      
    } catch (error) {
      console.error('Error loading user data:', error);
      toast({
        title: "Error",
        description: "Failed to load referral data",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const createUserProfile = async () => {
    if (!username) return;

    try {
      const fakeTelegramId = Date.now() + Math.floor(Math.random() * 1000);

      const profileData = {
        telegram_id: fakeTelegramId,
        referral_name: username,
        username: username,
        first_name: username,
        earnings: 0
      };

      const { data: newProfile, error } = await supabase
        .from('profiles')
        .insert(profileData)
        .select()
        .single();

      if (error) {
        console.error('Error creating profile:', error);
        return;
      }

      setUserProfile(newProfile);
      
      toast({
        title: "Success!",
        description: "Referral system activated successfully",
      });
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  const copyReferralLink = () => {
    if (!userProfile) return;
    
    const referralLink = simpleReferralService.generateReferralLink(userProfile.referral_name);
    navigator.clipboard.writeText(referralLink);
    
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
  };

  const shareReferralLink = () => {
    if (!userProfile) return;
    
    const referralLink = simpleReferralService.generateReferralLink(userProfile.referral_name);
    const shareText = `🚀 Join SPACE and earn free tokens!

🎁 Get 2000 SPACE tokens instantly!
💰 Start earning now!

Join using my link: ${referralLink}

#SPACE #Crypto #Telegram`;
    
    if (navigator.share) {
      navigator.share({
        title: 'SPACE - Join Now',
        text: shareText,
        url: referralLink
      }).catch(() => {
        fallbackToClipboard(shareText);
      });
    } else {
      fallbackToClipboard(shareText);
    }
  };

  const fallbackToClipboard = (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        toast({
          title: "Copied!",
          description: "Share message copied to clipboard",
        });
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white p-4 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full mx-auto mb-4 animate-spin"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (!username) {
    return (
      <div className="min-h-screen bg-black text-white p-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white mb-4">Please set your username first</p>
          <Button 
            onClick={() => window.location.reload()} 
            className="bg-blue-500 hover:bg-blue-600"
          >
            Reload
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-md mx-auto p-3 space-y-3">
        {/* Header */}
        <div className="text-center pt-2 pb-2">
          <div className="mb-2">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full mx-auto flex items-center justify-center border border-blue-500/30">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <h1 className="text-lg font-bold text-white mb-1">
            Invite Friends
          </h1>
          <p className="text-gray-400 text-sm">
            Earn rewards by inviting friends
          </p>
        </div>

        {/* Rewards Info */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <Card className="bg-white/10 border border-green-500/30 rounded-lg">
            <CardContent className="p-3 text-center">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-1">
                <Gift className="w-4 h-4 text-green-400" />
              </div>
              <p className="text-green-400 font-semibold mb-1 text-xs">Friend Gets</p>
              <p className="text-lg font-bold text-green-400">2,000</p>
              <p className="text-green-300 text-xs">SPACE Tokens</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border border-blue-500/30 rounded-lg">
            <CardContent className="p-3 text-center">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-1">
                <Coins className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-blue-400 font-semibold mb-1 text-xs">You Get</p>
              <p className="text-lg font-bold text-blue-400">1,000</p>
              <p className="text-blue-300 text-xs">SPACE Tokens</p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <Card className="bg-white/10 border border-white/20 rounded-lg">
          <CardContent className="p-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-1">
                  <Trophy className="w-3 h-3 text-purple-400" />
                </div>
                <p className="text-lg font-bold text-white">{referralStats.totalReferrals}</p>
                <p className="text-gray-400 text-xs">Total Friends</p>
              </div>
              <div className="text-center">
                <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-1">
                  <img 
                    src="/lovable-uploads/9860358c-bcb9-419a-8f1d-1b8bb5f7bc46.png" 
                    alt="SPACE" 
                    className="w-3 h-3" 
                  />
                </div>
                <p className="text-lg font-bold text-white">{referralStats.totalEarnings.toLocaleString()}</p>
                <p className="text-gray-400 text-xs">Total Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Referral Link */}
        {userProfile && (
          <Card className="bg-white/10 border border-white/20 rounded-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-sm text-center flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4 text-blue-400" />
                Your Referral Link
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="bg-white/10 border border-white/20 p-2 rounded">
                <p className="text-gray-400 text-xs mb-1">Username</p>
                <p className="text-white font-bold text-sm">@{userProfile.referral_name}</p>
              </div>

              <div className="bg-white/10 border border-white/20 p-2 rounded">
                <p className="text-gray-400 text-xs mb-1">Link</p>
                <p className="text-white text-xs font-mono break-all">
                  {simpleReferralService.generateReferralLink(userProfile.referral_name)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  onClick={copyReferralLink}
                  variant="outline"
                  className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs"
                >
                  <Copy className="w-3 h-3" />
                  Copy
                </Button>
                <Button
                  onClick={shareReferralLink}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-xs"
                >
                  <Share2 className="w-3 h-3" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* How It Works */}
        <Card className="bg-white/10 border border-white/20 rounded-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-sm text-center">How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
              <p className="text-gray-300 text-xs">Share your referral link</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <p className="text-gray-300 text-xs">Friend joins using your link</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
              <p className="text-gray-300 text-xs">Both get instant rewards!</p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Referrals */}
        {referralStats.referrals.length > 0 && (
          <Card className="bg-white/10 border border-white/20 rounded-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-sm text-center">Recent Friends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {referralStats.referrals.slice(0, 3).map((referral: any, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-white/10 last:border-b-0">
                    <span className="text-white text-xs">@{referral.referred_username}</span>
                    <div className="flex items-center gap-1">
                      <img 
                        src="/lovable-uploads/9860358c-bcb9-419a-8f1d-1b8bb5f7bc46.png" 
                        alt="SPACE" 
                        className="w-3 h-3" 
                      />
                      <span className="text-green-400 font-semibold text-xs">+{referral.referrer_reward}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ReferralPage;
