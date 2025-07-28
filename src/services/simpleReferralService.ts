
import { supabase } from '@/integrations/supabase/client';

interface SimpleReferral {
  id: string;
  referrer_username: string;
  referred_username: string;
  referrer_reward: number;
  referred_reward: number;
  created_at: string;
  verified: boolean;
}

class SimpleReferralService {
  private static instance: SimpleReferralService;

  private constructor() {}

  static getInstance(): SimpleReferralService {
    if (!SimpleReferralService.instance) {
      SimpleReferralService.instance = new SimpleReferralService();
    }
    return SimpleReferralService.instance;
  }

  // Get referral code from Telegram Mini App
  getReferralCodeFromTelegram(): string | null {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp?.initDataUnsafe?.start_param) {
      return window.Telegram.WebApp.initDataUnsafe.start_param;
    }
    
    // Fallback: check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('startapp') || urlParams.get('start') || urlParams.get('ref');
  }

  // Generate referral link for user
  generateReferralLink(username: string): string {
    return `https://t.me/Spacelbot?startapp=${username}`;
  }

  // Create referral record
  async createReferral(referrerUsername: string, referredUsername: string): Promise<boolean> {
    try {
      // Check if referral already exists
      const { data: existingReferral } = await supabase
        .from('simple_referrals')
        .select('*')
        .eq('referred_username', referredUsername)
        .single();

      if (existingReferral) {
        console.log('User already referred');
        return false;
      }

      // Check if referrer exists
      const { data: referrerProfile } = await supabase
        .from('profiles')
        .select('*')
        .eq('referral_name', referrerUsername)
        .single();

      if (!referrerProfile) {
        console.log('Referrer not found');
        return false;
      }

      // Create referral record
      const { error } = await supabase
        .from('simple_referrals')
        .insert({
          referrer_username: referrerUsername,
          referred_username: referredUsername,
          referrer_reward: 1000, // 1000 SPACE for referrer
          referred_reward: 2000,  // 2000 SPACE for new user
          verified: true
        });

      if (error) {
        console.error('Error creating referral:', error);
        return false;
      }

      // Add rewards immediately
      await this.addRewardsToUsers(referrerUsername, referredUsername);
      
      return true;
    } catch (error) {
      console.error('Error in createReferral:', error);
      return false;
    }
  }

  // Add rewards to both users
  private async addRewardsToUsers(referrerUsername: string, referredUsername: string): Promise<void> {
    try {
      // Add reward to referrer
      const { data: referrerProfile } = await supabase
        .from('profiles')
        .select('*')
        .eq('referral_name', referrerUsername)
        .single();

      if (referrerProfile) {
        await supabase
          .from('profiles')
          .update({
            earnings: (referrerProfile.earnings || 0) + 1000
          })
          .eq('referral_name', referrerUsername);
      }

      // Add reward to referred user via localStorage (since they just joined)
      const currentCoins = parseInt(localStorage.getItem('spaceCoins') || '0');
      localStorage.setItem('spaceCoins', (currentCoins + 2000).toString());

      console.log('Rewards added successfully');
    } catch (error) {
      console.error('Error adding rewards:', error);
    }
  }

  // Get user's referral statistics
  async getReferralStats(username: string): Promise<{
    totalReferrals: number;
    totalEarnings: number;
    referrals: SimpleReferral[];
  }> {
    try {
      const { data: referrals, error } = await supabase
        .from('simple_referrals')
        .select('*')
        .eq('referrer_username', username)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error getting referral stats:', error);
        return { totalReferrals: 0, totalEarnings: 0, referrals: [] };
      }

      const totalReferrals = referrals?.length || 0;
      const totalEarnings = (referrals || []).reduce((sum, ref) => sum + (ref.referrer_reward || 0), 0);

      return {
        totalReferrals,
        totalEarnings,
        referrals: referrals || []
      };
    } catch (error) {
      console.error('Error in getReferralStats:', error);
      return { totalReferrals: 0, totalEarnings: 0, referrals: [] };
    }
  }

  // Process referral when new user signs up
  async processReferralOnSignup(newUsername: string): Promise<boolean> {
    const pendingReferrer = localStorage.getItem('pendingReferrer');
    
    if (!pendingReferrer || pendingReferrer === newUsername) {
      return false;
    }

    const success = await this.createReferral(pendingReferrer, newUsername);
    
    if (success) {
      // Clean up localStorage
      localStorage.removeItem('pendingReferrer');
      localStorage.removeItem('processedReferrals');
    }
    
    return success;
  }

  // Store referral code for later processing
  storeReferralCode(referrerCode: string): void {
    localStorage.setItem('pendingReferrer', referrerCode);
    
    // Add to processed list to avoid duplicates
    const processedReferrals = JSON.parse(localStorage.getItem('processedReferrals') || '[]');
    if (!processedReferrals.includes(referrerCode)) {
      processedReferrals.push(referrerCode);
      localStorage.setItem('processedReferrals', JSON.stringify(processedReferrals));
    }
  }
}

export const simpleReferralService = SimpleReferralService.getInstance();
