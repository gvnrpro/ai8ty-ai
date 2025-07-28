
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Loader2, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useSpaceCoins } from '@/hooks/useSpaceCoins';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { taskUserService } from '@/services/taskUserService';

interface DailyCheckInTaskProps {
  taskId: string;
  rewardAmount: number;
  username: string;
  onTaskComplete?: () => void;
}

const DailyCheckInTask: React.FC<DailyCheckInTaskProps> = ({ 
  taskId, 
  rewardAmount, 
  username,
  onTaskComplete 
}) => {
  const [tonConnectUI] = useTonConnectUI();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { addCoins } = useSpaceCoins();
  const { toast } = useToast();

  useEffect(() => {
    checkTaskCompletion();
  }, [taskId, username]);

  const checkTaskCompletion = async () => {
    try {
      const completed = await taskUserService.isTaskCompleted(taskId, username);
      setIsCompleted(completed);
    } catch (error) {
      console.error('Error checking task completion:', error);
    }
  };

  const handleDailyCheckIn = async () => {
    if (!username) {
      toast({
        title: 'Error',
        description: 'Please login first',
        variant: 'destructive'
      });
      return;
    }

    if (isCompleted || isProcessing) {
      return;
    }

    setIsProcessing(true);

    try {
      // Check if wallet is connected
      if (!tonConnectUI.wallet) {
        await tonConnectUI.connectWallet();
        setIsProcessing(false);
        return;
      }

      // Create simple TON transaction without payload to avoid format errors
      const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 300, // 5 minutes
        messages: [
          {
            address: 'UQCiVNm22dMF9S3YsHPcgrmqXEQHt4MIdk_N7VJu88NrLr4R',
            amount: (0.5 * 1e9).toString(), // 0.5 TON in nanoTON
            // Removed payload to prevent format errors
          }
        ]
      };

      console.log('Sending simple daily check-in transaction:', transaction);

      // Send the transaction
      const result = await tonConnectUI.sendTransaction(transaction);
      
      if (result) {
        // Mark task as completed in database
        await taskUserService.completeTask(taskId, username);
        
        // Add reward coins to user
        addCoins(rewardAmount);
        
        setIsCompleted(true);
        
        toast({
          title: 'Daily Check-in Complete!',
          description: `Payment successful! You earned ${rewardAmount} $SPACE coins.`,
        });

        if (onTaskComplete) {
          onTaskComplete();
        }
      }
    } catch (error) {
      console.error('Error processing daily check-in:', error);
      toast({
        title: 'Transaction Error',
        description: 'Failed to complete daily check-in. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (isCompleted) {
    return (
      <Card className="bg-gradient-to-br from-green-800/40 via-emerald-900/30 to-green-900/40 backdrop-blur-xl border border-green-400/30 rounded-lg">
        <CardContent className="p-2.5">
          <div className="flex items-center gap-2.5">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-xs mb-1">
                Daily Check-in
              </h3>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <img 
                    src="/lovable-uploads/a56963aa-9f88-44b8-9aff-3b5e9e4c7a60.png" 
                    alt="Space Coin"
                    className="w-3 h-3 rounded-full"
                  />
                  <span className="text-yellow-400 font-bold text-xs">
                    +{rewardAmount.toLocaleString()}
                  </span>
                </div>
                
                <div className="text-green-400 text-xs font-medium">
                  Completed ✓
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-slate-800/40 via-blue-900/30 to-purple-900/40 backdrop-blur-xl border border-blue-400/20 rounded-lg cursor-pointer hover:border-blue-300/40 transition-all duration-200">
      <CardContent className="p-2.5">
        <div className="flex items-center gap-2.5">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <Calendar className="w-4 h-4 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-xs mb-1">
              Daily Check-in
            </h3>
            <p className="text-gray-300 text-xs mb-2">
              Pay 0.5 TON to complete your daily check-in
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <img 
                  src="/lovable-uploads/a56963aa-9f88-44b8-9aff-3b5e9e4c7a60.png" 
                  alt="Space Coin"
                  className="w-3 h-3 rounded-full"
                />
                <span className="text-yellow-400 font-bold text-xs">
                  +{rewardAmount.toLocaleString()}
                </span>
              </div>
              
              <Button
                onClick={handleDailyCheckIn}
                disabled={isProcessing}
                size="sm"
                className="text-xs py-0.5 px-1.5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
              >
                {isProcessing ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <>
                    <ExternalLink className="w-3 h-3 mr-1" />
                    0.5 TON
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyCheckInTask;
