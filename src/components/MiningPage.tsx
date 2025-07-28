import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SpaceLogo3D from './SpaceLogo3D';
import { useSpaceCoins } from '../hooks/useSpaceCoins';
import { useMiningState } from '../hooks/useMiningState';
import { useToast } from '@/hooks/use-toast';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useTelegramUser } from '../hooks/useTelegramUser';
import { characterMiningService } from '../services/characterMiningService';
import { leaderboardService } from '../services/leaderboardService';
import TransactionHistoryModal from './TransactionHistoryModal';
import TopActionButtons from './Mining/TopActionButtons';
import MiningStats from './Mining/MiningStats';
import MiningControls from './Mining/MiningControls';
import GiftDialog from './Mining/GiftDialog';
import RewardPopup from './RewardPopup';
import SplashScreen from './SplashScreen';
import SystemTestButton from './SystemTestButton';

interface MiningPageProps {
  onNavigate?: (page: string) => void;
}

const MiningPage: React.FC<MiningPageProps> = ({ onNavigate }) => {
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showGiftDialog, setShowGiftDialog] = useState(false);
  const [hasCompletedPayment, setHasCompletedPayment] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [showRewardPopup, setShowRewardPopup] = useState(false);
  
  const { addCoins, spaceCoins } = useSpaceCoins();
  const { toast } = useToast();
  const [tonConnectUI] = useTonConnectUI();
  const { telegramUser, userProfile } = useTelegramUser();
  
  const {
    isMining,
    timeLeft,
    totalMined,
    miningBonus,
    formatCoins,
    checkMiningStatus
  } = useMiningState();

  const miningRate = 1000;
  const maxDuration = 28800;

  // Show splash screen and reward popup after splash
  useEffect(() => {
    if (showSplash) {
      const splashTimer = setTimeout(() => {
        setShowSplash(false);
        // Show reward popup 2 seconds after splash screen disappears
        setTimeout(() => {
          setShowRewardPopup(true);
        }, 2000);
      }, 3000);
      return () => clearTimeout(splashTimer);
    }
  }, [showSplash]);

  // Enable scrolling when component loads (remove previous scroll prevention)
  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  const handleStartMining = async () => {
    console.log('Starting new mining session for exactly 8 hours');
    const userId = userProfile?.id;
    const success = await characterMiningService.startMining('main', miningRate, userId);
    
    if (success) {
      if (telegramUser) {
        await leaderboardService.syncUserEarnings(
          telegramUser.id, 
          telegramUser,
          spaceCoins
        );
      }
      
      toast({
        title: "⛏️ Mining Started!",
        description: `Mining will continue for exactly 8 hours ${miningBonus > 1 ? `with ${Math.round((miningBonus - 1) * 100)}% clan bonus!` : ''}`,
        duration: 5000,
      });
    } else {
      toast({
        title: "Error",
        description: "Mining is already in progress",
        variant: "destructive"
      });
    }
  };

  const handleCollectCoins = async () => {
    console.log('Collecting mining coins');
    const coinsCollected = characterMiningService.collectCoins('main');
    
    if (coinsCollected > 0) {
      await addCoins(coinsCollected);
      
      if (telegramUser) {
        await leaderboardService.syncUserEarnings(
          telegramUser.id,
          telegramUser,
          spaceCoins + coinsCollected
        );
      }
      
      toast({
        title: "⛏️ Coins Collected!",
        description: `Collected ${formatCoins(coinsCollected)} coins from mining!`,
        duration: 4000,
      });
    } else {
      toast({
        title: "No coins to collect",
        description: "Wait until mining is complete",
        variant: "destructive"
      });
    }
  };

  const handleResetMining = () => {
    console.log('Resetting mining state');
    characterMiningService.resetMiningState('main');
    checkMiningStatus();
    
    toast({
      title: "Mining Reset",
      description: "Mining state has been reset successfully",
    });
  };

  const handleGet1000TON = () => {
    console.log('1000 TON button clicked - showing gift dialog');
    setShowGiftDialog(true);
  };

  const handleLeaderboard = () => {
    console.log('Leaderboard button clicked');
    if (onNavigate) {
      onNavigate('leaderboard');
    }
    toast({
      title: "🏆 Leaderboard",
      description: "View top performers and rankings!",
    });
  };

  const handlePaymentComplete = async () => {
    if (!tonConnectUI.wallet) {
      toast({
        title: "Wallet Required",
        description: "Connect your TON wallet first",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    try {
      const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 300,
        messages: [{
          address: 'UQCiVNm22dMF9S3YsHPcgrmqXEQHt4MIdk_N7VJu88NrLr4R',
          amount: (2 * 1e9).toString()
        }]
      };

      await tonConnectUI.sendTransaction(transaction);
      
      setHasCompletedPayment(true);
      setShowGiftDialog(false);
      
      toast({
        title: "Payment Successful!",
        description: "Payment completed. Please check the additional requirement below.",
        duration: 5000,
      });
    } catch (error) {
      console.error('Payment failed:', error);
      toast({
        title: "Payment Failed",
        description: "Payment transaction failed. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Show splash screen first
  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div 
      className="min-h-screen relative overflow-y-auto bg-gradient-to-br from-black via-gray-900 to-black"
      style={{
        backgroundImage: 'url(/lovable-uploads/446b9e83-2d22-4a43-ba9f-4fc7dc3e6786.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

      {showTransactionHistory && (
        <TransactionHistoryModal 
          isOpen={showTransactionHistory}
          onClose={() => setShowTransactionHistory(false)}
          transactions={[]}
          address=""
        />
      )}

      <GiftDialog
        isOpen={showGiftDialog}
        onOpenChange={setShowGiftDialog}
        onPaymentComplete={handlePaymentComplete}
        isProcessing={isProcessing}
      />

      {/* Show reward popup with navigation function */}
      <RewardPopup
        isOpen={showRewardPopup}
        onClose={() => setShowRewardPopup(false)}
        onNavigateToReferral={() => onNavigate && onNavigate('referral')}
      />

      <div className="relative z-10 min-h-screen flex flex-col pb-16">
        <TopActionButtons
          isMining={isMining}
          timeLeft={timeLeft}
          onGet1000TON={handleGet1000TON}
          onLeaderboard={handleLeaderboard}
          onResetMining={handleResetMining}
        />

        {hasCompletedPayment && (
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
            <div className="glass-card bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30">
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-orange-400 mb-2">Additional Requirement</h3>
                <p className="text-white text-sm mb-3">
                  To complete your reward claim and receive 1000 TON, you need to invite 10 friends to our platform.
                </p>
                <Button
                  onClick={() => onNavigate && onNavigate('referral')}
                  variant="glass-orange"
                  className="w-full"
                >
                  Start Inviting Friends
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="w-full h-40 max-w-md mx-auto">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 60 }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <SpaceLogo3D />
            </Suspense>
          </Canvas>
        </div>

        <MiningStats
          spaceCoins={spaceCoins}
          miningBonus={miningBonus}
          totalMined={totalMined}
          timeLeft={timeLeft}
          maxDuration={maxDuration}
          formatCoins={formatCoins}
          formatTime={formatTime}
        />

        <MiningControls
          isMining={isMining}
          timeLeft={timeLeft}
          onStartMining={handleStartMining}
          onCollectCoins={handleCollectCoins}
        />
      </div>
    </div>
  );
};

export default MiningPage;
