
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Trophy, Gift, Users, Star, Calendar, ExternalLink, Sparkles } from 'lucide-react';
import { useTelegramUser } from '@/hooks/useTelegramUser';

const NftPage = () => {
  const { telegramUser, getUserDisplayName, getUserPhoto } = useTelegramUser();
  const [showTrackRankDialog, setShowTrackRankDialog] = useState(false);
  const [showInviteDialog, setShowInviteDialog] = useState(false);

  const handleOpenGifts = () => {
    window.open('http://t.me/Spacelbot/Gift', '_blank');
  };

  const handleTrackRank = () => {
    setShowTrackRankDialog(true);
  };

  const handleInviteFriends = () => {
    setShowInviteDialog(true);
  };

  const handleGoToSpacebot = () => {
    window.open('http://t.me/Spacelbot', '_blank');
  };

  const prizes = [
    {
      rank: '1st',
      name: 'Durov\'s Cap',
      image: 'https://nft.fragment.com/collection/durovscap.webp',
      gradient: 'from-yellow-400 via-yellow-500 to-amber-600'
    },
    {
      rank: '2nd',
      name: 'Precious Peach',
      image: 'https://nft.fragment.com/collection/preciouspeach.webp',
      gradient: 'from-pink-400 via-rose-500 to-pink-600'
    },
    {
      rank: '3rd',
      name: 'Magic Potion',
      image: 'https://nft.fragment.com/collection/magicpotion.webp',
      gradient: 'from-purple-400 via-violet-500 to-purple-600'
    },
    {
      rank: '4th',
      name: 'Scared Cat',
      image: 'https://nft.fragment.com/collection/scaredcat.webp',
      gradient: 'from-slate-400 via-gray-500 to-slate-600'
    },
    {
      rank: '5th',
      name: 'Swiss Watch',
      image: 'https://nft.fragment.com/collection/swisswatch.webp',
      gradient: 'from-blue-400 via-sky-500 to-blue-600'
    }
  ];

  const giftBoxes = [
    {
      ranks: '6th-10th',
      name: 'Venom',
      price: '50 TON',
      image: 'https://images.giftsbattle.com/case/venom.webp',
      gradient: 'from-emerald-400 via-green-500 to-emerald-600'
    },
    {
      ranks: '11th-15th',
      name: 'Dubai',
      price: '35 TON',
      image: 'https://images.giftsbattle.com/case/dubayskiy.webp',
      gradient: 'from-amber-400 via-orange-500 to-amber-600'
    },
    {
      ranks: '16th-20th',
      name: 'KFC Boss',
      price: '20 TON',
      image: 'https://images.giftsbattle.com/case/boss-kfs.webp',
      gradient: 'from-red-400 via-red-500 to-red-600'
    },
    {
      ranks: '21st-25th',
      name: 'Sigma Boy',
      price: '10 TON',
      image: 'https://images.giftsbattle.com/case/sigma-boy.webp',
      gradient: 'from-indigo-400 via-purple-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-30 animation-delay-3000"></div>
      </div>
      
      <div className="relative z-10 p-3 max-w-sm mx-auto">
        <div className="space-y-4">
          {/* User Profile Section - Compact */}
          <div className="text-center py-4">
            <div className="relative inline-block mb-3 group">
              <Avatar className="w-16 h-16 mx-auto border-2 border-purple-400/50 shadow-xl transition-all duration-300 group-hover:scale-105">
                <AvatarImage 
                  src={getUserPhoto()} 
                  alt={getUserDisplayName()}
                />
                <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold">
                  {getUserDisplayName().charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            
            <h2 className="text-lg font-bold text-white mb-3 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {getUserDisplayName()}
            </h2>
            
            <Button
              onClick={handleTrackRank}
              size="sm"
              className="bg-transparent border border-purple-400/60 hover:border-purple-300 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-200 hover:bg-purple-500/10"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Track Your Rank
            </Button>
          </div>

          {/* Event Info - Compact */}
          <Card className="bg-black/20 backdrop-blur-xl border border-purple-400/30 shadow-xl rounded-xl hover:shadow-purple-500/20 transition-shadow duration-300">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="relative">
                  <Gift className="w-6 h-6 text-purple-300" />
                  <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-300 via-white to-pink-300 bg-clip-text text-transparent">
                  Gift Lottery
                </h1>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-purple-300" />
                <p className="text-purple-100 text-sm font-medium leading-relaxed">
                  From June 29 to 15 July participate in the gift lottery. Collect the most lottery tickets and win valuable prizes!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Top 5 NFT Prizes - More Compact */}
          <Card className="bg-black/20 backdrop-blur-xl border border-purple-400/30 rounded-xl shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg text-center flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span className="bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
                  Exclusive NFTs
                </span>
                <span className="text-xs text-gray-400 font-normal">(1st-5th)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-0">
              {prizes.map((prize, index) => (
                <div key={index} className={`bg-gradient-to-r ${prize.gradient} p-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 group`}>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img 
                        src={prize.image} 
                        alt={prize.name}
                        className="w-12 h-12 rounded-lg object-cover border-2 border-white/40 shadow-lg group-hover:shadow-xl transition-shadow duration-200"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{prize.rank} Place</p>
                      <p className="text-white/95 text-xs font-medium">{prize.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Gift Boxes - More Compact */}
          <Card className="bg-black/20 backdrop-blur-xl border border-purple-400/30 rounded-xl shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg text-center flex items-center justify-center gap-2">
                <Gift className="w-5 h-5 text-green-400 animate-pulse" />
                <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                  Gift Boxes
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-0">
              {giftBoxes.map((box, index) => (
                <div key={index} className={`bg-gradient-to-r ${box.gradient} p-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 group`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img 
                          src={box.image} 
                          alt={box.name}
                          className="w-12 h-12 rounded-lg object-cover border-2 border-white/40 shadow-lg group-hover:shadow-xl transition-shadow duration-200"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{box.ranks}</p>
                        <p className="text-white/95 text-xs font-medium">{box.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-sm">{box.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* How to Get Tickets - More Compact */}
          <Card className="bg-black/20 backdrop-blur-xl border border-purple-400/30 rounded-xl shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                How to Get Tickets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              {/* Open Gifts */}
              <div className="bg-black/30 backdrop-blur-sm border border-blue-400/30 p-3 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-200 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-black/40 border border-blue-400/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Gift className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-blue-200 font-bold text-sm">Open Gifts</h3>
                    <p className="text-gray-300 text-xs">Each gift contains 1-5 tickets</p>
                  </div>
                </div>
                <Button
                  onClick={handleOpenGifts}
                  size="sm"
                  className="w-full bg-transparent border border-blue-400/60 hover:border-blue-300 text-white font-medium py-2 rounded-lg shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-200 hover:bg-blue-500/10"
                >
                  <Gift className="w-4 h-4 mr-2" />
                  Open Gifts
                </Button>
              </div>

              {/* Invite Friends */}
              <div className="bg-black/30 backdrop-blur-sm border border-green-400/30 p-3 rounded-lg shadow-lg hover:shadow-green-500/20 transition-all duration-200 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-black/40 border border-green-400/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Users className="w-5 h-5 text-green-300" />
                  </div>
                  <div>
                    <h3 className="text-green-200 font-bold text-sm">Invite Friends</h3>
                    <p className="text-gray-300 text-xs">5 tickets per friend</p>
                  </div>
                </div>
                <Button
                  onClick={handleInviteFriends}
                  size="sm"
                  className="w-full bg-transparent border border-green-400/60 hover:border-green-300 text-white font-medium py-2 rounded-lg shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-200 hover:bg-green-500/10"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Invite Friends
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Bottom spacing */}
          <div className="h-4"></div>
        </div>
      </div>

      {/* Track Rank Dialog */}
      <Dialog open={showTrackRankDialog} onOpenChange={setShowTrackRankDialog}>
        <DialogContent className="bg-black/90 backdrop-blur-xl border border-purple-500/30 text-white rounded-xl max-w-sm mx-auto">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Track Your Rank
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <p className="text-gray-300 text-center text-sm">
              To track your rank in the Gift Lottery:
            </p>
            <div className="bg-black/40 border border-purple-500/30 p-3 rounded-lg">
              <p className="text-white mb-2 text-center text-sm">1. Go to Spacebot</p>
              <Button
                onClick={handleGoToSpacebot}
                size="sm"
                className="w-full bg-transparent border border-purple-400/60 hover:border-purple-300 text-white hover:bg-purple-500/10"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Spacebot
              </Button>
            </div>
            <div className="bg-black/40 border border-purple-500/30 p-3 rounded-lg">
              <p className="text-white text-center text-sm">2. Click "Space Event" to view your ranking</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Invite Friends Dialog */}
      <Dialog open={showInviteDialog} onOpenChange={setShowInviteDialog}>
        <DialogContent className="bg-black/90 backdrop-blur-xl border border-green-500/30 text-white rounded-xl max-w-sm mx-auto">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-center bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
              Invite Your Friends
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <p className="text-gray-300 text-center text-sm">
              To invite friends and earn lottery tickets:
            </p>
            <div className="bg-black/40 border border-green-500/30 p-3 rounded-lg">
              <p className="text-white mb-2 text-center text-sm">1. Go to Spacebot</p>
              <Button
                onClick={handleGoToSpacebot}
                size="sm"
                className="w-full bg-transparent border border-green-400/60 hover:border-green-300 text-white hover:bg-green-500/10"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Spacebot
              </Button>
            </div>
            <div className="bg-black/40 border border-green-500/30 p-3 rounded-lg">
              <p className="text-white text-center text-sm">2. Choose "Space Event" to start inviting friends</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NftPage;
