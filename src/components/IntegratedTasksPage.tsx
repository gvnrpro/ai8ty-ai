
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, ExternalLink, Gift, ArrowDown } from 'lucide-react';
import { useTaskManagement } from '@/hooks/useTaskManagement';
import { taskUserService } from '@/services/taskUserService';
import ReferralTaskChecker from '@/components/ReferralTaskChecker';
import { useToast } from '@/hooks/use-toast';
import { useSpaceCoins } from '@/hooks/useSpaceCoins';

const IntegratedTasksPage = () => {
  const { tasks, isLoading, reloadTasks } = useTaskManagement();
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [isTaskInProgress, setIsTaskInProgress] = useState<Record<string, boolean>>({});
  const { toast } = useToast();
  const { addCoins, spaceCoins } = useSpaceCoins();
  
  // Get username from localStorage
  const username = localStorage.getItem('username') || '';

  useEffect(() => {
    if (username) {
      loadCompletedTasks();
    }
  }, [username]);

  const loadCompletedTasks = async () => {
    try {
      const userCompletedTasks = await taskUserService.getUserCompletedTasks(username);
      const completedTaskIds = new Set(userCompletedTasks.map(ct => ct.task_id));
      setCompletedTasks(completedTaskIds);
    } catch (error) {
      console.error('Error loading completed tasks:', error);
    }
  };

  const handleTaskClick = async (task: any) => {
    if (isTaskInProgress[task.id] || completedTasks.has(task.id)) {
      return;
    }

    if (!username) {
      toast({
        title: "Error",
        description: "Please login first",
        variant: "destructive",
        duration: 3000
      });
      return;
    }

    setIsTaskInProgress(prev => ({ ...prev, [task.id]: true }));

    try {
      // Open external link if available
      if (task.external_link && task.external_link !== '#') {
        window.open(task.external_link, '_blank');
      }

      // Complete the task in database
      await taskUserService.completeTask(task.id, username);
      
      // Add coins to user
      const rewardAmount = task.reward_amount || task.reward || 0;
      addCoins(rewardAmount);
      
      // Update completed tasks
      setCompletedTasks(prev => new Set([...prev, task.id]));
      
      toast({
        title: "Congratulations!",
        description: `Task completed and you earned ${rewardAmount} reward`,
        duration: 3000,
      });
    } catch (error) {
      console.error('Error completing task:', error);
      toast({
        title: "Error",
        description: "Failed to complete task",
        variant: "destructive",
        duration: 3000
      });
    } finally {
      setIsTaskInProgress(prev => ({ ...prev, [task.id]: false }));
    }
  };

  const isReferralTask = (taskTitle: string) => {
    const referralKeywords = ['invite', 'friend', 'refer'];
    return referralKeywords.some(keyword => 
      taskTitle.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const activeTasks = tasks.filter(task => task.is_active !== false);

  if (isLoading) {
    return (
      <div 
        className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center"
        style={{
          backgroundImage: 'url(/lovable-uploads/1c20bfb0-8100-4238-a6e3-a631e16cae93.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        <div className="relative z-10 text-center">
          <div className="animate-spin w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-white">Loading tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-black"
      style={{
        backgroundImage: 'url(/lovable-uploads/1c20bfb0-8100-4238-a6e3-a631e16cae93.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="flex-1 flex flex-col items-center justify-start px-4 py-8">
          {/* Balance Display */}
          <div className="text-center mb-8 mt-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <img 
                src="/lovable-uploads/a56963aa-9f88-44b8-9aff-3b5e9e4c7a60.png" 
                alt="Space Coin" 
                className="w-6 h-6 rounded-full" 
              />
              <h2 className="text-white text-xl font-bold">$SPACE</h2>
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
              {new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
              }).format(spaceCoins)}
            </div>
            <p className="text-gray-400 text-sm">Current Balance</p>
          </div>

          {/* Tasks Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-3">
              <div className="p-3 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-2xl backdrop-blur-sm border border-blue-500/30">
                <Gift className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
              Tasks
            </h1>
            <p className="text-gray-400 text-sm">
              Complete tasks and earn amazing rewards
            </p>
          </div>

          {/* Scroll Down Indicator */}
          <div className="flex flex-col items-center mb-8">
            <p className="text-gray-400 text-sm mb-2">Scroll down to see tasks</p>
            <ArrowDown className="w-6 h-6 text-white animate-bounce" />
          </div>
        </div>

        {/* Tasks Section */}
        <div className="px-4 pb-8">
          <div className="max-w-md mx-auto space-y-3">
            {activeTasks.map((task) => (
              <div key={task.id}>
                {isReferralTask(task.title) ? (
                  <ReferralTaskChecker
                    username={username}
                    taskTitle={task.title}
                    taskId={task.id}
                    rewardAmount={task.reward_amount || task.reward || 0}
                  />
                ) : (
                  <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${
                          completedTasks.has(task.id) ? 'bg-green-500/20' : 'bg-blue-500/20'
                        }`}>
                          {completedTasks.has(task.id) ? (
                            <CheckCircle className="w-6 h-6 text-green-400" />
                          ) : (
                            <Clock className="w-6 h-6 text-blue-400" />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-white font-medium text-sm">{task.title}</h3>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex items-center gap-1">
                              <img 
                                src="/lovable-uploads/a56963aa-9f88-44b8-9aff-3b5e9e4c7a60.png" 
                                alt="Space Coin" 
                                className="w-3 h-3 rounded-full" 
                              />
                              <span className="text-yellow-400 text-xs font-bold">+{task.reward_amount || task.reward}</span>
                            </div>
                            {completedTasks.has(task.id) && (
                              <>
                                <span className="text-gray-400 text-xs">•</span>
                                <span className="text-green-400 text-xs">Completed</span>
                              </>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {completedTasks.has(task.id) ? (
                            <span className="text-gray-400 text-xs">Completed</span>
                          ) : (
                            <Button
                              onClick={() => handleTaskClick(task)}
                              disabled={isTaskInProgress[task.id]}
                              className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-700 text-white px-4 py-2 text-sm flex items-center gap-1 rounded-lg transition-all duration-300"
                            >
                              {isTaskInProgress[task.id] ? (
                                <Clock className="w-3 h-3 animate-spin" />
                              ) : (
                                <>
                                  Start
                                  {task.external_link && task.external_link !== '#' && (
                                    <ExternalLink className="w-3 h-3" />
                                  )}
                                </>
                              )}
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}

            {activeTasks.length === 0 && (
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <p className="text-gray-400">No tasks available at the moment</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedTasksPage;
