
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Check, Gift, Users, Clock } from 'lucide-react';
import { useReferralNotifications } from '@/hooks/useReferralNotifications';
import { useTelegramUser } from '@/hooks/useTelegramUser';

const ReferralNotifications: React.FC = () => {
  const { userProfile } = useTelegramUser();
  const { notifications, unreadCount, isLoading, markAsRead } = useReferralNotifications(
    userProfile?.id || null
  );

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'new_referral':
        return <Users className="w-4 h-4 text-green-400" />;
      case 'reward_received':
        return <Gift className="w-4 h-4 text-blue-400" />;
      case 'verification_pending':
        return <Clock className="w-4 h-4 text-yellow-400" />;
      default:
        return <Bell className="w-4 h-4 text-gray-400" />;
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  if (isLoading) {
    return (
      <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
        <CardContent className="p-4">
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-white text-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-blue-400" />
            Recent Activity
          </div>
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {unreadCount}
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        {notifications.length === 0 ? (
          <div className="text-center py-4">
            <Bell className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">No notifications yet</p>
            <p className="text-gray-500 text-xs">You'll see activity updates here</p>
          </div>
        ) : (
          notifications.slice(0, 5).map((notification) => (
            <div
              key={notification.id}
              className={`p-3 rounded-lg border transition-all duration-200 ${
                notification.read
                  ? 'bg-white/5 border-white/10'
                  : 'bg-blue-500/20 border-blue-500/30'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  {getNotificationIcon(notification.notification_type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium mb-1">
                    {notification.title}
                  </p>
                  <p className="text-gray-300 text-xs mb-2">
                    {notification.message}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">
                      {formatTime(notification.created_at)}
                    </span>
                    {!notification.read && (
                      <Button
                        onClick={() => markAsRead(notification.id)}
                        size="sm"
                        className="h-6 px-2 text-xs bg-blue-500 hover:bg-blue-600"
                      >
                        <Check className="w-3 h-3 mr-1" />
                        Mark Read
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        
        {notifications.length > 5 && (
          <div className="text-center pt-2">
            <p className="text-gray-400 text-xs">
              Showing latest 5 notifications
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReferralNotifications;
