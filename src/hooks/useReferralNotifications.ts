
import { useState, useEffect } from 'react';
import { enhancedReferralService } from '@/services/enhancedReferralService';
import { useToast } from '@/hooks/use-toast';
import type { Database } from '@/integrations/supabase/types';

type ReferralNotification = Database['public']['Tables']['referral_notifications']['Row'];

export const useReferralNotifications = (userId: string | null) => {
  const [notifications, setNotifications] = useState<ReferralNotification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Load notifications
  const loadNotifications = async () => {
    if (!userId) return;
    
    setIsLoading(true);
    try {
      const [notificationData, unreadCountData] = await Promise.all([
        enhancedReferralService.getUserNotifications(userId),
        enhancedReferralService.getUnreadNotificationsCount(userId)
      ]);
      
      setNotifications(notificationData);
      setUnreadCount(unreadCountData);
    } catch (error) {
      console.error('Error loading notifications:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Mark notification as read
  const markAsRead = async (notificationId: string) => {
    const success = await enhancedReferralService.markNotificationAsRead(notificationId);
    if (success) {
      setNotifications(prev => 
        prev.map(notif => 
          notif.id === notificationId ? { ...notif, read: true } : notif
        )
      );
      setUnreadCount(prev => Math.max(0, prev - 1));
    }
  };

  // Setup real-time subscription
  useEffect(() => {
    if (!userId) return;

    loadNotifications();

    const unsubscribe = enhancedReferralService.subscribeToNotifications(
      userId,
      (newNotification) => {
        setNotifications(prev => [newNotification, ...prev]);
        setUnreadCount(prev => prev + 1);
        
        // Show toast for new notification
        toast({
          title: newNotification.title,
          description: newNotification.message,
          duration: 5000,
        });
      }
    );

    return unsubscribe;
  }, [userId, toast]);

  return {
    notifications,
    unreadCount,
    isLoading,
    markAsRead,
    refreshNotifications: loadNotifications
  };
};
