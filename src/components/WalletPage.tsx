
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useSpaceCoins } from '@/hooks/useSpaceCoins';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { 
  Wallet, 
  Send, 
  ArrowDownLeft, 
  Copy, 
  ExternalLink, 
  Plus,
  Minus,
  History,
  TrendingUp,
  Shield,
  Zap,
  X,
  Eye,
  Sparkles
} from 'lucide-react';

const WalletPage = () => {
  const [showSendModal, setShowSendModal] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const { spaceCoins } = useSpaceCoins();
  const { toast } = useToast();
  const [tonConnectUI] = useTonConnectUI();

  const handleCopyAddress = () => {
    const address = tonConnectUI.wallet?.account.address || 'Not connected';
    navigator.clipboard.writeText(address);
    toast({
      title: "Address Copied",
      description: "Wallet address has been copied to clipboard",
    });
  };

  const formatAddress = (address: string) => {
    if (address.length <= 10) return address;
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Enhanced Send Modal
  const SendModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-3">
        <Card className="bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-black/95 backdrop-blur-xl border border-green-500/30 rounded-2xl max-w-xs w-full shadow-2xl shadow-green-500/10">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-500/20 rounded-lg">
                  <Send className="w-4 h-4 text-green-400" />
                </div>
                <h3 className="text-white font-bold text-base bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Send SPACE
                </h3>
              </div>
              <Button onClick={onClose} variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 h-7 w-7 rounded-full">
                <X className="w-3.5 h-3.5" />
              </Button>
            </div>
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-green-400 animate-pulse" />
              </div>
              <p className="text-gray-300 text-sm">Send feature coming soon...</p>
              <p className="text-gray-500 text-xs mt-1">Stay tuned for updates!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  // Enhanced Receive Modal
  const ReceiveModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-3">
        <Card className="bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-black/95 backdrop-blur-xl border border-blue-500/30 rounded-2xl max-w-xs w-full shadow-2xl shadow-blue-500/10">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-blue-500/20 rounded-lg">
                  <ArrowDownLeft className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-base bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Receive SPACE
                </h3>
              </div>
              <Button onClick={onClose} variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 h-7 w-7 rounded-full">
                <X className="w-3.5 h-3.5" />
              </Button>
            </div>
            <p className="text-gray-300 text-sm mb-4">Share your wallet address to receive SPACE tokens.</p>
            {tonConnectUI.wallet && (
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-gray-400 text-xs mb-2">Your Address:</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm font-mono">
                      {formatAddress(tonConnectUI.wallet.account.address)}
                    </span>
                    <Button onClick={handleCopyAddress} size="sm" variant="ghost" className="h-7 w-7 p-0 hover:bg-white/10 rounded-lg">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={handleCopyAddress}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 h-8 text-sm font-medium rounded-lg"
                >
                  <Copy className="w-3 h-3 mr-2" />
                  Copy Full Address
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };

  // Enhanced History Modal
  const HistoryModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-3">
        <Card className="bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl max-w-xs w-full shadow-2xl shadow-purple-500/10">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-purple-500/20 rounded-lg">
                  <History className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-base bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Transaction History
                </h3>
              </div>
              <Button onClick={onClose} variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 h-7 w-7 rounded-full">
                <X className="w-3.5 h-3.5" />
              </Button>
            </div>
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-gray-300 text-sm">No transactions yet.</p>
              <p className="text-gray-500 text-xs mt-1">Your transaction history will appear here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-30 animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-30 animation-delay-3000"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Compact Header */}
        <div className="text-center pt-6 pb-3 px-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl">
              <Wallet className="w-5 h-5 text-blue-400" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Wallet
            </h1>
          </div>
          <p className="text-gray-400 text-xs">
            Manage your SPACE tokens securely
          </p>
        </div>

        {/* Compact Balance Card */}
        <div className="px-4 mb-4">
          <div className="max-w-xs mx-auto">
            <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/03ba6c03-8e93-4349-aaa5-9b19b4a8a287.png" 
                      alt="Space Coin" 
                      className="w-7 h-7 rounded-full shadow-lg" 
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 blur-sm animate-pulse"></div>
                  </div>
                  <h2 className="text-white text-lg font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    $SPACE
                  </h2>
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-200">
                  {new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2
                  }).format(spaceCoins)}
                </div>
                <p className="text-gray-300 text-xs">Available Balance</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Compact Quick Actions */}
        <div className="px-4 mb-4">
          <div className="max-w-xs mx-auto grid grid-cols-3 gap-2">
            <Button
              onClick={() => setShowSendModal(true)}
              className="bg-transparent border border-green-400/40 hover:border-green-300 hover:bg-green-500/10 text-white flex flex-col items-center gap-1.5 h-14 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
            >
              <Send className="w-4 h-4" />
              <span className="text-xs font-medium">Send</span>
            </Button>
            
            <Button
              onClick={() => setShowReceiveModal(true)}
              className="bg-transparent border border-blue-400/40 hover:border-blue-300 hover:bg-blue-500/10 text-white flex flex-col items-center gap-1.5 h-14 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <ArrowDownLeft className="w-4 h-4" />
              <span className="text-xs font-medium">Receive</span>
            </Button>
            
            <Button
              onClick={() => setShowHistoryModal(true)}
              className="bg-transparent border border-purple-400/40 hover:border-purple-300 hover:bg-purple-500/10 text-white flex flex-col items-center gap-1.5 h-14 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <History className="w-4 h-4" />
              <span className="text-xs font-medium">History</span>
            </Button>
          </div>
        </div>

        {/* Compact Wallet Info */}
        <div className="flex-1 px-4 pb-8">
          <div className="max-w-xs mx-auto space-y-3">
            {/* TON Wallet Connection */}
            <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-sm flex items-center gap-2">
                  <div className="p-1.5 bg-blue-500/20 rounded-lg">
                    <Wallet className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    TON Wallet
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {tonConnectUI.wallet ? (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">Status:</span>
                      <Badge className="bg-green-500/20 border border-green-500/30 text-green-400 px-2 py-0.5 text-xs">
                        Connected
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">Address:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-white text-xs font-mono">
                          {formatAddress(tonConnectUI.wallet.account.address)}
                        </span>
                        <Button
                          onClick={handleCopyAddress}
                          size="sm"
                          variant="ghost"
                          className="p-1 h-5 w-5 hover:bg-white/10 rounded"
                        >
                          <Copy className="w-2.5 h-2.5" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      onClick={() => tonConnectUI.disconnect()}
                      size="sm"
                      variant="outline"
                      className="w-full bg-transparent border-red-500/40 text-red-400 hover:bg-red-500/10 h-7 text-xs rounded-lg"
                    >
                      Disconnect
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-3">
                    <div className="w-10 h-10 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Wallet className="w-5 h-5 text-gray-400" />
                    </div>
                    <p className="text-gray-400 text-xs mb-2">No wallet connected</p>
                    <Button
                      onClick={() => tonConnectUI.openModal()}
                      className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 h-7 text-xs font-medium rounded-lg px-4"
                    >
                      Connect Wallet
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Compact Features */}
            <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-blue-500/20 rounded">
                      <Shield className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-xs">Secure transactions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-green-500/20 rounded">
                      <TrendingUp className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-gray-300 text-xs">Real-time updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-yellow-500/20 rounded">
                      <Zap className="w-3 h-3 text-yellow-400" />
                    </div>
                    <span className="text-gray-300 text-xs">Fast processing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Enhanced Modals */}
      <SendModal isOpen={showSendModal} onClose={() => setShowSendModal(false)} />
      <ReceiveModal isOpen={showReceiveModal} onClose={() => setShowReceiveModal(false)} />
      <HistoryModal isOpen={showHistoryModal} onClose={() => setShowHistoryModal(false)} />
    </div>
  );
};

export default WalletPage;
