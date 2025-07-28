
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useSpaceCoins } from '@/hooks/useSpaceCoins';
import { useTelegramUser } from '@/hooks/useTelegramUser';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { 
  User, 
  Wallet,
  Star,
  Shield,
  Calendar,
  FileText
} from 'lucide-react';

const ProfilePage: React.FC = () => {
  const [displayName, setDisplayName] = useState('');
  const { spaceCoins } = useSpaceCoins();
  const { telegramUser, userProfile } = useTelegramUser();
  const [tonConnectUI] = useTonConnectUI();

  useEffect(() => {
    if (userProfile?.first_name) {
      setDisplayName(userProfile.first_name);
    } else if (telegramUser?.first_name) {
      setDisplayName(telegramUser.first_name);
    }
  }, [userProfile, telegramUser]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="relative z-10 p-2">
        <div className="max-w-sm mx-auto space-y-3">
          {/* Header */}
          <div className="text-center mb-3 pt-2">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              <h1 className="text-lg font-bold text-white">
                My Profile
              </h1>
            </div>
            <p className="text-gray-400 text-xs">
              Manage your account information
            </p>
          </div>

          {/* Profile Card */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-3">
              <div className="text-center mb-3">
                <div className="relative mb-3">
                  <Avatar className="w-16 h-16 mx-auto border-2 border-gray-700/50 shadow-xl ring-1 ring-gray-600/20">
                    <AvatarImage 
                      src={telegramUser?.photo_url} 
                      alt={displayName}
                    />
                    <AvatarFallback className="bg-transparent text-white text-lg font-bold">
                      {displayName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <div>
                  <h2 className="text-lg font-bold text-white mb-1">{displayName}</h2>
                  <p className="text-gray-400 text-xs mb-2 flex items-center justify-center gap-1">
                    @{telegramUser?.username || 'user'}
                    {telegramUser?.is_premium && (
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Balance Card */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-3 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/a56963aa-9f88-44b8-9aff-3b5e9e4c7a60.png" 
                    alt="Space Coin" 
                    className="w-3 h-3 rounded-full" 
                  />
                </div>
                <span className="text-gray-300 font-bold text-sm">$SPACE Balance</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {new Intl.NumberFormat('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
                }).format(spaceCoins)}
              </div>
              <p className="text-gray-400 text-xs">Your Current Balance</p>
            </CardContent>
          </Card>

          {/* Account Information */}
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="pb-1">
              <CardTitle className="text-white text-base flex items-center gap-2">
                <div className="w-5 h-5 rounded-lg flex items-center justify-center">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                Account Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-1 gap-2">
                <div className="flex justify-between items-center p-2 rounded-lg border border-gray-800/30">
                  <span className="text-gray-300 font-medium text-xs">User ID:</span>
                  <span className="text-white font-mono text-xs px-2 py-1 rounded">
                    {telegramUser?.id || 'N/A'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-2 rounded-lg border border-gray-800/30">
                  <span className="text-gray-300 font-medium text-xs">Username:</span>
                  <span className="text-gray-400 font-medium flex items-center gap-1 text-xs">
                    @{telegramUser?.username || 'Not set'}
                    {telegramUser?.is_premium && (
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    )}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-2 rounded-lg border border-gray-800/30">
                  <span className="text-gray-300 font-medium text-xs">Language:</span>
                  <span className="text-white font-medium px-2 py-1 rounded text-xs">
                    {telegramUser?.language_code?.toUpperCase() || 'EN'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-2 rounded-lg border border-gray-800/30">
                  <span className="text-gray-300 font-medium flex items-center gap-1 text-xs">
                    <Calendar className="w-3 h-3" />
                    Member Since:
                  </span>
                  <span className="text-white font-medium text-xs">
                    {userProfile?.created_at 
                      ? new Date(userProfile.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })
                      : 'Recently'
                    }
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* TON Wallet */}
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="pb-1">
              <CardTitle className="text-white text-base flex items-center gap-2">
                <div className="w-5 h-5 rounded-lg flex items-center justify-center">
                  <Wallet className="w-3 h-3 text-white" />
                </div>
                TON Wallet
              </CardTitle>
            </CardHeader>
            <CardContent>
              {tonConnectUI.wallet ? (
                <div className="p-2 rounded-lg border border-gray-800/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-semibold mb-1 text-xs">Wallet Connected</p>
                      <p className="text-gray-300 text-xs font-mono px-2 py-1 rounded">
                        {tonConnectUI.wallet.account.address.slice(0, 6)}...
                        {tonConnectUI.wallet.account.address.slice(-4)}
                      </p>
                    </div>
                    <Badge className="bg-green-500/30 text-green-300 border-green-400/50 px-2 py-1 text-xs">
                      <div className="w-1 h-1 rounded-full bg-green-400 mr-1"></div>
                      Active
                    </Badge>
                  </div>
                </div>
              ) : (
                <div className="p-2 rounded-lg border border-gray-800/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-300 font-medium text-xs">No wallet connected</p>
                      <p className="text-gray-400 text-xs">Connect to access features</p>
                    </div>
                    <Button
                      onClick={() => tonConnectUI.openModal()}
                      size="sm"
                      className="bg-gray-700 hover:bg-gray-800 text-white shadow-lg border-0 text-xs px-2 py-1"
                    >
                      Connect
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Terms of Use Button */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-gray-700 hover:bg-gray-800 text-white flex items-center gap-2 shadow-lg text-sm py-2">
                    <FileText className="w-4 h-4" />
                    Terms of Use
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto bg-black border border-gray-800">
                  <DialogHeader>
                    <DialogTitle className="text-white text-lg font-bold flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      📄 Terms of Use – SPACE Mining Mini App
                    </DialogTitle>
                  </DialogHeader>
                  <div className="text-gray-300 text-sm space-y-4">
                    <p>Welcome to the official mining bot for the SPACE token.</p>
                    <p>Please read the following terms carefully before using this bot.</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-white font-bold mb-2">1. Service Description</h3>
                        <p>This bot provides an interactive experience within Telegram, allowing users to mine the SPACE token through cloud mining, daily activities, and referrals.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-bold mb-2">2. Token Listing Soon</h3>
                        <p>The SPACE token is currently in preparation for listing on official exchange platforms. However, it is not yet available for trading, withdrawal, or financial conversion at this time.</p>
                        <div className="bg-yellow-900/30 border border-yellow-600/50 rounded-lg p-3 mt-2">
                          <p className="text-yellow-300 text-xs">⚠️ Disclaimer: Until the official listing announcement, all in-app token activities are for engagement and community participation only, and do not reflect actual financial value.</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-bold mb-2">3. No Financial Promises</h3>
                        <p>We do not guarantee any financial return or future value for the SPACE token. The token's future utility and price will be determined by market conditions once listed.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-bold mb-2">4. Fair Use Policy</h3>
                        <p>Users are strictly prohibited from:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Using bots, scripts, emulators, or any automated tools.</li>
                          <li>Exploiting bugs or abusing the system.</li>
                        </ul>
                        <p className="mt-2">Any violation will result in permanent suspension of the account.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-bold mb-2">5. User Data</h3>
                        <p>We only collect basic public Telegram data including:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Username</li>
                          <li>Telegram ID</li>
                          <li>Preferred language</li>
                        </ul>
                        <p className="mt-2">We do not sell or share user data with third parties.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-bold mb-2">6. Changes & Updates</h3>
                        <p>We reserve the right to modify the mining mechanics, reward structure, or these Terms of Use at any time. Users will be notified of any major changes via in-app announcements or our official Telegram channel.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-bold mb-2">7. Disclaimer of Liability</h3>
                        <p>This application is developed and maintained by an independent team. It is not affiliated with Telegram or any cryptocurrency exchange. All current mining features are for entertainment and community engagement only, until further updates.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-bold mb-2">8. Support & Contact</h3>
                        <p>For inquiries or support, please reach out through our official Telegram channel:</p>
                        <p className="text-blue-400 font-mono mt-1">📢 @spaceaico</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Bottom spacing */}
          <div className="h-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
