
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import RewardPopup from './components/RewardPopup';
import MiningPage from './components/MiningPage';
import TasksPage from './components/TasksPage';
import WalletPage from './components/WalletPage';
import ReferralPage from './components/ReferralPage';
import TaskAdminPage from './components/TaskAdminPage';
import ProfilePage from './components/ProfilePage';
import LeaderboardPage from './components/LeaderboardPage';
import ExplorePage from './components/ExplorePage';
import ClanPage from './components/ClanPage';
import ClanDetailPage from './components/ClanDetailPage';
import NftPage from './components/NftPage';
import AppProviders from './components/AppProviders';
import AppLayout from './components/Layout/AppLayout';
import { useNavigation } from './hooks/useNavigation';
import { useTelegramUser } from './hooks/useTelegramUser';
import { useClanMembership } from './hooks/useClanMembership';

const App = () => {
  const [appInitialized, setAppInitialized] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [showRewardPopup, setShowRewardPopup] = useState(false);

  const { userProfile, telegramUser, isLoading } = useTelegramUser();
  const { userClanMembership } = useClanMembership();
  const {
    currentPage,
    setCurrentPage,
    showAdminAccess,
    setShowAdminAccess,
    handleTaskButtonClick,
    handleQuickNavigation,
    selectedClanId
  } = useNavigation();

  const generateDefaultUsername = () => {
    const randomNumber = Math.floor(Math.random() * 999999) + 100000;
    return `SPACE#${randomNumber}`;
  };

  useEffect(() => {
    const initializeApp = () => {
      console.log('Initializing app...');
      
      if (!userProfile && !isLoading) {
        let savedUsername = localStorage.getItem('username');
        
        if (!savedUsername) {
          savedUsername = generateDefaultUsername();
          localStorage.setItem('username', savedUsername);
          console.log('Generated new username:', savedUsername);
          
          const existingCoins = localStorage.getItem('spaceCoins');
          if (!existingCoins) {
            localStorage.setItem('spaceCoins', '0');
            console.log('New user starts with 0 coins');
          }
        }
      }
      
      setAppInitialized(true);
    };

    if (!showSplash) {
      initializeApp();
      setTimeout(() => {
        setShowRewardPopup(true);
      }, 1000);
    }
  }, [showSplash, userProfile, isLoading]);

  useEffect(() => {
    let clickCount = 0;
    const handleLogoClick = () => {
      clickCount++;
      if (clickCount === 3) {
        setShowAdminAccess(true);
        clickCount = 0;
      }
      setTimeout(() => {
        clickCount = 0;
      }, 2000);
    };
    const logoElement = document.querySelector('.admin-access-trigger');
    if (logoElement) {
      logoElement.addEventListener('click', handleLogoClick);
    }
    return () => {
      if (logoElement) {
        logoElement.removeEventListener('click', handleLogoClick);
      }
    };
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleNavigationFromLeaderboard = (page: string, clanId?: string) => {
    console.log('App: Handling navigation from leaderboard:', page, clanId);
    if (page === 'clan' && clanId) {
      handleQuickNavigation('clan-detail', clanId);
    } else {
      handleQuickNavigation(page, clanId);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'mining':
        return <MiningPage onNavigate={handleQuickNavigation} />;
      case 'tasks':
        return <TasksPage />;
      case 'leaderboard':
        return <LeaderboardPage />;
      case 'explore':
        return <ExplorePage onNavigate={handleQuickNavigation} />;
      case 'clan':
        // Always show ClanPage - it will handle checking if user is in a clan or not
        return (
          <ClanPage 
            onNavigate={(page) => {
              if (page === 'leaderboard') {
                setCurrentPage('leaderboard');
              } else {
                handleQuickNavigation(page);
              }
            }} 
          />
        );
      case 'clan-detail':
        // Show specific clan details when coming from leaderboard
        if (selectedClanId) {
          return (
            <ClanDetailPage 
              clanId={selectedClanId} 
              onNavigate={(page) => {
                if (page === 'leaderboard') {
                  setCurrentPage('leaderboard');
                } else {
                  handleQuickNavigation(page);
                }
              }} 
            />
          );
        } else {
          // No selected clan, redirect to leaderboard
          return <LeaderboardPage />;
        }
      case 'wallet':
        return <WalletPage />;
      case 'referral':
        return <ReferralPage />;
      case 'profile':
        return <ProfilePage />;
      case 'nft':
        return <NftPage />;
      case 'admin':
        return showAdminAccess ? <TaskAdminPage /> : <MiningPage onNavigate={handleQuickNavigation} />;
      default:
        return <MiningPage onNavigate={handleQuickNavigation} />;
    }
  };

  return (
    <AppProviders>
      <AppLayout
        currentPage={currentPage}
        showAdminAccess={showAdminAccess}
        onPageChange={setCurrentPage}
        onTaskButtonClick={handleTaskButtonClick}
      >
        {renderCurrentPage()}
      </AppLayout>

      <RewardPopup 
        isOpen={showRewardPopup} 
        onClose={() => setShowRewardPopup(false)} 
      />
    </AppProviders>
  );
};

export default App;
