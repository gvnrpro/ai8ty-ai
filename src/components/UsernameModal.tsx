
import React, { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { simpleReferralService } from '@/services/simpleReferralService';
import { useToast } from '@/hooks/use-toast';

interface UsernameModalProps {
  isOpen: boolean;
  onComplete: (username: string) => void;
}

const UsernameModal: React.FC<UsernameModalProps> = ({ isOpen, onComplete }) => {
  const { toast } = useToast();

  const generateDefaultUsername = () => {
    const randomNumber = Math.floor(Math.random() * 999999) + 100000;
    return `SPACE#${randomNumber}`;
  };

  const checkUsernameAvailability = async (usernameToCheck: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .eq('referral_name', usernameToCheck)
        .single();

      if (error && error.code === 'PGRST116') {
        return true; // Username is available
      }
      
      if (data) {
        return false; // Username is taken
      }
      
      return true;
    } catch (error) {
      console.error('Error checking username:', error);
      return true;
    }
  };

  const createUsername = async () => {
    if (!isOpen) return;

    let attempts = 0;
    let username = '';
    let isAvailable = false;

    // Try to find an available username
    while (!isAvailable && attempts < 10) {
      username = generateDefaultUsername();
      isAvailable = await checkUsernameAvailability(username);
      attempts++;
    }

    if (!isAvailable) {
      // Fallback with timestamp if all attempts failed
      username = `SPACE#${Date.now().toString().slice(-6)}`;
    }

    try {
      // Check if this is a new user
      const existingCoins = localStorage.getItem('spaceCoins');
      const isNewUser = !existingCoins;
      
      // Save username to localStorage
      localStorage.setItem('username', username);
      
      // New users start with 0 coins (unless they have a referral)
      if (isNewUser) {
        localStorage.setItem('spaceCoins', '0');
        console.log('New user starts with 0 coins');
      }
      
      // Check for referral code from Telegram
      const referralCode = simpleReferralService.getReferralCodeFromTelegram();
      console.log('Referral code from Telegram:', referralCode);
      
      if (referralCode && referralCode !== username) {
        // Store referral for processing
        simpleReferralService.storeReferralCode(referralCode);
        
        // Process referral after username creation
        const referralSuccess = await simpleReferralService.processReferralOnSignup(username);
        
        if (referralSuccess) {
          toast({
            title: "🎉 مرحباً بك!",
            description: `تم ربطك بالمُحيل ${referralCode} وحصلت على 2000 عملة SPACE!`,
            duration: 5000,
          });
        } else {
          toast({
            title: "مرحباً بك!",
            description: "تم إنشاء حسابك بنجاح",
            duration: 3000,
          });
        }
      } else {
        toast({
          title: "مرحباً بك!",
          description: "تم إنشاء حسابك بنجاح",
          duration: 3000,
        });
      }
      
      // Complete the process
      onComplete(username);
    } catch (error) {
      console.error('Error during username creation:', error);
      // Still complete with the username even if referral processing fails
      onComplete(username);
    }
  };

  useEffect(() => {
    if (isOpen) {
      createUsername();
    }
  }, [isOpen]);

  // This component is now invisible and works automatically
  return null;
};

export default UsernameModal;
