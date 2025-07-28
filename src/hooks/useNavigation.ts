
import { useState, useEffect } from 'react';

export type Page = 'mining' | 'tasks' | 'leaderboard' | 'referral' | 'profile' | 'wallet' | 'clan' | 'explore' | 'clan-detail' | 'admin' | 'nft';

export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState<Page>('mining');
  const [showAdminAccess, setShowAdminAccess] = useState(false);
  const [taskClickCount, setTaskClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [selectedClanId, setSelectedClanId] = useState<string | null>(null);

  useEffect(() => {
    if (taskClickCount > 0) {
      const timer = setTimeout(() => {
        setTaskClickCount(0);
        setLastClickTime(0);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [taskClickCount]);

  const handleTaskButtonClick = () => {
    const currentTime = Date.now();
    
    if (currentTime - lastClickTime > 500) {
      setTaskClickCount(1);
    } else {
      const newCount = taskClickCount + 1;
      setTaskClickCount(newCount);
      
      if (newCount >= 5) {
        setCurrentPage('admin');
        setShowAdminAccess(true);
        setTaskClickCount(0);
        setLastClickTime(0);
        return;
      }
    }
    
    setLastClickTime(currentTime);
    
    if (taskClickCount < 5) {
      setCurrentPage('tasks');
    }
  };

  const handleQuickNavigation = (page: string, clanId?: string) => {
    console.log('Navigation: handleQuickNavigation called with:', page, clanId);
    
    if (page === 'clan' && clanId) {
      // When navigating to a specific clan, set it as selected and go to clan-detail page
      setSelectedClanId(clanId);
      setCurrentPage('clan-detail');
      console.log('Navigation: Set to clan-detail page with clanId:', clanId);
    } else {
      setCurrentPage(page as Page);
      if (page !== 'clan' && page !== 'clan-detail') {
        setSelectedClanId(null);
      }
      console.log('Navigation: Set page to:', page);
    }
  };

  return {
    currentPage,
    setCurrentPage,
    showAdminAccess,
    setShowAdminAccess,
    handleTaskButtonClick,
    handleQuickNavigation,
    selectedClanId,
    setSelectedClanId
  };
};
